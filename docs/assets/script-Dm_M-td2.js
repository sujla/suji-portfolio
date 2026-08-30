import{p as Qo,a as so}from"./projects-KnV3ap8A.js";const Zo=[{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Store Finder Renewal for Business Impact",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],er=(o,n,u)=>{if(!o)return;const h=760,S="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let C=null;const de=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},J=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},P=()=>window.history.state?.[S]||"",fo=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[S]:e},"")},at=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',mo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],nt=e=>{const t=mo[e-1];return`
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
    `},go=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?nt(1):at(e),ho=[{start:0,end:5},{start:18,end:26}],wo=(e,t)=>{const s=e.id==="public-transport"?nt(t+2):"",i=e.id==="perp-dex"?[`
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
            ${ho.map(r=>`
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
        ${s||i||l||f||m||T||L}
      </div>
    `},vo=e=>{const t=i=>i.matches(`
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
      `),s=i=>{const l=i.videoWidth||i.naturalWidth||i.width,f=i.videoHeight||i.naturalHeight||i.height;if(!l||!f)return null;const m=16,T=document.createElement("canvas"),L=T.getContext("2d",{willReadFrequently:!0});if(!L)return null;T.width=m,T.height=m;try{L.drawImage(i,0,0,m,m);const y=L.getImageData(0,0,m,m).data;let b=0,r=0,k=0,a=0;for(let g=0;g<m;g+=1)for(let w=0;w<m;w+=1){if(w>1&&w<m-2&&g>1&&g<m-2)continue;const A=(g*m+w)*4,E=y[A+3]/255;E<.2||(b+=y[A]*E,r+=y[A+1]*E,k+=y[A+2]*E,a+=E)}return a?`rgb(${Math.round(b/a)} ${Math.round(r/a)} ${Math.round(k/a)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(i=>{if(t(i))return;const l=i.querySelector("img, video, canvas");if(!l)return;const f=()=>{if(!i.isConnected)return;const m=s(l);m&&(i.style.setProperty("--pf-modal-media-background",m),i.classList.add("has-media-sampled-background"))};if(l instanceof HTMLImageElement){l.complete&&l.naturalWidth?f():l.addEventListener("load",f,{once:!0});return}if(l instanceof HTMLVideoElement){l.readyState>=2?f():l.addEventListener("loadeddata",f,{once:!0});return}window.requestAnimationFrame(f)})},yo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),i=Number(t.dataset.segmentEnd),l=()=>{t.currentTime=s,t.play().catch(()=>{})},f=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",f,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=i&&l()}),t.addEventListener("ended",l),t.readyState>=1&&f()})},bo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=(t?[1,2,3,4]:[4,1,2,3]).map(a=>e.querySelector(`.pf-modal-bento-placeholder--${a}`)).filter(Boolean).map(a=>({container:a,video:a.querySelector("[data-perp-video]"),gif:a.querySelector("[data-perp-gif]")}));if(!i.length)return;if(t){i.forEach(a=>{if(a.container.classList.add("is-playing"),a.video){const g=()=>{e.isConnected&&(a.video.loop=!0,a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?g():a.video.addEventListener("loadedmetadata",g,{once:!0})}if(a.gif){const g=a.gif.querySelector("[data-perp-gif-player]"),w=a.gif.dataset.perpGifSrc;g&&w&&(g.src=w)}});return}let l=null,f=0,m=0,T=0,L=null;const y=a=>{if(a.container.classList.remove("is-playing"),a.video){const g=Number(a.video.dataset.perpThumbnailTime||0);a.video.loop=!1,a.video.pause(),a.video.readyState>=2&&(a.video.currentTime=Math.min(g,Number.isFinite(a.video.duration)?a.video.duration:g))}a.gif&&a.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},b=()=>{window.clearTimeout(m),i.forEach(y)},r=()=>{f=(f+1)%i.length,k(i[f],!0)},k=(a,g=!1)=>{const w=++T;if(b(),l=a,a.container.classList.add("is-playing"),a.video){const A=()=>{w!==T||!e.isConnected||(a.video.loop=!g,a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?A():a.video.addEventListener("loadedmetadata",A,{once:!0})}if(a.gif){const A=a.gif.querySelector("[data-perp-gif-player]"),E=a.gif.dataset.perpGifSrc;A&&E&&(A.src=`${E}?play=${w}`),g&&(m=window.setTimeout(()=>{w===T&&!L&&e.isConnected&&r()},Number(a.gif.dataset.perpGifDuration||6600)))}};i.forEach(a=>{if(a.video&&a.video.addEventListener("ended",()=>{a===l&&!L&&e.isConnected&&r()}),a.gif){const g=a.gif.querySelector("[data-perp-gif-frame]"),w=new Image;w.addEventListener("load",()=>{g.width=w.naturalWidth,g.height=w.naturalHeight,g.getContext("2d")?.drawImage(w,0,0)},{once:!0}),w.src=a.gif.dataset.perpGifSrc}a.container.addEventListener("mouseenter",()=>{L=a,k(a)}),a.container.addEventListener("mouseleave",()=>{L===a&&(L=null,f=(i.indexOf(a)+1)%i.length,k(i[f],!0))})}),i.forEach(y),k(i[f],!0)},So=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,k)=>r.order-k.order);if(!s.length)return;if(t){s.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const k=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?k():r.video.addEventListener("loadedmetadata",k,{once:!0})});return}let i=null,l=0,f=null,m=0;const T=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},L=()=>s.forEach(T),y=()=>{l=(l+1)%s.length,b(s[l],!0)},b=(r,k=!1)=>{const a=++m;L(),i=r,r.container.classList.add("is-playing");const g=()=>{a!==m||!e.isConnected||(r.video.loop=!k,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})};s.forEach(r=>{r.video.addEventListener("ended",()=>{r===i&&!f&&e.isConnected&&y()}),r.container.addEventListener("mouseenter",()=>{f=r,b(r)}),r.container.addEventListener("mouseleave",()=>{f===r&&(f=null,l=(s.indexOf(r)+1)%s.length,b(s[l],!0))})}),s.forEach(T),b(s[l],!0)},Lo=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],i=e.id==="public-transport"?'<span class="pf-work-badge">AI-built</span>':"",l=`
      <div class="pf-work-card">
        ${at(e)}
        ${i}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${de(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${l}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${u(e.title)} project detail">${l}</a>`},lt=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,ct=(e,t)=>lt(e)&&!t.target&&!t.hasAttribute("download"),dt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},pt=()=>"24px",pe=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},ut=(e,t)=>{const s=t.width?e.width/t.width:1,i=t.height?e.height/t.height:1,l=e.left-t.left,f=e.top-t.top;return`translate3d(${l}px, ${f}px, 0) scale(${s}, ${i})`},ko=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},To=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},ft=(e,t,{pushHistory:s=!0}={})=>{if(C)return;s&&fo(t.id);const i=ko(),l=e.querySelector(".pf-work-card")||e,f=l.getBoundingClientRect(),m=window.getComputedStyle(l).borderRadius,T=dt(),L=pt(),y=document.createElement("div"),b=document.createElement("div"),r=document.createElement("div"),k=`pf-modal-${t.id}-title`,a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=a?1:h,w=t.cta?`
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
      `:"",A=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",E=t.id==="perp-dex",Xe=t.id==="public-transport",Do=Xe?'<span class="pf-work-badge pf-work-badge--modal">AI-built</span>':"",Ot=E?4:Xe?2:3,Vo=Array.from({length:Ot},(d,v)=>wo(t,v)),Oo=Array.from({length:Ot},(d,v)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${v+1} pf-modal-bento-skeleton"></div>
      `),ie=Xe,we=!t.cta&&!E&&!ie,_e=t.deviceType==="web"&&!ie&&!we,zt=["cta-enhancement","store-finder"].includes(t.id),Nt=d=>{const v=zt?d[0]:d.slice(0,2).join("");return E?`
          <div class="pf-modal-perp-left">
            ${d[0]}
            <div class="pf-modal-perp-center-bottom">
              ${d[1]}
              ${d[2]}
            </div>
          </div>
          ${d[3]}
        `:ie||we?d.join(""):_e?`<div class="pf-modal-bento-side">${d.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${zt?" pf-modal-bento-stack-top--single":""}">
              ${v}
            </div>
            ${d[2]}
          </div>
        `},zo=Nt(Vo),No=Nt(Oo),Yo=E?"":`
        <div class="pf-modal-bento-feature">
          ${go(t)}
        </div>
      `,Go=`
      <section class="pf-modal-bento-section${_e?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Yo}
        ${zo}
      </section>
    `,Ko=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${_e?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${we?" pf-modal-bento-section--four-up":""}${E?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${E?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${No}
      </section>
    `;y.className="pf-modal-layer",b.className="pf-modal-backdrop",b.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${A?" pf-work-modal--has-description":""}${w?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",k),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Ko}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${w?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <div class="pf-modal-title-row">
            <h2 id="${k}">${t.title}</h2>
            ${Do}
          </div>
          ${de(t)}
        </div>
        ${w||A}
      </div>
    `,pe(r,T),r.style.borderRadius=L,r.style.transformOrigin="top left",y.append(b,r),document.body.append(y),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ve=r.animate([{transform:ut(f,T),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),ye=b.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),Ue=r.querySelector(".pf-modal-close"),K=r.querySelector(".pf-modal-cta"),be=r.querySelector(".pf-modal-footer"),q=r.querySelector(".pf-modal-card-content"),ae=r.querySelector(".pf-modal-scroll-indicator");let Yt=!1,F=!1,ne=0;const Xo=()=>{if(ne=0,!q||!ae||F)return;const d=q.scrollHeight-q.clientHeight,v=8,H=be?.offsetHeight??0,D=Math.max(0,r.clientHeight-H-v*2);if(d<=1||D<=0){ae.classList.remove("is-visible");return}const ke=Math.min(D,Math.max(36,D*(q.clientHeight/q.scrollHeight))),Jo=Math.min(1,Math.max(0,q.scrollTop/d))*(D-ke);ae.style.height=`${ke}px`,ae.style.transform=`translate3d(0, ${Jo}px, 0)`,ae.classList.add("is-visible")},le=()=>{ne||(ne=window.requestAnimationFrame(Xo))},Je=typeof ResizeObserver=="function"?new ResizeObserver(le):null;Je?.observe(q),q?.addEventListener("scroll",le,{passive:!0});const _o=()=>{Yt||!q||F||(Yt=!0,q.classList.remove("is-skeleton"),q.innerHTML=Go,vo(r),yo(r),bo(r),So(r),q.querySelectorAll(".pf-modal-bento-section").forEach(d=>Je?.observe(d)),window.requestAnimationFrame(()=>{!F&&r.isConnected&&(r.classList.add("is-content-ready"),le())}))},Se=()=>{const d=be?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${d}px`),le()},Gt=be&&typeof ResizeObserver=="function"?new ResizeObserver(Se):null;Gt?.observe(be),Se();const Kt=()=>{!F&&r.classList.contains("is-ready")&&(pe(r,dt()),r.style.borderRadius=pt(),Se())};let Xt=!1;const _t=({restoreFocus:d=!1}={})=>{if(Xt||(Xt=!0,y.getAnimations?.({subtree:!0})?.forEach(H=>H.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Qe),window.removeEventListener("resize",Kt),Gt?.disconnect(),Je?.disconnect(),q?.removeEventListener("scroll",le),ne&&window.cancelAnimationFrame(ne),C?.modal===r&&(C=null),To(i),!d))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Ut=()=>{if(F)return;F=!0,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const d=r.getBoundingClientRect(),v=window.getComputedStyle(r).borderRadius,H=l.getBoundingClientRect();e.classList.remove("is-modal-source"),ve.cancel(),ye.cancel(),pe(r,d),r.style.borderRadius=v,r.style.transform="none";const D=a?1:320,ke=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v},{transform:ut(H,d),borderRadius:m}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});b.animate([{opacity:1},{opacity:0}],{duration:a?1:200,easing:"ease-out",fill:"forwards"}),ke.finished.finally(()=>_t({restoreFocus:!0}))},Le=()=>{if(F)return;const d=P()===t.id;Ut(),d&&(window.history.back(),window.setTimeout(()=>{if(P()!==t.id)return;const v=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete v[S],window.history.replaceState(v,"")},500))},Uo=d=>{if(K){if(t.cta?.newTab){lt(d)&&Le();return}ct(d,K)&&(d.preventDefault(),!F&&(F=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Qe),ve.cancel(),ye.cancel(),P()===t.id?window.location.replace(K.href):window.location.href=K.href))}},Qe=d=>{if(d.key==="Escape"){d.preventDefault(),Le();return}if(d.key!=="Tab")return;const v=[Ue,K].filter(Boolean),H=v.indexOf(document.activeElement),D=d.shiftKey?(H-1+v.length)%v.length:(H+1)%v.length;d.preventDefault(),v[D].focus()};C={layer:y,modal:r,projectId:t.id,closeModal:Ut,disposeModal:_t},document.addEventListener("keydown",Qe),window.addEventListener("resize",Kt),Ue.addEventListener("click",Le),K?.addEventListener("click",Uo),y.addEventListener("click",d=>{(d.target===y||d.target===b)&&Le()}),ye.finished.then(()=>{b.style.opacity="1",ye.cancel()}).catch(()=>{}),ve.finished.then(()=>{F||(pe(r,T),r.style.borderRadius=L,r.style.transform="none",ve.cancel(),Se(),r.classList.add("is-ready"),_o(),Ue.focus({preventScroll:!0}))}).catch(()=>{})},W=window.matchMedia("(max-width: 600px)"),Q=document.querySelector("[data-pf-type-filter]"),Eo=270,Mo=.36;Q&&(Q.innerHTML=`
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
      ${n.map(e=>Lo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const $=document.createElement("span");$.className="pf-work-cursor-label",$.dataset.pfWorkCursor="",$.setAttribute("aria-hidden","true"),$.innerHTML="<span>View Details</span>",document.body.append($);const Me=$.firstElementChild,mt=[...Q?[...Q.querySelectorAll("[data-project-type-filter]")]:[],...M.querySelectorAll("[data-project-type-filter]")],$o=Q?.querySelector(".pf-type-filter"),gt=document.documentElement,j=M.querySelector(".pf-floating-filter-scroll"),$e=[...M.querySelectorAll("[data-project-type-filter]")],Co=[...o.querySelectorAll(".pf-work[data-project-types]")],ht=o.querySelector(".pf-work-grid"),wt=o.querySelector(".pf-filter-empty");let z="",vt=0,yt=0,bt=0,ue=!1;const Po=()=>{window.clearTimeout(yt),window.clearTimeout(bt)},xo=e=>{if(e!==ue){if(ue=e,Po(),!e){M.classList.remove("is-visible"),bt=window.setTimeout(()=>{ue||gt.classList.remove("is-footer-yielding-to-filter")},220);return}gt.classList.add("is-footer-yielding-to-filter"),yt=window.setTimeout(()=>{ue&&M.classList.add("is-visible")},220)}},fe=()=>{if(!j||!W.matches){M.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,j.scrollWidth-j.clientWidth);M.classList.toggle("has-scroll-left",j.scrollLeft>1),M.classList.toggle("has-scroll-right",j.scrollLeft<e-1)},St=()=>{if(!j||!W.matches)return;const e=$e.find(l=>l.getAttribute("aria-pressed")==="true"),t=$e.indexOf(e);if(!e)return;const s=Math.max(0,j.scrollWidth-j.clientWidth),i=t<2?0:t>=$e.length-2?s:e.offsetLeft-(j.clientWidth-e.offsetWidth)/2;j.scrollTo({left:i,behavior:"smooth"})},Ce=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*Mo;xo(window.scrollY>Eo&&e>t)},Ro=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},Lt=e=>{z=e;let t=0;mt.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===z))}),St(),$o?.classList.toggle("is-filtering",!!z),Co.forEach(s=>{const i=s.dataset.projectTypes.split(" "),l=!z||i.includes(z);s.hidden=!l,l&&(t+=1)}),ht?.classList.toggle("is-single-result",t===1),wt&&(wt.hidden=t>0)};mt.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,s=e.dataset.projectTypeFilter,i=!M.contains(e)&&z===s;window.clearTimeout(vt),t.style.overflowAnchor="none",Lt(i?"":s),Ro(),vt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Ce,{passive:!0}),window.addEventListener("resize",()=>{Ce(),fe()},{passive:!0}),j?.addEventListener("scroll",fe,{passive:!0}),W.addEventListener?.("change",()=>{fe(),St()}),Ce(),Lt(""),fe();const c=o.querySelector("[data-pf-work-rail]"),Pe=c?[...c.querySelectorAll(".pf-work-set")]:[],kt=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),me=p?[...p.querySelectorAll(".pf-work-set")]:[],Tt=me[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Ao=80,qo=-80,xe=32,jo=12,Et=180,Mt=600;let Re,Ae=0,qe=0,x=0,je=xe,Fe=!1,Z=!1,$t=0,Ie=0,ee=!1,ge=!1,te=!1,We=0,B=0,N=0,I=0,Y=0,R=0,Be=0,oe=!1,Ct=0,He=0,re=!1,he=!1,se=!1,De=0;const Pt=({preservePosition:e=!1}={})=>{if(!c||!kt||Pe.length<3)return;const t=B,s=N,i=t?(c.scrollLeft-s)/t:0,l=c.getBoundingClientRect(),f=kt.getBoundingClientRect(),m=c.scrollLeft+f.left-l.left;B=Pe[2].getBoundingClientRect().left-Pe[1].getBoundingClientRect().left,N=m-(c.clientWidth-f.width)/2-(W.matches?Ao:0),c.scrollLeft=e?N+i*B:N,x=c.scrollLeft},Ve=()=>{if(!c||!B)return 0;const e=N-B*.5,t=N+B*.5;let s=c.scrollLeft;for(;s<e;)s+=B;for(;s>=t;)s-=B;const i=s-c.scrollLeft;return Math.abs(i)>.5&&(c.scrollLeft=s),i},xt=({preservePosition:e=!1}={})=>{if(!p||!Tt||me.length<3||!p.clientWidth)return;const t=I,s=Y,i=t?(p.scrollLeft-s)/t:0,l=p.getBoundingClientRect(),f=Tt.getBoundingClientRect(),m=p.scrollLeft+f.left-l.left;I=me[2].getBoundingClientRect().left-me[1].getBoundingClientRect().left,Y=m-(p.clientWidth-f.width)/2-qo,p.scrollLeft=e?Y+i*I:Y,R=p.scrollLeft},Oe=()=>{if(!p||!I)return 0;const e=Y-I*.5,t=Y+I*.5;let s=p.scrollLeft;for(;s<e;)s+=I;for(;s>=t;)s-=I;const i=s-p.scrollLeft;return Math.abs(i)>.5&&(p.scrollLeft=s),i},ze=()=>{x=c?.scrollLeft??x,qe=performance.now()+200},Rt=()=>{R=p?.scrollLeft??R,Be=performance.now()+200},Fo=()=>{window.clearTimeout(We),te=!0,x=c?.scrollLeft??x},At=()=>{window.clearTimeout(We),We=window.setTimeout(()=>{c&&(x=c.scrollLeft,x+=Ve(),te=!1,qe=performance.now()+Mt)},Et)},Io=()=>{window.clearTimeout(De),se=!0,R=p?.scrollLeft??R},qt=()=>{window.clearTimeout(De),De=window.setTimeout(()=>{p&&(R=p.scrollLeft,R+=Oe(),se=!1,Be=performance.now()+Mt)},Et)},jt=e=>{const t=Math.min((e-(Re??e))/1e3,.1),s=Fe?jo:xe;if(Re=e,je+=(s-je)*Math.min(t*6,1),c){const i=o.getBoundingClientRect(),l=i.bottom>0&&i.top<window.innerHeight;l&&!Z&&!te&&!se&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=qe&&(x+=t*je,c.scrollLeft=x,x+=Ve()),l&&p?.clientWidth&&I&&!oe&&!se&&!te&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Be&&(R-=t*xe,p.scrollLeft=R,R+=Oe())}Ae=requestAnimationFrame(jt)};!c||Ae||(Re=void 0,Ae=requestAnimationFrame(jt)),requestAnimationFrame(()=>{Pt(),xt()}),c?.addEventListener("mouseenter",()=>{Fe=!0}),c?.addEventListener("mouseleave",()=>{Fe=!1}),o.addEventListener("wheel",e=>{!c||e.ctrlKey||(ze(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||C)){if(e.pointerType==="touch"&&W.matches){Fo();return}Z=!0,ee=!1,$t=e.clientX,Ie=c.scrollLeft,ze()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!Z)return;const t=e.clientX-$t;!ee&&Math.abs(t)<=5||(ee||(ee=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=Ie-t,Ie+=Ve(),x=c.scrollLeft,ze())});const Wo=e=>{!c||!Z||(Z=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),x=c.scrollLeft,ee&&(ge=!0,window.setTimeout(()=>{ge=!1},0)))};c?.addEventListener("scroll",()=>{te&&(x=c.scrollLeft,At())},{passive:!0});const Ft=e=>{if(e.pointerType==="touch"&&W.matches){At();return}Wo(e)};c?.addEventListener("pointerup",Ft),c?.addEventListener("pointercancel",Ft),c?.addEventListener("click",e=>{ge&&(ge=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||C)){if(e.pointerType==="touch"&&W.matches){Io();return}oe=!0,re=!1,Ct=e.clientX,He=p.scrollLeft,Rt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!oe)return;const t=e.clientX-Ct;!re&&Math.abs(t)<=5||(re||(re=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=He-t,He+=Oe(),R=p.scrollLeft,Rt())});const Bo=e=>{!p||!oe||(oe=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),R=p.scrollLeft,re&&(he=!0,window.setTimeout(()=>{he=!1},0)))};p?.addEventListener("scroll",()=>{se&&(R=p.scrollLeft,qt())},{passive:!0});const It=e=>{if(e.pointerType==="touch"&&W.matches){qt();return}Bo(e)};p?.addEventListener("pointerup",It),p?.addEventListener("pointercancel",It),p?.addEventListener("click",e=>{he&&(he=!1,e.preventDefault(),e.stopPropagation())},!0);const Ho=70,Ne=14,Ye=12;let V=0,Wt=$.offsetWidth,Ge=$.offsetHeight;const Ke=()=>{Wt=$.offsetWidth,Ge=$.offsetHeight},Bt=e=>{!Me||Me.textContent===e||(Me.textContent=e,Ke())};document.fonts?.ready.then(Ke);const G=(e=0)=>{if(e){if(V)return;V=window.setTimeout(()=>{V=0,$.classList.remove("is-visible")},e);return}window.clearTimeout(V),V=0,$.classList.remove("is-visible")},Ht=()=>{window.clearTimeout(V),V=0,$.classList.add("is-visible")},Dt=e=>{const t=Wt/2,s=Math.min(Math.max(t+Ye,e.clientX),window.innerWidth-t-Ye),l=e.clientY+Ne+Ge+Ye<=window.innerHeight?e.clientY+Ne:e.clientY-Ne-Ge;$.style.transform=`translate3d(${s}px, ${l}px, 0) translateX(-50%)`};document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const t=e.target instanceof Element?e.target:null,s=t?.closest("[data-cursor-label]"),i=t?.closest(".pf-work");if(s){Bt(s.dataset.cursorLabel||"View Details"),Dt(e),Ht();return}if(i&&o.contains(i)){Bt("View Details"),Dt(e),Ht();return}if(t&&ht?.contains(t)){G(Ho);return}G()}),o.addEventListener("pointerleave",()=>G()),window.addEventListener("blur",()=>G()),window.addEventListener("scroll",()=>G(),{passive:!0}),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!ct(t,e))return;const s=n.find(i=>e.classList.contains(`pf-work--${i.id}`));s&&(J(s),G(),t.preventDefault(),ft(e,s))})}),window.addEventListener("resize",()=>{Ke(),requestAnimationFrame(()=>{Pt({preservePosition:!0}),xt({preservePosition:!0})})});const Vt=()=>{const e=P();if(C){C.projectId!==e&&C.closeModal();return}if(!e)return;const t=n.find(i=>i.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&ft(s,t,{pushHistory:!1})};return window.addEventListener("popstate",Vt),{resetModal:()=>C?.disposeModal(),syncModalWithHistory:Vt}},et=document.querySelector("[data-pf]"),Jt=document.querySelector("[data-about]"),X=document.querySelector(".about-photo-stack"),Qt=document.querySelector("[data-project-list]"),tr=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const or=document.querySelector(".counter-line"),Zt=document.querySelector(".fixed-project-meta"),rr=document.querySelector("[data-side-number]"),sr=document.querySelector("[data-side-wip]"),ir=document.querySelector("[data-side-title]"),ar=document.querySelector("[data-counter-wip]"),tt=document.querySelector("[data-year-rail]"),nr=[...document.querySelectorAll("[data-gnb-scroll]")],io=document.querySelector(".theme-toggle"),_=document.documentElement,ao="portfolio-last-project-slug",eo=760,lr=12,cr=8,no=window.matchMedia("(max-width: 600px)"),st=window.matchMedia("(prefers-reduced-motion: reduce)"),dr=3e3,pr=200,ur={work:40,experience:-50};let ot=!1,ce=0,Ze=0,to=0,lo=0;const fr=()=>{const o=X?.lastElementChild;!o||X.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),lo=window.setTimeout(()=>{X.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},pr))},co=()=>{window.clearInterval(to),window.clearTimeout(lo),X?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!X||X.children.length<2||st.matches)&&(to=window.setInterval(fr,dr))},mr=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},gr=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},hr=o=>{window.gtag?.("event","project_click",{project_name:o})},wr=o=>`'${String(o).slice(-2)}`,vr=o=>{const{start:n,end:u}=so.yearRange,h=Math.min(5,u-n+1),S=Math.min(Math.max(o-2,n),u-h+1);return Array.from({length:h},(U,O)=>S+O)},yr=o=>o.split("|").join(" "),br=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),Sr=()=>window.matchMedia("(max-width: 600px)").matches?cr:lr,Lr=()=>{const o=Sr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},kr=o=>{const n=o.getBoundingClientRect(),u=Lr(),h=window.getComputedStyle(o),S=window.getComputedStyle(o.querySelector(".project-media")),U=o.querySelector(".project-summary"),O=Number.parseFloat(h.rowGap||h.gap)||0,C=U?.getBoundingClientRect().height||0,de=Math.max(0,u.height-C-O),J=document.createElement("div"),P=o.cloneNode(!0);return P.classList.add("project-transition-card"),P.removeAttribute("href"),P.removeAttribute("aria-label"),P.setAttribute("aria-hidden","true"),Object.assign(P.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),P.style.setProperty("--project-media-shadow",S.boxShadow),J.className="project-transition-layer",J.append(P),document.body.append(J),{cardClone:P,targetRect:u,targetGridTemplateRows:`${de}px ${C}px`}},Tr=o=>{if(ot)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}ot=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:h,targetGridTemplateRows:S}=kr(o);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:S,opacity:0,offset:1}],{duration:eo,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},eo-120)},Er=()=>{ot=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},Mr=o=>{tt.innerHTML=vr(o.year).map(n=>{const u=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${u?'aria-current="true"':""}>${wr(n)}</span>
      `}).join("")},$r=()=>{Zt.classList.add("is-changing"),tt.classList.add("is-changing"),window.setTimeout(()=>{Zt.classList.remove("is-changing"),tt.classList.remove("is-changing")},180)};let Te=[],oo=-1;const it=({force:o=!1}={})=>{if(!no.matches){ce&&(_.style.removeProperty("--mobile-project-viewport"),ce=0,Ze=0);return}const n=window.innerWidth;!o&&ce&&n===Ze||(ce=window.innerHeight,Ze=n,_.style.setProperty("--mobile-project-viewport",`${ce}px`))},Cr=()=>{if(!et)return;const o=et.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;_.classList.toggle("is-pf-active",u)},Pr=()=>{if(!Jt)return;const o=Jt.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;_.classList.toggle("is-about-active",u)},xr=o=>{if(o===oo||o<0)return;const n=Qo[o],u=(o+1)/so.totalProjectCount*100;oo=o,$r(),tr.textContent=n.number,rr.textContent=n.number,sr.textContent=n.wip?"🚧":"",ar.textContent=n.wip?"🚧":"",ir.innerHTML=n.sideTitle.split("|").join("<br />"),or.style.setProperty("--progress",`${u}%`),gr(ao,n.slug),Mr(n)},Rr=()=>{if(!Te.length)return;const o=window.innerHeight/2,n=Te.map((u,h)=>{const S=u.getBoundingClientRect(),U=S.top+S.height/2;return{index:h,distance:Math.abs(U-o)}}).sort((u,h)=>u.distance-h.distance)[0]?.index;Te.forEach((u,h)=>{const S=h===n;u.classList.toggle("is-active",S),u.classList.toggle("is-inactive",!S)}),xr(n)},Ar=o=>{const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),u=ur[o.id]??0,h=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-u,S=Math.min(n,Math.max(0,h));window.scrollTo({top:S,behavior:st.matches?"auto":"smooth"})};let ro=0;const Ee=()=>{cancelAnimationFrame(ro),ro=requestAnimationFrame(()=>{Cr(),Pr(),Rr()})},po=o=>{_.dataset.theme=o,io.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},qr=localStorage.getItem("portfolio-theme")||"light",uo=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";st.addEventListener?.("change",co);co();const rt=er(et,Zo,yr);Te=[...document.querySelectorAll("[data-project]")];it({force:!0});po(qr);const jr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=uo()==="back_forward",u=o||(n?mr(ao):""),h=u?document.getElementById(u):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};jr();uo()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));io.addEventListener("click",()=>{po(_.dataset.theme==="dark"?"light":"dark")});nr.forEach(o=>{o.addEventListener("click",n=>{const u=document.querySelector(o.hash);u&&(n.preventDefault(),Ar(u))})});Qt?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!Qt.contains(n)||!br(o,n)||(hr(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),Tr(n))});window.addEventListener("scroll",Ee,{passive:!0});window.addEventListener("resize",()=>{it(),Ee()});no.addEventListener?.("change",()=>{it({force:!0}),Ee()});window.addEventListener("pagehide",()=>rt?.resetModal());window.addEventListener("pageshow",()=>{rt?.resetModal(),rt?.syncModalWithHistory(),Er()});Ee();
