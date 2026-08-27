import{p as Bo,a as Gt}from"./projects-CERzB3nP.js";const Ho=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Do=(o,n,m)=>{if(!o)return;const h=760,L="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let R=null;const _=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Te=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},I=()=>window.history.state?.[L]||"",j=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[L]:e},"")},Qe=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',eo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],Ze=e=>{const t=eo[e-1];return`
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
    `},to=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?Ze(1):Qe(e),oo=[{start:0,end:5},{start:18,end:26}],ro=(e,t)=>{const i=e.id==="public-transport"?Ze(t+2):"",a=e.id==="perp-dex"?[`
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
            ${oo.map(y=>`
                  <video
                    class="pf-modal-store-finder-video pf-modal-segment-video"
                    autoplay
                    muted
                    playsinline
                    preload="auto"
                    poster="./assets/store-guide/solution-tobe1.png"
                    data-segment-start="${y.start}"
                    data-segment-end="${y.end}"
                  >
                    <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
                  </video>
                `).join("")}
          </div>
        `:"",d=e.id==="cta-enhancement"&&t===0?`
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
        `:"",f=e.id==="cta-enhancement"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p class="pf-modal-result-metric-title--nowrap">Total Pickup Orders</p>
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
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric">
                <p>Increase in Page Views</p>
                <strong>+32.9%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>Up to 11%</strong>
              </div>
            </div>
          </div>
        `:"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}">
        ${i||a||l||d||f||b||v}
      </div>
    `},io=e=>{const t=a=>a.matches(`
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
      `),i=a=>{const l=a.videoWidth||a.naturalWidth||a.width,d=a.videoHeight||a.naturalHeight||a.height;if(!l||!d)return null;const f=16,b=document.createElement("canvas"),v=b.getContext("2d",{willReadFrequently:!0});if(!v)return null;b.width=f,b.height=f;try{v.drawImage(a,0,0,f,f);const y=v.getImageData(0,0,f,f).data;let T=0,r=0,k=0,s=0;for(let g=0;g<f;g+=1)for(let w=0;w<f;w+=1){if(w>1&&w<f-2&&g>1&&g<f-2)continue;const x=(g*f+w)*4,E=y[x+3]/255;E<.2||(T+=y[x]*E,r+=y[x+1]*E,k+=y[x+2]*E,s+=E)}return s?`rgb(${Math.round(T/s)} ${Math.round(r/s)} ${Math.round(k/s)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(a=>{if(t(a))return;const l=a.querySelector("img, video, canvas");if(!l)return;const d=()=>{if(!a.isConnected)return;const f=i(l);f&&(a.style.setProperty("--pf-modal-media-background",f),a.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?d():l.addEventListener("load",d,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?d():l.addEventListener("loadeddata",d,{once:!0});return}window.requestAnimationFrame(d)})},so=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const i=Number(t.dataset.segmentStart),a=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=i,t.play().catch(()=>{})},d=()=>{t.currentTime=i,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",d,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=a&&l()}),t.addEventListener("ended",l),t.readyState>=1&&d()})},ao=e=>{const t=window.matchMedia("(max-width: 920px)").matches,a=(t?[1,2,3,4]:[4,1,2,3]).map(s=>e.querySelector(`.pf-modal-bento-placeholder--${s}`)).filter(Boolean).map(s=>({container:s,video:s.querySelector("[data-perp-video]"),gif:s.querySelector("[data-perp-gif]")}));if(!a.length)return;if(t){a.forEach(s=>{if(s.container.classList.add("is-playing"),s.video){const g=()=>{e.isConnected&&(s.video.loop=!0,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?g():s.video.addEventListener("loadedmetadata",g,{once:!0})}if(s.gif){const g=s.gif.querySelector("[data-perp-gif-player]"),w=s.gif.dataset.perpGifSrc;g&&w&&(g.src=w)}});return}let l=null,d=0,f=0,b=0,v=null;const y=s=>{if(s.container.classList.remove("is-playing"),s.video){const g=Number(s.video.dataset.perpThumbnailTime||0);s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=Math.min(g,Number.isFinite(s.video.duration)?s.video.duration:g))}s.gif&&s.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},T=()=>{window.clearTimeout(f),a.forEach(y)},r=()=>{d=(d+1)%a.length,k(a[d],!0)},k=(s,g=!1)=>{const w=++b;if(T(),l=s,s.container.classList.add("is-playing"),s.video){const x=()=>{w!==b||!e.isConnected||(s.video.loop=!g,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?x():s.video.addEventListener("loadedmetadata",x,{once:!0})}if(s.gif){const x=s.gif.querySelector("[data-perp-gif-player]"),E=s.gif.dataset.perpGifSrc;x&&E&&(x.src=`${E}?play=${w}`),g&&(f=window.setTimeout(()=>{w===b&&!v&&e.isConnected&&r()},Number(s.gif.dataset.perpGifDuration||6600)))}};a.forEach(s=>{if(s.video&&s.video.addEventListener("ended",()=>{s===l&&!v&&e.isConnected&&r()}),s.gif){const g=s.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{g.width=w.naturalWidth,g.height=w.naturalHeight,g.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=s.gif.dataset.perpGifSrc}s.container.addEventListener("mouseenter",()=>{v=s,k(s)}),s.container.addEventListener("mouseleave",()=>{v===s&&(v=null,d=(a.indexOf(s)+1)%a.length,k(a[d],!0))})}),a.forEach(y),k(a[d],!0)},no=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,k)=>r.order-k.order);if(!i.length)return;if(t){i.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const k=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?k():r.video.addEventListener("loadedmetadata",k,{once:!0})});return}let a=null,l=0,d=null,f=0;const b=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},v=()=>i.forEach(b),y=()=>{l=(l+1)%i.length,T(i[l],!0)},T=(r,k=!1)=>{const s=++f;v(),a=r,r.container.classList.add("is-playing");const g=()=>{s!==f||!e.isConnected||(r.video.loop=!k,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})};i.forEach(r=>{r.video.addEventListener("ended",()=>{r===a&&!d&&e.isConnected&&y()}),r.container.addEventListener("mouseenter",()=>{d=r,T(r)}),r.container.addEventListener("mouseleave",()=>{d===r&&(d=null,l=(i.indexOf(r)+1)%i.length,T(i[l],!0))})}),i.forEach(b),T(i[l],!0)},lo=(e,t=!1)=>{const i=e.types?.length?e.types:[e.type||"others"],a=`
      <div class="pf-work-card">
        ${Qe(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${_(e)}
      </div>
      <span class="pf-work-cursor-label" aria-hidden="true">
        <span>View Details</span>
      </span>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${i.join(" ")}" draggable="false" aria-label="${m(e.title)} project detail">${a}</a>`},et=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,tt=(e,t)=>et(e)&&!t.target&&!t.hasAttribute("download"),ot=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},rt=()=>"24px",le=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},it=(e,t)=>{const i=t.width?e.width/t.width:1,a=t.height?e.height/t.height:1,l=e.left-t.left,d=e.top-t.top;return`translate3d(${l}px, ${d}px, 0) scale(${i}, ${a})`},co=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(i=>!i.paused&&!i.ended);return e.forEach(i=>i.pause()),t},po=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},st=(e,t,{pushHistory:i=!0}={})=>{if(R)return;i&&j(t.id);const a=co(),l=e.querySelector(".pf-work-card")||e,d=l.getBoundingClientRect(),f=window.getComputedStyle(l).borderRadius,b=ot(),v=rt(),y=document.createElement("div"),T=document.createElement("div"),r=document.createElement("div"),k=`pf-modal-${t.id}-title`,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=s?1:h,w=t.cta?`
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
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",E=t.id==="perp-dex",xt=t.id==="public-transport",Ct=E?4:xt?2:3,$o=Array.from({length:Ct},(p,S)=>ro(t,S)),Po=Array.from({length:Ct},(p,S)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${S+1} pf-modal-bento-skeleton"></div>
      `),re=xt,me=!t.cta&&!E&&!re,Ve=t.deviceType==="web"&&!re&&!me,Rt=["cta-enhancement","store-finder"].includes(t.id),jt=p=>{const S=Rt?p[0]:p.slice(0,2).join("");return E?`
          <div class="pf-modal-perp-left">
            ${p[0]}
            <div class="pf-modal-perp-center-bottom">
              ${p[1]}
              ${p[2]}
            </div>
          </div>
          ${p[3]}
        `:re||me?p.join(""):Ve?`<div class="pf-modal-bento-side">${p.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Rt?" pf-modal-bento-stack-top--single":""}">
              ${S}
            </div>
            ${p[2]}
          </div>
        `},xo=jt($o),Co=jt(Po),Ro=E?"":`
        <div class="pf-modal-bento-feature">
          ${to(t)}
        </div>
      `,jo=`
      <section class="pf-modal-bento-section${Ve?" pf-modal-bento-section--web":""}${re?" pf-modal-bento-section--three-up":""}${me?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Ro}
        ${xo}
      </section>
    `,qo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Ve?" pf-modal-bento-section--web":""}${re?" pf-modal-bento-section--three-up":""}${me?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${E?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Co}
      </section>
    `;y.className="pf-modal-layer",T.className="pf-modal-backdrop",T.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",k),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${qo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${k}">${t.title}</h2>
          ${_(t)}
        </div>
        ${w||x}
      </div>
    `,le(r,b),r.style.borderRadius=v,r.style.transformOrigin="top left",y.append(T,r),document.body.append(y),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ge=r.animate([{transform:it(d,b),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),he=T.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),Oe=r.querySelector(".pf-modal-close"),G=r.querySelector(".pf-modal-cta"),ye=r.querySelector(".pf-modal-footer"),C=r.querySelector(".pf-modal-card-content"),ie=r.querySelector(".pf-modal-scroll-indicator");let qt=!1,A=!1,se=0;const Ao=()=>{if(se=0,!C||!ie||A)return;const p=C.scrollHeight-C.clientHeight,S=8,H=ye?.offsetHeight??0,D=Math.max(0,r.clientHeight-H-S*2);if(p<=1||D<=0){ie.classList.remove("is-visible");return}const be=Math.min(D,Math.max(36,D*(C.clientHeight/C.scrollHeight))),Wo=Math.min(1,Math.max(0,C.scrollTop/p))*(D-be);ie.style.height=`${be}px`,ie.style.transform=`translate3d(0, ${Wo}px, 0)`,ie.classList.add("is-visible")},ae=()=>{se||(se=window.requestAnimationFrame(Ao))},ze=typeof ResizeObserver=="function"?new ResizeObserver(ae):null;ze?.observe(C),C?.addEventListener("scroll",ae,{passive:!0});const Fo=()=>{qt||!C||A||(qt=!0,C.classList.remove("is-skeleton"),C.innerHTML=jo,io(r),so(r),ao(r),no(r),C.querySelectorAll(".pf-modal-bento-section").forEach(p=>ze?.observe(p)),window.requestAnimationFrame(()=>{!A&&r.isConnected&&(r.classList.add("is-content-ready"),ae())}))},ve=()=>{const p=ye?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${p}px`),ae()},At=ye&&typeof ResizeObserver=="function"?new ResizeObserver(ve):null;At?.observe(ye),ve();const Ft=()=>{!A&&r.classList.contains("is-ready")&&(le(r,ot()),r.style.borderRadius=rt(),ve())};let It=!1;const Wt=({restoreFocus:p=!1}={})=>{if(It||(It=!0,y.getAnimations?.({subtree:!0})?.forEach(H=>H.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Ne),window.removeEventListener("resize",Ft),At?.disconnect(),ze?.disconnect(),C?.removeEventListener("scroll",ae),se&&window.cancelAnimationFrame(se),R?.modal===r&&(R=null),po(a),!p))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Bt=()=>{if(A)return;A=!0,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const p=r.getBoundingClientRect(),S=window.getComputedStyle(r).borderRadius,H=l.getBoundingClientRect();e.classList.remove("is-modal-source"),ge.cancel(),he.cancel(),le(r,p),r.style.borderRadius=S,r.style.transform="none";const D=s?1:320,be=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:S},{transform:it(H,p),borderRadius:f}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});T.animate([{opacity:1},{opacity:0}],{duration:s?1:200,easing:"ease-out",fill:"forwards"}),be.finished.finally(()=>Wt({restoreFocus:!0}))},we=()=>{if(A)return;const p=I()===t.id;Bt(),p&&(window.history.back(),window.setTimeout(()=>{if(I()!==t.id)return;const S=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete S[L],window.history.replaceState(S,"")},500))},Io=p=>{if(G){if(t.cta?.newTab){et(p)&&we();return}tt(p,G)&&(p.preventDefault(),!A&&(A=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Ne),ge.cancel(),he.cancel(),I()===t.id?window.location.replace(G.href):window.location.href=G.href))}},Ne=p=>{if(p.key==="Escape"){p.preventDefault(),we();return}if(p.key!=="Tab")return;const S=[Oe,G].filter(Boolean),H=S.indexOf(document.activeElement),D=p.shiftKey?(H-1+S.length)%S.length:(H+1)%S.length;p.preventDefault(),S[D].focus()};R={layer:y,modal:r,projectId:t.id,closeModal:Bt,disposeModal:Wt},document.addEventListener("keydown",Ne),window.addEventListener("resize",Ft),Oe.addEventListener("click",we),G?.addEventListener("click",Io),y.addEventListener("click",p=>{(p.target===y||p.target===T)&&we()}),he.finished.then(()=>{T.style.opacity="1",he.cancel()}).catch(()=>{}),ge.finished.then(()=>{A||(le(r,b),r.style.borderRadius=v,r.style.transform="none",ge.cancel(),ve(),r.classList.add("is-ready"),Fo(),Oe.focus({preventScroll:!0}))}).catch(()=>{})},W=window.matchMedia("(max-width: 600px)"),U=document.querySelector("[data-pf-type-filter]"),uo=270,fo=.36;U&&(U.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${O.map(({value:e,label:t},i)=>`
            ${i>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
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
      ${[{value:"",label:"All"},...O].map(({value:e,label:t})=>`
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
      ${n.map(e=>lo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const at=[...U?[...U.querySelectorAll("[data-project-type-filter]")]:[],...M.querySelectorAll("[data-project-type-filter]")],mo=U?.querySelector(".pf-type-filter"),nt=document.documentElement,q=M.querySelector(".pf-floating-filter-scroll"),ke=[...M.querySelectorAll("[data-project-type-filter]")],go=[...o.querySelectorAll(".pf-work[data-project-types]")],ho=o.querySelector(".pf-work-grid"),lt=o.querySelector(".pf-filter-empty");let z="",ct=0,dt=0,pt=0,ce=!1;const yo=()=>{window.clearTimeout(dt),window.clearTimeout(pt)},vo=e=>{if(e!==ce){if(ce=e,yo(),!e){M.classList.remove("is-visible"),pt=window.setTimeout(()=>{ce||nt.classList.remove("is-footer-yielding-to-filter")},220);return}nt.classList.add("is-footer-yielding-to-filter"),dt=window.setTimeout(()=>{ce&&M.classList.add("is-visible")},220)}},de=()=>{if(!q||!W.matches){M.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,q.scrollWidth-q.clientWidth);M.classList.toggle("has-scroll-left",q.scrollLeft>1),M.classList.toggle("has-scroll-right",q.scrollLeft<e-1)},ut=()=>{if(!q||!W.matches)return;const e=ke.find(l=>l.getAttribute("aria-pressed")==="true"),t=ke.indexOf(e);if(!e)return;const i=Math.max(0,q.scrollWidth-q.clientWidth),a=t<2?0:t>=ke.length-2?i:e.offsetLeft-(q.clientWidth-e.offsetWidth)/2;q.scrollTo({left:a,behavior:"smooth"})},Ee=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*fo;vo(window.scrollY>uo&&e>t)},wo=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},ft=e=>{z=e;let t=0;at.forEach(i=>{i.setAttribute("aria-pressed",String(i.dataset.projectTypeFilter===z))}),ut(),mo?.classList.toggle("is-filtering",!!z),go.forEach(i=>{const a=i.dataset.projectTypes.split(" "),l=!z||a.includes(z);i.hidden=!l,l&&(t+=1)}),ho?.classList.toggle("is-single-result",t===1),lt&&(lt.hidden=t>0)};at.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,i=e.dataset.projectTypeFilter,a=!M.contains(e)&&z===i;window.clearTimeout(ct),t.style.overflowAnchor="none",ft(a?"":i),wo(),ct=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Ee,{passive:!0}),window.addEventListener("resize",()=>{Ee(),de()},{passive:!0}),q?.addEventListener("scroll",de,{passive:!0}),W.addEventListener?.("change",()=>{de(),ut()}),Ee(),ft(""),de();const c=o.querySelector("[data-pf-work-rail]"),Me=c?[...c.querySelectorAll(".pf-work-set")]:[],mt=o.querySelector(".pf-work-set--primary .pf-work"),u=o.querySelector("[data-pf-work-rail-secondary]"),pe=u?[...u.querySelectorAll(".pf-work-set")]:[],gt=pe[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const bo=80,So=-80,$e=32,Lo=12,ht=180,yt=600;let Pe,xe=0,Ce=0,$=0,Re=$e,je=!1,J=!1,vt=0,qe=0,Q=!1,ue=!1,Z=!1,Ae=0,B=0,N=0,F=0,Y=0,P=0,Fe=0,ee=!1,wt=0,Ie=0,te=!1,fe=!1,oe=!1,We=0;const bt=({preservePosition:e=!1}={})=>{if(!c||!mt||Me.length<3)return;const t=B,i=N,a=t?(c.scrollLeft-i)/t:0,l=c.getBoundingClientRect(),d=mt.getBoundingClientRect(),f=c.scrollLeft+d.left-l.left;B=Me[2].getBoundingClientRect().left-Me[1].getBoundingClientRect().left,N=f-(c.clientWidth-d.width)/2-(W.matches?bo:0),c.scrollLeft=e?N+a*B:N,$=c.scrollLeft},Be=()=>{if(!c||!B)return 0;const e=N-B*.5,t=N+B*.5;let i=c.scrollLeft;for(;i<e;)i+=B;for(;i>=t;)i-=B;const a=i-c.scrollLeft;return Math.abs(a)>.5&&(c.scrollLeft=i),a},St=({preservePosition:e=!1}={})=>{if(!u||!gt||pe.length<3||!u.clientWidth)return;const t=F,i=Y,a=t?(u.scrollLeft-i)/t:0,l=u.getBoundingClientRect(),d=gt.getBoundingClientRect(),f=u.scrollLeft+d.left-l.left;F=pe[2].getBoundingClientRect().left-pe[1].getBoundingClientRect().left,Y=f-(u.clientWidth-d.width)/2-So,u.scrollLeft=e?Y+a*F:Y,P=u.scrollLeft},He=()=>{if(!u||!F)return 0;const e=Y-F*.5,t=Y+F*.5;let i=u.scrollLeft;for(;i<e;)i+=F;for(;i>=t;)i-=F;const a=i-u.scrollLeft;return Math.abs(a)>.5&&(u.scrollLeft=i),a},De=()=>{$=c?.scrollLeft??$,Ce=performance.now()+200},Lt=()=>{P=u?.scrollLeft??P,Fe=performance.now()+200},To=()=>{window.clearTimeout(Ae),Z=!0,$=c?.scrollLeft??$},Tt=()=>{window.clearTimeout(Ae),Ae=window.setTimeout(()=>{c&&($=c.scrollLeft,$+=Be(),Z=!1,Ce=performance.now()+yt)},ht)},ko=()=>{window.clearTimeout(We),oe=!0,P=u?.scrollLeft??P},kt=()=>{window.clearTimeout(We),We=window.setTimeout(()=>{u&&(P=u.scrollLeft,P+=He(),oe=!1,Fe=performance.now()+yt)},ht)},Et=e=>{const t=Math.min((e-(Pe??e))/1e3,.1),i=je?Lo:$e;if(Pe=e,Re+=(i-Re)*Math.min(t*6,1),c){const a=o.getBoundingClientRect(),l=a.bottom>0&&a.top<window.innerHeight;l&&!J&&!Z&&!oe&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ce&&($+=t*Re,c.scrollLeft=$,$+=Be()),l&&u?.clientWidth&&F&&!ee&&!oe&&!Z&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Fe&&(P-=t*$e,u.scrollLeft=P,P+=He())}xe=requestAnimationFrame(Et)};!c||xe||(Pe=void 0,xe=requestAnimationFrame(Et)),requestAnimationFrame(()=>{bt(),St()}),c?.addEventListener("mouseenter",()=>{je=!0}),c?.addEventListener("mouseleave",()=>{je=!1}),o.addEventListener("wheel",e=>{!c||e.ctrlKey||(De(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&W.matches){To();return}J=!0,Q=!1,vt=e.clientX,qe=c.scrollLeft,De()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!J)return;const t=e.clientX-vt;!Q&&Math.abs(t)<=5||(Q||(Q=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=qe-t,qe+=Be(),$=c.scrollLeft,De())});const Eo=e=>{!c||!J||(J=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),$=c.scrollLeft,Q&&(ue=!0,window.setTimeout(()=>{ue=!1},0)))};c?.addEventListener("scroll",()=>{Z&&($=c.scrollLeft,Tt())},{passive:!0});const Mt=e=>{if(e.pointerType==="touch"&&W.matches){Tt();return}Eo(e)};c?.addEventListener("pointerup",Mt),c?.addEventListener("pointercancel",Mt),c?.addEventListener("click",e=>{ue&&(ue=!1,e.preventDefault(),e.stopPropagation())},!0),u?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&W.matches){ko();return}ee=!0,te=!1,wt=e.clientX,Ie=u.scrollLeft,Lt()}}),u?.addEventListener("dragstart",e=>{e.preventDefault()}),u?.addEventListener("pointermove",e=>{if(!ee)return;const t=e.clientX-wt;!te&&Math.abs(t)<=5||(te||(te=!0,u.classList.add("is-dragging"),u.setPointerCapture(e.pointerId)),u.scrollLeft=Ie-t,Ie+=He(),P=u.scrollLeft,Lt())});const Mo=e=>{!u||!ee||(ee=!1,u.classList.remove("is-dragging"),u.hasPointerCapture(e.pointerId)&&u.releasePointerCapture(e.pointerId),P=u.scrollLeft,te&&(fe=!0,window.setTimeout(()=>{fe=!1},0)))};u?.addEventListener("scroll",()=>{oe&&(P=u.scrollLeft,kt())},{passive:!0});const $t=e=>{if(e.pointerType==="touch"&&W.matches){kt();return}Mo(e)};u?.addEventListener("pointerup",$t),u?.addEventListener("pointercancel",$t),u?.addEventListener("click",e=>{fe&&(fe=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{const t=e.querySelector(".pf-work-cursor-label");let i=0,a=0,l=0;e.addEventListener("pointermove",d=>{if(d.pointerType!=="mouse"||!t)return;const f=e.getBoundingClientRect(),b=14,v=12,y=t.offsetWidth/2;a=Math.min(Math.max(y+v,d.clientX-f.left),f.width-y-v),l=Math.min(Math.max(v,d.clientY-f.top+b),f.height-t.offsetHeight-v),!i&&(i=requestAnimationFrame(()=>{i=0,e.style.setProperty("--pf-cursor-x",`${a}px`),e.style.setProperty("--pf-cursor-y",`${l}px`)}))}),e.addEventListener("pointerleave",()=>{i&&cancelAnimationFrame(i),i=0}),e.addEventListener("click",d=>{if(!tt(d,e))return;const f=n.find(b=>e.classList.contains(`pf-work--${b.id}`));f&&(Te(f),d.preventDefault(),st(e,f))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{bt({preservePosition:!0}),St({preservePosition:!0})})});const Pt=()=>{const e=I();if(R){R.projectId!==e&&R.closeModal();return}if(!e)return;const t=n.find(a=>a.id===e),i=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&i&&st(i,t,{pushHistory:!1})};return window.addEventListener("popstate",Pt),{resetModal:()=>R?.disposeModal(),syncModalWithHistory:Pt}},Ge=document.querySelector("[data-pf]"),Ht=document.querySelector("[data-about]"),K=document.querySelector(".about-photo-stack"),Dt=document.querySelector("[data-project-list]"),Vo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Oo=document.querySelector(".counter-line"),Vt=document.querySelector(".fixed-project-meta"),zo=document.querySelector("[data-side-number]"),No=document.querySelector("[data-side-wip]"),Yo=document.querySelector("[data-side-title]"),Go=document.querySelector("[data-counter-wip]"),Ke=document.querySelector("[data-year-rail]"),Ko=[...document.querySelectorAll("[data-gnb-scroll]")],Kt=document.querySelector(".theme-toggle"),V=document.documentElement,Xt="portfolio-last-project-slug",Ot=760,Xo=12,_o=8,_t=window.matchMedia("(max-width: 600px)"),Ue=window.matchMedia("(prefers-reduced-motion: reduce)"),Uo=3e3,Jo=200,Qo={work:40,experience:-50};let Xe=!1,ne=0,Ye=0,zt=0,Ut=0;const Zo=()=>{const o=K?.lastElementChild;!o||K.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Ut=window.setTimeout(()=>{K.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},Jo))},Jt=()=>{window.clearInterval(zt),window.clearTimeout(Ut),K?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!K||K.children.length<2||Ue.matches)&&(zt=window.setInterval(Zo,Uo))},er=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},tr=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},or=o=>{window.gtag?.("event","project_click",{project_name:o})},rr=o=>`'${String(o).slice(-2)}`,ir=o=>{const{start:n,end:m}=Gt.yearRange,h=Math.min(5,m-n+1),L=Math.min(Math.max(o-2,n),m-h+1);return Array.from({length:h},(X,O)=>L+O)},sr=o=>o.split("|").join(" "),ar=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),nr=()=>window.matchMedia("(max-width: 600px)").matches?_o:Xo,lr=()=>{const o=nr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},cr=o=>{const n=o.getBoundingClientRect(),m=lr(),h=window.getComputedStyle(o),L=window.getComputedStyle(o.closest(".project-section")),X=window.getComputedStyle(o.querySelector(".project-media")),O=o.querySelector(".project-summary"),R=Number.parseFloat(h.rowGap||h.gap)||0,_=O?.getBoundingClientRect().height||0,Te=Math.max(0,m.height-_-R),I=document.createElement("div"),j=o.cloneNode(!0);return j.classList.add("project-transition-card"),j.removeAttribute("href"),j.removeAttribute("aria-label"),j.setAttribute("aria-hidden","true"),Object.assign(j.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),j.style.setProperty("--project-color",L.getPropertyValue("--project-color")),j.style.setProperty("--project-sub-color",L.getPropertyValue("--project-sub-color")),j.style.setProperty("--project-media-shadow",X.boxShadow),I.className="project-transition-layer",I.append(j),document.body.append(I),{cardClone:j,targetRect:m,targetGridTemplateRows:`${Te}px ${_}px`}},dr=o=>{if(Xe)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}Xe=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:m,targetRect:h,targetGridTemplateRows:L}=cr(o);m.animate([{top:m.style.top,left:m.style.left,width:m.style.width,height:m.style.height,gridTemplateRows:m.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:L,opacity:0,offset:1}],{duration:Ot,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Ot-120)},pr=()=>{Xe=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},ur=o=>{Ke.innerHTML=ir(o.year).map(n=>{const m=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${m?'aria-current="true"':""}>${rr(n)}</span>
      `}).join("")},fr=()=>{Vt.classList.add("is-changing"),Ke.classList.add("is-changing"),window.setTimeout(()=>{Vt.classList.remove("is-changing"),Ke.classList.remove("is-changing")},180)};let Se=[],Nt=-1;const Je=({force:o=!1}={})=>{if(!_t.matches){ne&&(V.style.removeProperty("--mobile-project-viewport"),ne=0,Ye=0);return}const n=window.innerWidth;!o&&ne&&n===Ye||(ne=window.innerHeight,Ye=n,V.style.setProperty("--mobile-project-viewport",`${ne}px`))},mr=()=>{if(!Ge)return;const o=Ge.getBoundingClientRect(),n=window.innerHeight/2,m=o.top<=n&&o.bottom>=n;V.classList.toggle("is-pf-active",m)},gr=()=>{if(!Ht)return;const o=Ht.getBoundingClientRect(),n=window.innerHeight/2,m=o.top<=n&&o.bottom>=n;V.classList.toggle("is-about-active",m)},hr=o=>{if(o===Nt||o<0)return;const n=Bo[o],m=(o+1)/Gt.totalProjectCount*100;Nt=o,fr(),Vo.textContent=n.number,zo.textContent=n.number,No.textContent=n.wip?"🚧":"",Go.textContent=n.wip?"🚧":"",Yo.innerHTML=n.sideTitle.split("|").join("<br />"),Oo.style.setProperty("--progress",`${m}%`),V.style.setProperty("--active-project-color",n.keyColor),V.style.setProperty("--active-project-sub-color",n.subColor||n.keyColor),tr(Xt,n.slug),ur(n)},yr=()=>{if(!Se.length)return;const o=window.innerHeight/2,n=Se.map((m,h)=>{const L=m.getBoundingClientRect(),X=L.top+L.height/2;return{index:h,distance:Math.abs(X-o)}}).sort((m,h)=>m.distance-h.distance)[0]?.index;Se.forEach((m,h)=>{const L=h===n;m.classList.toggle("is-active",L),m.classList.toggle("is-inactive",!L)}),hr(n)},vr=o=>{const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),m=Qo[o.id]??0,h=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-m,L=Math.min(n,Math.max(0,h));window.scrollTo({top:L,behavior:Ue.matches?"auto":"smooth"})};let Yt=0;const Le=()=>{cancelAnimationFrame(Yt),Yt=requestAnimationFrame(()=>{mr(),gr(),yr()})},Qt=o=>{V.dataset.theme=o,Kt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},wr=localStorage.getItem("portfolio-theme")||"light",Zt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Ue.addEventListener?.("change",Jt);Jt();const _e=Do(Ge,Ho,sr);Se=[...document.querySelectorAll("[data-project]")];Je({force:!0});Qt(wr);const br=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=Zt()==="back_forward",m=o||(n?er(Xt):""),h=m?document.getElementById(m):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};br();Zt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Kt.addEventListener("click",()=>{Qt(V.dataset.theme==="dark"?"light":"dark")});Ko.forEach(o=>{o.addEventListener("click",n=>{const m=document.querySelector(o.hash);m&&(n.preventDefault(),vr(m))})});Dt?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!Dt.contains(n)||!ar(o,n)||(or(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),dr(n))});window.addEventListener("scroll",Le,{passive:!0});window.addEventListener("resize",()=>{Je(),Le()});_t.addEventListener?.("change",()=>{Je({force:!0}),Le()});window.addEventListener("pagehide",()=>_e?.resetModal());window.addEventListener("pageshow",()=>{_e?.resetModal(),_e?.syncModalWithHistory(),pr()});Le();
