import * as THREE from 'three';
import {cellSize,cellCenters,cellPhase} from './cell-spacing.js';
export function createCellCages(rodGeometry,jointGeometry,metal,jointMetal){
 const group=new THREE.Group(),rodMaterial=metal.clone(),jointMaterial=jointMetal.clone();
 rodMaterial.transparent=jointMaterial.transparent=true;
 const rods=new THREE.InstancedMesh(rodGeometry,rodMaterial,27*12),joints=new THREE.InstancedMesh(jointGeometry,jointMaterial,27*8);
 group.add(rods,joints);
 const corners=Array.from({length:8},(_,i)=>[(i&4?1:-1)*cellSize/2,(i&2?1:-1)*cellSize/2,(i&1?1:-1)*cellSize/2]);
 const edges=[];for(let i=0;i<8;i++)for(const bit of [1,2,4])if(!(i&bit))edges.push([i,i|bit]);
 const transform=new THREE.Object3D(),vertical=new THREE.Vector3(0,1,0);
 function update(progress){
  const {gap}=cellPhase(progress);let r=0,j=0;
  for(const center of cellCenters){
   const points=corners.map(c=>new THREE.Vector3(...c.map((v,a)=>v+center[a]*(1+gap/cellSize))));
   for(const [a,b] of edges){transform.position.copy(points[a]).add(points[b]).multiplyScalar(.5);transform.quaternion.setFromUnitVectors(vertical,new THREE.Vector3().subVectors(points[b],points[a]).normalize());transform.updateMatrix();rods.setMatrixAt(r++,transform.matrix);}
   transform.quaternion.identity();for(const point of points){transform.position.copy(point);transform.updateMatrix();joints.setMatrixAt(j++,transform.matrix);}
  }
  rods.instanceMatrix.needsUpdate=joints.instanceMatrix.needsUpdate=true;
  rods.computeBoundingSphere();joints.computeBoundingSphere();
  const opacity=1-THREE.MathUtils.smoothstep(progress,.94,1);rodMaterial.opacity=jointMaterial.opacity=opacity;
  rods.visible=joints.visible=opacity>0;
 }
 function setInk(active,ink){rods.material=active?ink:rodMaterial;joints.material=active?ink:jointMaterial;}
 update(0);
 return {group,update,setInk,dispose(){rodMaterial.dispose();jointMaterial.dispose();}};
}
