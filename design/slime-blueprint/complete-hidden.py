"""Preserve the reference-facing surface; infer only hidden vertices by axis reflections."""
import json
from pathlib import Path
import numpy as np
from scipy.spatial import cKDTree
root=Path(__file__).parent
model=json.loads((root/'slime-reference-model.json').read_text())
a=model['data']['attributes']; p=np.array(a['position']['array']).reshape(-1,3); original=p.copy(); normals=np.array(a['normal']['array']).reshape(-1,3)
eye=np.array(json.loads((root/'reference-camera.json').read_text())['position'])
v=eye-p;v/=np.linalg.norm(v,axis=1)[:,None];facing=(normals*v).sum(axis=1)
r=np.linalg.norm(p,axis=1);d=p/r[:,None]
visible=facing>0.15; tree=cKDTree(d[visible]); sourceRadius=r[visible]
# Choose the axis-reflected visible direction requiring the least angular extrapolation.
best=np.full(len(p),np.inf); target=r.copy()
for sx in [-1,1]:
 for sy in [-1,1]:
  for sz in [-1,1]:
   dist,idx=tree.query(d*np.array([sx,sy,sz]),k=6)
   w=1/np.maximum(dist,1e-4)**2
   radius=(sourceRadius[idx]*w).sum(axis=1)/w.sum(axis=1)
   use=dist[:,0]<best;target[use]=radius[use];best[use]=dist[use,0]
blend=np.clip((-facing-.2)/.5,0,1);blend=blend*blend*(3-2*blend)
p=d*(r+np.clip(target-r,-8,8)*blend)[:,None]
# Keep hidden geometry inside the existing reference silhouette by preserving each projection ray.
cal=json.loads((root/'reference-camera.json').read_text()); R=np.array(cal['worldToCamera']); t=np.array(cal['translation'])
oldCamera=original@R.T+t; newCamera=p@R.T+t
newCamera[:,:2]=oldCamera[:,:2]/oldCamera[:,2,None]*newCamera[:,2,None]
p=(newCamera-t)@R
p[blend==0]=original[blend==0]
# Front surface and contour vertices must remain exactly where reference fitting put them.
assert np.array_equal(p[blend==0].round(8),original[blend==0].round(8))
a['position']['array']=p.astype('float32').ravel().tolist()
tri=np.array(model['data']['index']['array']).reshape(-1,3)
n=np.zeros_like(p);fn=np.cross(p[tri[:,1]]-p[tri[:,0]],p[tri[:,2]]-p[tri[:,0]])
for i in range(3):np.add.at(n,tri[:,i],fn)
n/=np.maximum(np.linalg.norm(n,axis=1)[:,None],1e-12);a['normal']['array']=n.astype('float32').ravel().tolist()
model['data'].pop('boundingSphere',None)
(root/'slime-model.json').write_text(json.dumps(model,separators=(',',':')))
with (root/'slime-model.obj').open('w') as out:
 for q in p:out.write('v '+' '.join(map(str,q))+'\n')
 for t in tri:out.write('f '+' '.join(map(str,t+1))+'\n')
report={'method':'Preserve visible reference surface; reflect visible radial profiles into hidden areas with seam blending','protectedVertices':int((blend==0).sum()),'hiddenVerticesUpdated':int((blend>0).sum()),'maxProtectedDisplacement':float(np.max(np.linalg.norm(p[blend==0]-original[blend==0],axis=1))),'globalSymmetry':False,'gravity':False}
(root/'slime-symmetry-report.json').write_text(json.dumps(report,indent=2));print(report)
