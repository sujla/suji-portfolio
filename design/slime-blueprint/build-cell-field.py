"""27 soft volumes merge and bulge through the cage's open cells. No image target."""
from pathlib import Path
import json
import numpy as np
from scipy import ndimage
root=Path(__file__).parent
resolution=88;extent=90
z,y,x=np.mgrid[:resolution,:resolution,:resolution]
p=np.stack([x,y,z],-1).reshape(-1,3)/resolution*2*extent-extent
centers=np.array([[a,b,c] for a in [-100/3,0,100/3] for b in [-100/3,0,100/3] for c in [-100/3,0,100/3]])
def smooth_min(a,b,k):
 h=np.maximum(k-np.abs(a-b),0)/k
 return np.minimum(a,b)-h*h*k*.25
spheres=np.full(len(p),1e6);target=spheres.copy()
# Grow each round cell in place: the merge is caused by overlap, not a sculpted endpoint.
for center in centers:
 d=np.linalg.norm(p-center,axis=1)
 spheres=np.minimum(spheres,d-13.5)
 target=smooth_min(target,d-24.5,6)
# The exterior rods resist the surface. Capsule distance leaves a continuous
# rounded indentation at each wire, while the material bulges through open squares.
cage=json.loads((root/'cage-structure.json').read_text())
wire=np.full(len(p),1e6)
for edge in cage['segments']:
 a=np.array(cage['nodes'][edge['start']]['position']);b=np.array(cage['nodes'][edge['end']]['position']);ab=b-a
 u=np.clip(((p-a)*ab).sum(axis=1)/(ab@ab),0,1)
 wire=np.minimum(wire,np.linalg.norm(p-(a+u[:,None]*ab),axis=1))
# Local pressure dimples the skin without drilling tunnels through its interior.
target+=2.0*np.exp(-wire*wire/18)
target=target.reshape((resolution,)*3)
solid=target<0
filled=ndimage.binary_fill_holes(solid)
# Merged slime has a filled interior; eliminate trapped sub-voxel pockets.
target[filled & ~solid]=-2.0
target=ndimage.gaussian_filter(target,.45).ravel()
np.stack([spheres,target]).astype('<f4').tofile(root/'cell-fields.bin')
spec={'resolution':resolution,'extent':extent,'cells':27,'sphereRadius':13.5,'mergedCellRadius':24.5,'unionBlend':6,'wirePressureDepth':2.0,'targetSource':'27 overlapping round cell volumes with exterior wire contact; no reference silhouette or texture','gravity':False,'simulation':'Art-directed implicit surface; not a volume-conserving fluid solver'}
(root/'cell-field-spec.json').write_text(json.dumps(spec,indent=2))
print('Round cell union and cage contact field generated')
