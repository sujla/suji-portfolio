import{p as ko,a as It}from"./projects-C3NfBF-1.js";/* empty css               */const To=[{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Mo=(o,a,l)=>{if(!o)return;const h=760,T="portfolioPfModalProject",N=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let x=null;const re=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},O=()=>window.history.state?.[T]||"",Y=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[T]:e},"")},E=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',Nt=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],Xe=e=>{const t=Nt[e-1];return`
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
    `},Ot=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?Xe(1):E(e),Yt=[{image:"./assets/store-guide/impact-1.png",title:"Flow-level Data Tracking"},{image:"./assets/store-guide/impact-2.png",title:"Increased Page Views"},{image:"./assets/store-guide/impact-3.png",title:"Pickup Conversion up to 11%"}],Kt=[{start:0,end:5},{start:18,end:26}],_t=(e,t)=>{const s=Kt[t],n=e.id==="public-transport"?Xe(t+2):"",c=e.id==="perp-dex"?[`
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
            `][t]:"",u=e.media==="store-guide"&&s?`
          <video
            class="pf-modal-bento-video pf-modal-segment-video"
            autoplay
            muted
            playsinline
            preload="auto"
            poster="./assets/store-guide/solution-tobe1.png"
            data-segment-start="${s.start}"
            data-segment-end="${s.end}"
          >
            <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
          </video>
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
        `:"",L=e.id==="cta-enhancement"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p class="pf-modal-result-metric-title--nowrap">Total Amount of Pickup Orders</p>
                <strong>128.2%</strong>
              </div>
            </div>
          </div>
        `:"",b=e.id==="article-studio"&&t===0?`
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
        `:e.id==="article-studio"&&t===1?'<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />':"",v=e.media==="store-guide"&&t===2?`
          <div class="pf-modal-impact-list">
            ${Yt.map(y=>`
                  <article class="pf-modal-impact-card">
                    <div class="pf-modal-impact-media">
                      <img src="${y.image}" alt="" />
                    </div>
                    <h3>${y.title}</h3>
                  </article>
                `).join("")}
          </div>
        `:"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}">
        ${n||c||u||f||L||b||v}
      </div>
    `},Xt=e=>{const t=n=>n.matches(`
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
      `),s=n=>{const c=n.videoWidth||n.naturalWidth||n.width,u=n.videoHeight||n.naturalHeight||n.height;if(!c||!u)return null;const f=16,L=document.createElement("canvas"),b=L.getContext("2d",{willReadFrequently:!0});if(!b)return null;L.width=f,L.height=f;try{b.drawImage(n,0,0,f,f);const v=b.getImageData(0,0,f,f).data;let y=0,i=0,S=0,r=0;for(let g=0;g<f;g+=1)for(let w=0;w<f;w+=1){if(w>1&&w<f-2&&g>1&&g<f-2)continue;const C=(g*f+w)*4,k=v[C+3]/255;k<.2||(y+=v[C]*k,i+=v[C+1]*k,S+=v[C+2]*k,r+=k)}return r?`rgb(${Math.round(y/r)} ${Math.round(i/r)} ${Math.round(S/r)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const c=n.querySelector("img, video, canvas");if(!c)return;const u=()=>{if(!n.isConnected)return;const f=s(c);f&&(n.style.setProperty("--pf-modal-media-background",f),n.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?u():c.addEventListener("load",u,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?u():c.addEventListener("loadeddata",u,{once:!0});return}window.requestAnimationFrame(u)})},Ut=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=s,t.play().catch(()=>{})},u=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",u,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&c()}),t.addEventListener("ended",c),t.readyState>=1&&u()})},Jt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(r=>e.querySelector(`.pf-modal-bento-placeholder--${r}`)).filter(Boolean).map(r=>({container:r,video:r.querySelector("[data-perp-video]"),gif:r.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(r=>{if(r.container.classList.add("is-playing"),r.video){const g=()=>{e.isConnected&&(r.video.loop=!0,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})}if(r.gif){const g=r.gif.querySelector("[data-perp-gif-player]"),w=r.gif.dataset.perpGifSrc;g&&w&&(g.src=w)}});return}let c=null,u=0,f=0,L=0,b=null;const v=r=>{if(r.container.classList.remove("is-playing"),r.video){const g=Number(r.video.dataset.perpThumbnailTime||0);r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=Math.min(g,Number.isFinite(r.video.duration)?r.video.duration:g))}r.gif&&r.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},y=()=>{window.clearTimeout(f),n.forEach(v)},i=()=>{u=(u+1)%n.length,S(n[u],!0)},S=(r,g=!1)=>{const w=++L;if(y(),c=r,r.container.classList.add("is-playing"),r.video){const C=()=>{w!==L||!e.isConnected||(r.video.loop=!g,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?C():r.video.addEventListener("loadedmetadata",C,{once:!0})}if(r.gif){const C=r.gif.querySelector("[data-perp-gif-player]"),k=r.gif.dataset.perpGifSrc;C&&k&&(C.src=`${k}?play=${w}`),g&&(f=window.setTimeout(()=>{w===L&&!b&&e.isConnected&&i()},Number(r.gif.dataset.perpGifDuration||6600)))}};n.forEach(r=>{if(r.video&&r.video.addEventListener("ended",()=>{r===c&&!b&&e.isConnected&&i()}),r.gif){const g=r.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{g.width=w.naturalWidth,g.height=w.naturalHeight,g.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=r.gif.dataset.perpGifSrc}r.container.addEventListener("mouseenter",()=>{b=r,S(r)}),r.container.addEventListener("mouseleave",()=>{b===r&&(b=null,u=(n.indexOf(r)+1)%n.length,S(n[u],!0))})}),n.forEach(v),S(n[u],!0)},Qt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(i=>({video:i,order:Number(i.dataset.publicTransportVideoOrder),container:i.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(i=>i.container).sort((i,S)=>i.order-S.order);if(!s.length)return;if(t){s.forEach(i=>{i.container.classList.add("is-playing"),i.video.loop=!0;const S=()=>{e.isConnected&&(i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?S():i.video.addEventListener("loadedmetadata",S,{once:!0})});return}let n=null,c=0,u=null,f=0;const L=i=>{i.container.classList.remove("is-playing"),i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=0)},b=()=>s.forEach(L),v=()=>{c=(c+1)%s.length,y(s[c],!0)},y=(i,S=!1)=>{const r=++f;b(),n=i,i.container.classList.add("is-playing");const g=()=>{r!==f||!e.isConnected||(i.video.loop=!S,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?g():i.video.addEventListener("loadedmetadata",g,{once:!0})};s.forEach(i=>{i.video.addEventListener("ended",()=>{i===n&&!u&&e.isConnected&&v()}),i.container.addEventListener("mouseenter",()=>{u=i,y(i)}),i.container.addEventListener("mouseleave",()=>{u===i&&(u=null,c=(s.indexOf(i)+1)%s.length,y(s[c],!0))})}),s.forEach(L),y(s[c],!0)},Zt=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${E(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${e.companyLabel?`<span>@ ${e.companyLabel}</span>`:""}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${l(e.title)} project detail">${n}</a>`},Ue=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),Je=()=>{const e=window.innerWidth<=600?12:window.innerWidth<=920?16:24;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},Qe=()=>window.innerWidth<=600?"28px":window.innerWidth<=920?"32px":"36px",ae=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},Ze=(e,t)=>{const s=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,c=e.left-t.left,u=e.top-t.top;return`translate3d(${c}px, ${u}px, 0) scale(${s}, ${n})`},eo=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},to=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},et=(e,t,{pushHistory:s=!0}={})=>{if(x)return;s&&Y(t.id);const n=eo(),c=e.querySelector(".pf-work-card")||e,u=c.getBoundingClientRect(),f=window.getComputedStyle(c).borderRadius,L=Je(),b=Qe(),v=document.createElement("div"),y=document.createElement("div"),i=document.createElement("div"),S=`pf-modal-${t.id}-title`,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=r?1:h,w=t.cta?`
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
      `:"",C=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",k=t.id==="perp-dex",vt=t.id==="public-transport",yt=k?4:vt?2:3,mo=Array.from({length:yt},(m,M)=>_t(t,M)),fo=Array.from({length:yt},(m,M)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${M+1} pf-modal-bento-skeleton"></div>
      `),te=vt,de=!t.cta&&!k&&!te,xe=t.deviceType==="web"&&!te&&!de,bt=t.id==="cta-enhancement",St=m=>{const M=bt?m[0]:m.slice(0,2).join("");return k?`
          <div class="pf-modal-perp-left">
            ${m[0]}
            <div class="pf-modal-perp-center-bottom">
              ${m[1]}
              ${m[2]}
            </div>
          </div>
          ${m[3]}
        `:te||de?m.join(""):xe?`<div class="pf-modal-bento-side">${m.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${bt?" pf-modal-bento-stack-top--single":""}">
              ${M}
            </div>
            ${m[2]}
          </div>
        `},go=St(mo),ho=St(fo),wo=k?"":`
        <div class="pf-modal-bento-feature">
          ${Ot(t)}
        </div>
      `,vo=`
      <section class="pf-modal-bento-section${xe?" pf-modal-bento-section--web":""}${te?" pf-modal-bento-section--three-up":""}${de?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${wo}
        ${go}
      </section>
    `,yo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${xe?" pf-modal-bento-section--web":""}${te?" pf-modal-bento-section--three-up":""}${de?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${k?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${ho}
      </section>
    `;v.className="pf-modal-layer",y.className="pf-modal-backdrop",y.style.opacity="0",i.className=`pf-work-modal pf-work--${t.id}${C?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-labelledby",S),i.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${yo}</div>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${t.companyLabel?`<span>@ ${t.companyLabel}</span>`:""}
        </div>
        ${w||C}
      </div>
    `,ae(i,L),i.style.borderRadius=b,i.style.transformOrigin="top left",v.append(y,i),document.body.append(v),i.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const je=i.animate([{transform:Ze(u,L),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:b}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Re=y.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),qe=i.querySelector(".pf-modal-close"),H=i.querySelector(".pf-modal-cta"),Ae=i.querySelector(".pf-modal-footer"),Ie=i.querySelector(".pf-modal-card-content");let Lt=!1,q=!1,pe=!1;const bo=()=>{Lt||!Ie||q||(Lt=!0,Ie.classList.remove("is-skeleton"),Ie.innerHTML=vo,Xt(i),Ut(i),Jt(i),Qt(i),window.requestAnimationFrame(()=>{!q&&i.isConnected&&i.classList.add("is-content-ready")}))},ue=()=>{const m=Ae?.offsetHeight??0;i.style.setProperty("--pf-modal-footer-space",`${m}px`)},kt=Ae&&typeof ResizeObserver=="function"?new ResizeObserver(ue):null;kt?.observe(Ae),ue();const Tt=()=>{!q&&i.classList.contains("is-ready")&&(ae(i,Je()),i.style.borderRadius=Qe(),ue())};let Mt=!1;const Et=({restoreFocus:m=!1}={})=>{if(Mt||(Mt=!0,v.getAnimations?.({subtree:!0})?.forEach(V=>V.cancel()),v.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Be),window.removeEventListener("resize",Tt),kt?.disconnect(),x?.modal===i&&(x=null),to(n),!m))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},$t=()=>{if(q)return;q=!0,pe=!1,i.classList.add("is-closing"),i.classList.remove("is-revealing","is-ready","is-content-ready");const m=i.getBoundingClientRect(),M=window.getComputedStyle(i).borderRadius,V=c.getBoundingClientRect();e.classList.remove("is-modal-source"),je.cancel(),Re.cancel(),ae(i,m),i.style.borderRadius=M,i.style.transform="none";const De=r?1:320,Lo=i.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:M},{transform:Ze(V,m),borderRadius:f}],{duration:De,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});y.animate([{opacity:1},{opacity:0}],{duration:r?1:200,easing:"ease-out",fill:"forwards"}),Lo.finished.finally(()=>Et({restoreFocus:!0}))},We=()=>{if(!(q||pe)){if(O()===t.id){pe=!0,window.history.back();return}$t()}},So=m=>{!H||t.cta?.newTab!==!1||!Ue(m,H)||(m.preventDefault(),!(q||pe)&&(q=!0,i.classList.add("is-navigating"),document.removeEventListener("keydown",Be),O()===t.id?window.location.replace(H.href):window.location.href=H.href))},Be=m=>{if(m.key==="Escape"){m.preventDefault(),We();return}if(m.key!=="Tab")return;const M=[qe,H].filter(Boolean),V=M.indexOf(document.activeElement),De=m.shiftKey?(V-1+M.length)%M.length:(V+1)%M.length;m.preventDefault(),M[De].focus()};x={layer:v,modal:i,projectId:t.id,closeModal:$t,disposeModal:Et},document.addEventListener("keydown",Be),window.addEventListener("resize",Tt),qe.addEventListener("click",We),H?.addEventListener("click",So),v.addEventListener("click",m=>{(m.target===v||m.target===y)&&We()}),Re.finished.then(()=>{y.style.opacity="1",Re.cancel()}).catch(()=>{}),je.finished.then(()=>{q||(ae(i,L),i.style.borderRadius=b,i.style.transform="none",je.cancel(),ue(),i.classList.add("is-ready"),bo(),qe.focus({preventScroll:!0}))}).catch(()=>{})},K=window.matchMedia("(max-width: 600px)"),_=document.querySelector("[data-pf-type-filter]");_&&(_.innerHTML=`
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
    `),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${a.map(e=>Zt(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const tt=_?[..._.querySelectorAll("[data-project-type-filter]")]:[],oo=_?.querySelector(".pf-type-filter"),io=[...o.querySelectorAll(".pf-work[data-project-types]")],ot=o.querySelector(".pf-filter-empty");let B="";const so=e=>{B=B===e?"":e;let t=0;tt.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===B))}),oo?.classList.toggle("is-filtering",!!B),io.forEach(s=>{const n=s.dataset.projectTypes.split(" "),c=!B||n.includes(B);s.hidden=!c,c&&(t+=1)}),ot&&(ot.hidden=t>0)};tt.forEach(e=>{e.addEventListener("click",()=>{so(e.dataset.projectTypeFilter),window.scrollTo({top:Math.max(0,o.getBoundingClientRect().top+window.scrollY-30),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})});const d=o.querySelector("[data-pf-work-rail]"),ge=d?[...d.querySelectorAll(".pf-work-set")]:[],it=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),ne=p?[...p.querySelectorAll(".pf-work-set")]:[],st=ne[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const ro=80,ao=-80,he=32,no=12,rt=180,at=600;let we,ve=0,ye=0,$=0,be=he,Se=!1,X=!1,nt=0,Le=0,U=!1,le=!1,J=!1,ke=0,A=0,D=0,R=0,F=0,P=0,Te=0,Q=!1,lt=0,Me=0,Z=!1,ce=!1,ee=!1,Ee=0;const ct=({preservePosition:e=!1}={})=>{if(!d||!it||ge.length<3)return;const t=A,s=D,n=t?(d.scrollLeft-s)/t:0,c=d.getBoundingClientRect(),u=it.getBoundingClientRect(),f=d.scrollLeft+u.left-c.left;A=ge[2].getBoundingClientRect().left-ge[1].getBoundingClientRect().left,D=f-(d.clientWidth-u.width)/2-(K.matches?ro:0),d.scrollLeft=e?D+n*A:D,$=d.scrollLeft},$e=()=>{if(!d||!A)return 0;const e=D-A*.5,t=D+A*.5;let s=d.scrollLeft;for(;s<e;)s+=A;for(;s>=t;)s-=A;const n=s-d.scrollLeft;return Math.abs(n)>.5&&(d.scrollLeft=s),n},dt=({preservePosition:e=!1}={})=>{if(!p||!st||ne.length<3||!p.clientWidth)return;const t=R,s=F,n=t?(p.scrollLeft-s)/t:0,c=p.getBoundingClientRect(),u=st.getBoundingClientRect(),f=p.scrollLeft+u.left-c.left;R=ne[2].getBoundingClientRect().left-ne[1].getBoundingClientRect().left,F=f-(p.clientWidth-u.width)/2-ao,p.scrollLeft=e?F+n*R:F,P=p.scrollLeft},Pe=()=>{if(!p||!R)return 0;const e=F-R*.5,t=F+R*.5;let s=p.scrollLeft;for(;s<e;)s+=R;for(;s>=t;)s-=R;const n=s-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=s),n},Ce=()=>{$=d?.scrollLeft??$,ye=performance.now()+200},pt=()=>{P=p?.scrollLeft??P,Te=performance.now()+200},lo=()=>{window.clearTimeout(ke),J=!0,$=d?.scrollLeft??$},ut=()=>{window.clearTimeout(ke),ke=window.setTimeout(()=>{d&&($=d.scrollLeft,$+=$e(),J=!1,ye=performance.now()+at)},rt)},co=()=>{window.clearTimeout(Ee),ee=!0,P=p?.scrollLeft??P},mt=()=>{window.clearTimeout(Ee),Ee=window.setTimeout(()=>{p&&(P=p.scrollLeft,P+=Pe(),ee=!1,Te=performance.now()+at)},rt)},ft=e=>{const t=Math.min((e-(we??e))/1e3,.1),s=Se?no:he;if(we=e,be+=(s-be)*Math.min(t*6,1),d){const n=o.getBoundingClientRect(),c=n.bottom>0&&n.top<window.innerHeight;c&&!X&&!J&&!ee&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=ye&&($+=t*be,d.scrollLeft=$,$+=$e()),c&&p?.clientWidth&&R&&!Q&&!ee&&!J&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Te&&(P-=t*he,p.scrollLeft=P,P+=Pe())}ve=requestAnimationFrame(ft)};!d||ve||(we=void 0,ve=requestAnimationFrame(ft)),requestAnimationFrame(()=>{ct(),dt()}),d?.addEventListener("mouseenter",()=>{Se=!0}),d?.addEventListener("mouseleave",()=>{Se=!1}),o.addEventListener("wheel",e=>{!d||e.ctrlKey||(Ce(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&K.matches){lo();return}X=!0,U=!1,nt=e.clientX,Le=d.scrollLeft,Ce()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!X)return;const t=e.clientX-nt;!U&&Math.abs(t)<=5||(U||(U=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Le-t,Le+=$e(),$=d.scrollLeft,Ce())});const po=e=>{!d||!X||(X=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),$=d.scrollLeft,U&&(le=!0,window.setTimeout(()=>{le=!1},0)))};d?.addEventListener("scroll",()=>{J&&($=d.scrollLeft,ut())},{passive:!0});const gt=e=>{if(e.pointerType==="touch"&&K.matches){ut();return}po(e)};d?.addEventListener("pointerup",gt),d?.addEventListener("pointercancel",gt),d?.addEventListener("click",e=>{le&&(le=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&K.matches){co();return}Q=!0,Z=!1,lt=e.clientX,Me=p.scrollLeft,pt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!Q)return;const t=e.clientX-lt;!Z&&Math.abs(t)<=5||(Z||(Z=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Me-t,Me+=Pe(),P=p.scrollLeft,pt())});const uo=e=>{!p||!Q||(Q=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),P=p.scrollLeft,Z&&(ce=!0,window.setTimeout(()=>{ce=!1},0)))};p?.addEventListener("scroll",()=>{ee&&(P=p.scrollLeft,mt())},{passive:!0});const ht=e=>{if(e.pointerType==="touch"&&K.matches){mt();return}uo(e)};p?.addEventListener("pointerup",ht),p?.addEventListener("pointercancel",ht),p?.addEventListener("click",e=>{ce&&(ce=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!Ue(t,e))return;const s=a.find(n=>e.classList.contains(`pf-work--${n.id}`));s&&(re(s),t.preventDefault(),et(e,s))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{ct({preservePosition:!0}),dt({preservePosition:!0})})});const wt=()=>{const e=O();if(x){x.projectId!==e&&x.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&et(s,t,{pushHistory:!1})};return window.addEventListener("popstate",wt),{resetModal:()=>x?.disposeModal(),syncModalWithHistory:wt}},He=document.querySelector("[data-pf]"),Pt=document.querySelector("[data-about]"),z=document.querySelector(".about-photo-stack"),Ct=document.querySelector("[data-project-list]"),Eo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const $o=document.querySelector(".counter-line"),xt=document.querySelector(".fixed-project-meta"),Po=document.querySelector("[data-side-number]"),Co=document.querySelector("[data-side-wip]"),xo=document.querySelector("[data-side-title]"),jo=document.querySelector("[data-counter-wip]"),Ve=document.querySelector("[data-year-rail]"),I=document.querySelector(".index-gnb"),Ro=[...document.querySelectorAll("[data-gnb-scroll]")],Wt=document.querySelector(".theme-toggle"),j=document.documentElement,Bt="portfolio-last-project-slug",jt=760,qo=12,Ao=8,Dt=window.matchMedia("(max-width: 600px)"),Ye=window.matchMedia("(prefers-reduced-motion: reduce)"),Io=3e3,Wo=200;let ze=!1,oe=0,Fe=0,Rt=0,Ft=0,W=Math.max(0,window.scrollY),ie=0,se=W,Ke=!1,Ge=0,Ne=0;const Bo=()=>{const o=z?.lastElementChild;!o||z.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Ft=window.setTimeout(()=>{z.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},Wo))},Ht=()=>{window.clearInterval(Rt),window.clearTimeout(Ft),z?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!z||z.children.length<2||Ye.matches)&&(Rt=window.setInterval(Bo,Io))},Do=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},Fo=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},Ho=o=>{window.gtag?.("event","project_click",{project_name:o})},Vo=o=>`'${String(o).slice(-2)}`,zo=o=>{const{start:a,end:l}=It.yearRange,h=Math.min(5,l-a+1),T=Math.min(Math.max(o-2,a),l-h+1);return Array.from({length:h},(G,N)=>T+N)},Go=o=>o.split("|").join(" "),No=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),Oo=()=>window.matchMedia("(max-width: 600px)").matches?Ao:qo,Yo=()=>{const o=Oo();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},Ko=o=>{const a=o.getBoundingClientRect(),l=Yo(),h=window.getComputedStyle(o),T=window.getComputedStyle(o.closest(".project-section")),G=window.getComputedStyle(o.querySelector(".project-media")),N=o.querySelector(".project-summary"),x=Number.parseFloat(h.rowGap||h.gap)||0,re=N?.getBoundingClientRect().height||0,O=Math.max(0,l.height-re-x),Y=document.createElement("div"),E=o.cloneNode(!0);return E.classList.add("project-transition-card"),E.removeAttribute("href"),E.removeAttribute("aria-label"),E.setAttribute("aria-hidden","true"),Object.assign(E.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),E.style.setProperty("--project-color",T.getPropertyValue("--project-color")),E.style.setProperty("--project-sub-color",T.getPropertyValue("--project-sub-color")),E.style.setProperty("--project-media-shadow",G.boxShadow),Y.className="project-transition-layer",Y.append(E),document.body.append(Y),{cardClone:E,targetRect:l,targetGridTemplateRows:`${O}px ${re}px`}},_o=o=>{if(ze)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}ze=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:l,targetRect:h,targetGridTemplateRows:T}=Ko(o);l.animate([{top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height,gridTemplateRows:l.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:T,opacity:0,offset:1}],{duration:jt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},jt-120)},Xo=()=>{ze=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},Uo=o=>{Ve.innerHTML=zo(o.year).map(a=>{const l=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${l?'aria-current="true"':""}>${Vo(a)}</span>
      `}).join("")},Jo=()=>{xt.classList.add("is-changing"),Ve.classList.add("is-changing"),window.setTimeout(()=>{xt.classList.remove("is-changing"),Ve.classList.remove("is-changing")},180)};let me=[],qt=-1;const _e=({force:o=!1}={})=>{if(!Dt.matches){oe&&(j.style.removeProperty("--mobile-project-viewport"),oe=0,Fe=0);return}const a=window.innerWidth;!o&&oe&&a===Fe||(oe=window.innerHeight,Fe=a,j.style.setProperty("--mobile-project-viewport",`${oe}px`))},Qo=()=>{if(!He)return;const o=He.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;j.classList.toggle("is-pf-active",l)},Zo=()=>{if(!Pt)return;const o=Pt.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;j.classList.toggle("is-about-active",l)},ei=o=>{if(o===qt||o<0)return;const a=ko[o],l=(o+1)/It.totalProjectCount*100;qt=o,Jo(),Eo.textContent=a.number,Po.textContent=a.number,Co.textContent=a.wip?"🚧":"",jo.textContent=a.wip?"🚧":"",xo.innerHTML=a.sideTitle.split("|").join("<br />"),$o.style.setProperty("--progress",`${l}%`),j.style.setProperty("--active-project-color",a.keyColor),j.style.setProperty("--active-project-sub-color",a.subColor||a.keyColor),Fo(Bt,a.slug),Uo(a)},ti=()=>{if(!me.length)return;const o=window.innerHeight/2,a=me.map((l,h)=>{const T=l.getBoundingClientRect(),G=T.top+T.height/2;return{index:h,distance:Math.abs(G-o)}}).sort((l,h)=>l.distance-h.distance)[0]?.index;me.forEach((l,h)=>{const T=h===a;l.classList.toggle("is-active",T),l.classList.toggle("is-inactive",!T)}),ei(a)},oi=()=>{window.clearTimeout(Ge),Ke=!1,j.classList.remove("is-gnb-menu-scrolling"),I?.classList.remove("is-hidden"),W=Math.max(0,window.scrollY),ie=0,se=W},Vt=o=>{window.clearTimeout(Ge),Ge=window.setTimeout(oi,o)},ii=()=>{if(!I)return;const o=Math.max(0,window.scrollY);if(Ke){I.classList.remove("is-hidden"),W=o,ie=0,se=o,Vt(Math.abs(o-Ne)<=1?160:1200);return}const a=o-W,l=Math.sign(a);if(o<=16)I.classList.remove("is-hidden"),ie=0,se=o;else if(l!==0){l!==ie&&(ie=l,se=W);const h=Math.abs(o-se);l>0&&h>=8?I.classList.add("is-hidden"):l<0&&h>=64&&I.classList.remove("is-hidden")}W=o},si=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),l=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-30;Ne=Math.min(a,Math.max(0,l)),Ke=!0,j.classList.add("is-gnb-menu-scrolling"),I?.classList.remove("is-hidden"),Vt(1200),window.scrollTo({top:Ne,behavior:Ye.matches?"auto":"smooth"})};let At=0;const fe=()=>{cancelAnimationFrame(At),At=requestAnimationFrame(()=>{Qo(),Zo(),ti()})},zt=o=>{j.dataset.theme=o,Wt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},ri=localStorage.getItem("portfolio-theme")||"light",Gt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Ye.addEventListener?.("change",Ht);Ht();const Oe=Mo(He,To,Go);me=[...document.querySelectorAll("[data-project]")];_e({force:!0});zt(ri);const ai=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=Gt()==="back_forward",l=o||(a?Do(Bt):""),h=l?document.getElementById(l):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};ai();Gt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Wt.addEventListener("click",()=>{zt(j.dataset.theme==="dark"?"light":"dark")});Ro.forEach(o=>{o.addEventListener("click",a=>{const l=document.querySelector(o.hash);l&&(a.preventDefault(),si(l))})});Ct?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!Ct.contains(a)||!No(o,a)||(Ho(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),_o(a))});window.addEventListener("scroll",ii,{passive:!0});window.addEventListener("scroll",fe,{passive:!0});window.addEventListener("resize",()=>{_e(),fe()});Dt.addEventListener?.("change",()=>{_e({force:!0}),fe()});window.addEventListener("pagehide",()=>Oe?.resetModal());window.addEventListener("pageshow",()=>{Oe?.resetModal(),Oe?.syncModalWithHistory(),Xo()});fe();
