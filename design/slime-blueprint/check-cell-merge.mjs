import fs from 'node:fs';
import assert from 'node:assert/strict';
import {MeshBasicMaterial,BufferGeometry,Float32BufferAttribute} from 'three';
import {MarchingCubes} from 'three/addons/objects/MarchingCubes.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
const root=new URL('./',import.meta.url),spec=JSON.parse(fs.readFileSync(new URL('cell-field-spec.json',root))),b=fs.readFileSync(new URL('cell-fields.bin',root));
const fields=new Float32Array(b.buffer,b.byteOffset,b.byteLength/4),count=spec.resolution**3,mc=new MarchingCubes(spec.resolution,new MeshBasicMaterial(),false,false,150000);mc.isolation=0;
const report=[];
for(const t of [0,.25,.5,.75,1]){
 for(let i=0;i<count;i++)mc.field[i]=-(fields[i]*(1-t)+fields[i+count]*t);mc.update();
 const raw=new BufferGeometry();raw.setAttribute('position',new Float32BufferAttribute(mc.geometry.attributes.position.array.slice(0,mc.count*3),3));const g=mergeVertices(raw,.0001),idx=g.index.array,n=g.attributes.position.count,parent=Array.from({length:n},(_,i)=>i);
 const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};for(let i=0;i<idx.length;i+=3){parent[find(idx[i])]=find(idx[i+1]);parent[find(idx[i+1])]=find(idx[i+2]);}
 const components=new Set(parent.map((_,i)=>find(i))).size;report.push({progress:t,components,triangles:mc.count/3});if(t===0)assert.equal(components,27);if(t===1){assert.equal(components,1);let obj='# Image-derived merged endpoint\n';for(let i=0;i<n;i++)obj+=`v ${g.attributes.position.getX(i)*spec.extent} ${g.attributes.position.getY(i)*spec.extent} ${g.attributes.position.getZ(i)*spec.extent}\n`;for(let i=0;i<idx.length;i+=3)obj+=`f ${idx[i]+1} ${idx[i+1]+1} ${idx[i+2]+1}\n`;fs.writeFileSync(new URL('cell-merged.obj',root),obj);}g.dispose();raw.dispose();
}
fs.writeFileSync(new URL('cell-merge-check.json',root),JSON.stringify(report,null,2));console.log(report);
