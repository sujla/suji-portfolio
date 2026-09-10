"""Build a new image-constrained target volume, independently of earlier slime meshes."""
from pathlib import Path
import json
import numpy as np
from PIL import Image
from scipy import ndimage
root=Path(__file__).parent
cal=json.loads((root/'reference-camera.json').read_text()); R=np.array(cal['worldToCamera']);t=np.array(cal['translation'])
im=np.asarray(Image.open(root/'../../assets/hero-concepts/grid-v3.png').convert('RGB')).astype(float)
mask=(im[:,:,2]>90)&(im[:,:,2]>im[:,:,0]*1.35)&(im[:,:,2]>im[:,:,1]*1.13)
mask=ndimage.binary_fill_holes(ndimage.binary_closing(mask,iterations=7));labels,n=ndimage.label(mask);sizes=np.bincount(labels.ravel());sizes[0]=0;mask=labels==sizes.argmax()
sdf=ndimage.distance_transform_edt(~mask)-ndimage.distance_transform_edt(mask)
resolution=96;extent=90
z,y,x=np.mgrid[:resolution,:resolution,:resolution];p=np.stack([x,y,z],-1).reshape(-1,3)/resolution*2*extent-extent
q=p@R.T+t;uv=q[:,:2]/q[:,2,None]*cal['focal']+[768,512]
outline=ndimage.map_coordinates(sdf,[uv[:,1],uv[:,0]],order=1,mode='constant',cval=1000)*q[:,2]/cal['focal']
# Explicit solid lobes traced from the source; pixel-space radii describe their
# visible footprint, depth radii create actual rounded geometry (not a texture).
lobes=[
 # name, cx, cy, rx, ry, depth center, depth radius, tilt radians
 ('crown',765,210,183,137,770,43,-.10),
 ('upper left shoulder',486,350,156,137,778,40,.16),
 ('upper front left',635,350,160,158,741,42,-.08),
 ('upper front right',849,388,148,170,745,42,.07),
 ('long front left fold',590,566,115,181,738,40,.22),
 ('long front right fold',849,665,156,219,749,44,-.02),
 ('lower left',479,685,137,113,780,41,.10),
 ('right upper side',1090,341,153,130,794,43,.04),
 ('right middle side',1100,494,111,148,795,42,-.10),
 ('right lower side',1108,659,121,125,794,43,-.12),
 ('interior bridge',792,496,235,250,789,46,0),
]
def smooth_min(a,b,k):
 h=np.maximum(k-np.abs(a-b),0)/k
 return np.minimum(a,b)-h*h*k*.25
scale=t[2]/cal['focal']
target=np.full(len(p),1e6)
for name,cx,cy,rx,ry,depth,rz,angle in lobes:
 dx=(uv[:,0]-cx)*scale;dy=(uv[:,1]-cy)*scale
 lx=dx*np.cos(angle)+dy*np.sin(angle);ly=-dx*np.sin(angle)+dy*np.cos(angle)
 radii=np.array([rx*scale*1.20,ry*scale*1.12,rz])
 distance=(np.sqrt((lx/radii[0])**2+(ly/radii[1])**2+((q[:,2]-depth)/rz)**2)-1)*radii.min()
 target=smooth_min(target,distance,4.6)
# Preserve the source contour, with a smooth boundary instead of a flat extrusion.
target=np.maximum(target,outline)
target=ndimage.gaussian_filter(target.reshape((resolution,)*3),.8).ravel()
(root/'cell-lobes.json').write_text(json.dumps(lobes,indent=2))
spheres=np.full(len(p),1e6)
for a in [-100/3,0,100/3]:
 for b in [-100/3,0,100/3]:
  for c in [-100/3,0,100/3]:spheres=np.minimum(spheres,np.linalg.norm(p-[a,b,c],axis=1)-13.5)
np.stack([spheres,target]).astype('<f4').tofile(root/'cell-fields.bin')
(root/'cell-field-spec.json').write_text(json.dumps({'resolution':resolution,'extent':extent,'cells':27,'sphereRadius':13.5,'targetSource':'assets/hero-concepts/grid-v3.png silhouette and 11 traced solid ellipsoid lobes; inferred depth; no image projection','gravity':False},indent=2))
print('27 sphere fields and image-derived target field generated')
