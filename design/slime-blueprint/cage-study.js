import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createCageStructure, cageSpec } from './cage-structure.js';
import { createSlimeMaterial } from './slime-material.js';
import calibration from './reference-camera.json';
import { createCellMerge } from './cell-merge.js';
import {createCellCages} from './cell-cages.js';

const host = document.querySelector('#scene');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
host.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(12,1,1,3000);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false; controls.enableZoom = false;
controls.target.set(0,0,0);
const pmrem = new THREE.PMREMGenerator(renderer);
const studio = new RoomEnvironment();
const environment = pmrem.fromScene(studio,.03);
scene.environment = environment.texture;
studio.dispose();pmrem.dispose();
const light = new THREE.DirectionalLight(0xffffff,2);
light.position.set(-100,150,150);scene.add(light);
scene.add(new THREE.HemisphereLight(0xffffff,0x343b4a,.7));
const model = createCageStructure(cageSpec);
const metal = new THREE.MeshStandardMaterial({color:0x7c7f84,metalness:1,roughness:.18,envMapIntensity:.935});
const jointMetal = new THREE.MeshStandardMaterial({color:0xa5a8af,metalness:1,roughness:.108,envMapIntensity:1.21});
const ink = new THREE.MeshBasicMaterial({color:0x293e60});
const rodsGeometry = new THREE.CylinderGeometry(cageSpec.rodDiameter/2,cageSpec.rodDiameter/2,model.edge/model.divisions,12);
const jointsGeometry = new THREE.SphereGeometry(cageSpec.jointDiameter/2,24,16);
const rods = new THREE.InstancedMesh(rodsGeometry,metal,model.segments.length);
const joints = new THREE.InstancedMesh(jointsGeometry,jointMetal,model.nodes.length);
const transform = new THREE.Object3D();
const vertical = new THREE.Vector3(0,1,0);
model.segments.forEach((segment,i)=>{
 const a = new THREE.Vector3(...model.nodes[segment.start].position);
 const b = new THREE.Vector3(...model.nodes[segment.end].position);
 transform.position.copy(a).add(b).multiplyScalar(.5);
 transform.quaternion.setFromUnitVectors(vertical,b.sub(a).normalize());
 transform.updateMatrix(); rods.setMatrixAt(i,transform.matrix);
});
transform.quaternion.identity();
model.nodes.forEach((node,i)=>{transform.position.set(...node.position);transform.updateMatrix();joints.setMatrixAt(i,transform.matrix);});
scene.add(rods,joints);
const cellCages=createCellCages(rodsGeometry,jointsGeometry,metal,jointMetal);scene.add(cellCages.group);
rods.visible=joints.visible=false;
let displayMode='both';
let slime=null,cellMerge=null,disposed=false,animation=0,mergeValue=0;
const loadController=new AbortController();
const slimeMaterial=createSlimeMaterial();
fetch(new URL('./cell-fields.bin',import.meta.url),{signal:loadController.signal})
 .then(response=>{if(!response.ok)throw new Error('Cell fields could not be loaded');return response.arrayBuffer();})
 .then(data=>{
  if(disposed)return;
  cellMerge=createCellMerge(data,slimeMaterial);
  slime=cellMerge.mesh;
  slime.name='Slime';scene.add(slime);
  document.querySelectorAll('[data-display]').forEach(button=>{button.disabled=false;});
  document.querySelector('#model-status').textContent='27개 셀 · 분리 상태';
  document.querySelectorAll('[data-merge],#merge-range').forEach(el=>el.disabled=false);
  render();
 }).catch(error=>{
  if(error.name==='AbortError')return;
  console.error(error);
  document.querySelector('#model-status').textContent='슬라임 로딩 실패';
 });
document.querySelectorAll('[data-display]').forEach(button=>button.addEventListener('click',()=>{
 const mode=button.dataset.display;displayMode=mode;
 rods.visible=joints.visible=mode!=='slime'&&mergeValue>=.94;
 cellCages.group.visible=mode!=='slime';
 if(slime)slime.visible=mode!=='cage';
 document.querySelectorAll('[data-display]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 render();
}));
function render(){renderer.render(scene,camera);}
controls.addEventListener('change',render);
function view(name){
 const distance=new THREE.Vector3(...calibration.position).length();
 if(name==='reference'){
  camera.position.set(...calibration.position);camera.up.set(...calibration.up);
  controls.target.copy(camera.position).addScaledVector(new THREE.Vector3(...calibration.forward),distance);
 }else{
  const position={front:[0,0,distance],side:[distance,0,0],top:[0,distance,0]}[name];
  camera.up.set(0,name==='top'?0:1,name==='top'?-1:0);
  camera.position.set(...position);controls.target.set(0,0,0);
 }
 controls.update();render();
 document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===name)));
}
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>view(button.dataset.view)));
document.querySelector('#material').addEventListener('click',event=>{
 const active=event.currentTarget.getAttribute('aria-pressed')!=='true';
 event.currentTarget.setAttribute('aria-pressed',String(active));
 rods.material=active?ink:metal;
 joints.material=active?ink:jointMetal;cellCages.setInk(active,ink);render();
});
const resize = new ResizeObserver(()=>{
 const {width,height}=host.getBoundingClientRect();
 if(!width||!height)return;
 const scale=Math.min(width/calibration.imageWidth,height/calibration.imageHeight);
 camera.aspect=width/height;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(height/scale/(2*calibration.focal)));
 camera.updateProjectionMatrix();renderer.setSize(width,height);render();
});
resize.observe(host);view('reference');
if(import.meta.hot)import.meta.hot.dispose(()=>{disposed=true;cancelAnimationFrame(animation);loadController.abort();cellCages.dispose();slime?.geometry.dispose();slimeMaterial.dispose();resize.disconnect();controls.dispose();rodsGeometry.dispose();jointsGeometry.dispose();metal.dispose();jointMetal.dispose();ink.dispose();environment.dispose();renderer.dispose();renderer.domElement.remove();});

const overlayButton=document.querySelector('#overlay-toggle');
overlayButton.addEventListener('click',()=>{const overlay=document.querySelector('#reference-overlay');overlay.hidden=!overlay.hidden;overlayButton.setAttribute('aria-pressed',String(!overlay.hidden));if(!overlay.hidden)view('reference');});

const range=document.querySelector('#merge-range');
function updateMerge(value){
 if(!cellMerge)return;
 mergeValue=value;cellMerge.setProgress(value);cellCages.update(value);
 rods.visible=joints.visible=displayMode!=='slime'&&value>=.94;range.value=Math.round(value*100);
 document.querySelector('#merge-output').textContent=`${Math.round(value*100)}%`;
 document.querySelector('#model-status').textContent=value===0?'27개 셀 · 분리 상태':value===1?'합쳐진 형태 · 격자 사이로 퍼짐':`합치는 중 · ${Math.round(value*100)}%`;
 render();
}
range.addEventListener('input',()=>{cancelAnimationFrame(animation);updateMerge(Number(range.value)/100);});
document.querySelectorAll('[data-merge]').forEach(button=>button.addEventListener('click',()=>{
 cancelAnimationFrame(animation);const start=mergeValue,target=Number(button.dataset.merge),time=performance.now();
 function tick(now){const t=Math.min(1,(now-time)/2400);updateMerge(start+(target-start)*(t*t*(3-2*t)));if(t<1&&!disposed)animation=requestAnimationFrame(tick);}
 animation=requestAnimationFrame(tick);
}));
