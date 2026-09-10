import fs from 'node:fs';
import assert from 'node:assert/strict';
import { BufferGeometry, Float32BufferAttribute } from 'three';
const path=name=>new URL(name,import.meta.url);
const source=JSON.parse(fs.readFileSync(path('slime-reference-model.json')));
const positions=source.data.attributes.position.array, indices=source.data.index.array;
// Clip the reference-facing octant, then reflect the same topology across all axes.
function clip(poly,axis){
 const out=[];
 for(let i=0;i<poly.length;i++){
  const a=poly[i],b=poly[(i+1)%poly.length],inside=a[axis]>=0,next=b[axis]>=0;
  if(inside)out.push(a);
  if(inside!==next){const t=a[axis]/(a[axis]-b[axis]);const p=a.map((v,j)=>v+t*(b[j]-v));p[axis]=0;out.push(p);}
 }
 return out;
}
const octant=[];
for(let i=0;i<indices.length;i+=3){
 let poly=indices.slice(i,i+3).map(id=>positions.slice(id*3,id*3+3));
 for(let axis=0;axis<3&&poly.length;axis++)poly=clip(poly,axis);
 for(let j=1;j<poly.length-1;j++)octant.push([poly[0],poly[j],poly[j+1]]);
}
const vertices=[],faces=[],lookup=new Map();
const key=p=>p.map(v=>Math.round(v*1e5)).join(',');
function id(p){const k=key(p);if(!lookup.has(k)){lookup.set(k,vertices.length/3);vertices.push(...p);}return lookup.get(k);}
for(const x of [-1,1])for(const y of [-1,1])for(const z of [-1,1]){
 const signs=[x,y,z];
 for(const tri of octant){const ids=tri.map(p=>id(p.map((v,i)=>v*signs[i])));if(new Set(ids).size<3)continue;if(x*y*z<0)ids.reverse();faces.push(...ids);}
}
const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(vertices,3));geometry.setIndex(faces);geometry.computeVertexNormals();geometry.computeBoundingSphere();
const edges=new Map();for(let i=0;i<faces.length;i+=3)for(let j=0;j<3;j++){const a=faces[i+j],b=faces[i+(j+1)%3],k=[Math.min(a,b),Math.max(a,b)].join(',');edges.set(k,(edges.get(k)||0)+1);}
assert.ok([...edges.values()].every(n=>n===2),'Mirrored surface must be watertight');
for(let i=0;i<vertices.length;i+=3)for(let axis=0;axis<3;axis++){const p=vertices.slice(i,i+3);p[axis]*=-1;assert.ok(lookup.has(key(p)),'Every vertex must have an exact reflected counterpart');}
fs.writeFileSync(path('slime-model.json'),JSON.stringify(geometry.toJSON()));
let obj='# Three-axis mirror symmetric slime. No gravity.\n';for(let i=0;i<vertices.length;i+=3)obj+=`v ${vertices.slice(i,i+3).join(' ')}\n`;for(let i=0;i<faces.length;i+=3)obj+=`f ${faces.slice(i,i+3).map(v=>v+1).join(' ')}\n`;fs.writeFileSync(path('slime-model.obj'),obj);
const report={method:'Reference-facing positive octant reflected across X, Y, Z',vertices:vertices.length/3,triangles:faces.length/3,mirrorAxes:['X','Y','Z'],openEdges:0,gravity:false};fs.writeFileSync(path('slime-symmetry-report.json'),JSON.stringify(report,null,2));console.log(report);
