from pathlib import Path
import json
import numpy as np
from PIL import Image, ImageDraw
from scipy.optimize import least_squares
from scipy.spatial.transform import Rotation
from scipy import ndimage

ROOT=Path(__file__).resolve().parent
# Visible cage intersections manually identified in the 1536 x 1024 reference.
anchors=[
([-50,50,50],[278,166]),([50,50,50],[918,246]),
([-50,-50,50],[279,801]),([50,-50,50],[918,947]),
([50,50,-50],[1261,123]),([50,-50,-50],[1261,749]),
([-50,50,-50],[654,64]),
([-50,50/3,50],[278,383]),([50,50/3,50],[918,496]),
([-50,-50/3,50],[279,599]),([50,-50/3,50],[918,734]),
([-50/3,50,50],[499,195]),([50/3,50,50],[695,218]),
([-50/3,50/3,50],[500,422]),([50/3,50/3,50],[695,458]),
([-50/3,-50,50],[480,843]),([50/3,-50,50],[695,895]),
]
points=np.array([p for p,_ in anchors],float);observed=np.array([p for _,p in anchors],float)
eye=np.array([170.,115.,300.]);back=eye/np.linalg.norm(eye)
right=np.cross([0,1,0],back);right/=np.linalg.norm(right)
up=np.cross(back,right)
R0=np.array([right,-up,-back])
t0=-R0@eye
start=np.r_[Rotation.from_matrix(R0).as_rotvec(),t0,2400.]
def projection(p,xyz):
 R=Rotation.from_rotvec(p[:3]).as_matrix();v=xyz@R.T+p[3:6]
 return v[:,:2]/v[:,2:]*p[6]+[768,512]
fit=least_squares(lambda p:(projection(p,points)-observed).ravel(),start,max_nfev=4000,loss='soft_l1',f_scale=5,bounds=([-np.inf]*6+[300],[np.inf]*6+[30000]))
p=fit.x;R=Rotation.from_rotvec(p[:3]).as_matrix();t=p[3:6]
errors=np.linalg.norm(projection(p,points)-observed,axis=1)
calibration={'imageWidth':1536,'imageHeight':1024,'focal':float(p[6]),'principal':[768,512], 'worldToCamera':R.tolist(),'translation':t.tolist(),'position':(-R.T@t).tolist(),'up':(-R[1]).tolist(),'forward':R[2].tolist(),'anchorMeanErrorPx':float(errors.mean()),'anchorMaxErrorPx':float(errors.max()),'anchors':[{'world':a,'pixel':b,'errorPx':float(e)} for (a,b),e in zip(anchors,errors)]}
(ROOT/'reference-camera.json').write_text(json.dumps(calibration,indent=2))
# Analyze blue foreground. This does not modify the source image.
im=np.asarray(Image.open(ROOT/'../../assets/hero-concepts/grid-v3.png').convert('RGB'),float)
mask=(im[:,:,2]>90)&(im[:,:,2]>im[:,:,0]*1.35)&(im[:,:,2]>im[:,:,1]*1.13)
mask=ndimage.binary_closing(mask,iterations=7)
mask=ndimage.binary_fill_holes(mask)
labels,count=ndimage.label(mask);sizes=np.bincount(labels.ravel());sizes[0]=0;mask=labels==sizes.argmax()
# Preserve depth, fit each projected ray's silhouette to the actual reference.
base=json.loads((ROOT/'slime-base-model.json').read_text())
attrs=base['data']['attributes'];vertices=np.array(attrs['position']['array'],float).reshape(-1,3)
v=vertices@R.T+t
screen=v[:,:2]/v[:,2:]*p[6]+[768,512]
center=np.array([790.,490.]);theta=np.linspace(-np.pi,np.pi,1440,endpoint=False)
radii=np.arange(0,850,.5)
xx=center[0]+np.cos(theta)[:,None]*radii;yy=center[1]+np.sin(theta)[:,None]*radii
sample=ndimage.map_coordinates(mask.astype(float),[yy.ravel(),xx.ravel()],order=0,mode='constant').reshape(xx.shape)
targetRadius=np.max(np.where(sample>0,radii,0),axis=1)
targetRadius=ndimage.gaussian_filter1d(targetRadius,2,mode='wrap')
angles=np.arctan2(screen[:,1]-center[1],screen[:,0]-center[0]);r=np.linalg.norm(screen-center,axis=1)
bins=((angles+np.pi)/(2*np.pi)*len(theta)).astype(int)%len(theta)
projectedMask=Image.new('L',(1536,1024),0)
draw=ImageDraw.Draw(projectedMask)
for tri in np.array(base['data']['index']['array']).reshape(-1,3):
 draw.polygon([tuple(pt) for pt in screen[tri]],fill=255)
