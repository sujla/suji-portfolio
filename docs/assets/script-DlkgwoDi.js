import{p as _o,a as to}from"./projects-DFnaC4_o.js";const Uo=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Jo=(o,a,u)=>{if(!o)return;const h=760,S="portfolioPfModalProject",N=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let j=null;const Q=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Me=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},I=()=>window.history.state?.[S]||"",q=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[S]:e},"")},st=e=>e.deviceType==="web"?`
        <div class="pf-project-mockups pf-project-mockups--web" aria-hidden="true">
          <div class="pf-web-mockup">
            <img class="pf-web-screen" src="./assets/article-studio/main.png" alt="" />
            <img class="pf-web-frame" src="./assets/common/laptop.png" alt="" />
          </div>
        </div>
      `:e.deviceType==="mobile"?`
        <div class="pf-project-mockups pf-project-mockups--mobile" aria-hidden="true">
          <div class="pf-phone-mockup pf-phone-mockup--center">
            ${e.media==="store-guide"?`
            <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-guide/solution-tobe1.png">
              <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
            </video>
          `:e.id==="cta-enhancement"?`
              <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/cta-enhancement/cta-enhancement-solution-poster.jpg">
                <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
              </video>
            `:e.id==="public-transport"?`
                <video class="pf-phone-screen pf-phone-screen--public-transport" autoplay muted loop playsinline preload="metadata" poster="./assets/public-transport/mrt-bottomsheet-poster.jpg">
                  <source src="./assets/public-transport/mrt-bottomsheet.mp4" type="video/mp4" />
                </video>
              `:e.id==="perp-dex"?`
                  <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/perp-dex/onboarding-poster.jpg">
                    <source src="./assets/perp-dex/onboarding.mp4" type="video/mp4" />
                  </video>
                `:""}
            <img class="pf-phone-frame" src="./assets/common/pf-mobile-frame.png" alt="" />
          </div>
        </div>
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',co=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],it=e=>{const t=co[e-1];return`
      <div class="pf-modal-public-transport-video-frame">
        <div class="pf-modal-public-transport-video-shadow">
          <video
            class="pf-modal-public-transport-video"
            muted
            playsinline
            preload="auto"
            poster="${t.poster}"
            data-public-transport-video
            data-public-transport-video-order="${e}"
          >
            <source src="${t.source}" type="video/mp4" />
          </video>
        </div>
        <p class="pf-modal-public-transport-caption">${t.label}</p>
      </div>
    `},po=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?it(1):st(e),uo=[{start:0,end:5},{start:18,end:26}],fo=(e,t)=>{const s=e.id==="public-transport"?it(t+2):"",n=e.id==="perp-dex"?[`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/logo-intro-poster.jpg" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
            `,`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/sltp-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
            `,`
              <div class="pf-modal-perp-media pf-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="pf-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="pf-modal-perp-gif-frame pf-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
            `,`
              <video class="pf-modal-perp-media pf-modal-perp-media--trading" muted playsinline preload="auto" poster="./assets/perp-dex/trading-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
            `][t]:"",l=e.media==="store-guide"&&t===0?`
          <div class="pf-modal-store-finder-video-pair">
            ${uo.map(r=>`
                  <video
                    class="pf-modal-store-finder-video pf-modal-segment-video"
                    autoplay
                    muted
                    playsinline
                    preload="auto"
                    poster="./assets/store-guide/solution-tobe1.png"
                    data-segment-start="${r.start}"
                    data-segment-end="${r.end}"
                  >
                    <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
                  </video>
                `).join("")}
          </div>
        `:"",f=e.id==="cta-enhancement"&&t===0?`
          <div class="pf-modal-bento-video-frame">
            <video
              class="pf-modal-bento-video"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              poster="./assets/cta-enhancement/cta-enhancement-solution-poster.jpg"
            >
              <source src="./assets/cta-enhancement/cta-enhancement-solution.mp4" type="video/mp4" />
            </video>
          </div>
        `:"",m=e.id==="cta-enhancement"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric inner-shadow-md">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="pf-modal-result-metric inner-shadow-md">
                <p class="pf-modal-result-metric-title--nowrap">Total Pickup Orders</p>
                <strong>128.2%</strong>
              </div>
            </div>
          </div>
        `:"",T=e.id==="article-studio"&&t===0?`
          <div class="pf-modal-article-studio-roller">
            <div class="pf-modal-article-studio-track">
              <img src="./assets/article-studio/structure.png" alt="" />
              <img src="./assets/article-studio/props.png" alt="" />
            </div>
            <div class="pf-modal-article-studio-carousel">
              <span class="pf-modal-article-studio-carousel-segment pf-modal-article-studio-carousel-segment--1"></span>
              <span class="pf-modal-article-studio-carousel-segment pf-modal-article-studio-carousel-segment--2"></span>
            </div>
          </div>
        `:e.id==="article-studio"&&t===1?'<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />':"",L=e.media==="store-guide"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric inner-shadow-md">
                <p>Increase in Page Views</p>
                <strong>+32.9%</strong>
              </div>
              <div class="pf-modal-result-metric inner-shadow-md">
                <p>Pickup Conversion</p>
                <strong>Up to 11%</strong>
              </div>
            </div>
          </div>
        `:"",b=t===0&&["cta-enhancement","store-finder"].includes(e.id)||e.id==="article-studio"&&t===1?" inner-shadow-lg":"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}${b}">
        ${s||n||l||f||m||T||L}
      </div>
    `},mo=e=>{const t=n=>n.matches(`
        .pf-work--article-studio :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        ),
        .pf-work--public-transport :is(
          .pf-modal-bento-feature,
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        ),
        .pf-work--perp-dex .pf-modal-bento-placeholder,
        .pf-work--cta-enhancement .pf-modal-bento-placeholder--3
      `),s=n=>{const l=n.videoWidth||n.naturalWidth||n.width,f=n.videoHeight||n.naturalHeight||n.height;if(!l||!f)return null;const m=16,T=document.createElement("canvas"),L=T.getContext("2d",{willReadFrequently:!0});if(!L)return null;T.width=m,T.height=m;try{L.drawImage(n,0,0,m,m);const y=L.getImageData(0,0,m,m).data;let b=0,r=0,k=0,i=0;for(let g=0;g<m;g+=1)for(let w=0;w<m;w+=1){if(w>1&&w<m-2&&g>1&&g<m-2)continue;const x=(g*m+w)*4,E=y[x+3]/255;E<.2||(b+=y[x]*E,r+=y[x+1]*E,k+=y[x+2]*E,i+=E)}return i?`rgb(${Math.round(b/i)} ${Math.round(r/i)} ${Math.round(k/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const l=n.querySelector("img, video, canvas");if(!l)return;const f=()=>{if(!n.isConnected)return;const m=s(l);m&&(n.style.setProperty("--pf-modal-media-background",m),n.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?f():l.addEventListener("load",f,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?f():l.addEventListener("loadeddata",f,{once:!0});return}window.requestAnimationFrame(f)})},go=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=s,t.play().catch(()=>{})},f=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",f,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&l()}),t.addEventListener("ended",l),t.readyState>=1&&f()})},ho=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const g=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?g():i.video.addEventListener("loadedmetadata",g,{once:!0})}if(i.gif){const g=i.gif.querySelector("[data-perp-gif-player]"),w=i.gif.dataset.perpGifSrc;g&&w&&(g.src=w)}});return}let l=null,f=0,m=0,T=0,L=null;const y=i=>{if(i.container.classList.remove("is-playing"),i.video){const g=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(g,Number.isFinite(i.video.duration)?i.video.duration:g))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},b=()=>{window.clearTimeout(m),n.forEach(y)},r=()=>{f=(f+1)%n.length,k(n[f],!0)},k=(i,g=!1)=>{const w=++T;if(b(),l=i,i.container.classList.add("is-playing"),i.video){const x=()=>{w!==T||!e.isConnected||(i.video.loop=!g,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?x():i.video.addEventListener("loadedmetadata",x,{once:!0})}if(i.gif){const x=i.gif.querySelector("[data-perp-gif-player]"),E=i.gif.dataset.perpGifSrc;x&&E&&(x.src=`${E}?play=${w}`),g&&(m=window.setTimeout(()=>{w===T&&!L&&e.isConnected&&r()},Number(i.gif.dataset.perpGifDuration||6600)))}};n.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===l&&!L&&e.isConnected&&r()}),i.gif){const g=i.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{g.width=w.naturalWidth,g.height=w.naturalHeight,g.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{L=i,k(i)}),i.container.addEventListener("mouseleave",()=>{L===i&&(L=null,f=(n.indexOf(i)+1)%n.length,k(n[f],!0))})}),n.forEach(y),k(n[f],!0)},wo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,k)=>r.order-k.order);if(!s.length)return;if(t){s.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const k=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?k():r.video.addEventListener("loadedmetadata",k,{once:!0})});return}let n=null,l=0,f=null,m=0;const T=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},L=()=>s.forEach(T),y=()=>{l=(l+1)%s.length,b(s[l],!0)},b=(r,k=!1)=>{const i=++m;L(),n=r,r.container.classList.add("is-playing");const g=()=>{i!==m||!e.isConnected||(r.video.loop=!k,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})};s.forEach(r=>{r.video.addEventListener("ended",()=>{r===n&&!f&&e.isConnected&&y()}),r.container.addEventListener("mouseenter",()=>{f=r,b(r)}),r.container.addEventListener("mouseleave",()=>{f===r&&(f=null,l=(s.indexOf(r)+1)%s.length,b(s[l],!0))})}),s.forEach(T),b(s[l],!0)},vo=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${st(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${Q(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${u(e.title)} project detail">${n}</a>`},nt=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,at=(e,t)=>nt(e)&&!t.target&&!t.hasAttribute("download"),lt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},ct=()=>"24px",pe=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},dt=(e,t)=>{const s=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,l=e.left-t.left,f=e.top-t.top;return`translate3d(${l}px, ${f}px, 0) scale(${s}, ${n})`},yo=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},bo=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},pt=(e,t,{pushHistory:s=!0}={})=>{if(j)return;s&&q(t.id);const n=yo(),l=e.querySelector(".pf-work-card")||e,f=l.getBoundingClientRect(),m=window.getComputedStyle(l).borderRadius,T=lt(),L=ct(),y=document.createElement("div"),b=document.createElement("div"),r=document.createElement("div"),k=`pf-modal-${t.id}-title`,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=i?1:h,w=t.cta?`
        <a
          class="pf-modal-cta"
          href="${t.cta.href}"
          ${t.cta.newTab?'target="_blank" rel="noopener noreferrer"':""}
        >
          <span>${t.cta.label}</span>
          <span
            class="pf-modal-cta-arrow pf-modal-cta-arrow--${t.cta.newTab?"external":"internal"}"
            aria-hidden="true"
          ></span>
        </a>
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",E=t.id==="perp-dex",Ht=t.id==="public-transport",Bt=E?4:Ht?2:3,Ho=Array.from({length:Bt},(d,v)=>fo(t,v)),Bo=Array.from({length:Bt},(d,v)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${v+1} pf-modal-bento-skeleton"></div>
      `),ne=Ht,we=!t.cta&&!E&&!ne,Ke=t.deviceType==="web"&&!ne&&!we,Dt=["cta-enhancement","store-finder"].includes(t.id),Vt=d=>{const v=Dt?d[0]:d.slice(0,2).join("");return E?`
          <div class="pf-modal-perp-left">
            ${d[0]}
            <div class="pf-modal-perp-center-bottom">
              ${d[1]}
              ${d[2]}
            </div>
          </div>
          ${d[3]}
        `:ne||we?d.join(""):Ke?`<div class="pf-modal-bento-side">${d.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Dt?" pf-modal-bento-stack-top--single":""}">
              ${v}
            </div>
            ${d[2]}
          </div>
        `},Do=Vt(Ho),Vo=Vt(Bo),Oo=E?"":`
        <div class="pf-modal-bento-feature">
          ${po(t)}
        </div>
      `,zo=`
      <section class="pf-modal-bento-section${Ke?" pf-modal-bento-section--web":""}${ne?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Oo}
        ${Do}
      </section>
    `,No=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Ke?" pf-modal-bento-section--web":""}${ne?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${E?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Vo}
      </section>
    `;y.className="pf-modal-layer",b.className="pf-modal-backdrop",b.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",k),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${No}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${k}">${t.title}</h2>
          ${Q(t)}
        </div>
        ${w||x}
      </div>
    `,pe(r,T),r.style.borderRadius=L,r.style.transformOrigin="top left",y.append(b,r),document.body.append(y),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ve=r.animate([{transform:dt(f,T),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),ye=b.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),Xe=r.querySelector(".pf-modal-close"),_=r.querySelector(".pf-modal-cta"),be=r.querySelector(".pf-modal-footer"),R=r.querySelector(".pf-modal-card-content"),ae=r.querySelector(".pf-modal-scroll-indicator");let Ot=!1,F=!1,le=0;const Yo=()=>{if(le=0,!R||!ae||F)return;const d=R.scrollHeight-R.clientHeight,v=8,D=be?.offsetHeight??0,V=Math.max(0,r.clientHeight-D-v*2);if(d<=1||V<=0){ae.classList.remove("is-visible");return}const ke=Math.min(V,Math.max(36,V*(R.clientHeight/R.scrollHeight))),Xo=Math.min(1,Math.max(0,R.scrollTop/d))*(V-ke);ae.style.height=`${ke}px`,ae.style.transform=`translate3d(0, ${Xo}px, 0)`,ae.classList.add("is-visible")},ce=()=>{le||(le=window.requestAnimationFrame(Yo))},_e=typeof ResizeObserver=="function"?new ResizeObserver(ce):null;_e?.observe(R),R?.addEventListener("scroll",ce,{passive:!0});const Go=()=>{Ot||!R||F||(Ot=!0,R.classList.remove("is-skeleton"),R.innerHTML=zo,mo(r),go(r),ho(r),wo(r),R.querySelectorAll(".pf-modal-bento-section").forEach(d=>_e?.observe(d)),window.requestAnimationFrame(()=>{!F&&r.isConnected&&(r.classList.add("is-content-ready"),ce())}))},Se=()=>{const d=be?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${d}px`),ce()},zt=be&&typeof ResizeObserver=="function"?new ResizeObserver(Se):null;zt?.observe(be),Se();const Nt=()=>{!F&&r.classList.contains("is-ready")&&(pe(r,lt()),r.style.borderRadius=ct(),Se())};let Yt=!1;const Gt=({restoreFocus:d=!1}={})=>{if(Yt||(Yt=!0,y.getAnimations?.({subtree:!0})?.forEach(D=>D.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Ue),window.removeEventListener("resize",Nt),zt?.disconnect(),_e?.disconnect(),R?.removeEventListener("scroll",ce),le&&window.cancelAnimationFrame(le),j?.modal===r&&(j=null),bo(n),!d))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Kt=()=>{if(F)return;F=!0,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const d=r.getBoundingClientRect(),v=window.getComputedStyle(r).borderRadius,D=l.getBoundingClientRect();e.classList.remove("is-modal-source"),ve.cancel(),ye.cancel(),pe(r,d),r.style.borderRadius=v,r.style.transform="none";const V=i?1:320,ke=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v},{transform:dt(D,d),borderRadius:m}],{duration:V,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});b.animate([{opacity:1},{opacity:0}],{duration:i?1:200,easing:"ease-out",fill:"forwards"}),ke.finished.finally(()=>Gt({restoreFocus:!0}))},Le=()=>{if(F)return;const d=I()===t.id;Kt(),d&&(window.history.back(),window.setTimeout(()=>{if(I()!==t.id)return;const v=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete v[S],window.history.replaceState(v,"")},500))},Ko=d=>{if(_){if(t.cta?.newTab){nt(d)&&Le();return}at(d,_)&&(d.preventDefault(),!F&&(F=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Ue),ve.cancel(),ye.cancel(),I()===t.id?window.location.replace(_.href):window.location.href=_.href))}},Ue=d=>{if(d.key==="Escape"){d.preventDefault(),Le();return}if(d.key!=="Tab")return;const v=[Xe,_].filter(Boolean),D=v.indexOf(document.activeElement),V=d.shiftKey?(D-1+v.length)%v.length:(D+1)%v.length;d.preventDefault(),v[V].focus()};j={layer:y,modal:r,projectId:t.id,closeModal:Kt,disposeModal:Gt},document.addEventListener("keydown",Ue),window.addEventListener("resize",Nt),Xe.addEventListener("click",Le),_?.addEventListener("click",Ko),y.addEventListener("click",d=>{(d.target===y||d.target===b)&&Le()}),ye.finished.then(()=>{b.style.opacity="1",ye.cancel()}).catch(()=>{}),ve.finished.then(()=>{F||(pe(r,T),r.style.borderRadius=L,r.style.transform="none",ve.cancel(),Se(),r.classList.add("is-ready"),Go(),Xe.focus({preventScroll:!0}))}).catch(()=>{})},H=window.matchMedia("(max-width: 600px)"),Z=document.querySelector("[data-pf-type-filter]"),So=270,Lo=.36;Z&&(Z.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${N.map(({value:e,label:t},s)=>`
            ${s>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
            <button
              class="pf-type-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}</button>
          `).join("")}
      </div>
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const M=document.createElement("div");M.className="pf-floating-filter",M.dataset.pfFloatingFilter="",M.setAttribute("role","group"),M.setAttribute("aria-label","Filter projects by type"),M.innerHTML=`
    <div class="pf-floating-filter-scroll">
      ${[{value:"",label:"All"},...N].map(({value:e,label:t})=>`
            <button
              class="pf-floating-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}</button>
          `).join("")}
    </div>
  `,document.body.append(M),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${a.map(e=>vo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const $=document.createElement("span");$.className="pf-work-cursor-label",$.dataset.pfWorkCursor="",$.setAttribute("aria-hidden","true"),$.innerHTML="<span>View Details</span>",document.body.append($);const ut=[...Z?[...Z.querySelectorAll("[data-project-type-filter]")]:[],...M.querySelectorAll("[data-project-type-filter]")],ko=Z?.querySelector(".pf-type-filter"),ft=document.documentElement,A=M.querySelector(".pf-floating-filter-scroll"),$e=[...M.querySelectorAll("[data-project-type-filter]")],To=[...o.querySelectorAll(".pf-work[data-project-types]")],mt=o.querySelector(".pf-work-grid"),gt=o.querySelector(".pf-filter-empty");let Y="",ht=0,wt=0,vt=0,ue=!1;const Eo=()=>{window.clearTimeout(wt),window.clearTimeout(vt)},Mo=e=>{if(e!==ue){if(ue=e,Eo(),!e){M.classList.remove("is-visible"),vt=window.setTimeout(()=>{ue||ft.classList.remove("is-footer-yielding-to-filter")},220);return}ft.classList.add("is-footer-yielding-to-filter"),wt=window.setTimeout(()=>{ue&&M.classList.add("is-visible")},220)}},fe=()=>{if(!A||!H.matches){M.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,A.scrollWidth-A.clientWidth);M.classList.toggle("has-scroll-left",A.scrollLeft>1),M.classList.toggle("has-scroll-right",A.scrollLeft<e-1)},yt=()=>{if(!A||!H.matches)return;const e=$e.find(l=>l.getAttribute("aria-pressed")==="true"),t=$e.indexOf(e);if(!e)return;const s=Math.max(0,A.scrollWidth-A.clientWidth),n=t<2?0:t>=$e.length-2?s:e.offsetLeft-(A.clientWidth-e.offsetWidth)/2;A.scrollTo({left:n,behavior:"smooth"})},Ce=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*Lo;Mo(window.scrollY>So&&e>t)},$o=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},bt=e=>{Y=e;let t=0;ut.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===Y))}),yt(),ko?.classList.toggle("is-filtering",!!Y),To.forEach(s=>{const n=s.dataset.projectTypes.split(" "),l=!Y||n.includes(Y);s.hidden=!l,l&&(t+=1)}),mt?.classList.toggle("is-single-result",t===1),gt&&(gt.hidden=t>0)};ut.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,s=e.dataset.projectTypeFilter,n=!M.contains(e)&&Y===s;window.clearTimeout(ht),t.style.overflowAnchor="none",bt(n?"":s),$o(),ht=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Ce,{passive:!0}),window.addEventListener("resize",()=>{Ce(),fe()},{passive:!0}),A?.addEventListener("scroll",fe,{passive:!0}),H.addEventListener?.("change",()=>{fe(),yt()}),Ce(),bt(""),fe();const c=o.querySelector("[data-pf-work-rail]"),Pe=c?[...c.querySelectorAll(".pf-work-set")]:[],St=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),me=p?[...p.querySelectorAll(".pf-work-set")]:[],Lt=me[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Co=80,Po=-80,xe=32,xo=12,kt=180,Tt=600;let Re,je=0,qe=0,C=0,Ae=xe,Fe=!1,ee=!1,Et=0,We=0,te=!1,ge=!1,oe=!1,Ie=0,B=0,G=0,W=0,K=0,P=0,He=0,re=!1,Mt=0,Be=0,se=!1,he=!1,ie=!1,De=0;const $t=({preservePosition:e=!1}={})=>{if(!c||!St||Pe.length<3)return;const t=B,s=G,n=t?(c.scrollLeft-s)/t:0,l=c.getBoundingClientRect(),f=St.getBoundingClientRect(),m=c.scrollLeft+f.left-l.left;B=Pe[2].getBoundingClientRect().left-Pe[1].getBoundingClientRect().left,G=m-(c.clientWidth-f.width)/2-(H.matches?Co:0),c.scrollLeft=e?G+n*B:G,C=c.scrollLeft},Ve=()=>{if(!c||!B)return 0;const e=G-B*.5,t=G+B*.5;let s=c.scrollLeft;for(;s<e;)s+=B;for(;s>=t;)s-=B;const n=s-c.scrollLeft;return Math.abs(n)>.5&&(c.scrollLeft=s),n},Ct=({preservePosition:e=!1}={})=>{if(!p||!Lt||me.length<3||!p.clientWidth)return;const t=W,s=K,n=t?(p.scrollLeft-s)/t:0,l=p.getBoundingClientRect(),f=Lt.getBoundingClientRect(),m=p.scrollLeft+f.left-l.left;W=me[2].getBoundingClientRect().left-me[1].getBoundingClientRect().left,K=m-(p.clientWidth-f.width)/2-Po,p.scrollLeft=e?K+n*W:K,P=p.scrollLeft},Oe=()=>{if(!p||!W)return 0;const e=K-W*.5,t=K+W*.5;let s=p.scrollLeft;for(;s<e;)s+=W;for(;s>=t;)s-=W;const n=s-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=s),n},ze=()=>{C=c?.scrollLeft??C,qe=performance.now()+200},Pt=()=>{P=p?.scrollLeft??P,He=performance.now()+200},Ro=()=>{window.clearTimeout(Ie),oe=!0,C=c?.scrollLeft??C},xt=()=>{window.clearTimeout(Ie),Ie=window.setTimeout(()=>{c&&(C=c.scrollLeft,C+=Ve(),oe=!1,qe=performance.now()+Tt)},kt)},jo=()=>{window.clearTimeout(De),ie=!0,P=p?.scrollLeft??P},Rt=()=>{window.clearTimeout(De),De=window.setTimeout(()=>{p&&(P=p.scrollLeft,P+=Oe(),ie=!1,He=performance.now()+Tt)},kt)},jt=e=>{const t=Math.min((e-(Re??e))/1e3,.1),s=Fe?xo:xe;if(Re=e,Ae+=(s-Ae)*Math.min(t*6,1),c){const n=o.getBoundingClientRect(),l=n.bottom>0&&n.top<window.innerHeight;l&&!ee&&!oe&&!ie&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=qe&&(C+=t*Ae,c.scrollLeft=C,C+=Ve()),l&&p?.clientWidth&&W&&!re&&!ie&&!oe&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=He&&(P-=t*xe,p.scrollLeft=P,P+=Oe())}je=requestAnimationFrame(jt)};!c||je||(Re=void 0,je=requestAnimationFrame(jt)),requestAnimationFrame(()=>{$t(),Ct()}),c?.addEventListener("mouseenter",()=>{Fe=!0}),c?.addEventListener("mouseleave",()=>{Fe=!1}),o.addEventListener("wheel",e=>{!c||e.ctrlKey||(ze(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||j)){if(e.pointerType==="touch"&&H.matches){Ro();return}ee=!0,te=!1,Et=e.clientX,We=c.scrollLeft,ze()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!ee)return;const t=e.clientX-Et;!te&&Math.abs(t)<=5||(te||(te=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=We-t,We+=Ve(),C=c.scrollLeft,ze())});const qo=e=>{!c||!ee||(ee=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),C=c.scrollLeft,te&&(ge=!0,window.setTimeout(()=>{ge=!1},0)))};c?.addEventListener("scroll",()=>{oe&&(C=c.scrollLeft,xt())},{passive:!0});const qt=e=>{if(e.pointerType==="touch"&&H.matches){xt();return}qo(e)};c?.addEventListener("pointerup",qt),c?.addEventListener("pointercancel",qt),c?.addEventListener("click",e=>{ge&&(ge=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||j)){if(e.pointerType==="touch"&&H.matches){jo();return}re=!0,se=!1,Mt=e.clientX,Be=p.scrollLeft,Pt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!re)return;const t=e.clientX-Mt;!se&&Math.abs(t)<=5||(se||(se=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Be-t,Be+=Oe(),P=p.scrollLeft,Pt())});const Ao=e=>{!p||!re||(re=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),P=p.scrollLeft,se&&(he=!0,window.setTimeout(()=>{he=!1},0)))};p?.addEventListener("scroll",()=>{ie&&(P=p.scrollLeft,Rt())},{passive:!0});const At=e=>{if(e.pointerType==="touch"&&H.matches){Rt();return}Ao(e)};p?.addEventListener("pointerup",At),p?.addEventListener("pointercancel",At),p?.addEventListener("click",e=>{he&&(he=!1,e.preventDefault(),e.stopPropagation())},!0);const Fo=70,Ne=14,Ye=12;let z=0,Ft=$.offsetWidth,Ge=$.offsetHeight;const Wt=()=>{Ft=$.offsetWidth,Ge=$.offsetHeight};document.fonts?.ready.then(Wt);const X=(e=0)=>{if(e){if(z)return;z=window.setTimeout(()=>{z=0,$.classList.remove("is-visible")},e);return}window.clearTimeout(z),z=0,$.classList.remove("is-visible")},Wo=()=>{window.clearTimeout(z),z=0,$.classList.add("is-visible")},Io=e=>{const t=Ft/2,s=Math.min(Math.max(t+Ye,e.clientX),window.innerWidth-t-Ye),l=e.clientY+Ne+Ge+Ye<=window.innerHeight?e.clientY+Ne:e.clientY-Ne-Ge;$.style.transform=`translate3d(${s}px, ${l}px, 0) translateX(-50%)`};o.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;Io(e);const t=e.target instanceof Element?e.target:null,s=t?.closest(".pf-work");if(s&&o.contains(s)){Wo();return}if(t&&mt?.contains(t)){X(Fo);return}X()}),o.addEventListener("pointerleave",()=>X()),window.addEventListener("blur",()=>X()),window.addEventListener("scroll",()=>X(),{passive:!0}),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!at(t,e))return;const s=a.find(n=>e.classList.contains(`pf-work--${n.id}`));s&&(Me(s),X(),t.preventDefault(),pt(e,s))})}),window.addEventListener("resize",()=>{Wt(),requestAnimationFrame(()=>{$t({preservePosition:!0}),Ct({preservePosition:!0})})});const It=()=>{const e=I();if(j){j.projectId!==e&&j.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&pt(s,t,{pushHistory:!1})};return window.addEventListener("popstate",It),{resetModal:()=>j?.disposeModal(),syncModalWithHistory:It}},Qe=document.querySelector("[data-pf]"),Xt=document.querySelector("[data-about]"),U=document.querySelector(".about-photo-stack"),_t=document.querySelector("[data-project-list]"),Qo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Zo=document.querySelector(".counter-line"),Ut=document.querySelector(".fixed-project-meta"),er=document.querySelector("[data-side-number]"),tr=document.querySelector("[data-side-wip]"),or=document.querySelector("[data-side-title]"),rr=document.querySelector("[data-counter-wip]"),Ze=document.querySelector("[data-year-rail]"),sr=[...document.querySelectorAll("[data-gnb-scroll]")],oo=document.querySelector(".theme-toggle"),O=document.documentElement,ro="portfolio-last-project-slug",Jt=760,ir=12,nr=8,so=window.matchMedia("(max-width: 600px)"),ot=window.matchMedia("(prefers-reduced-motion: reduce)"),ar=3e3,lr=200,cr={work:40,experience:-50};let et=!1,de=0,Je=0,Qt=0,io=0;const dr=()=>{const o=U?.lastElementChild;!o||U.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),io=window.setTimeout(()=>{U.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},lr))},no=()=>{window.clearInterval(Qt),window.clearTimeout(io),U?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!U||U.children.length<2||ot.matches)&&(Qt=window.setInterval(dr,ar))},pr=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},ur=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},fr=o=>{window.gtag?.("event","project_click",{project_name:o})},mr=o=>`'${String(o).slice(-2)}`,gr=o=>{const{start:a,end:u}=to.yearRange,h=Math.min(5,u-a+1),S=Math.min(Math.max(o-2,a),u-h+1);return Array.from({length:h},(J,N)=>S+N)},hr=o=>o.split("|").join(" "),wr=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),vr=()=>window.matchMedia("(max-width: 600px)").matches?nr:ir,yr=()=>{const o=vr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},br=o=>{const a=o.getBoundingClientRect(),u=yr(),h=window.getComputedStyle(o),S=window.getComputedStyle(o.closest(".project-section")),J=window.getComputedStyle(o.querySelector(".project-media")),N=o.querySelector(".project-summary"),j=Number.parseFloat(h.rowGap||h.gap)||0,Q=N?.getBoundingClientRect().height||0,Me=Math.max(0,u.height-Q-j),I=document.createElement("div"),q=o.cloneNode(!0);return q.classList.add("project-transition-card"),q.removeAttribute("href"),q.removeAttribute("aria-label"),q.setAttribute("aria-hidden","true"),Object.assign(q.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),q.style.setProperty("--project-color",S.getPropertyValue("--project-color")),q.style.setProperty("--project-sub-color",S.getPropertyValue("--project-sub-color")),q.style.setProperty("--project-media-shadow",J.boxShadow),I.className="project-transition-layer",I.append(q),document.body.append(I),{cardClone:q,targetRect:u,targetGridTemplateRows:`${Me}px ${Q}px`}},Sr=o=>{if(et)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}et=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:h,targetGridTemplateRows:S}=br(o);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:S,opacity:0,offset:1}],{duration:Jt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Jt-120)},Lr=()=>{et=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},kr=o=>{Ze.innerHTML=gr(o.year).map(a=>{const u=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${u?'aria-current="true"':""}>${mr(a)}</span>
      `}).join("")},Tr=()=>{Ut.classList.add("is-changing"),Ze.classList.add("is-changing"),window.setTimeout(()=>{Ut.classList.remove("is-changing"),Ze.classList.remove("is-changing")},180)};let Te=[],Zt=-1;const rt=({force:o=!1}={})=>{if(!so.matches){de&&(O.style.removeProperty("--mobile-project-viewport"),de=0,Je=0);return}const a=window.innerWidth;!o&&de&&a===Je||(de=window.innerHeight,Je=a,O.style.setProperty("--mobile-project-viewport",`${de}px`))},Er=()=>{if(!Qe)return;const o=Qe.getBoundingClientRect(),a=window.innerHeight/2,u=o.top<=a&&o.bottom>=a;O.classList.toggle("is-pf-active",u)},Mr=()=>{if(!Xt)return;const o=Xt.getBoundingClientRect(),a=window.innerHeight/2,u=o.top<=a&&o.bottom>=a;O.classList.toggle("is-about-active",u)},$r=o=>{if(o===Zt||o<0)return;const a=_o[o],u=(o+1)/to.totalProjectCount*100;Zt=o,Tr(),Qo.textContent=a.number,er.textContent=a.number,tr.textContent=a.wip?"🚧":"",rr.textContent=a.wip?"🚧":"",or.innerHTML=a.sideTitle.split("|").join("<br />"),Zo.style.setProperty("--progress",`${u}%`),O.style.setProperty("--active-project-color",a.keyColor),O.style.setProperty("--active-project-sub-color",a.subColor||a.keyColor),ur(ro,a.slug),kr(a)},Cr=()=>{if(!Te.length)return;const o=window.innerHeight/2,a=Te.map((u,h)=>{const S=u.getBoundingClientRect(),J=S.top+S.height/2;return{index:h,distance:Math.abs(J-o)}}).sort((u,h)=>u.distance-h.distance)[0]?.index;Te.forEach((u,h)=>{const S=h===a;u.classList.toggle("is-active",S),u.classList.toggle("is-inactive",!S)}),$r(a)},Pr=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),u=cr[o.id]??0,h=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-u,S=Math.min(a,Math.max(0,h));window.scrollTo({top:S,behavior:ot.matches?"auto":"smooth"})};let eo=0;const Ee=()=>{cancelAnimationFrame(eo),eo=requestAnimationFrame(()=>{Er(),Mr(),Cr()})},ao=o=>{O.dataset.theme=o,oo.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},xr=localStorage.getItem("portfolio-theme")||"light",lo=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";ot.addEventListener?.("change",no);no();const tt=Jo(Qe,Uo,hr);Te=[...document.querySelectorAll("[data-project]")];rt({force:!0});ao(xr);const Rr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=lo()==="back_forward",u=o||(a?pr(ro):""),h=u?document.getElementById(u):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};Rr();lo()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));oo.addEventListener("click",()=>{ao(O.dataset.theme==="dark"?"light":"dark")});sr.forEach(o=>{o.addEventListener("click",a=>{const u=document.querySelector(o.hash);u&&(a.preventDefault(),Pr(u))})});_t?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!_t.contains(a)||!wr(o,a)||(fr(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),Sr(a))});window.addEventListener("scroll",Ee,{passive:!0});window.addEventListener("resize",()=>{rt(),Ee()});so.addEventListener?.("change",()=>{rt({force:!0}),Ee()});window.addEventListener("pagehide",()=>tt?.resetModal());window.addEventListener("pageshow",()=>{tt?.resetModal(),tt?.syncModalWithHistory(),Lr()});Ee();
