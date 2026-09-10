import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createCageStructure, cageSpec } from './cage-structure.js';
const model=createCageStructure(cageSpec);
assert.equal(model.nodes.length,56);
assert.equal(model.segments.length,108);
assert.equal(model.faces.length,54);
assert.equal(model.nodes.length-model.segments.length+model.faces.length,2);
const keys=new Set();
const degree=new Array(model.nodes.length).fill(0);
for(const edge of model.segments){
 const a=model.nodes[edge.start].position,b=model.nodes[edge.end].position;
 assert.equal(a.filter((n,i)=>Math.abs(n-b[i])>.001).length,1);
 assert.ok(a.some((n,i)=>i!==edge.axis&&Math.abs(n)===50&&n===b[i]));
 assert.ok(Math.abs(Math.hypot(...a.map((n,i)=>n-b[i]))-100/3)<1e-8);
 const k=[edge.start,edge.end].sort((a,b)=>a-b).join(',');assert.ok(!keys.has(k));keys.add(k);
 degree[edge.start]++;degree[edge.end]++;
}
assert.equal(degree.filter(n=>n===3).length,8);
assert.equal(degree.filter(n=>n===4).length,48);
fs.writeFileSync(new URL('./cage-structure.json',import.meta.url),JSON.stringify({spec:cageSpec,...model},null,2));
const svg=[];
svg.push('<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="860" viewBox="0 0 1400 860"><rect width="1400" height="860" fill="#fbfcfe"/><style>text{font-family:Arial,sans-serif;fill:#20344e}.title{font-size:28px;font-weight:600}.label{font-size:16px;font-weight:600}.meta{font-size:14px;fill:#627389}.rod{stroke:#314762;stroke-width:1.5;fill:none}.rear{stroke:#b9c4d0;stroke-width:1;stroke-dasharray:5 5;fill:none}.node{fill:white;stroke:#314762;stroke-width:1.3}</style><text x="36" y="48" class="title">CAGE / COORDINATE BLUEPRINT</text><text x="36" y="77" class="meta">One topology drives the drawing and the 3D model. Dimensions are proposed modeling units.</text>');
function panel(x,y,w,h,title){svg.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="white" stroke="#dbe1e8"/><text x="${x+20}" y="${y+30}" class="label">${title}</text>`);}
function draw(cx,cy,scale,project,filter=()=>true,isRear=()=>false){
 const ordered=model.segments.filter(filter).sort((a,b)=>Number(isRear(b))-Number(isRear(a)));
 for(const e of ordered){const a=project(model.nodes[e.start].position),b=project(model.nodes[e.end].position);svg.push(`<line class="${isRear(e)?'rear':'rod'}" x1="${cx+a[0]*scale}" y1="${cy+a[1]*scale}" x2="${cx+b[0]*scale}" y2="${cy+b[1]*scale}"/>`);}
 const ids=new Set(ordered.flatMap(e=>[e.start,e.end]));
 for(const id of ids){const p=project(model.nodes[id].position);svg.push(`<circle class="node" cx="${cx+p[0]*scale}" cy="${cy+p[1]*scale}" r="${cageSpec.jointDiameter * scale / 2}"/>`);}
}
panel(28,105,690,570,'01 / AXONOMETRIC — ALL SIX SURFACE GRIDS');
const yaw=.58,pitch=.34;
const project=([x,y,z])=>[Math.cos(yaw)*x-Math.sin(yaw)*z,-Math.sin(pitch)*Math.sin(yaw)*x-Math.cos(pitch)*y-Math.sin(pitch)*Math.cos(yaw)*z];
const rear=e=>!model.nodes[e.start].position.some((v,i)=>i!==e.axis&&v===50);
draw(373,397,3.7,project,()=>true,rear);
svg.push('<text x="48" y="644" class="meta">Solid = front-facing rods · Dashed = rear-facing rods</text>');
panel(738,105,300,270,'02 / FRONT');draw(888,257,1.8,([x,y])=>[x,-y],e=>model.nodes[e.start].position[2]===50&&model.nodes[e.end].position[2]===50);
panel(1058,105,314,270,'03 / SIDE');draw(1215,257,1.8,([x,y,z])=>[-z,-y],e=>model.nodes[e.start].position[0]===50&&model.nodes[e.end].position[0]===50);
panel(738,395,300,280,'04 / TOP');draw(888,552,1.8,([x,y,z])=>[x,z],e=>model.nodes[e.start].position[1]===50&&model.nodes[e.end].position[1]===50);
panel(1058,395,314,280,'05 / MODEL RULES');
['Edge: 100 U','Pitch: 100 / 3 U','Rod diameter: 0.5 U','Joint diameter: 2.2 U','No interior bars','Gravity: OFF'].forEach((text,i)=>svg.push(`<text x="1078" y="458" dy="${i*32}" class="meta">${text}</text>`));
panel(28,695,1344,130,'STRUCTURE CHECKS — PASSED');
svg.push('<text x="48" y="758" class="meta">56 shared joints · 108 edge segments · 54 square cells · 6 cube faces · no duplicate edges</text><text x="48" y="793" class="meta">Geometry is exact to these coordinates. Steel material and camera matching remain separate appearance decisions.</text></svg>');
fs.writeFileSync(new URL('./cage-structure.svg',import.meta.url),svg.join('\n'));
console.log('Cage topology passed: 56 nodes, 108 segments, 54 cells, Euler characteristic 2; no interior or duplicate bars.');
