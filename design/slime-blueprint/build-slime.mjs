import fs from 'node:fs';
import assert from 'node:assert/strict';
import { BufferGeometry, Float32BufferAttribute, MeshBasicMaterial } from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { slimeShape } from './slime-shape.js';

const resolution = 80, extent = 76;
const material = new MeshBasicMaterial();
const volume = new MarchingCubes(resolution, material, false, false, 100000);
volume.isolation = 0;
function smoothMin(a,b,k) {
  const h=Math.max(k-Math.abs(a-b),0)/k;
  return Math.min(a,b)-h*h*k*.25;
}
const lobes=slimeShape.lobes.map(l=>({...l,c:Math.cos(l.tilt||0),s:Math.sin(l.tilt||0)}));
function ellipsoid(x,y,z,l) {
  const dx=x-l.center[0],dy=y-l.center[1],dz=z-l.center[2];
  const lx=dx*(l.c??1)+dy*(l.s??0),ly=-dx*(l.s??0)+dy*(l.c??1);
  const [rx,ry,rz]=l.radii;
  return (Math.hypot(lx/rx,ly/ry,dz/rz)-1)*Math.min(rx,ry,rz);
}
for(let z=0;z<resolution;z++)for(let y=0;y<resolution;y++)for(let x=0;x<resolution;x++){
 const px=(x/resolution*2-1)*extent,py=(y/resolution*2-1)*extent,pz=(z/resolution*2-1)*extent;
 let distance=Infinity;
 for(const l of lobes)distance=smoothMin(distance,ellipsoid(px,py,pz,l),slimeShape.smoothUnion);
 for(const l of slimeShape.hollows)distance=-smoothMin(-distance,ellipsoid(px,py,pz,l),4);
 volume.field[x+y*resolution+z*resolution*resolution]=-distance;
}
volume.update();
const raw=new BufferGeometry();
const positions=volume.geometry.attributes.position.array.slice(0,volume.count*3);
for(let i=0;i<positions.length;i++)positions[i]*=extent;
// Smooth continuous indentations, rather than sub-voxel carved tunnels.
for(let i=0;i<positions.length;i+=3){
 const p=[positions[i],positions[i+1],positions[i+2]];
 for(let axis=0;axis<3;axis++){
  const a=(axis+1)%3,b=(axis+2)%3;
  let distance=Infinity;
  for(const line of [-50,-50/3,50/3,50])distance=Math.min(distance,Math.abs(p[a]-line),Math.abs(p[b]-line));
  const beyond=Math.max(0,Math.abs(p[axis])-49.5);
  const ends=Math.max(0,Math.max(Math.abs(p[a]),Math.abs(p[b]))-50);
  const influence=Math.exp(-distance*distance/16)*Math.exp(-ends*ends/16);
  positions[i+axis]-=Math.sign(p[axis])*beyond*influence;
 }
}
raw.setAttribute('position',new Float32BufferAttribute(positions,3));
const geometry=mergeVertices(raw,.0001);
const cleanIndices=[];
for(let i=0;i<geometry.index.array.length;i+=3){
 const [a,b,c]=geometry.index.array.slice(i,i+3);
 if(a!==b && b!==c && c!==a)cleanIndices.push(a,b,c);
}
geometry.setIndex(cleanIndices);
// Relax sampling noise after contact deformation without changing connectivity.
const adjacency=Array.from({length:geometry.attributes.position.count},()=>new Set());
for(let i=0;i<cleanIndices.length;i+=3){
 const a=cleanIndices[i],b=cleanIndices[i+1],c=cleanIndices[i+2];
 adjacency[a].add(b).add(c);adjacency[b].add(a).add(c);adjacency[c].add(a).add(b);
}
const surface=geometry.attributes.position.array;
for(let iteration=0;iteration<5;iteration++){
 const previous=surface.slice();
 for(let i=0;i<adjacency.length;i++){
  const adjacent=adjacency[i];if(!adjacent.size)continue;
  for(let axis=0;axis<3;axis++){
   let average=0;for(const neighbor of adjacent)average+=previous[neighbor*3+axis];
   surface[i*3+axis]=previous[i*3+axis]*.6+average/adjacent.size*.4;
  }
 }
}
geometry.computeVertexNormals();geometry.computeBoundingSphere();geometry.computeBoundingBox();
const n=geometry.attributes.position.count,parent=Array.from({length:n},(_,i)=>i);
function root(i){while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;}
const indices=geometry.index.array;
for(let i=0;i<indices.length;i+=3){parent[root(indices[i])]=root(indices[i+1]);parent[root(indices[i+1])]=root(indices[i+2]);}
const connected=new Set(parent.map((_,i)=>root(i))).size;
assert.equal(connected,1,'Slime must be one connected surface');
assert.ok(positions.every(Number.isFinite));
assert.ok(volume.count/3<100000,'Mesh must fit extraction buffer');
const edgeCounts=new Map();
for(let i=0;i<indices.length;i+=3)for(let j=0;j<3;j++){
 const a=indices[i+j],b=indices[i+(j+1)%3];
 const key=a<b?`${a}:${b}`:`${b}:${a}`;
 edgeCounts.set(key,(edgeCounts.get(key)||0)+1);
}
const openEdges=[...edgeCounts.values()].filter(n=>n!==2).length;
assert.equal(openEdges,0,'Slime must be watertight');
fs.writeFileSync(new URL('./slime-model.json',import.meta.url),JSON.stringify(geometry.toJSON()));
fs.writeFileSync(new URL('./slime-model-spec.json',import.meta.url),JSON.stringify({shape:slimeShape,resolution,vertices:n,triangles:indices.length/3,connectedSurfaces:connected,openEdges,gravity:false},null,2));
// Portable mesh for modeling tools; same coordinates as the cage, in U.
let obj='# Slime study, one continuous mesh. Cage edge 100 U. Gravity off.\n';
for(let i=0;i<n;i++)obj+=`v ${geometry.attributes.position.getX(i)} ${geometry.attributes.position.getY(i)} ${geometry.attributes.position.getZ(i)}\n`;
for(let i=0;i<indices.length;i+=3)obj+=`f ${indices[i]+1} ${indices[i+1]+1} ${indices[i+2]+1}\n`;
fs.writeFileSync(new URL('./slime-model.obj',import.meta.url),obj);
console.log(JSON.stringify({vertices:n,triangles:indices.length/3,connectedSurfaces:connected,openEdges,bounds:geometry.boundingBox}));
geometry.dispose();raw.dispose();volume.geometry.dispose();material.dispose();
