import { ShaderMaterial, Vector3, Color } from 'three';

// Art-directed studio lighting keeps the saturated blue out of the cage's
// bright metallic environment map. Colors are converted to sRGB at output.
export function createSlimeMaterial() {
 return new ShaderMaterial({
  toneMapped:false,
  uniforms:{separation:{value:0},cellPitch:{value:100/3+18},geometryExtent:{value:90},farBlue:{value:new Color('#739aff')},base:{value:new Color('#0055ff')},key:{value:new Vector3(-1.1,1.25,1.7).normalize()},fill:{value:new Vector3(1,.25,1.4).normalize()}},
  vertexShader:`uniform float cellPitch;uniform float geometryExtent;
   varying vec3 N;varying vec3 P;varying float depthTint;
   void main(){
    vec3 cell=clamp(floor(position*geometryExtent/cellPitch+.5),-1.,1.);
    vec3 viewDirection=normalize(cameraPosition);
    float span=max(dot(abs(viewDirection),vec3(1.)),.001);
    float farAmount=.5-.5*dot(cell,viewDirection)/span;
    float inward=1.-length(cell)/sqrt(3.);
    depthTint=clamp(farAmount*.88+inward*.18,0.,1.);
    vec4 p=modelViewMatrix*vec4(position,1.);P=p.xyz;N=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;
   }`,
  fragmentShader:`uniform float separation;uniform vec3 farBlue;varying float depthTint;uniform vec3 base;uniform vec3 key;uniform vec3 fill;varying vec3 N;varying vec3 P;
   float panel(vec3 r,vec3 l,vec2 extent){
    vec3 x=normalize(cross(vec3(0.,1.,0.),l));vec3 y=cross(l,x);
    float facing=dot(r,l);vec2 uv=vec2(dot(r,x),dot(r,y))/max(facing,.001);
    vec2 edge=smoothstep(extent,extent+vec2(.22),abs(uv));
    return (1.-edge.x)*(1.-edge.y)*step(0.,facing);
   }
   void main(){
    vec3 n=normalize(N);vec3 v=normalize(-P);vec3 r=reflect(-v,n);
    float diffuse=.24+.72*max(dot(n,key),0.)+.10*max(dot(n,fill),0.);
    vec3 depthColor=mix(base,farBlue,smoothstep(0.,1.,depthTint));
    vec3 surfaceColor=mix(base,depthColor,separation);
    float shading=mix(diffuse,.38+.62*diffuse,separation*depthTint*.65);
    vec3 c=surfaceColor*shading;
    float broad=pow(max(dot(n,normalize(v+key)),0.),55.);
    float spec=panel(r,key,vec2(.58,.78))*.72+panel(r,fill,vec2(.08,.38))*.14+broad*.10;
    c=mix(c,vec3(.42,.65,1.),clamp(spec,0.,1.));
    float rim=pow(1.-max(dot(n,v),0.),4.);
    c+=vec3(.006,.016,.09)*rim;
    gl_FragColor=vec4(c,1.);
    #include <colorspace_fragment>
   }`,
 });
}
