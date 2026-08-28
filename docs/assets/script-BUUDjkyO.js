import{p as _o,a as eo}from"./projects-CJ_WZtzA.js";const Uo=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Jo=(o,a,u)=>{if(!o)return;const g=760,S="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let $=null;const de=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},J=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},C=()=>window.history.state?.[S]||"",lo=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[S]:e},"")},rt=e=>e.deviceType==="web"?`
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
    `},po=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?it(1):rt(e),uo=[{start:0,end:5},{start:18,end:26}],fo=(e,t)=>{const i=e.id==="public-transport"?it(t+2):"",n=e.id==="perp-dex"?[`
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
        ${i||n||l||f||m||T||L}
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
      `),i=n=>{const l=n.videoWidth||n.naturalWidth||n.width,f=n.videoHeight||n.naturalHeight||n.height;if(!l||!f)return null;const m=16,T=document.createElement("canvas"),L=T.getContext("2d",{willReadFrequently:!0});if(!L)return null;T.width=m,T.height=m;try{L.drawImage(n,0,0,m,m);const y=L.getImageData(0,0,m,m).data;let b=0,r=0,k=0,s=0;for(let h=0;h<m;h+=1)for(let w=0;w<m;w+=1){if(w>1&&w<m-2&&h>1&&h<m-2)continue;const q=(h*m+w)*4,E=y[q+3]/255;E<.2||(b+=y[q]*E,r+=y[q+1]*E,k+=y[q+2]*E,s+=E)}return s?`rgb(${Math.round(b/s)} ${Math.round(r/s)} ${Math.round(k/s)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const l=n.querySelector("img, video, canvas");if(!l)return;const f=()=>{if(!n.isConnected)return;const m=i(l);m&&(n.style.setProperty("--pf-modal-media-background",m),n.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?f():l.addEventListener("load",f,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?f():l.addEventListener("loadeddata",f,{once:!0});return}window.requestAnimationFrame(f)})},ho=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const i=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=i,t.play().catch(()=>{})},f=()=>{t.currentTime=i,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",f,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&l()}),t.addEventListener("ended",l),t.readyState>=1&&f()})},go=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(s=>e.querySelector(`.pf-modal-bento-placeholder--${s}`)).filter(Boolean).map(s=>({container:s,video:s.querySelector("[data-perp-video]"),gif:s.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(s=>{if(s.container.classList.add("is-playing"),s.video){const h=()=>{e.isConnected&&(s.video.loop=!0,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?h():s.video.addEventListener("loadedmetadata",h,{once:!0})}if(s.gif){const h=s.gif.querySelector("[data-perp-gif-player]"),w=s.gif.dataset.perpGifSrc;h&&w&&(h.src=w)}});return}let l=null,f=0,m=0,T=0,L=null;const y=s=>{if(s.container.classList.remove("is-playing"),s.video){const h=Number(s.video.dataset.perpThumbnailTime||0);s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=Math.min(h,Number.isFinite(s.video.duration)?s.video.duration:h))}s.gif&&s.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},b=()=>{window.clearTimeout(m),n.forEach(y)},r=()=>{f=(f+1)%n.length,k(n[f],!0)},k=(s,h=!1)=>{const w=++T;if(b(),l=s,s.container.classList.add("is-playing"),s.video){const q=()=>{w!==T||!e.isConnected||(s.video.loop=!h,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?q():s.video.addEventListener("loadedmetadata",q,{once:!0})}if(s.gif){const q=s.gif.querySelector("[data-perp-gif-player]"),E=s.gif.dataset.perpGifSrc;q&&E&&(q.src=`${E}?play=${w}`),h&&(m=window.setTimeout(()=>{w===T&&!L&&e.isConnected&&r()},Number(s.gif.dataset.perpGifDuration||6600)))}};n.forEach(s=>{if(s.video&&s.video.addEventListener("ended",()=>{s===l&&!L&&e.isConnected&&r()}),s.gif){const h=s.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{h.width=w.naturalWidth,h.height=w.naturalHeight,h.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=s.gif.dataset.perpGifSrc}s.container.addEventListener("mouseenter",()=>{L=s,k(s)}),s.container.addEventListener("mouseleave",()=>{L===s&&(L=null,f=(n.indexOf(s)+1)%n.length,k(n[f],!0))})}),n.forEach(y),k(n[f],!0)},wo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,k)=>r.order-k.order);if(!i.length)return;if(t){i.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const k=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?k():r.video.addEventListener("loadedmetadata",k,{once:!0})});return}let n=null,l=0,f=null,m=0;const T=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},L=()=>i.forEach(T),y=()=>{l=(l+1)%i.length,b(i[l],!0)},b=(r,k=!1)=>{const s=++m;L(),n=r,r.container.classList.add("is-playing");const h=()=>{s!==m||!e.isConnected||(r.video.loop=!k,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?h():r.video.addEventListener("loadedmetadata",h,{once:!0})};i.forEach(r=>{r.video.addEventListener("ended",()=>{r===n&&!f&&e.isConnected&&y()}),r.container.addEventListener("mouseenter",()=>{f=r,b(r)}),r.container.addEventListener("mouseleave",()=>{f===r&&(f=null,l=(i.indexOf(r)+1)%i.length,b(i[l],!0))})}),i.forEach(T),b(i[l],!0)},vo=(e,t=!1)=>{const i=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${rt(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${de(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${i.join(" ")}" draggable="false" aria-label="${u(e.title)} project detail">${n}</a>`},st=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,nt=(e,t)=>st(e)&&!t.target&&!t.hasAttribute("download"),at=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},lt=()=>"24px",pe=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},ct=(e,t)=>{const i=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,l=e.left-t.left,f=e.top-t.top;return`translate3d(${l}px, ${f}px, 0) scale(${i}, ${n})`},yo=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(i=>!i.paused&&!i.ended);return e.forEach(i=>i.pause()),t},bo=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},dt=(e,t,{pushHistory:i=!0}={})=>{if($)return;i&&lo(t.id);const n=yo(),l=e.querySelector(".pf-work-card")||e,f=l.getBoundingClientRect(),m=window.getComputedStyle(l).borderRadius,T=at(),L=lt(),y=document.createElement("div"),b=document.createElement("div"),r=document.createElement("div"),k=`pf-modal-${t.id}-title`,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=s?1:g,w=t.cta?`
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
      `:"",q=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",E=t.id==="perp-dex",It=t.id==="public-transport",Ht=E?4:It?2:3,Ho=Array.from({length:Ht},(d,v)=>fo(t,v)),Bo=Array.from({length:Ht},(d,v)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${v+1} pf-modal-bento-skeleton"></div>
      `),se=It,we=!t.cta&&!E&&!se,Ge=t.deviceType==="web"&&!se&&!we,Bt=["cta-enhancement","store-finder"].includes(t.id),Dt=d=>{const v=Bt?d[0]:d.slice(0,2).join("");return E?`
          <div class="pf-modal-perp-left">
            ${d[0]}
            <div class="pf-modal-perp-center-bottom">
              ${d[1]}
              ${d[2]}
            </div>
          </div>
          ${d[3]}
        `:se||we?d.join(""):Ge?`<div class="pf-modal-bento-side">${d.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Bt?" pf-modal-bento-stack-top--single":""}">
              ${v}
            </div>
            ${d[2]}
          </div>
        `},Do=Dt(Ho),Vo=Dt(Bo),Oo=E?"":`
        <div class="pf-modal-bento-feature">
          ${po(t)}
        </div>
      `,zo=`
      <section class="pf-modal-bento-section${Ge?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Oo}
        ${Do}
      </section>
    `,No=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Ge?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${E?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Vo}
      </section>
    `;y.className="pf-modal-layer",b.className="pf-modal-backdrop",b.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${q?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",k),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${No}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${k}">${t.title}</h2>
          ${de(t)}
        </div>
        ${w||q}
      </div>
    `,pe(r,T),r.style.borderRadius=L,r.style.transformOrigin="top left",y.append(b,r),document.body.append(y),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ve=r.animate([{transform:ct(f,T),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L}],{duration:h,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),ye=b.animate([{opacity:0},{opacity:1}],{duration:Math.min(h,420),easing:"ease-out",fill:"forwards"}),Ke=r.querySelector(".pf-modal-close"),K=r.querySelector(".pf-modal-cta"),be=r.querySelector(".pf-modal-footer"),A=r.querySelector(".pf-modal-card-content"),ne=r.querySelector(".pf-modal-scroll-indicator");let Vt=!1,F=!1,ae=0;const Yo=()=>{if(ae=0,!A||!ne||F)return;const d=A.scrollHeight-A.clientHeight,v=8,B=be?.offsetHeight??0,D=Math.max(0,r.clientHeight-B-v*2);if(d<=1||D<=0){ne.classList.remove("is-visible");return}const ke=Math.min(D,Math.max(36,D*(A.clientHeight/A.scrollHeight))),Xo=Math.min(1,Math.max(0,A.scrollTop/d))*(D-ke);ne.style.height=`${ke}px`,ne.style.transform=`translate3d(0, ${Xo}px, 0)`,ne.classList.add("is-visible")},le=()=>{ae||(ae=window.requestAnimationFrame(Yo))},Xe=typeof ResizeObserver=="function"?new ResizeObserver(le):null;Xe?.observe(A),A?.addEventListener("scroll",le,{passive:!0});const Go=()=>{Vt||!A||F||(Vt=!0,A.classList.remove("is-skeleton"),A.innerHTML=zo,mo(r),ho(r),go(r),wo(r),A.querySelectorAll(".pf-modal-bento-section").forEach(d=>Xe?.observe(d)),window.requestAnimationFrame(()=>{!F&&r.isConnected&&(r.classList.add("is-content-ready"),le())}))},Se=()=>{const d=be?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${d}px`),le()},Ot=be&&typeof ResizeObserver=="function"?new ResizeObserver(Se):null;Ot?.observe(be),Se();const zt=()=>{!F&&r.classList.contains("is-ready")&&(pe(r,at()),r.style.borderRadius=lt(),Se())};let Nt=!1;const Yt=({restoreFocus:d=!1}={})=>{if(Nt||(Nt=!0,y.getAnimations?.({subtree:!0})?.forEach(B=>B.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",_e),window.removeEventListener("resize",zt),Ot?.disconnect(),Xe?.disconnect(),A?.removeEventListener("scroll",le),ae&&window.cancelAnimationFrame(ae),$?.modal===r&&($=null),bo(n),!d))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Gt=()=>{if(F)return;F=!0,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const d=r.getBoundingClientRect(),v=window.getComputedStyle(r).borderRadius,B=l.getBoundingClientRect();e.classList.remove("is-modal-source"),ve.cancel(),ye.cancel(),pe(r,d),r.style.borderRadius=v,r.style.transform="none";const D=s?1:320,ke=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v},{transform:ct(B,d),borderRadius:m}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});b.animate([{opacity:1},{opacity:0}],{duration:s?1:200,easing:"ease-out",fill:"forwards"}),ke.finished.finally(()=>Yt({restoreFocus:!0}))},Le=()=>{if(F)return;const d=C()===t.id;Gt(),d&&(window.history.back(),window.setTimeout(()=>{if(C()!==t.id)return;const v=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete v[S],window.history.replaceState(v,"")},500))},Ko=d=>{if(K){if(t.cta?.newTab){st(d)&&Le();return}nt(d,K)&&(d.preventDefault(),!F&&(F=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",_e),ve.cancel(),ye.cancel(),C()===t.id?window.location.replace(K.href):window.location.href=K.href))}},_e=d=>{if(d.key==="Escape"){d.preventDefault(),Le();return}if(d.key!=="Tab")return;const v=[Ke,K].filter(Boolean),B=v.indexOf(document.activeElement),D=d.shiftKey?(B-1+v.length)%v.length:(B+1)%v.length;d.preventDefault(),v[D].focus()};$={layer:y,modal:r,projectId:t.id,closeModal:Gt,disposeModal:Yt},document.addEventListener("keydown",_e),window.addEventListener("resize",zt),Ke.addEventListener("click",Le),K?.addEventListener("click",Ko),y.addEventListener("click",d=>{(d.target===y||d.target===b)&&Le()}),ye.finished.then(()=>{b.style.opacity="1",ye.cancel()}).catch(()=>{}),ve.finished.then(()=>{F||(pe(r,T),r.style.borderRadius=L,r.style.transform="none",ve.cancel(),Se(),r.classList.add("is-ready"),Go(),Ke.focus({preventScroll:!0}))}).catch(()=>{})},I=window.matchMedia("(max-width: 600px)"),Q=document.querySelector("[data-pf-type-filter]"),So=270,Lo=.36;Q&&(Q.innerHTML=`
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
      ${a.map(e=>vo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const P=document.createElement("span");P.className="pf-work-cursor-label",P.dataset.pfWorkCursor="",P.setAttribute("aria-hidden","true"),P.innerHTML="<span>View Details</span>",document.body.append(P);const pt=[...Q?[...Q.querySelectorAll("[data-project-type-filter]")]:[],...M.querySelectorAll("[data-project-type-filter]")],ko=Q?.querySelector(".pf-type-filter"),ut=document.documentElement,j=M.querySelector(".pf-floating-filter-scroll"),Me=[...M.querySelectorAll("[data-project-type-filter]")],To=[...o.querySelectorAll(".pf-work[data-project-types]")],ft=o.querySelector(".pf-work-grid"),mt=o.querySelector(".pf-filter-empty");let z="",ht=0,gt=0,wt=0,ue=!1;const Eo=()=>{window.clearTimeout(gt),window.clearTimeout(wt)},Mo=e=>{if(e!==ue){if(ue=e,Eo(),!e){M.classList.remove("is-visible"),wt=window.setTimeout(()=>{ue||ut.classList.remove("is-footer-yielding-to-filter")},220);return}ut.classList.add("is-footer-yielding-to-filter"),gt=window.setTimeout(()=>{ue&&M.classList.add("is-visible")},220)}},fe=()=>{if(!j||!I.matches){M.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,j.scrollWidth-j.clientWidth);M.classList.toggle("has-scroll-left",j.scrollLeft>1),M.classList.toggle("has-scroll-right",j.scrollLeft<e-1)},vt=()=>{if(!j||!I.matches)return;const e=Me.find(l=>l.getAttribute("aria-pressed")==="true"),t=Me.indexOf(e);if(!e)return;const i=Math.max(0,j.scrollWidth-j.clientWidth),n=t<2?0:t>=Me.length-2?i:e.offsetLeft-(j.clientWidth-e.offsetWidth)/2;j.scrollTo({left:n,behavior:"smooth"})},$e=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*Lo;Mo(window.scrollY>So&&e>t)},$o=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},yt=e=>{z=e;let t=0;pt.forEach(i=>{i.setAttribute("aria-pressed",String(i.dataset.projectTypeFilter===z))}),vt(),ko?.classList.toggle("is-filtering",!!z),To.forEach(i=>{const n=i.dataset.projectTypes.split(" "),l=!z||n.includes(z);i.hidden=!l,l&&(t+=1)}),ft?.classList.toggle("is-single-result",t===1),mt&&(mt.hidden=t>0)};pt.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,i=e.dataset.projectTypeFilter,n=!M.contains(e)&&z===i;window.clearTimeout(ht),t.style.overflowAnchor="none",yt(n?"":i),$o(),ht=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",$e,{passive:!0}),window.addEventListener("resize",()=>{$e(),fe()},{passive:!0}),j?.addEventListener("scroll",fe,{passive:!0}),I.addEventListener?.("change",()=>{fe(),vt()}),$e(),yt(""),fe();const c=o.querySelector("[data-pf-work-rail]"),Ce=c?[...c.querySelectorAll(".pf-work-set")]:[],bt=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),me=p?[...p.querySelectorAll(".pf-work-set")]:[],St=me[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Co=80,Po=-80,Pe=32,xo=12,Lt=180,kt=600;let xe,Re=0,qe=0,x=0,Ae=Pe,je=!1,Z=!1,Tt=0,Fe=0,ee=!1,he=!1,te=!1,We=0,H=0,N=0,W=0,Y=0,R=0,Ie=0,oe=!1,Et=0,He=0,re=!1,ge=!1,ie=!1,Be=0;const Mt=({preservePosition:e=!1}={})=>{if(!c||!bt||Ce.length<3)return;const t=H,i=N,n=t?(c.scrollLeft-i)/t:0,l=c.getBoundingClientRect(),f=bt.getBoundingClientRect(),m=c.scrollLeft+f.left-l.left;H=Ce[2].getBoundingClientRect().left-Ce[1].getBoundingClientRect().left,N=m-(c.clientWidth-f.width)/2-(I.matches?Co:0),c.scrollLeft=e?N+n*H:N,x=c.scrollLeft},De=()=>{if(!c||!H)return 0;const e=N-H*.5,t=N+H*.5;let i=c.scrollLeft;for(;i<e;)i+=H;for(;i>=t;)i-=H;const n=i-c.scrollLeft;return Math.abs(n)>.5&&(c.scrollLeft=i),n},$t=({preservePosition:e=!1}={})=>{if(!p||!St||me.length<3||!p.clientWidth)return;const t=W,i=Y,n=t?(p.scrollLeft-i)/t:0,l=p.getBoundingClientRect(),f=St.getBoundingClientRect(),m=p.scrollLeft+f.left-l.left;W=me[2].getBoundingClientRect().left-me[1].getBoundingClientRect().left,Y=m-(p.clientWidth-f.width)/2-Po,p.scrollLeft=e?Y+n*W:Y,R=p.scrollLeft},Ve=()=>{if(!p||!W)return 0;const e=Y-W*.5,t=Y+W*.5;let i=p.scrollLeft;for(;i<e;)i+=W;for(;i>=t;)i-=W;const n=i-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=i),n},Oe=()=>{x=c?.scrollLeft??x,qe=performance.now()+200},Ct=()=>{R=p?.scrollLeft??R,Ie=performance.now()+200},Ro=()=>{window.clearTimeout(We),te=!0,x=c?.scrollLeft??x},Pt=()=>{window.clearTimeout(We),We=window.setTimeout(()=>{c&&(x=c.scrollLeft,x+=De(),te=!1,qe=performance.now()+kt)},Lt)},qo=()=>{window.clearTimeout(Be),ie=!0,R=p?.scrollLeft??R},xt=()=>{window.clearTimeout(Be),Be=window.setTimeout(()=>{p&&(R=p.scrollLeft,R+=Ve(),ie=!1,Ie=performance.now()+kt)},Lt)},Rt=e=>{const t=Math.min((e-(xe??e))/1e3,.1),i=je?xo:Pe;if(xe=e,Ae+=(i-Ae)*Math.min(t*6,1),c){const n=o.getBoundingClientRect(),l=n.bottom>0&&n.top<window.innerHeight;l&&!Z&&!te&&!ie&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=qe&&(x+=t*Ae,c.scrollLeft=x,x+=De()),l&&p?.clientWidth&&W&&!oe&&!ie&&!te&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ie&&(R-=t*Pe,p.scrollLeft=R,R+=Ve())}Re=requestAnimationFrame(Rt)};!c||Re||(xe=void 0,Re=requestAnimationFrame(Rt)),requestAnimationFrame(()=>{Mt(),$t()}),c?.addEventListener("mouseenter",()=>{je=!0}),c?.addEventListener("mouseleave",()=>{je=!1}),o.addEventListener("wheel",e=>{!c||e.ctrlKey||(Oe(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||$)){if(e.pointerType==="touch"&&I.matches){Ro();return}Z=!0,ee=!1,Tt=e.clientX,Fe=c.scrollLeft,Oe()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!Z)return;const t=e.clientX-Tt;!ee&&Math.abs(t)<=5||(ee||(ee=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=Fe-t,Fe+=De(),x=c.scrollLeft,Oe())});const Ao=e=>{!c||!Z||(Z=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),x=c.scrollLeft,ee&&(he=!0,window.setTimeout(()=>{he=!1},0)))};c?.addEventListener("scroll",()=>{te&&(x=c.scrollLeft,Pt())},{passive:!0});const qt=e=>{if(e.pointerType==="touch"&&I.matches){Pt();return}Ao(e)};c?.addEventListener("pointerup",qt),c?.addEventListener("pointercancel",qt),c?.addEventListener("click",e=>{he&&(he=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||$)){if(e.pointerType==="touch"&&I.matches){qo();return}oe=!0,re=!1,Et=e.clientX,He=p.scrollLeft,Ct()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!oe)return;const t=e.clientX-Et;!re&&Math.abs(t)<=5||(re||(re=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=He-t,He+=Ve(),R=p.scrollLeft,Ct())});const jo=e=>{!p||!oe||(oe=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),R=p.scrollLeft,re&&(ge=!0,window.setTimeout(()=>{ge=!1},0)))};p?.addEventListener("scroll",()=>{ie&&(R=p.scrollLeft,xt())},{passive:!0});const At=e=>{if(e.pointerType==="touch"&&I.matches){xt();return}jo(e)};p?.addEventListener("pointerup",At),p?.addEventListener("pointercancel",At),p?.addEventListener("click",e=>{ge&&(ge=!1,e.preventDefault(),e.stopPropagation())},!0);const Fo=70,ze=14,Ne=12;let V=0,jt=P.offsetWidth,Ye=P.offsetHeight;const Ft=()=>{jt=P.offsetWidth,Ye=P.offsetHeight};document.fonts?.ready.then(Ft);const G=(e=0)=>{if(e){if(V)return;V=window.setTimeout(()=>{V=0,P.classList.remove("is-visible")},e);return}window.clearTimeout(V),V=0,P.classList.remove("is-visible")},Wo=()=>{window.clearTimeout(V),V=0,P.classList.add("is-visible")},Io=e=>{const t=jt/2,i=Math.min(Math.max(t+Ne,e.clientX),window.innerWidth-t-Ne),l=e.clientY+ze+Ye+Ne<=window.innerHeight?e.clientY+ze:e.clientY-ze-Ye;P.style.transform=`translate3d(${i}px, ${l}px, 0) translateX(-50%)`};o.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;Io(e);const t=e.target instanceof Element?e.target:null,i=t?.closest(".pf-work");if(i&&o.contains(i)){Wo();return}if(t&&ft?.contains(t)){G(Fo);return}G()}),o.addEventListener("pointerleave",()=>G()),window.addEventListener("blur",()=>G()),window.addEventListener("scroll",()=>G(),{passive:!0}),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!nt(t,e))return;const i=a.find(n=>e.classList.contains(`pf-work--${n.id}`));i&&(J(i),G(),t.preventDefault(),dt(e,i))})}),window.addEventListener("resize",()=>{Ft(),requestAnimationFrame(()=>{Mt({preservePosition:!0}),$t({preservePosition:!0})})});const Wt=()=>{const e=C();if($){$.projectId!==e&&$.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),i=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&i&&dt(i,t,{pushHistory:!1})};return window.addEventListener("popstate",Wt),{resetModal:()=>$?.disposeModal(),syncModalWithHistory:Wt}},Je=document.querySelector("[data-pf]"),Kt=document.querySelector("[data-about]"),X=document.querySelector(".about-photo-stack"),Xt=document.querySelector("[data-project-list]"),Qo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Zo=document.querySelector(".counter-line"),_t=document.querySelector(".fixed-project-meta"),er=document.querySelector("[data-side-number]"),tr=document.querySelector("[data-side-wip]"),or=document.querySelector("[data-side-title]"),rr=document.querySelector("[data-counter-wip]"),Qe=document.querySelector("[data-year-rail]"),ir=[...document.querySelectorAll("[data-gnb-scroll]")],to=document.querySelector(".theme-toggle"),_=document.documentElement,oo="portfolio-last-project-slug",Ut=760,sr=12,nr=8,ro=window.matchMedia("(max-width: 600px)"),tt=window.matchMedia("(prefers-reduced-motion: reduce)"),ar=3e3,lr=200,cr={work:40,experience:-50};let Ze=!1,ce=0,Ue=0,Jt=0,io=0;const dr=()=>{const o=X?.lastElementChild;!o||X.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),io=window.setTimeout(()=>{X.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},lr))},so=()=>{window.clearInterval(Jt),window.clearTimeout(io),X?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!X||X.children.length<2||tt.matches)&&(Jt=window.setInterval(dr,ar))},pr=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},ur=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},fr=o=>{window.gtag?.("event","project_click",{project_name:o})},mr=o=>`'${String(o).slice(-2)}`,hr=o=>{const{start:a,end:u}=eo.yearRange,g=Math.min(5,u-a+1),S=Math.min(Math.max(o-2,a),u-g+1);return Array.from({length:g},(U,O)=>S+O)},gr=o=>o.split("|").join(" "),wr=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),vr=()=>window.matchMedia("(max-width: 600px)").matches?nr:sr,yr=()=>{const o=vr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},br=o=>{const a=o.getBoundingClientRect(),u=yr(),g=window.getComputedStyle(o),S=window.getComputedStyle(o.querySelector(".project-media")),U=o.querySelector(".project-summary"),O=Number.parseFloat(g.rowGap||g.gap)||0,$=U?.getBoundingClientRect().height||0,de=Math.max(0,u.height-$-O),J=document.createElement("div"),C=o.cloneNode(!0);return C.classList.add("project-transition-card"),C.removeAttribute("href"),C.removeAttribute("aria-label"),C.setAttribute("aria-hidden","true"),Object.assign(C.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:g.gap,gridTemplateRows:g.gridTemplateRows,maxHeight:"none"}),C.style.setProperty("--project-media-shadow",S.boxShadow),J.className="project-transition-layer",J.append(C),document.body.append(J),{cardClone:C,targetRect:u,targetGridTemplateRows:`${de}px ${$}px`}},Sr=o=>{if(Ze)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}Ze=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:g,targetGridTemplateRows:S}=br(o);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${g.top}px`,left:`${g.left}px`,width:`${g.width}px`,height:`${g.height}px`,gridTemplateRows:S,opacity:0,offset:1}],{duration:Ut,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Ut-120)},Lr=()=>{Ze=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},kr=o=>{Qe.innerHTML=hr(o.year).map(a=>{const u=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${u?'aria-current="true"':""}>${mr(a)}</span>
      `}).join("")},Tr=()=>{_t.classList.add("is-changing"),Qe.classList.add("is-changing"),window.setTimeout(()=>{_t.classList.remove("is-changing"),Qe.classList.remove("is-changing")},180)};let Te=[],Qt=-1;const ot=({force:o=!1}={})=>{if(!ro.matches){ce&&(_.style.removeProperty("--mobile-project-viewport"),ce=0,Ue=0);return}const a=window.innerWidth;!o&&ce&&a===Ue||(ce=window.innerHeight,Ue=a,_.style.setProperty("--mobile-project-viewport",`${ce}px`))},Er=()=>{if(!Je)return;const o=Je.getBoundingClientRect(),a=window.innerHeight/2,u=o.top<=a&&o.bottom>=a;_.classList.toggle("is-pf-active",u)},Mr=()=>{if(!Kt)return;const o=Kt.getBoundingClientRect(),a=window.innerHeight/2,u=o.top<=a&&o.bottom>=a;_.classList.toggle("is-about-active",u)},$r=o=>{if(o===Qt||o<0)return;const a=_o[o],u=(o+1)/eo.totalProjectCount*100;Qt=o,Tr(),Qo.textContent=a.number,er.textContent=a.number,tr.textContent=a.wip?"🚧":"",rr.textContent=a.wip?"🚧":"",or.innerHTML=a.sideTitle.split("|").join("<br />"),Zo.style.setProperty("--progress",`${u}%`),ur(oo,a.slug),kr(a)},Cr=()=>{if(!Te.length)return;const o=window.innerHeight/2,a=Te.map((u,g)=>{const S=u.getBoundingClientRect(),U=S.top+S.height/2;return{index:g,distance:Math.abs(U-o)}}).sort((u,g)=>u.distance-g.distance)[0]?.index;Te.forEach((u,g)=>{const S=g===a;u.classList.toggle("is-active",S),u.classList.toggle("is-inactive",!S)}),$r(a)},Pr=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),u=cr[o.id]??0,g=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-u,S=Math.min(a,Math.max(0,g));window.scrollTo({top:S,behavior:tt.matches?"auto":"smooth"})};let Zt=0;const Ee=()=>{cancelAnimationFrame(Zt),Zt=requestAnimationFrame(()=>{Er(),Mr(),Cr()})},no=o=>{_.dataset.theme=o,to.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},xr=localStorage.getItem("portfolio-theme")||"light",ao=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";tt.addEventListener?.("change",so);so();const et=Jo(Je,Uo,gr);Te=[...document.querySelectorAll("[data-project]")];ot({force:!0});no(xr);const Rr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=ao()==="back_forward",u=o||(a?pr(oo):""),g=u?document.getElementById(u):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),g&&g.scrollIntoView({block:"center",behavior:"auto"})};Rr();ao()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));to.addEventListener("click",()=>{no(_.dataset.theme==="dark"?"light":"dark")});ir.forEach(o=>{o.addEventListener("click",a=>{const u=document.querySelector(o.hash);u&&(a.preventDefault(),Pr(u))})});Xt?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!Xt.contains(a)||!wr(o,a)||(fr(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),Sr(a))});window.addEventListener("scroll",Ee,{passive:!0});window.addEventListener("resize",()=>{ot(),Ee()});ro.addEventListener?.("change",()=>{ot({force:!0}),Ee()});window.addEventListener("pagehide",()=>et?.resetModal());window.addEventListener("pageshow",()=>{et?.resetModal(),et?.syncModalWithHistory(),Lr()});Ee();