currentMask=np.asarray(projectedMask)>0
currentSamples=ndimage.map_coordinates(currentMask.astype(float),[yy.ravel(),xx.ravel()],order=0,mode='constant').reshape(xx.shape)
oldRadius=np.max(np.where(currentSamples>0,radii,0),axis=1)
oldRadius=ndimage.gaussian_filter1d(oldRadius,2,mode='wrap')
ratio=np.clip(targetRadius/np.maximum(oldRadius,1),.65,1.5)
factors=np.interp(angles,theta,ratio,period=2*np.pi)
newScreen=center+(screen-center)*factors[:,None]
v[:,:2]=(newScreen-[768,512])/p[6]*v[:,2:]
newVertices=(v-t)@R
attrs['position']['array']=newVertices.astype(np.float32).ravel().tolist()
# Calculate normal directions from the fitted geometry.
indices=np.array(base['data']['index']['array']).reshape(-1,3)
a,b,c=newVertices[indices[:,0]],newVertices[indices[:,1]],newVertices[indices[:,2]]
face=np.cross(b-a,c-a);normal=np.zeros_like(newVertices)
for j in range(3):np.add.at(normal,indices[:,j],face)
normal/=np.maximum(np.linalg.norm(normal,axis=1,keepdims=True),1e-12)
attrs['normal']['array']=normal.astype(np.float32).ravel().tolist()
# Store projected UV coordinates for the calibrated appearance texture.
uv=np.column_stack((newScreen[:,0]/1536,1-newScreen[:,1]/1024))
attrs['uv']={'itemSize':2,'type':'Float32Array','array':uv.astype(np.float32).ravel().tolist(),'normalized':False}
base.pop('boundingSphere',None);base['data'].pop('boundingSphere',None)
(ROOT/'slime-model.json').write_text(json.dumps(base,separators=(',',':')))
finalMask=Image.new('L',(1536,1024),0)
finalDraw=ImageDraw.Draw(finalMask)
for tri in indices: finalDraw.polygon([tuple(pt) for pt in newScreen[tri]],fill=255)
finalMask=np.asarray(finalMask)>0
intersection=int(np.logical_and(finalMask,mask).sum());union=int(np.logical_or(finalMask,mask).sum())
metrics={'method':'Reference-camera fit, silhouette deformation, projected appearance texture','cameraMeanErrorPx':float(errors.mean()),'cameraMaxErrorPx':float(errors.max()),'silhouetteIoU':intersection/union,'vertices':len(vertices),'gravity':False,'limitations':['Hidden geometry remains inferred','Appearance texture includes source lighting; reflections are not fully relit','Cage intersections in generated reference are not perfectly consistent with an ideal cube']}
(ROOT/'reference-fit-report.json').write_text(json.dumps(metrics,indent=2))

with (ROOT/'slime-model.obj').open('w') as out:
 out.write('# Reference-fitted slime, U units; front appearance projection; backside inferred.\n')
 for point in newVertices:out.write('v '+' '.join(map(str,point))+'\n')
 for tri in indices:out.write('f '+' '.join(str(int(i)+1) for i in tri)+'\n')
print(json.dumps({'cameraMeanErrorPx':float(errors.mean()),'cameraMaxErrorPx':float(errors.max()),'focal':float(p[6]),'vertexCount':len(vertices),'silhouetteScaleRange':[float(ratio.min()),float(ratio.max())]}))
