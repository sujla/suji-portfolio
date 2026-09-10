import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import spec from './cell-field-spec.json';
import {cellPhase,cellSize,spacingWeight} from './cell-spacing.js';
export function createCellMerge(buffer,material){
 const fields=new Float32Array(buffer),count=spec.resolution**3;
 if(fields.length!==count*2)throw new Error('Invalid cell field data');
 const mesh=new MarchingCubes(spec.resolution,material,false,false,150000);
 mesh.scale.setScalar(spec.extent);mesh.isolation=0;mesh.name='27 cells → cage-constrained soft union';mesh.frustumCulled=false;
 function setProgress(value){
  const {gap,merge}=cellPhase(value);
  const t=merge*merge*(3-2*merge);
  material.uniforms.separation.value=1-t;
  material.uniforms.cellPitch.value=cellSize+gap;
  material.uniforms.geometryExtent.value=spec.extent;
  for(let i=0;i<count;i++)mesh.field[i]=-(fields[i]*(1-t)+fields[i+count]*t);
  // The field changes every frame; cached gradients from the previous shape are invalid.
  mesh.normal_cache.fill(0);
  mesh.update();
  if(gap>0){
   const positions=mesh.geometry.attributes.position;
   for(let i=0;i<mesh.count*3;i++){
    const world=positions.array[i]*spec.extent;
    positions.array[i]+=spacingWeight(world)*gap/spec.extent;
    const u=Math.max(0,Math.min(1,(Math.abs(world)-13.5)/(cellSize-27)));
    mesh.geometry.attributes.normal.array[i]/=1+gap*6*u*(1-u)/(cellSize-27);
   }
   positions.needsUpdate=true;mesh.geometry.attributes.normal.needsUpdate=true;
  }

 }
 setProgress(0);
 return {mesh,setProgress};
}
