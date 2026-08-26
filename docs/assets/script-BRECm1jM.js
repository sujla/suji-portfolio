import{p as Bo,a as Gt}from"./projects-CERzB3nP.js";const Ho=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Do=(o,n,f)=>{if(!o)return;const h=760,S="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let R=null;const _=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Se=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},V=()=>window.history.state?.[S]||"",j=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[S]:e},"")},Ze=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',eo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],et=e=>{const t=eo[e-1];return`
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
    `},to=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?et(1):Ze(e),oo=[{start:0,end:5},{start:18,end:26}],ro=(e,t)=>{const s=e.id==="public-transport"?et(t+2):"",a=e.id==="perp-dex"?[`
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
        `:"",u=e.id==="cta-enhancement"&&t===2?`
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
        ${s||a||l||d||u||b||v}
      </div>
    `},so=e=>{const t=a=>a.matches(`
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
      `),s=a=>{const l=a.videoWidth||a.naturalWidth||a.width,d=a.videoHeight||a.naturalHeight||a.height;if(!l||!d)return null;const u=16,b=document.createElement("canvas"),v=b.getContext("2d",{willReadFrequently:!0});if(!v)return null;b.width=u,b.height=u;try{v.drawImage(a,0,0,u,u);const y=v.getImageData(0,0,u,u).data;let L=0,r=0,T=0,i=0;for(let g=0;g<u;g+=1)for(let w=0;w<u;w+=1){if(w>1&&w<u-2&&g>1&&g<u-2)continue;const x=(g*u+w)*4,E=y[x+3]/255;E<.2||(L+=y[x]*E,r+=y[x+1]*E,T+=y[x+2]*E,i+=E)}return i?`rgb(${Math.round(L/i)} ${Math.round(r/i)} ${Math.round(T/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(a=>{if(t(a))return;const l=a.querySelector("img, video, canvas");if(!l)return;const d=()=>{if(!a.isConnected)return;const u=s(l);u&&(a.style.setProperty("--pf-modal-media-background",u),a.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?d():l.addEventListener("load",d,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?d():l.addEventListener("loadeddata",d,{once:!0});return}window.requestAnimationFrame(d)})},io=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),a=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=s,t.play().catch(()=>{})},d=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",d,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=a&&l()}),t.addEventListener("ended",l),t.readyState>=1&&d()})},ao=e=>{const t=window.matchMedia("(max-width: 920px)").matches,a=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!a.length)return;if(t){a.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const g=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?g():i.video.addEventListener("loadedmetadata",g,{once:!0})}if(i.gif){const g=i.gif.querySelector("[data-perp-gif-player]"),w=i.gif.dataset.perpGifSrc;g&&w&&(g.src=w)}});return}let l=null,d=0,u=0,b=0,v=null;const y=i=>{if(i.container.classList.remove("is-playing"),i.video){const g=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(g,Number.isFinite(i.video.duration)?i.video.duration:g))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},L=()=>{window.clearTimeout(u),a.forEach(y)},r=()=>{d=(d+1)%a.length,T(a[d],!0)},T=(i,g=!1)=>{const w=++b;if(L(),l=i,i.container.classList.add("is-playing"),i.video){const x=()=>{w!==b||!e.isConnected||(i.video.loop=!g,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?x():i.video.addEventListener("loadedmetadata",x,{once:!0})}if(i.gif){const x=i.gif.querySelector("[data-perp-gif-player]"),E=i.gif.dataset.perpGifSrc;x&&E&&(x.src=`${E}?play=${w}`),g&&(u=window.setTimeout(()=>{w===b&&!v&&e.isConnected&&r()},Number(i.gif.dataset.perpGifDuration||6600)))}};a.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===l&&!v&&e.isConnected&&r()}),i.gif){const g=i.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{g.width=w.naturalWidth,g.height=w.naturalHeight,g.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{v=i,T(i)}),i.container.addEventListener("mouseleave",()=>{v===i&&(v=null,d=(a.indexOf(i)+1)%a.length,T(a[d],!0))})}),a.forEach(y),T(a[d],!0)},no=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,T)=>r.order-T.order);if(!s.length)return;if(t){s.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const T=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?T():r.video.addEventListener("loadedmetadata",T,{once:!0})});return}let a=null,l=0,d=null,u=0;const b=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},v=()=>s.forEach(b),y=()=>{l=(l+1)%s.length,L(s[l],!0)},L=(r,T=!1)=>{const i=++u;v(),a=r,r.container.classList.add("is-playing");const g=()=>{i!==u||!e.isConnected||(r.video.loop=!T,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})};s.forEach(r=>{r.video.addEventListener("ended",()=>{r===a&&!d&&e.isConnected&&y()}),r.container.addEventListener("mouseenter",()=>{d=r,L(r)}),r.container.addEventListener("mouseleave",()=>{d===r&&(d=null,l=(s.indexOf(r)+1)%s.length,L(s[l],!0))})}),s.forEach(b),L(s[l],!0)},lo=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],a=`
      <div class="pf-work-card">
        ${Ze(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${_(e)}
      </div>
      <span class="pf-work-cursor-label" aria-hidden="true">
        <span>View Details</span>
      </span>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${f(e.title)} project detail">${a}</a>`},tt=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),ot=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},rt=()=>"24px",le=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},st=(e,t)=>{const s=t.width?e.width/t.width:1,a=t.height?e.height/t.height:1,l=e.left-t.left,d=e.top-t.top;return`translate3d(${l}px, ${d}px, 0) scale(${s}, ${a})`},co=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},po=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},it=(e,t,{pushHistory:s=!0}={})=>{if(R)return;s&&j(t.id);const a=co(),l=e.querySelector(".pf-work-card")||e,d=l.getBoundingClientRect(),u=window.getComputedStyle(l).borderRadius,b=ot(),v=rt(),y=document.createElement("div"),L=document.createElement("div"),r=document.createElement("div"),T=`pf-modal-${t.id}-title`,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=i?1:h,w=t.cta?`
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
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",E=t.id==="perp-dex",xt=t.id==="public-transport",Ct=E?4:xt?2:3,$o=Array.from({length:Ct},(m,k)=>ro(t,k)),Po=Array.from({length:Ct},(m,k)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${k+1} pf-modal-bento-skeleton"></div>
      `),re=xt,me=!t.cta&&!E&&!re,He=t.deviceType==="web"&&!re&&!me,Rt=["cta-enhancement","store-finder"].includes(t.id),jt=m=>{const k=Rt?m[0]:m.slice(0,2).join("");return E?`
          <div class="pf-modal-perp-left">
            ${m[0]}
            <div class="pf-modal-perp-center-bottom">
              ${m[1]}
              ${m[2]}
            </div>
          </div>
          ${m[3]}
        `:re||me?m.join(""):He?`<div class="pf-modal-bento-side">${m.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Rt?" pf-modal-bento-stack-top--single":""}">
              ${k}
            </div>
            ${m[2]}
          </div>
        `},xo=jt($o),Co=jt(Po),Ro=E?"":`
        <div class="pf-modal-bento-feature">
          ${to(t)}
        </div>
      `,jo=`
      <section class="pf-modal-bento-section${He?" pf-modal-bento-section--web":""}${re?" pf-modal-bento-section--three-up":""}${me?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Ro}
        ${xo}
      </section>
    `,qo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${He?" pf-modal-bento-section--web":""}${re?" pf-modal-bento-section--three-up":""}${me?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${E?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Co}
      </section>
    `;y.className="pf-modal-layer",L.className="pf-modal-backdrop",L.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",T),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${qo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${T}">${t.title}</h2>
          ${_(t)}
        </div>
        ${w||x}
      </div>
    `,le(r,b),r.style.borderRadius=v,r.style.transformOrigin="top left",y.append(L,r),document.body.append(y),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const De=r.animate([{transform:st(d,b),borderRadius:u},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ve=L.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),Oe=r.querySelector(".pf-modal-close"),G=r.querySelector(".pf-modal-cta"),ge=r.querySelector(".pf-modal-footer"),C=r.querySelector(".pf-modal-card-content"),se=r.querySelector(".pf-modal-scroll-indicator");let qt=!1,A=!1,he=!1,ie=0;const Ao=()=>{if(ie=0,!C||!se||A)return;const m=C.scrollHeight-C.clientHeight,k=8,B=ge?.offsetHeight??0,H=Math.max(0,r.clientHeight-B-k*2);if(m<=1||H<=0){se.classList.remove("is-visible");return}const ve=Math.min(H,Math.max(36,H*(C.clientHeight/C.scrollHeight))),Wo=Math.min(1,Math.max(0,C.scrollTop/m))*(H-ve);se.style.height=`${ve}px`,se.style.transform=`translate3d(0, ${Wo}px, 0)`,se.classList.add("is-visible")},ae=()=>{ie||(ie=window.requestAnimationFrame(Ao))},ze=typeof ResizeObserver=="function"?new ResizeObserver(ae):null;ze?.observe(C),C?.addEventListener("scroll",ae,{passive:!0});const Fo=()=>{qt||!C||A||(qt=!0,C.classList.remove("is-skeleton"),C.innerHTML=jo,so(r),io(r),ao(r),no(r),C.querySelectorAll(".pf-modal-bento-section").forEach(m=>ze?.observe(m)),window.requestAnimationFrame(()=>{!A&&r.isConnected&&(r.classList.add("is-content-ready"),ae())}))},ye=()=>{const m=ge?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${m}px`),ae()},At=ge&&typeof ResizeObserver=="function"?new ResizeObserver(ye):null;At?.observe(ge),ye();const Ft=()=>{!A&&r.classList.contains("is-ready")&&(le(r,ot()),r.style.borderRadius=rt(),ye())};let It=!1;const Wt=({restoreFocus:m=!1}={})=>{if(It||(It=!0,y.getAnimations?.({subtree:!0})?.forEach(B=>B.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Ye),window.removeEventListener("resize",Ft),At?.disconnect(),ze?.disconnect(),C?.removeEventListener("scroll",ae),ie&&window.cancelAnimationFrame(ie),R?.modal===r&&(R=null),po(a),!m))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Bt=()=>{if(A)return;A=!0,he=!1,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const m=r.getBoundingClientRect(),k=window.getComputedStyle(r).borderRadius,B=l.getBoundingClientRect();e.classList.remove("is-modal-source"),De.cancel(),Ve.cancel(),le(r,m),r.style.borderRadius=k,r.style.transform="none";const H=i?1:320,ve=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:k},{transform:st(B,m),borderRadius:u}],{duration:H,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});L.animate([{opacity:1},{opacity:0}],{duration:i?1:200,easing:"ease-out",fill:"forwards"}),ve.finished.finally(()=>Wt({restoreFocus:!0}))},Ne=()=>{if(!(A||he)){if(V()===t.id){he=!0,window.history.back();return}Bt()}},Io=m=>{!G||t.cta?.newTab!==!1||!tt(m,G)||(m.preventDefault(),!(A||he)&&(A=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Ye),V()===t.id?window.location.replace(G.href):window.location.href=G.href))},Ye=m=>{if(m.key==="Escape"){m.preventDefault(),Ne();return}if(m.key!=="Tab")return;const k=[Oe,G].filter(Boolean),B=k.indexOf(document.activeElement),H=m.shiftKey?(B-1+k.length)%k.length:(B+1)%k.length;m.preventDefault(),k[H].focus()};R={layer:y,modal:r,projectId:t.id,closeModal:Bt,disposeModal:Wt},document.addEventListener("keydown",Ye),window.addEventListener("resize",Ft),Oe.addEventListener("click",Ne),G?.addEventListener("click",Io),y.addEventListener("click",m=>{(m.target===y||m.target===L)&&Ne()}),Ve.finished.then(()=>{L.style.opacity="1",Ve.cancel()}).catch(()=>{}),De.finished.then(()=>{A||(le(r,b),r.style.borderRadius=v,r.style.transform="none",De.cancel(),ye(),r.classList.add("is-ready"),Fo(),Oe.focus({preventScroll:!0}))}).catch(()=>{})},I=window.matchMedia("(max-width: 600px)"),U=document.querySelector("[data-pf-type-filter]"),uo=270,fo=.36;U&&(U.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${O.map(({value:e,label:t},s)=>`
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
  `;const at=[...U?[...U.querySelectorAll("[data-project-type-filter]")]:[],...M.querySelectorAll("[data-project-type-filter]")],mo=U?.querySelector(".pf-type-filter"),nt=document.documentElement,q=M.querySelector(".pf-floating-filter-scroll"),Le=[...M.querySelectorAll("[data-project-type-filter]")],go=[...o.querySelectorAll(".pf-work[data-project-types]")],ho=o.querySelector(".pf-work-grid"),lt=o.querySelector(".pf-filter-empty");let z="",ct=0,dt=0,pt=0,ce=!1;const yo=()=>{window.clearTimeout(dt),window.clearTimeout(pt)},vo=e=>{if(e!==ce){if(ce=e,yo(),!e){M.classList.remove("is-visible"),pt=window.setTimeout(()=>{ce||nt.classList.remove("is-footer-yielding-to-filter")},220);return}nt.classList.add("is-footer-yielding-to-filter"),dt=window.setTimeout(()=>{ce&&M.classList.add("is-visible")},220)}},de=()=>{if(!q||!I.matches){M.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,q.scrollWidth-q.clientWidth);M.classList.toggle("has-scroll-left",q.scrollLeft>1),M.classList.toggle("has-scroll-right",q.scrollLeft<e-1)},ut=()=>{if(!q||!I.matches)return;const e=Le.find(l=>l.getAttribute("aria-pressed")==="true"),t=Le.indexOf(e);if(!e)return;const s=Math.max(0,q.scrollWidth-q.clientWidth),a=t<2?0:t>=Le.length-2?s:e.offsetLeft-(q.clientWidth-e.offsetWidth)/2;q.scrollTo({left:a,behavior:"smooth"})},Te=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*fo;vo(window.scrollY>uo&&e>t)},wo=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},ft=e=>{z=e;let t=0;at.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===z))}),ut(),mo?.classList.toggle("is-filtering",!!z),go.forEach(s=>{const a=s.dataset.projectTypes.split(" "),l=!z||a.includes(z);s.hidden=!l,l&&(t+=1)}),ho?.classList.toggle("is-single-result",t===1),lt&&(lt.hidden=t>0)};at.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,s=e.dataset.projectTypeFilter,a=!M.contains(e)&&z===s;window.clearTimeout(ct),t.style.overflowAnchor="none",ft(a?"":s),wo(),ct=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Te,{passive:!0}),window.addEventListener("resize",()=>{Te(),de()},{passive:!0}),q?.addEventListener("scroll",de,{passive:!0}),I.addEventListener?.("change",()=>{de(),ut()}),Te(),ft(""),de();const c=o.querySelector("[data-pf-work-rail]"),ke=c?[...c.querySelectorAll(".pf-work-set")]:[],mt=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),pe=p?[...p.querySelectorAll(".pf-work-set")]:[],gt=pe[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const bo=80,So=-80,Ee=32,Lo=12,ht=180,yt=600;let Me,$e=0,Pe=0,$=0,xe=Ee,Ce=!1,J=!1,vt=0,Re=0,Q=!1,ue=!1,Z=!1,je=0,W=0,N=0,F=0,Y=0,P=0,qe=0,ee=!1,wt=0,Ae=0,te=!1,fe=!1,oe=!1,Fe=0;const bt=({preservePosition:e=!1}={})=>{if(!c||!mt||ke.length<3)return;const t=W,s=N,a=t?(c.scrollLeft-s)/t:0,l=c.getBoundingClientRect(),d=mt.getBoundingClientRect(),u=c.scrollLeft+d.left-l.left;W=ke[2].getBoundingClientRect().left-ke[1].getBoundingClientRect().left,N=u-(c.clientWidth-d.width)/2-(I.matches?bo:0),c.scrollLeft=e?N+a*W:N,$=c.scrollLeft},Ie=()=>{if(!c||!W)return 0;const e=N-W*.5,t=N+W*.5;let s=c.scrollLeft;for(;s<e;)s+=W;for(;s>=t;)s-=W;const a=s-c.scrollLeft;return Math.abs(a)>.5&&(c.scrollLeft=s),a},St=({preservePosition:e=!1}={})=>{if(!p||!gt||pe.length<3||!p.clientWidth)return;const t=F,s=Y,a=t?(p.scrollLeft-s)/t:0,l=p.getBoundingClientRect(),d=gt.getBoundingClientRect(),u=p.scrollLeft+d.left-l.left;F=pe[2].getBoundingClientRect().left-pe[1].getBoundingClientRect().left,Y=u-(p.clientWidth-d.width)/2-So,p.scrollLeft=e?Y+a*F:Y,P=p.scrollLeft},We=()=>{if(!p||!F)return 0;const e=Y-F*.5,t=Y+F*.5;let s=p.scrollLeft;for(;s<e;)s+=F;for(;s>=t;)s-=F;const a=s-p.scrollLeft;return Math.abs(a)>.5&&(p.scrollLeft=s),a},Be=()=>{$=c?.scrollLeft??$,Pe=performance.now()+200},Lt=()=>{P=p?.scrollLeft??P,qe=performance.now()+200},To=()=>{window.clearTimeout(je),Z=!0,$=c?.scrollLeft??$},Tt=()=>{window.clearTimeout(je),je=window.setTimeout(()=>{c&&($=c.scrollLeft,$+=Ie(),Z=!1,Pe=performance.now()+yt)},ht)},ko=()=>{window.clearTimeout(Fe),oe=!0,P=p?.scrollLeft??P},kt=()=>{window.clearTimeout(Fe),Fe=window.setTimeout(()=>{p&&(P=p.scrollLeft,P+=We(),oe=!1,qe=performance.now()+yt)},ht)},Et=e=>{const t=Math.min((e-(Me??e))/1e3,.1),s=Ce?Lo:Ee;if(Me=e,xe+=(s-xe)*Math.min(t*6,1),c){const a=o.getBoundingClientRect(),l=a.bottom>0&&a.top<window.innerHeight;l&&!J&&!Z&&!oe&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Pe&&($+=t*xe,c.scrollLeft=$,$+=Ie()),l&&p?.clientWidth&&F&&!ee&&!oe&&!Z&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=qe&&(P-=t*Ee,p.scrollLeft=P,P+=We())}$e=requestAnimationFrame(Et)};!c||$e||(Me=void 0,$e=requestAnimationFrame(Et)),requestAnimationFrame(()=>{bt(),St()}),c?.addEventListener("mouseenter",()=>{Ce=!0}),c?.addEventListener("mouseleave",()=>{Ce=!1}),o.addEventListener("wheel",e=>{!c||e.ctrlKey||(Be(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&I.matches){To();return}J=!0,Q=!1,vt=e.clientX,Re=c.scrollLeft,Be()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!J)return;const t=e.clientX-vt;!Q&&Math.abs(t)<=5||(Q||(Q=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=Re-t,Re+=Ie(),$=c.scrollLeft,Be())});const Eo=e=>{!c||!J||(J=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),$=c.scrollLeft,Q&&(ue=!0,window.setTimeout(()=>{ue=!1},0)))};c?.addEventListener("scroll",()=>{Z&&($=c.scrollLeft,Tt())},{passive:!0});const Mt=e=>{if(e.pointerType==="touch"&&I.matches){Tt();return}Eo(e)};c?.addEventListener("pointerup",Mt),c?.addEventListener("pointercancel",Mt),c?.addEventListener("click",e=>{ue&&(ue=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&I.matches){ko();return}ee=!0,te=!1,wt=e.clientX,Ae=p.scrollLeft,Lt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!ee)return;const t=e.clientX-wt;!te&&Math.abs(t)<=5||(te||(te=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Ae-t,Ae+=We(),P=p.scrollLeft,Lt())});const Mo=e=>{!p||!ee||(ee=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),P=p.scrollLeft,te&&(fe=!0,window.setTimeout(()=>{fe=!1},0)))};p?.addEventListener("scroll",()=>{oe&&(P=p.scrollLeft,kt())},{passive:!0});const $t=e=>{if(e.pointerType==="touch"&&I.matches){kt();return}Mo(e)};p?.addEventListener("pointerup",$t),p?.addEventListener("pointercancel",$t),p?.addEventListener("click",e=>{fe&&(fe=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{const t=e.querySelector(".pf-work-cursor-label");let s=0,a=0,l=0;e.addEventListener("pointermove",d=>{if(d.pointerType!=="mouse"||!t)return;const u=e.getBoundingClientRect(),b=14,v=12,y=t.offsetWidth/2;a=Math.min(Math.max(y+v,d.clientX-u.left),u.width-y-v),l=Math.min(Math.max(v,d.clientY-u.top+b),u.height-t.offsetHeight-v),!s&&(s=requestAnimationFrame(()=>{s=0,e.style.setProperty("--pf-cursor-x",`${a}px`),e.style.setProperty("--pf-cursor-y",`${l}px`)}))}),e.addEventListener("pointerleave",()=>{s&&cancelAnimationFrame(s),s=0}),e.addEventListener("click",d=>{if(!tt(d,e))return;const u=n.find(b=>e.classList.contains(`pf-work--${b.id}`));u&&(Se(u),d.preventDefault(),it(e,u))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{bt({preservePosition:!0}),St({preservePosition:!0})})});const Pt=()=>{const e=V();if(R){R.projectId!==e&&R.closeModal();return}if(!e)return;const t=n.find(a=>a.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&it(s,t,{pushHistory:!1})};return window.addEventListener("popstate",Pt),{resetModal:()=>R?.disposeModal(),syncModalWithHistory:Pt}},Ke=document.querySelector("[data-pf]"),Ht=document.querySelector("[data-about]"),K=document.querySelector(".about-photo-stack"),Dt=document.querySelector("[data-project-list]"),Vo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Oo=document.querySelector(".counter-line"),Vt=document.querySelector(".fixed-project-meta"),zo=document.querySelector("[data-side-number]"),No=document.querySelector("[data-side-wip]"),Yo=document.querySelector("[data-side-title]"),Go=document.querySelector("[data-counter-wip]"),Xe=document.querySelector("[data-year-rail]"),Ko=[...document.querySelectorAll("[data-gnb-scroll]")],Kt=document.querySelector(".theme-toggle"),D=document.documentElement,Xt="portfolio-last-project-slug",Ot=760,Xo=12,_o=8,_t=window.matchMedia("(max-width: 600px)"),Je=window.matchMedia("(prefers-reduced-motion: reduce)"),Uo=3e3,Jo=200,Qo={work:40,experience:-50};let _e=!1,ne=0,Ge=0,zt=0,Ut=0;const Zo=()=>{const o=K?.lastElementChild;!o||K.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Ut=window.setTimeout(()=>{K.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},Jo))},Jt=()=>{window.clearInterval(zt),window.clearTimeout(Ut),K?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!K||K.children.length<2||Je.matches)&&(zt=window.setInterval(Zo,Uo))},er=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},tr=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},or=o=>{window.gtag?.("event","project_click",{project_name:o})},rr=o=>`'${String(o).slice(-2)}`,sr=o=>{const{start:n,end:f}=Gt.yearRange,h=Math.min(5,f-n+1),S=Math.min(Math.max(o-2,n),f-h+1);return Array.from({length:h},(X,O)=>S+O)},ir=o=>o.split("|").join(" "),ar=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),nr=()=>window.matchMedia("(max-width: 600px)").matches?_o:Xo,lr=()=>{const o=nr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},cr=o=>{const n=o.getBoundingClientRect(),f=lr(),h=window.getComputedStyle(o),S=window.getComputedStyle(o.closest(".project-section")),X=window.getComputedStyle(o.querySelector(".project-media")),O=o.querySelector(".project-summary"),R=Number.parseFloat(h.rowGap||h.gap)||0,_=O?.getBoundingClientRect().height||0,Se=Math.max(0,f.height-_-R),V=document.createElement("div"),j=o.cloneNode(!0);return j.classList.add("project-transition-card"),j.removeAttribute("href"),j.removeAttribute("aria-label"),j.setAttribute("aria-hidden","true"),Object.assign(j.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),j.style.setProperty("--project-color",S.getPropertyValue("--project-color")),j.style.setProperty("--project-sub-color",S.getPropertyValue("--project-sub-color")),j.style.setProperty("--project-media-shadow",X.boxShadow),V.className="project-transition-layer",V.append(j),document.body.append(V),{cardClone:j,targetRect:f,targetGridTemplateRows:`${Se}px ${_}px`}},dr=o=>{if(_e)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}_e=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:f,targetRect:h,targetGridTemplateRows:S}=cr(o);f.animate([{top:f.style.top,left:f.style.left,width:f.style.width,height:f.style.height,gridTemplateRows:f.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:S,opacity:0,offset:1}],{duration:Ot,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Ot-120)},pr=()=>{_e=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},ur=o=>{Xe.innerHTML=sr(o.year).map(n=>{const f=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${f?'aria-current="true"':""}>${rr(n)}</span>
      `}).join("")},fr=()=>{Vt.classList.add("is-changing"),Xe.classList.add("is-changing"),window.setTimeout(()=>{Vt.classList.remove("is-changing"),Xe.classList.remove("is-changing")},180)};let we=[],Nt=-1;const Qe=({force:o=!1}={})=>{if(!_t.matches){ne&&(D.style.removeProperty("--mobile-project-viewport"),ne=0,Ge=0);return}const n=window.innerWidth;!o&&ne&&n===Ge||(ne=window.innerHeight,Ge=n,D.style.setProperty("--mobile-project-viewport",`${ne}px`))},mr=()=>{if(!Ke)return;const o=Ke.getBoundingClientRect(),n=window.innerHeight/2,f=o.top<=n&&o.bottom>=n;D.classList.toggle("is-pf-active",f)},gr=()=>{if(!Ht)return;const o=Ht.getBoundingClientRect(),n=window.innerHeight/2,f=o.top<=n&&o.bottom>=n;D.classList.toggle("is-about-active",f)},hr=o=>{if(o===Nt||o<0)return;const n=Bo[o],f=(o+1)/Gt.totalProjectCount*100;Nt=o,fr(),Vo.textContent=n.number,zo.textContent=n.number,No.textContent=n.wip?"🚧":"",Go.textContent=n.wip?"🚧":"",Yo.innerHTML=n.sideTitle.split("|").join("<br />"),Oo.style.setProperty("--progress",`${f}%`),D.style.setProperty("--active-project-color",n.keyColor),D.style.setProperty("--active-project-sub-color",n.subColor||n.keyColor),tr(Xt,n.slug),ur(n)},yr=()=>{if(!we.length)return;const o=window.innerHeight/2,n=we.map((f,h)=>{const S=f.getBoundingClientRect(),X=S.top+S.height/2;return{index:h,distance:Math.abs(X-o)}}).sort((f,h)=>f.distance-h.distance)[0]?.index;we.forEach((f,h)=>{const S=h===n;f.classList.toggle("is-active",S),f.classList.toggle("is-inactive",!S)}),hr(n)},vr=o=>{const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),f=Qo[o.id]??0,h=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-f,S=Math.min(n,Math.max(0,h));window.scrollTo({top:S,behavior:Je.matches?"auto":"smooth"})};let Yt=0;const be=()=>{cancelAnimationFrame(Yt),Yt=requestAnimationFrame(()=>{mr(),gr(),yr()})},Qt=o=>{D.dataset.theme=o,Kt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},wr=localStorage.getItem("portfolio-theme")||"light",Zt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Je.addEventListener?.("change",Jt);Jt();const Ue=Do(Ke,Ho,ir);we=[...document.querySelectorAll("[data-project]")];Qe({force:!0});Qt(wr);const br=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=Zt()==="back_forward",f=o||(n?er(Xt):""),h=f?document.getElementById(f):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};br();Zt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Kt.addEventListener("click",()=>{Qt(D.dataset.theme==="dark"?"light":"dark")});Ko.forEach(o=>{o.addEventListener("click",n=>{const f=document.querySelector(o.hash);f&&(n.preventDefault(),vr(f))})});Dt?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!Dt.contains(n)||!ar(o,n)||(or(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),dr(n))});window.addEventListener("scroll",be,{passive:!0});window.addEventListener("resize",()=>{Qe(),be()});_t.addEventListener?.("change",()=>{Qe({force:!0}),be()});window.addEventListener("pagehide",()=>Ue?.resetModal());window.addEventListener("pageshow",()=>{Ue?.resetModal(),Ue?.syncModalWithHistory(),pr()});be();
