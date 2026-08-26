import{p as Do,a as _t}from"./projects-CERzB3nP.js";const Vo=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Oo=(o,n,c)=>{if(!o)return;const g=760,M="portfolioPfModalProject",Y=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let R=null;const J=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Te=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},V=()=>window.history.state?.[M]||"",j=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[M]:e},"")},it=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',so=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],at=e=>{const t=so[e-1];return`
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
    `},io=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?at(1):it(e),ao=[{start:0,end:5},{start:18,end:26}],no=(e,t)=>{const s=e.id==="public-transport"?at(t+2):"",a=e.id==="perp-dex"?[`
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
            ${ao.map(v=>`
                  <video
                    class="pf-modal-store-finder-video pf-modal-segment-video"
                    autoplay
                    muted
                    playsinline
                    preload="auto"
                    poster="./assets/store-guide/solution-tobe1.png"
                    data-segment-start="${v.start}"
                    data-segment-end="${v.end}"
                  >
                    <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
                  </video>
                `).join("")}
          </div>
        `:"",p=e.id==="cta-enhancement"&&t===0?`
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
        `:e.id==="article-studio"&&t===1?'<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />':"",y=e.media==="store-guide"&&t===2?`
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
        ${s||a||l||p||f||b||y}
      </div>
    `},lo=e=>{const t=a=>a.matches(`
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
      `),s=a=>{const l=a.videoWidth||a.naturalWidth||a.width,p=a.videoHeight||a.naturalHeight||a.height;if(!l||!p)return null;const f=16,b=document.createElement("canvas"),y=b.getContext("2d",{willReadFrequently:!0});if(!y)return null;b.width=f,b.height=f;try{y.drawImage(a,0,0,f,f);const v=y.getImageData(0,0,f,f).data;let S=0,r=0,L=0,i=0;for(let h=0;h<f;h+=1)for(let w=0;w<f;w+=1){if(w>1&&w<f-2&&h>1&&h<f-2)continue;const x=(h*f+w)*4,T=v[x+3]/255;T<.2||(S+=v[x]*T,r+=v[x+1]*T,L+=v[x+2]*T,i+=T)}return i?`rgb(${Math.round(S/i)} ${Math.round(r/i)} ${Math.round(L/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(a=>{if(t(a))return;const l=a.querySelector("img, video, canvas");if(!l)return;const p=()=>{if(!a.isConnected)return;const f=s(l);f&&(a.style.setProperty("--pf-modal-media-background",f),a.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?p():l.addEventListener("load",p,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?p():l.addEventListener("loadeddata",p,{once:!0});return}window.requestAnimationFrame(p)})},co=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),a=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=s,t.play().catch(()=>{})},p=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",p,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=a&&l()}),t.addEventListener("ended",l),t.readyState>=1&&p()})},po=e=>{const t=window.matchMedia("(max-width: 920px)").matches,a=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!a.length)return;if(t){a.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const h=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?h():i.video.addEventListener("loadedmetadata",h,{once:!0})}if(i.gif){const h=i.gif.querySelector("[data-perp-gif-player]"),w=i.gif.dataset.perpGifSrc;h&&w&&(h.src=w)}});return}let l=null,p=0,f=0,b=0,y=null;const v=i=>{if(i.container.classList.remove("is-playing"),i.video){const h=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(h,Number.isFinite(i.video.duration)?i.video.duration:h))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},S=()=>{window.clearTimeout(f),a.forEach(v)},r=()=>{p=(p+1)%a.length,L(a[p],!0)},L=(i,h=!1)=>{const w=++b;if(S(),l=i,i.container.classList.add("is-playing"),i.video){const x=()=>{w!==b||!e.isConnected||(i.video.loop=!h,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?x():i.video.addEventListener("loadedmetadata",x,{once:!0})}if(i.gif){const x=i.gif.querySelector("[data-perp-gif-player]"),T=i.gif.dataset.perpGifSrc;x&&T&&(x.src=`${T}?play=${w}`),h&&(f=window.setTimeout(()=>{w===b&&!y&&e.isConnected&&r()},Number(i.gif.dataset.perpGifDuration||6600)))}};a.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===l&&!y&&e.isConnected&&r()}),i.gif){const h=i.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{h.width=w.naturalWidth,h.height=w.naturalHeight,h.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{y=i,L(i)}),i.container.addEventListener("mouseleave",()=>{y===i&&(y=null,p=(a.indexOf(i)+1)%a.length,L(a[p],!0))})}),a.forEach(v),L(a[p],!0)},uo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,L)=>r.order-L.order);if(!s.length)return;if(t){s.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const L=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?L():r.video.addEventListener("loadedmetadata",L,{once:!0})});return}let a=null,l=0,p=null,f=0;const b=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},y=()=>s.forEach(b),v=()=>{l=(l+1)%s.length,S(s[l],!0)},S=(r,L=!1)=>{const i=++f;y(),a=r,r.container.classList.add("is-playing");const h=()=>{i!==f||!e.isConnected||(r.video.loop=!L,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?h():r.video.addEventListener("loadedmetadata",h,{once:!0})};s.forEach(r=>{r.video.addEventListener("ended",()=>{r===a&&!p&&e.isConnected&&v()}),r.container.addEventListener("mouseenter",()=>{p=r,S(r)}),r.container.addEventListener("mouseleave",()=>{p===r&&(p=null,l=(s.indexOf(r)+1)%s.length,S(s[l],!0))})}),s.forEach(b),S(s[l],!0)},fo=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],a=`
      <div class="pf-work-card">
        ${it(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${J(e)}
      </div>
      <span class="pf-work-cursor-label" aria-hidden="true">
        <span>View Details</span>
      </span>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${c(e.title)} project detail">${a}</a>`},nt=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),lt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},ct=()=>"24px",ue=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},dt=(e,t)=>{const s=t.width?e.width/t.width:1,a=t.height?e.height/t.height:1,l=e.left-t.left,p=e.top-t.top;return`translate3d(${l}px, ${p}px, 0) scale(${s}, ${a})`},mo=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},go=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},pt=(e,t,{pushHistory:s=!0}={})=>{if(R)return;s&&j(t.id);const a=mo(),l=e.querySelector(".pf-work-card")||e,p=l.getBoundingClientRect(),f=window.getComputedStyle(l).borderRadius,b=lt(),y=ct(),v=document.createElement("div"),S=document.createElement("div"),r=document.createElement("div"),L=`pf-modal-${t.id}-title`,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=i?1:g,w=t.cta?`
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
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",T=t.id==="perp-dex",jt=t.id==="public-transport",qt=T?4:jt?2:3,xo=Array.from({length:qt},(m,k)=>no(t,k)),Co=Array.from({length:qt},(m,k)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${k+1} pf-modal-bento-skeleton"></div>
      `),ie=jt,ve=!t.cta&&!T&&!ie,Oe=t.deviceType==="web"&&!ie&&!ve,At=["cta-enhancement","store-finder"].includes(t.id),Ft=m=>{const k=At?m[0]:m.slice(0,2).join("");return T?`
          <div class="pf-modal-perp-left">
            ${m[0]}
            <div class="pf-modal-perp-center-bottom">
              ${m[1]}
              ${m[2]}
            </div>
          </div>
          ${m[3]}
        `:ie||ve?m.join(""):Oe?`<div class="pf-modal-bento-side">${m.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${At?" pf-modal-bento-stack-top--single":""}">
              ${k}
            </div>
            ${m[2]}
          </div>
        `},Ro=Ft(xo),jo=Ft(Co),qo=T?"":`
        <div class="pf-modal-bento-feature">
          ${io(t)}
        </div>
      `,Ao=`
      <section class="pf-modal-bento-section${Oe?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${ve?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${qo}
        ${Ro}
      </section>
    `,Fo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Oe?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${ve?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${T?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${jo}
      </section>
    `;v.className="pf-modal-layer",S.className="pf-modal-backdrop",S.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",L),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Fo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${L}">${t.title}</h2>
          ${J(t)}
        </div>
        ${w||x}
      </div>
    `,ue(r,b),r.style.borderRadius=y,r.style.transformOrigin="top left",v.append(S,r),document.body.append(v),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ze=r.animate([{transform:dt(p,b),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:y}],{duration:h,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ye=S.animate([{opacity:0},{opacity:1}],{duration:Math.min(h,420),easing:"ease-out",fill:"forwards"}),Ne=r.querySelector(".pf-modal-close"),X=r.querySelector(".pf-modal-cta"),ye=r.querySelector(".pf-modal-footer"),C=r.querySelector(".pf-modal-card-content"),ae=r.querySelector(".pf-modal-scroll-indicator");let It=!1,A=!1,we=!1,ne=0;const Io=()=>{if(ne=0,!C||!ae||A)return;const m=C.scrollHeight-C.clientHeight,k=8,H=ye?.offsetHeight??0,D=Math.max(0,r.clientHeight-H-k*2);if(m<=1||D<=0){ae.classList.remove("is-visible");return}const Se=Math.min(D,Math.max(36,D*(C.clientHeight/C.scrollHeight))),Ho=Math.min(1,Math.max(0,C.scrollTop/m))*(D-Se);ae.style.height=`${Se}px`,ae.style.transform=`translate3d(0, ${Ho}px, 0)`,ae.classList.add("is-visible")},le=()=>{ne||(ne=window.requestAnimationFrame(Io))},Ge=typeof ResizeObserver=="function"?new ResizeObserver(le):null;Ge?.observe(C),C?.addEventListener("scroll",le,{passive:!0});const Wo=()=>{It||!C||A||(It=!0,C.classList.remove("is-skeleton"),C.innerHTML=Ao,lo(r),co(r),po(r),uo(r),C.querySelectorAll(".pf-modal-bento-section").forEach(m=>Ge?.observe(m)),window.requestAnimationFrame(()=>{!A&&r.isConnected&&(r.classList.add("is-content-ready"),le())}))},be=()=>{const m=ye?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${m}px`),le()},Wt=ye&&typeof ResizeObserver=="function"?new ResizeObserver(be):null;Wt?.observe(ye),be();const Bt=()=>{!A&&r.classList.contains("is-ready")&&(ue(r,lt()),r.style.borderRadius=ct(),be())};let Ht=!1;const Dt=({restoreFocus:m=!1}={})=>{if(Ht||(Ht=!0,v.getAnimations?.({subtree:!0})?.forEach(H=>H.cancel()),v.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Xe),window.removeEventListener("resize",Bt),Wt?.disconnect(),Ge?.disconnect(),C?.removeEventListener("scroll",le),ne&&window.cancelAnimationFrame(ne),R?.modal===r&&(R=null),go(a),!m))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Vt=()=>{if(A)return;A=!0,we=!1,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const m=r.getBoundingClientRect(),k=window.getComputedStyle(r).borderRadius,H=l.getBoundingClientRect();e.classList.remove("is-modal-source"),ze.cancel(),Ye.cancel(),ue(r,m),r.style.borderRadius=k,r.style.transform="none";const D=i?1:320,Se=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:k},{transform:dt(H,m),borderRadius:f}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});S.animate([{opacity:1},{opacity:0}],{duration:i?1:200,easing:"ease-out",fill:"forwards"}),Se.finished.finally(()=>Dt({restoreFocus:!0}))},Ke=()=>{if(!(A||we)){if(V()===t.id){we=!0,window.history.back();return}Vt()}},Bo=m=>{!X||t.cta?.newTab!==!1||!nt(m,X)||(m.preventDefault(),!(A||we)&&(A=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Xe),V()===t.id?window.location.replace(X.href):window.location.href=X.href))},Xe=m=>{if(m.key==="Escape"){m.preventDefault(),Ke();return}if(m.key!=="Tab")return;const k=[Ne,X].filter(Boolean),H=k.indexOf(document.activeElement),D=m.shiftKey?(H-1+k.length)%k.length:(H+1)%k.length;m.preventDefault(),k[D].focus()};R={layer:v,modal:r,projectId:t.id,closeModal:Vt,disposeModal:Dt},document.addEventListener("keydown",Xe),window.addEventListener("resize",Bt),Ne.addEventListener("click",Ke),X?.addEventListener("click",Bo),v.addEventListener("click",m=>{(m.target===v||m.target===S)&&Ke()}),Ye.finished.then(()=>{S.style.opacity="1",Ye.cancel()}).catch(()=>{}),ze.finished.then(()=>{A||(ue(r,b),r.style.borderRadius=y,r.style.transform="none",ze.cancel(),be(),r.classList.add("is-ready"),Wo(),Ne.focus({preventScroll:!0}))}).catch(()=>{})},W=window.matchMedia("(max-width: 600px)"),Q=document.querySelector("[data-pf-type-filter]"),ho=270,vo=.36;Q&&(Q.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${Y.map(({value:e,label:t},s)=>`
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
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const E=document.createElement("div");E.className="pf-floating-filter",E.dataset.pfFloatingFilter="",E.setAttribute("role","group"),E.setAttribute("aria-label","Filter projects by type"),E.innerHTML=`
    <div class="pf-floating-filter-scroll">
      ${[{value:"",label:"All"},...Y].map(({value:e,label:t})=>`
            <button
              class="pf-floating-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}</button>
          `).join("")}
    </div>
  `,document.body.append(E),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${n.map(e=>fo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const ut=[...Q?[...Q.querySelectorAll("[data-project-type-filter]")]:[],...E.querySelectorAll("[data-project-type-filter]")],yo=Q?.querySelector(".pf-type-filter"),q=E.querySelector(".pf-floating-filter-scroll"),Me=[...E.querySelectorAll("[data-project-type-filter]")],wo=[...o.querySelectorAll(".pf-work[data-project-types]")],bo=o.querySelector(".pf-work-grid"),ft=o.querySelector(".pf-filter-empty");let N="",mt=0;const fe=()=>{if(!q||!W.matches){E.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,q.scrollWidth-q.clientWidth);E.classList.toggle("has-scroll-left",q.scrollLeft>1),E.classList.toggle("has-scroll-right",q.scrollLeft<e-1)},gt=()=>{if(!q||!W.matches)return;const e=Me.find(l=>l.getAttribute("aria-pressed")==="true"),t=Me.indexOf(e);if(!e)return;const s=Math.max(0,q.scrollWidth-q.clientWidth),a=t<2?0:t>=Me.length-2?s:e.offsetLeft-(q.clientWidth-e.offsetWidth)/2;q.scrollTo({left:a,behavior:"smooth"})},Ee=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*vo;E.classList.toggle("is-visible",window.scrollY>ho&&e>t)},So=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},ht=e=>{N=N===e?"":e;let t=0;ut.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===N))}),gt(),yo?.classList.toggle("is-filtering",!!N),wo.forEach(s=>{const a=s.dataset.projectTypes.split(" "),l=!N||a.includes(N);s.hidden=!l,l&&(t+=1)}),bo?.classList.toggle("is-single-result",t===1),ft&&(ft.hidden=t>0)};ut.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement;window.clearTimeout(mt),t.style.overflowAnchor="none",ht(e.dataset.projectTypeFilter),So(),mt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Ee,{passive:!0}),window.addEventListener("resize",()=>{Ee(),fe()},{passive:!0}),q?.addEventListener("scroll",fe,{passive:!0}),W.addEventListener?.("change",()=>{fe(),gt()}),Ee(),ht(""),fe();const d=o.querySelector("[data-pf-work-rail]"),$e=d?[...d.querySelectorAll(".pf-work-set")]:[],vt=o.querySelector(".pf-work-set--primary .pf-work"),u=o.querySelector("[data-pf-work-rail-secondary]"),me=u?[...u.querySelectorAll(".pf-work-set")]:[],yt=me[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Lo=80,ko=-80,Pe=32,To=12,wt=180,bt=600;let xe,Ce=0,Re=0,$=0,je=Pe,qe=!1,Z=!1,St=0,Ae=0,ee=!1,ge=!1,te=!1,Fe=0,B=0,G=0,I=0,K=0,P=0,Ie=0,oe=!1,Lt=0,We=0,re=!1,he=!1,se=!1,Be=0;const kt=({preservePosition:e=!1}={})=>{if(!d||!vt||$e.length<3)return;const t=B,s=G,a=t?(d.scrollLeft-s)/t:0,l=d.getBoundingClientRect(),p=vt.getBoundingClientRect(),f=d.scrollLeft+p.left-l.left;B=$e[2].getBoundingClientRect().left-$e[1].getBoundingClientRect().left,G=f-(d.clientWidth-p.width)/2-(W.matches?Lo:0),d.scrollLeft=e?G+a*B:G,$=d.scrollLeft},He=()=>{if(!d||!B)return 0;const e=G-B*.5,t=G+B*.5;let s=d.scrollLeft;for(;s<e;)s+=B;for(;s>=t;)s-=B;const a=s-d.scrollLeft;return Math.abs(a)>.5&&(d.scrollLeft=s),a},Tt=({preservePosition:e=!1}={})=>{if(!u||!yt||me.length<3||!u.clientWidth)return;const t=I,s=K,a=t?(u.scrollLeft-s)/t:0,l=u.getBoundingClientRect(),p=yt.getBoundingClientRect(),f=u.scrollLeft+p.left-l.left;I=me[2].getBoundingClientRect().left-me[1].getBoundingClientRect().left,K=f-(u.clientWidth-p.width)/2-ko,u.scrollLeft=e?K+a*I:K,P=u.scrollLeft},De=()=>{if(!u||!I)return 0;const e=K-I*.5,t=K+I*.5;let s=u.scrollLeft;for(;s<e;)s+=I;for(;s>=t;)s-=I;const a=s-u.scrollLeft;return Math.abs(a)>.5&&(u.scrollLeft=s),a},Ve=()=>{$=d?.scrollLeft??$,Re=performance.now()+200},Mt=()=>{P=u?.scrollLeft??P,Ie=performance.now()+200},Mo=()=>{window.clearTimeout(Fe),te=!0,$=d?.scrollLeft??$},Et=()=>{window.clearTimeout(Fe),Fe=window.setTimeout(()=>{d&&($=d.scrollLeft,$+=He(),te=!1,Re=performance.now()+bt)},wt)},Eo=()=>{window.clearTimeout(Be),se=!0,P=u?.scrollLeft??P},$t=()=>{window.clearTimeout(Be),Be=window.setTimeout(()=>{u&&(P=u.scrollLeft,P+=De(),se=!1,Ie=performance.now()+bt)},wt)},Pt=e=>{const t=Math.min((e-(xe??e))/1e3,.1),s=qe?To:Pe;if(xe=e,je+=(s-je)*Math.min(t*6,1),d){const a=o.getBoundingClientRect(),l=a.bottom>0&&a.top<window.innerHeight;l&&!Z&&!te&&!se&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Re&&($+=t*je,d.scrollLeft=$,$+=He()),l&&u?.clientWidth&&I&&!oe&&!se&&!te&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ie&&(P-=t*Pe,u.scrollLeft=P,P+=De())}Ce=requestAnimationFrame(Pt)};!d||Ce||(xe=void 0,Ce=requestAnimationFrame(Pt)),requestAnimationFrame(()=>{kt(),Tt()}),d?.addEventListener("mouseenter",()=>{qe=!0}),d?.addEventListener("mouseleave",()=>{qe=!1}),o.addEventListener("wheel",e=>{!d||e.ctrlKey||(Ve(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&W.matches){Mo();return}Z=!0,ee=!1,St=e.clientX,Ae=d.scrollLeft,Ve()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!Z)return;const t=e.clientX-St;!ee&&Math.abs(t)<=5||(ee||(ee=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Ae-t,Ae+=He(),$=d.scrollLeft,Ve())});const $o=e=>{!d||!Z||(Z=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),$=d.scrollLeft,ee&&(ge=!0,window.setTimeout(()=>{ge=!1},0)))};d?.addEventListener("scroll",()=>{te&&($=d.scrollLeft,Et())},{passive:!0});const xt=e=>{if(e.pointerType==="touch"&&W.matches){Et();return}$o(e)};d?.addEventListener("pointerup",xt),d?.addEventListener("pointercancel",xt),d?.addEventListener("click",e=>{ge&&(ge=!1,e.preventDefault(),e.stopPropagation())},!0),u?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&W.matches){Eo();return}oe=!0,re=!1,Lt=e.clientX,We=u.scrollLeft,Mt()}}),u?.addEventListener("dragstart",e=>{e.preventDefault()}),u?.addEventListener("pointermove",e=>{if(!oe)return;const t=e.clientX-Lt;!re&&Math.abs(t)<=5||(re||(re=!0,u.classList.add("is-dragging"),u.setPointerCapture(e.pointerId)),u.scrollLeft=We-t,We+=De(),P=u.scrollLeft,Mt())});const Po=e=>{!u||!oe||(oe=!1,u.classList.remove("is-dragging"),u.hasPointerCapture(e.pointerId)&&u.releasePointerCapture(e.pointerId),P=u.scrollLeft,re&&(he=!0,window.setTimeout(()=>{he=!1},0)))};u?.addEventListener("scroll",()=>{se&&(P=u.scrollLeft,$t())},{passive:!0});const Ct=e=>{if(e.pointerType==="touch"&&W.matches){$t();return}Po(e)};u?.addEventListener("pointerup",Ct),u?.addEventListener("pointercancel",Ct),u?.addEventListener("click",e=>{he&&(he=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{const t=e.querySelector(".pf-work-cursor-label");let s=0,a=0,l=0;e.addEventListener("pointermove",p=>{if(p.pointerType!=="mouse"||!t)return;const f=e.getBoundingClientRect(),b=14,y=12,v=t.offsetWidth/2;a=Math.min(Math.max(v+y,p.clientX-f.left),f.width-v-y),l=Math.min(Math.max(y,p.clientY-f.top+b),f.height-t.offsetHeight-y),!s&&(s=requestAnimationFrame(()=>{s=0,e.style.setProperty("--pf-cursor-x",`${a}px`),e.style.setProperty("--pf-cursor-y",`${l}px`)}))}),e.addEventListener("pointerleave",()=>{s&&cancelAnimationFrame(s),s=0}),e.addEventListener("click",p=>{if(!nt(p,e))return;const f=n.find(b=>e.classList.contains(`pf-work--${b.id}`));f&&(Te(f),p.preventDefault(),pt(e,f))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{kt({preservePosition:!0}),Tt({preservePosition:!0})})});const Rt=()=>{const e=V();if(R){R.projectId!==e&&R.closeModal();return}if(!e)return;const t=n.find(a=>a.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&pt(s,t,{pushHistory:!1})};return window.addEventListener("popstate",Rt),{resetModal:()=>R?.disposeModal(),syncModalWithHistory:Rt}},Ue=document.querySelector("[data-pf]"),Ot=document.querySelector("[data-about]"),_=document.querySelector(".about-photo-stack"),zt=document.querySelector("[data-project-list]"),zo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Yo=document.querySelector(".counter-line"),Yt=document.querySelector(".fixed-project-meta"),No=document.querySelector("[data-side-number]"),Go=document.querySelector("[data-side-wip]"),Ko=document.querySelector("[data-side-title]"),Xo=document.querySelector("[data-counter-wip]"),Je=document.querySelector("[data-year-rail]"),O=document.querySelector(".index-gnb"),_o=[...document.querySelectorAll("[data-gnb-scroll]")],Ut=document.querySelector(".theme-toggle"),F=document.documentElement,Jt="portfolio-last-project-slug",Nt=760,Uo=12,Jo=8,Qt=window.matchMedia("(max-width: 600px)"),ot=window.matchMedia("(prefers-reduced-motion: reduce)"),Qo=3e3,Zo=200,er={work:40,experience:-50};let Qe=!1,ce=0,_e=0,Gt=0,Zt=0,z=Math.max(0,window.scrollY),de=0,pe=z,rt=!1,Ze=0,et=0;const tr=()=>{const o=_?.lastElementChild;!o||_.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Zt=window.setTimeout(()=>{_.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},Zo))},eo=()=>{window.clearInterval(Gt),window.clearTimeout(Zt),_?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!_||_.children.length<2||ot.matches)&&(Gt=window.setInterval(tr,Qo))},or=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},rr=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},sr=o=>{window.gtag?.("event","project_click",{project_name:o})},ir=o=>`'${String(o).slice(-2)}`,ar=o=>{const{start:n,end:c}=_t.yearRange,g=Math.min(5,c-n+1),M=Math.min(Math.max(o-2,n),c-g+1);return Array.from({length:g},(U,Y)=>M+Y)},nr=o=>o.split("|").join(" "),lr=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),cr=()=>window.matchMedia("(max-width: 600px)").matches?Jo:Uo,dr=()=>{const o=cr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},pr=o=>{const n=o.getBoundingClientRect(),c=dr(),g=window.getComputedStyle(o),M=window.getComputedStyle(o.closest(".project-section")),U=window.getComputedStyle(o.querySelector(".project-media")),Y=o.querySelector(".project-summary"),R=Number.parseFloat(g.rowGap||g.gap)||0,J=Y?.getBoundingClientRect().height||0,Te=Math.max(0,c.height-J-R),V=document.createElement("div"),j=o.cloneNode(!0);return j.classList.add("project-transition-card"),j.removeAttribute("href"),j.removeAttribute("aria-label"),j.setAttribute("aria-hidden","true"),Object.assign(j.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:g.gap,gridTemplateRows:g.gridTemplateRows,maxHeight:"none"}),j.style.setProperty("--project-color",M.getPropertyValue("--project-color")),j.style.setProperty("--project-sub-color",M.getPropertyValue("--project-sub-color")),j.style.setProperty("--project-media-shadow",U.boxShadow),V.className="project-transition-layer",V.append(j),document.body.append(V),{cardClone:j,targetRect:c,targetGridTemplateRows:`${Te}px ${J}px`}},ur=o=>{if(Qe)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}Qe=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:c,targetRect:g,targetGridTemplateRows:M}=pr(o);c.animate([{top:c.style.top,left:c.style.left,width:c.style.width,height:c.style.height,gridTemplateRows:c.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${g.top}px`,left:`${g.left}px`,width:`${g.width}px`,height:`${g.height}px`,gridTemplateRows:M,opacity:0,offset:1}],{duration:Nt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Nt-120)},fr=()=>{Qe=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},mr=o=>{Je.innerHTML=ar(o.year).map(n=>{const c=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${c?'aria-current="true"':""}>${ir(n)}</span>
      `}).join("")},gr=()=>{Yt.classList.add("is-changing"),Je.classList.add("is-changing"),window.setTimeout(()=>{Yt.classList.remove("is-changing"),Je.classList.remove("is-changing")},180)};let Le=[],Kt=-1;const st=({force:o=!1}={})=>{if(!Qt.matches){ce&&(F.style.removeProperty("--mobile-project-viewport"),ce=0,_e=0);return}const n=window.innerWidth;!o&&ce&&n===_e||(ce=window.innerHeight,_e=n,F.style.setProperty("--mobile-project-viewport",`${ce}px`))},hr=()=>{if(!Ue)return;const o=Ue.getBoundingClientRect(),n=window.innerHeight/2,c=o.top<=n&&o.bottom>=n;F.classList.toggle("is-pf-active",c)},vr=()=>{if(!Ot)return;const o=Ot.getBoundingClientRect(),n=window.innerHeight/2,c=o.top<=n&&o.bottom>=n;F.classList.toggle("is-about-active",c)},yr=o=>{if(o===Kt||o<0)return;const n=Do[o],c=(o+1)/_t.totalProjectCount*100;Kt=o,gr(),zo.textContent=n.number,No.textContent=n.number,Go.textContent=n.wip?"🚧":"",Xo.textContent=n.wip?"🚧":"",Ko.innerHTML=n.sideTitle.split("|").join("<br />"),Yo.style.setProperty("--progress",`${c}%`),F.style.setProperty("--active-project-color",n.keyColor),F.style.setProperty("--active-project-sub-color",n.subColor||n.keyColor),rr(Jt,n.slug),mr(n)},wr=()=>{if(!Le.length)return;const o=window.innerHeight/2,n=Le.map((c,g)=>{const M=c.getBoundingClientRect(),U=M.top+M.height/2;return{index:g,distance:Math.abs(U-o)}}).sort((c,g)=>c.distance-g.distance)[0]?.index;Le.forEach((c,g)=>{const M=g===n;c.classList.toggle("is-active",M),c.classList.toggle("is-inactive",!M)}),yr(n)},br=()=>{window.clearTimeout(Ze),rt=!1,F.classList.remove("is-gnb-menu-scrolling"),O?.classList.remove("is-hidden"),z=Math.max(0,window.scrollY),de=0,pe=z},to=o=>{window.clearTimeout(Ze),Ze=window.setTimeout(br,o)},Sr=()=>{if(!O)return;const o=Math.max(0,window.scrollY);if(rt){O.classList.remove("is-hidden"),z=o,de=0,pe=o,to(Math.abs(o-et)<=1?160:1200);return}const n=o-z,c=Math.sign(n);if(o<=16)O.classList.remove("is-hidden"),de=0,pe=o;else if(c!==0){c!==de&&(de=c,pe=z);const g=Math.abs(o-pe);c>0&&g>=8?O.classList.add("is-hidden"):c<0&&g>=64&&O.classList.remove("is-hidden")}z=o},Lr=o=>{const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),c=er[o.id]??0,g=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-c;et=Math.min(n,Math.max(0,g)),rt=!0,F.classList.add("is-gnb-menu-scrolling"),O?.classList.remove("is-hidden"),to(1200),window.scrollTo({top:et,behavior:ot.matches?"auto":"smooth"})};let Xt=0;const ke=()=>{cancelAnimationFrame(Xt),Xt=requestAnimationFrame(()=>{hr(),vr(),wr()})},oo=o=>{F.dataset.theme=o,Ut.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},kr=localStorage.getItem("portfolio-theme")||"light",ro=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";ot.addEventListener?.("change",eo);eo();const tt=Oo(Ue,Vo,nr);Le=[...document.querySelectorAll("[data-project]")];st({force:!0});oo(kr);const Tr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=ro()==="back_forward",c=o||(n?or(Jt):""),g=c?document.getElementById(c):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),g&&g.scrollIntoView({block:"center",behavior:"auto"})};Tr();ro()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Ut.addEventListener("click",()=>{oo(F.dataset.theme==="dark"?"light":"dark")});_o.forEach(o=>{o.addEventListener("click",n=>{const c=document.querySelector(o.hash);c&&(n.preventDefault(),Lr(c))})});zt?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!zt.contains(n)||!lr(o,n)||(sr(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),ur(n))});window.addEventListener("scroll",Sr,{passive:!0});window.addEventListener("scroll",ke,{passive:!0});window.addEventListener("resize",()=>{st(),ke()});Qt.addEventListener?.("change",()=>{st({force:!0}),ke()});window.addEventListener("pagehide",()=>tt?.resetModal());window.addEventListener("pageshow",()=>{tt?.resetModal(),tt?.syncModalWithHistory(),fr()});ke();
