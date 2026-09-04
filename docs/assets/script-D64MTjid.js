import{p as or,a as lo}from"./projects-BR9u8Pgk.js";const rr=[{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Store Finder Renewal for Business Impact",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-finder-renewal",projectMedia:"./assets/common/store-finder-renewal-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"modular-editorial-system",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/modular-editorial-system-main.avif",cta:{label:"View Case Study",href:"./projects/modular-editorial-system/",newTab:!1}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],sr=(r,a,p)=>{if(!r)return;const f=760,b="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let k=null;const ue=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Q=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},T=()=>window.history.state?.[b]||"",yo=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[b]:e},"")},lt=e=>e.deviceType==="web"?`
        <div class="pf-project-mockups pf-project-mockups--web" aria-hidden="true">
          <div class="pf-web-mockup">
            <img class="pf-web-screen" src="./assets/modular-editorial-system/main.png" alt="" />
            <img class="pf-web-frame" src="./assets/common/laptop.png" alt="" />
          </div>
        </div>
      `:e.deviceType==="mobile"?`
        <div class="pf-project-mockups pf-project-mockups--mobile" aria-hidden="true">
          <div class="pf-phone-mockup pf-phone-mockup--center">
            ${e.media==="store-finder-renewal"?`
            <video class="pf-phone-screen" autoplay muted loop playsinline preload="metadata" poster="./assets/store-finder-renewal/solution-tobe1.png">
              <source src="./assets/store-finder-renewal/solution-final-scroll.mp4" type="video/mp4" />
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',wo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & Short MRT Routes"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],Z=(e,t="video")=>`
    <div class="pf-modal-media-controls" role="group" aria-label="${e} controls">
      <button
        class="pf-modal-media-play-toggle"
        type="button"
        aria-label="Play ${t}"
        aria-pressed="false"
        data-modal-media-play-toggle
      ></button>
      <button
        class="pf-modal-media-replay"
        type="button"
        aria-label="Replay ${t}"
        data-modal-media-replay
      ></button>
    </div>
  `,ct=e=>{const t=wo[e-1];return`
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
      ${Z(t.label)}
    `},bo=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?ct(1):lt(e),Pe=[{start:0,end:5},{start:18,end:26}],vo=(e,t)=>{const o=e.id==="public-transport"?ct(t+2):"",s=e.id==="perp-dex"?[`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/logo-intro-poster.jpg" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
              ${Z("Logo introduction")}
            `,`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/sltp-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
              ${Z("Stop loss and take profit")}
            `,`
              <div class="pf-modal-perp-media pf-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="pf-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="pf-modal-perp-gif-frame pf-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
              ${Z("Multi-wallet animation","animation")}
            `,`
              <video class="pf-modal-perp-media pf-modal-perp-media--trading" muted playsinline preload="auto" poster="./assets/perp-dex/trading-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
              ${Z("Perpetual trading")}
            `][t]:"",i=e.media==="store-finder-renewal"&&t<Pe.length?`
          <div class="pf-modal-store-finder-video-frame">
            <video
              class="pf-modal-store-finder-video pf-modal-segment-video"
              autoplay
              muted
              playsinline
              preload="auto"
              poster="./assets/store-finder-renewal/solution-tobe1.png"
              data-segment-start="${Pe[t].start}"
              data-segment-end="${Pe[t].end}"
            >
              <source src="./assets/store-finder-renewal/solution-final-scroll.mp4" type="video/mp4" />
            </video>
          </div>
        `:"",u=e.id==="cta-enhancement"&&t===0?`
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
            <div class="pf-modal-result-metrics pf-modal-result-metrics--summary pf-modal-result-metrics--cta inner-shadow-md">
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">226.2%</strong>
                <p class="pf-modal-result-label">Pickup Conversion</p>
              </div>
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">32.6%</strong>
                <p class="pf-modal-result-label">Total Pickup Orders</p>
              </div>
            </div>
          </div>
        `:"",w=e.id==="modular-editorial-system"&&t===0?`
          <div class="pf-modal-modular-editorial-system-roller">
            <div class="pf-modal-modular-editorial-system-track">
              <img src="./assets/modular-editorial-system/structure.png" alt="" />
              <img src="./assets/modular-editorial-system/props.png" alt="" />
            </div>
            <div class="pf-modal-modular-editorial-system-carousel">
              <span class="pf-modal-modular-editorial-system-carousel-segment pf-modal-modular-editorial-system-carousel-segment--1"></span>
              <span class="pf-modal-modular-editorial-system-carousel-segment pf-modal-modular-editorial-system-carousel-segment--2"></span>
            </div>
          </div>
        `:e.id==="modular-editorial-system"&&t===1?'<img class="pf-modal-modular-editorial-system-interface" src="./assets/modular-editorial-system/interface.png" alt="" />':"",x=e.media==="store-finder-renewal"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics pf-modal-result-metrics--summary pf-modal-result-metrics--store-finder inner-shadow-md">
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">32.9%</strong>
                <p class="pf-modal-result-label">Availability Page Views</p>
              </div>
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--decrease">18%</strong>
                <p class="pf-modal-result-label">Inquiry call volume</p>
              </div>
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--neutral">~11%</strong>
                <p class="pf-modal-result-label">Pickup conversion</p>
              </div>
            </div>
          </div>
        `:"",v=t===0&&["cta-enhancement","store-finder"].includes(e.id)||e.id==="modular-editorial-system"&&t===1?" inner-shadow-lg":"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}${v}">
        ${o||s||i||u||m||w||x}
      </div>
    `},So=e=>{if(!e.matches(".pf-work--modular-editorial-system"))return;const t=s=>s.matches(`
        .pf-work--modular-editorial-system :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        )
      `),o=s=>{const i=s.videoWidth||s.naturalWidth||s.width,u=s.videoHeight||s.naturalHeight||s.height;if(!i||!u)return null;const m=16,w=document.createElement("canvas"),x=w.getContext("2d",{willReadFrequently:!0});if(!x)return null;w.width=m,w.height=m;try{x.drawImage(s,0,0,m,m);const y=x.getImageData(0,0,m,m).data;let v=0,n=0,$=0,P=0;for(let j=0;j<m;j+=1)for(let A=0;A<m;A+=1){if(A>1&&A<m-2&&j>1&&j<m-2)continue;const q=(j*m+A)*4,g=y[q+3]/255;g<.2||(v+=y[q]*g,n+=y[q+1]*g,$+=y[q+2]*g,P+=g)}return P?`rgb(${Math.round(v/P)} ${Math.round(n/P)} ${Math.round($/P)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(s=>{if(t(s))return;const i=s.querySelector("img, video, canvas");if(!i)return;const u=()=>{if(!s.isConnected)return;const m=o(i);m&&(s.style.setProperty("--pf-modal-media-background",m),s.classList.add("has-media-sampled-background"))};if(i instanceof HTMLImageElement){i.complete&&i.naturalWidth?u():i.addEventListener("load",u,{once:!0});return}if(i instanceof HTMLVideoElement){i.readyState>=2?u():i.addEventListener("loadeddata",u,{once:!0});return}window.requestAnimationFrame(u)})},Lo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const o=Number(t.dataset.segmentStart),s=Number(t.dataset.segmentEnd),i=()=>{t.currentTime=o,t.play().catch(()=>{})},u=()=>{t.currentTime=o,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",u,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=s&&i()}),t.addEventListener("ended",i),t.readyState>=1&&u()})},dt=e=>e.readyState>=1?Promise.resolve():new Promise(t=>{e.addEventListener("loadedmetadata",t,{once:!0}),e.addEventListener("error",t,{once:!0})}),pt=e=>{const{container:t,video:o}=e,s=t.querySelector("[data-modal-media-play-toggle]"),i=t.querySelector("[data-modal-media-replay]");o.loop=!1;const u=()=>{const w=!o.paused&&!o.ended;t.classList.toggle("is-playing",w),s?.classList.toggle("is-playing",w),s?.setAttribute("aria-label",w?"Pause video":"Play video"),s?.setAttribute("aria-pressed",String(w))},m=()=>{t.isConnected&&(o.currentTime=0,o.play().catch(u),u())};return s?.addEventListener("click",()=>{if(!o.paused&&!o.ended){o.pause();return}o.ended&&(o.currentTime=0),o.play().catch(u),u()}),i?.addEventListener("click",m),o.addEventListener("play",u),o.addEventListener("pause",u),o.addEventListener("ended",u),o.addEventListener("loadedmetadata",u),u(),{...e,startFromBeginning:m}},ko=e=>{const{container:t,gif:o}=e,s=o.querySelector("[data-perp-gif-frame]"),i=o.querySelector("[data-perp-gif-player]"),u=t.querySelector("[data-modal-media-play-toggle]"),m=t.querySelector("[data-modal-media-replay]"),w=o.dataset.perpGifSrc,x=Number(o.dataset.perpGifDuration||6600),y=s?.getContext("2d");let v=0,n=0,$=!1;const P=()=>{t.classList.toggle("is-playing",$),u?.classList.toggle("is-playing",$),u?.setAttribute("aria-label",$?"Pause animation":"Play animation"),u?.setAttribute("aria-pressed",String($))},j=()=>{if(!(!s||!y||!i?.naturalWidth)){(!s.width||!s.height)&&(s.width=i.naturalWidth,s.height=i.naturalHeight);try{y.drawImage(i,0,0,s.width,s.height)}catch{}}},A=()=>{window.clearTimeout(v),j(),i?.removeAttribute("src"),$=!1,P()},q=()=>{if(!t.isConnected||!i||!w)return;window.clearTimeout(v);const z=++n;i.removeAttribute("src"),i.src=`${w}?play=${z}`,$=!0,P(),v=window.setTimeout(()=>{z===n&&t.isConnected&&A()},x)},g=new Image;return g.addEventListener("load",()=>{!s||!y||(s.width=g.naturalWidth,s.height=g.naturalHeight,y.drawImage(g,0,0))},{once:!0}),g.src=w,u?.addEventListener("click",()=>{$?A():q()}),m?.addEventListener("click",q),P(),{...e,startFromBeginning:q}},To=e=>{if(!e.matches(".pf-work--perp-dex"))return;const t=[...e.querySelectorAll(".pf-modal-bento-placeholder")].map(o=>({container:o,video:o.querySelector("[data-perp-video]"),gif:o.querySelector("[data-perp-gif]")})).filter(o=>o.video||o.gif).map(o=>o.video?pt(o):ko(o));t.length&&Promise.all(t.filter(o=>o.video).map(o=>dt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Mo=e=>{if(!e.matches(".pf-work--public-transport"))return;const t=[...e.querySelectorAll("[data-public-transport-video]")].map(o=>({video:o,order:Number(o.dataset.publicTransportVideoOrder),container:o.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(o=>o.container).sort((o,s)=>o.order-s.order).map(pt);t.length&&Promise.all(t.map(o=>dt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Eo=(e,t=!1)=>{const o=e.types?.length?e.types:[e.type||"others"],s=e.id==="public-transport"?'<span class="pf-work-badge">AI-built</span>':"",i=`
      <div class="pf-work-card">
        ${lt(e)}
        ${s}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${ue(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${i}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${o.join(" ")}" draggable="false" aria-label="${p(e.title)} project detail">${i}</a>`},ut=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,mt=(e,t)=>ut(e)&&!t.target&&!t.hasAttribute("download"),ft=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},gt=()=>"24px",me=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},ht=(e,t)=>{const o=t.width?e.width/t.width:1,s=t.height?e.height/t.height:1,i=e.left-t.left,u=e.top-t.top;return`translate3d(${i}px, ${u}px, 0) scale(${o}, ${s})`},$o=()=>{const e=[...r.querySelectorAll(".pf-work video")],t=e.filter(o=>!o.paused&&!o.ended);return e.forEach(o=>o.pause()),t},Po=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},yt=(e,t,{pushHistory:o=!0}={})=>{if(k)return;o&&yo(t.id);const s=$o(),i=e.querySelector(".pf-work-card")||e,u=i.getBoundingClientRect(),m=window.getComputedStyle(i).borderRadius,w=ft(),x=gt(),y=document.createElement("div"),v=document.createElement("div"),n=document.createElement("div"),$=`pf-modal-${t.id}-title`,P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,j=P?1:f,A=t.cta?`
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
      `:"",q=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",g=t.id==="perp-dex",z=t.id==="public-transport",No=z?'<span class="pf-work-badge pf-work-badge--modal">AI-built</span>':"",Kt=g?4:z?2:3,Yo=Array.from({length:Kt},(c,h)=>vo(t,h)),Ko=Array.from({length:Kt},(c,h)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${h+1} pf-modal-bento-skeleton"></div>
      `),ne=z,be=!t.cta&&!g&&!ne,Je=t.deviceType==="web"&&!ne&&!be,Xt=t.id==="cta-enhancement",Gt=c=>{const h=Xt?c[0]:c.slice(0,2).join("");return g?`
          <div class="pf-modal-perp-left">
            ${c[0]}
            <div class="pf-modal-perp-center-bottom">
              ${c[1]}
              ${c[2]}
            </div>
          </div>
          ${c[3]}
        `:ne||be?c.join(""):Je?`<div class="pf-modal-bento-side">${c.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Xt?" pf-modal-bento-stack-top--single":""}">
              ${h}
            </div>
            ${c[2]}
          </div>
        `},Xo=Gt(Yo),Go=Gt(Ko),_o=g?"":`
        <div class="pf-modal-bento-feature">
          ${bo(t)}
        </div>
      `,Uo=`
      <section class="pf-modal-bento-section${Je?" pf-modal-bento-section--web":""}${ne?" pf-modal-bento-section--three-up":""}${be?" pf-modal-bento-section--four-up":""}${g?" pf-modal-bento-section--perp-dex":""}"${g||z?"":' aria-hidden="true"'}>
        ${_o}
        ${Xo}
      </section>
    `,Jo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Je?" pf-modal-bento-section--web":""}${ne?" pf-modal-bento-section--three-up":""}${be?" pf-modal-bento-section--four-up":""}${g?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${g?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Go}
      </section>
    `;y.className="pf-modal-layer",v.className="pf-modal-backdrop",v.style.opacity="0",n.className=`pf-work-modal pf-work--${t.id}${q?" pf-work-modal--has-description":""}${A?"":" pf-work-modal--no-cta"}`,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",$),n.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Jo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${A?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <div class="pf-modal-title-row">
            <h2 id="${$}">${t.title}</h2>
            ${No}
          </div>
          ${ue(t)}
        </div>
        ${A||q}
      </div>
    `,me(n,w),n.style.borderRadius=x,n.style.transformOrigin="top left",y.append(v,n),document.body.append(y),n.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ve=n.animate([{transform:ht(u,w),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:x}],{duration:j,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Se=v.animate([{opacity:0},{opacity:1}],{duration:Math.min(j,420),easing:"ease-out",fill:"forwards"}),Qe=n.querySelector(".pf-modal-close"),G=n.querySelector(".pf-modal-cta"),Le=n.querySelector(".pf-modal-footer"),C=n.querySelector(".pf-modal-card-content"),le=n.querySelector(".pf-modal-scroll-indicator");let _t=!1,F=!1,ce=0;const Qo=()=>{if(ce=0,!C||!le||F)return;const c=C.scrollHeight-C.clientHeight,h=8,H=Le?.offsetHeight??0,D=Math.max(0,n.clientHeight-H-h*2);if(c<=1||D<=0){le.classList.remove("is-visible");return}const Me=Math.min(D,Math.max(36,D*(C.clientHeight/C.scrollHeight))),tr=Math.min(1,Math.max(0,C.scrollTop/c))*(D-Me);le.style.height=`${Me}px`,le.style.transform=`translate3d(0, ${tr}px, 0)`,le.classList.add("is-visible")},de=()=>{ce||(ce=window.requestAnimationFrame(Qo))},Ze=typeof ResizeObserver=="function"?new ResizeObserver(de):null;Ze?.observe(C),C?.addEventListener("scroll",de,{passive:!0});const Zo=()=>{_t||!C||F||(_t=!0,C.classList.remove("is-skeleton"),C.innerHTML=Uo,So(n),Lo(n),To(n),Mo(n),C.querySelectorAll(".pf-modal-bento-section").forEach(c=>Ze?.observe(c)),window.requestAnimationFrame(()=>{!F&&n.isConnected&&(n.classList.add("is-content-ready"),de())}))},ke=()=>{const c=Le?.offsetHeight??0;n.style.setProperty("--pf-modal-footer-space",`${c}px`),de()},Ut=Le&&typeof ResizeObserver=="function"?new ResizeObserver(ke):null;Ut?.observe(Le),ke();const Jt=()=>{!F&&n.classList.contains("is-ready")&&(me(n,ft()),n.style.borderRadius=gt(),ke())};let Qt=!1;const Zt=({restoreFocus:c=!1}={})=>{if(Qt||(Qt=!0,y.getAnimations?.({subtree:!0})?.forEach(H=>H.cancel()),y.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",et),window.removeEventListener("resize",Jt),Ut?.disconnect(),Ze?.disconnect(),C?.removeEventListener("scroll",de),ce&&window.cancelAnimationFrame(ce),k?.modal===n&&(k=null),Po(s),!c))return;(e.matches("a")?e:r.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},eo=()=>{if(F)return;F=!0,n.classList.add("is-closing"),n.classList.remove("is-revealing","is-ready","is-content-ready");const c=n.getBoundingClientRect(),h=window.getComputedStyle(n).borderRadius,H=i.getBoundingClientRect();e.classList.remove("is-modal-source"),ve.cancel(),Se.cancel(),me(n,c),n.style.borderRadius=h,n.style.transform="none";const D=P?1:320,Me=n.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:h},{transform:ht(H,c),borderRadius:m}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});v.animate([{opacity:1},{opacity:0}],{duration:P?1:200,easing:"ease-out",fill:"forwards"}),Me.finished.finally(()=>Zt({restoreFocus:!0}))},Te=()=>{if(F)return;const c=T()===t.id;eo(),c&&(window.history.back(),window.setTimeout(()=>{if(T()!==t.id)return;const h=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete h[b],window.history.replaceState(h,"")},500))},er=c=>{if(G){if(t.cta?.newTab){ut(c)&&Te();return}mt(c,G)&&(c.preventDefault(),!F&&(F=!0,n.classList.add("is-navigating"),document.removeEventListener("keydown",et),ve.cancel(),Se.cancel(),T()===t.id?window.location.replace(G.href):window.location.href=G.href))}},et=c=>{if(c.key==="Escape"){c.preventDefault(),Te();return}if(c.key!=="Tab")return;const h=[Qe,G].filter(Boolean),H=h.indexOf(document.activeElement),D=c.shiftKey?(H-1+h.length)%h.length:(H+1)%h.length;c.preventDefault(),h[D].focus()};k={layer:y,modal:n,projectId:t.id,closeModal:eo,disposeModal:Zt},document.addEventListener("keydown",et),window.addEventListener("resize",Jt),Qe.addEventListener("click",Te),G?.addEventListener("click",er),y.addEventListener("click",c=>{(c.target===y||c.target===v)&&Te()}),Se.finished.then(()=>{v.style.opacity="1",Se.cancel()}).catch(()=>{}),ve.finished.then(()=>{F||(me(n,w),n.style.borderRadius=x,n.style.transform="none",ve.cancel(),ke(),n.classList.add("is-ready"),Zo(),Qe.focus({preventScroll:!0}))}).catch(()=>{})},I=window.matchMedia("(max-width: 600px)"),ee=document.querySelector("[data-pf-type-filter]"),Co=270,Ao=.36;ee&&(ee.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${O.map(({value:e,label:t},o)=>`
            ${o>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
            <button
              class="pf-type-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}</button>
          `).join("")}
      </div>
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const S=document.createElement("div");S.className="pf-floating-filter",S.dataset.pfFloatingFilter="",S.setAttribute("role","group"),S.setAttribute("aria-label","Filter projects by type"),S.innerHTML=`
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
  `,document.body.append(S),r.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${a.map(e=>Eo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const L=document.createElement("span");L.className="pf-work-cursor-label",L.dataset.pfWorkCursor="",L.setAttribute("aria-hidden","true"),L.innerHTML="<span>View Details</span>",document.body.append(L);const Ce=L.firstElementChild,wt=[...ee?[...ee.querySelectorAll("[data-project-type-filter]")]:[],...S.querySelectorAll("[data-project-type-filter]")],Ro=ee?.querySelector(".pf-type-filter"),bt=document.documentElement,R=S.querySelector(".pf-floating-filter-scroll"),Ae=[...S.querySelectorAll("[data-project-type-filter]")],xo=[...r.querySelectorAll(".pf-work[data-project-types]")],vt=r.querySelector(".pf-work-grid"),St=r.querySelector(".pf-filter-empty");let N="",Lt=0,kt=0,Tt=0,fe=!1;const qo=()=>{window.clearTimeout(kt),window.clearTimeout(Tt)},jo=e=>{if(e!==fe){if(fe=e,qo(),!e){S.classList.remove("is-visible"),Tt=window.setTimeout(()=>{fe||bt.classList.remove("is-footer-yielding-to-filter")},220);return}bt.classList.add("is-footer-yielding-to-filter"),kt=window.setTimeout(()=>{fe&&S.classList.add("is-visible")},220)}},ge=()=>{if(!R||!I.matches){S.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,R.scrollWidth-R.clientWidth);S.classList.toggle("has-scroll-left",R.scrollLeft>1),S.classList.toggle("has-scroll-right",R.scrollLeft<e-1)},Mt=()=>{if(!R||!I.matches)return;const e=Ae.find(i=>i.getAttribute("aria-pressed")==="true"),t=Ae.indexOf(e);if(!e)return;const o=Math.max(0,R.scrollWidth-R.clientWidth),s=t<2?0:t>=Ae.length-2?o:e.offsetLeft-(R.clientWidth-e.offsetWidth)/2;R.scrollTo({left:s,behavior:"smooth"})},Re=()=>{const e=r.getBoundingClientRect().bottom,t=window.innerHeight*Ao;jo(window.scrollY>Co&&e>t)},Fo=()=>{const e=Math.max(0,r.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},Et=e=>{N=e;let t=0;wt.forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.projectTypeFilter===N))}),Mt(),Ro?.classList.toggle("is-filtering",!!N),xo.forEach(o=>{const s=o.dataset.projectTypes.split(" "),i=!N||s.includes(N);o.hidden=!i,i&&(t+=1)}),vt?.classList.toggle("is-single-result",t===1),St&&(St.hidden=t>0)};wt.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,o=e.dataset.projectTypeFilter,s=!S.contains(e)&&N===o;window.clearTimeout(Lt),t.style.overflowAnchor="none",Et(s?"":o),Fo(),Lt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Re,{passive:!0}),window.addEventListener("resize",()=>{Re(),ge()},{passive:!0}),R?.addEventListener("scroll",ge,{passive:!0}),I.addEventListener?.("change",()=>{ge(),Mt()}),Re(),Et(""),ge();const l=r.querySelector("[data-pf-work-rail]"),xe=l?[...l.querySelectorAll(".pf-work-set")]:[],$t=r.querySelector(".pf-work-set--primary .pf-work"),d=r.querySelector("[data-pf-work-rail-secondary]"),he=d?[...d.querySelectorAll(".pf-work-set")]:[],Pt=he[1]?.querySelector(".pf-work:nth-child(4)");r.querySelector("[data-mobile-pf-work-rail]"),r.querySelector("[data-mobile-pf-work-rail-secondary]");const Wo=80,Io=-80,qe=32,Bo=12,Ct=180,At=600;let je,Fe=0,We=0,M=0,Ie=qe,Be=!1,te=!1,Rt=0,He=0,oe=!1,ye=!1,re=!1,De=0,B=0,Y=0,W=0,K=0,E=0,Ve=0,se=!1,xt=0,ze=0,ae=!1,we=!1,ie=!1,Oe=0;const qt=({preservePosition:e=!1}={})=>{if(!l||!$t||xe.length<3)return;const t=B,o=Y,s=t?(l.scrollLeft-o)/t:0,i=l.getBoundingClientRect(),u=$t.getBoundingClientRect(),m=l.scrollLeft+u.left-i.left;B=xe[2].getBoundingClientRect().left-xe[1].getBoundingClientRect().left,Y=m-(l.clientWidth-u.width)/2-(I.matches?Wo:0),l.scrollLeft=e?Y+s*B:Y,M=l.scrollLeft},Ne=()=>{if(!l||!B)return 0;const e=Y-B*.5,t=Y+B*.5;let o=l.scrollLeft;for(;o<e;)o+=B;for(;o>=t;)o-=B;const s=o-l.scrollLeft;return Math.abs(s)>.5&&(l.scrollLeft=o),s},jt=({preservePosition:e=!1}={})=>{if(!d||!Pt||he.length<3||!d.clientWidth)return;const t=W,o=K,s=t?(d.scrollLeft-o)/t:0,i=d.getBoundingClientRect(),u=Pt.getBoundingClientRect(),m=d.scrollLeft+u.left-i.left;W=he[2].getBoundingClientRect().left-he[1].getBoundingClientRect().left,K=m-(d.clientWidth-u.width)/2-Io,d.scrollLeft=e?K+s*W:K,E=d.scrollLeft},Ye=()=>{if(!d||!W)return 0;const e=K-W*.5,t=K+W*.5;let o=d.scrollLeft;for(;o<e;)o+=W;for(;o>=t;)o-=W;const s=o-d.scrollLeft;return Math.abs(s)>.5&&(d.scrollLeft=o),s},Ke=()=>{M=l?.scrollLeft??M,We=performance.now()+200},Ft=()=>{E=d?.scrollLeft??E,Ve=performance.now()+200},Ho=()=>{window.clearTimeout(De),re=!0,M=l?.scrollLeft??M},Wt=()=>{window.clearTimeout(De),De=window.setTimeout(()=>{l&&(M=l.scrollLeft,M+=Ne(),re=!1,We=performance.now()+At)},Ct)},Do=()=>{window.clearTimeout(Oe),ie=!0,E=d?.scrollLeft??E},It=()=>{window.clearTimeout(Oe),Oe=window.setTimeout(()=>{d&&(E=d.scrollLeft,E+=Ye(),ie=!1,Ve=performance.now()+At)},Ct)},Bt=e=>{const t=Math.min((e-(je??e))/1e3,.1),o=Be?Bo:qe;if(je=e,Ie+=(o-Ie)*Math.min(t*6,1),l){const s=r.getBoundingClientRect(),i=s.bottom>0&&s.top<window.innerHeight;i&&!te&&!re&&!ie&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=We&&(M+=t*Ie,l.scrollLeft=M,M+=Ne()),i&&d?.clientWidth&&W&&!se&&!ie&&!re&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ve&&(E-=t*qe,d.scrollLeft=E,E+=Ye())}Fe=requestAnimationFrame(Bt)};!l||Fe||(je=void 0,Fe=requestAnimationFrame(Bt)),requestAnimationFrame(()=>{qt(),jt()}),l?.addEventListener("mouseenter",()=>{Be=!0}),l?.addEventListener("mouseleave",()=>{Be=!1}),r.addEventListener("wheel",e=>{!l||e.ctrlKey||(Ke(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),l?.addEventListener("pointerdown",e=>{if(!(e.button!==0||k)){if(e.pointerType==="touch"&&I.matches){Ho();return}te=!0,oe=!1,Rt=e.clientX,He=l.scrollLeft,Ke()}}),l?.addEventListener("dragstart",e=>{e.preventDefault()}),l?.addEventListener("pointermove",e=>{if(!te)return;const t=e.clientX-Rt;!oe&&Math.abs(t)<=5||(oe||(oe=!0,l.classList.add("is-dragging"),l.setPointerCapture(e.pointerId)),l.scrollLeft=He-t,He+=Ne(),M=l.scrollLeft,Ke())});const Vo=e=>{!l||!te||(te=!1,l.classList.remove("is-dragging"),l.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),M=l.scrollLeft,oe&&(ye=!0,window.setTimeout(()=>{ye=!1},0)))};l?.addEventListener("scroll",()=>{re&&(M=l.scrollLeft,Wt())},{passive:!0});const Ht=e=>{if(e.pointerType==="touch"&&I.matches){Wt();return}Vo(e)};l?.addEventListener("pointerup",Ht),l?.addEventListener("pointercancel",Ht),l?.addEventListener("click",e=>{ye&&(ye=!1,e.preventDefault(),e.stopPropagation())},!0),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||k)){if(e.pointerType==="touch"&&I.matches){Do();return}se=!0,ae=!1,xt=e.clientX,ze=d.scrollLeft,Ft()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!se)return;const t=e.clientX-xt;!ae&&Math.abs(t)<=5||(ae||(ae=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=ze-t,ze+=Ye(),E=d.scrollLeft,Ft())});const zo=e=>{!d||!se||(se=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),E=d.scrollLeft,ae&&(we=!0,window.setTimeout(()=>{we=!1},0)))};d?.addEventListener("scroll",()=>{ie&&(E=d.scrollLeft,It())},{passive:!0});const Dt=e=>{if(e.pointerType==="touch"&&I.matches){It();return}zo(e)};d?.addEventListener("pointerup",Dt),d?.addEventListener("pointercancel",Dt),d?.addEventListener("click",e=>{we&&(we=!1,e.preventDefault(),e.stopPropagation())},!0);const Oo=70,Xe=14,Ge=12;let V=0,Vt=L.offsetWidth,_e=L.offsetHeight;const Ue=()=>{Vt=L.offsetWidth,_e=L.offsetHeight},zt=e=>{!Ce||Ce.textContent===e||(Ce.textContent=e,Ue())};document.fonts?.ready.then(Ue);const X=(e=0)=>{if(e){if(V)return;V=window.setTimeout(()=>{V=0,L.classList.remove("is-visible")},e);return}window.clearTimeout(V),V=0,L.classList.remove("is-visible")},Ot=()=>{window.clearTimeout(V),V=0,L.classList.add("is-visible")},Nt=e=>{const t=Vt/2,o=Math.min(Math.max(t+Ge,e.clientX),window.innerWidth-t-Ge),i=e.clientY+Xe+_e+Ge<=window.innerHeight?e.clientY+Xe:e.clientY-Xe-_e;L.style.transform=`translate3d(${o}px, ${i}px, 0) translateX(-50%)`};document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const t=e.target instanceof Element?e.target:null,o=t?.closest("[data-cursor-label]"),s=t?.closest(".pf-work");if(o){zt(o.dataset.cursorLabel||"View Details"),Nt(e),Ot();return}if(s&&r.contains(s)){zt("View Details"),Nt(e),Ot();return}if(t&&vt?.contains(t)){X(Oo);return}X()}),r.addEventListener("pointerleave",()=>X()),window.addEventListener("blur",()=>X()),window.addEventListener("scroll",()=>X(),{passive:!0}),r.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!mt(t,e))return;const o=a.find(s=>e.classList.contains(`pf-work--${s.id}`));o&&(Q(o),X(),t.preventDefault(),yt(e,o))})}),window.addEventListener("resize",()=>{Ue(),requestAnimationFrame(()=>{qt({preservePosition:!0}),jt({preservePosition:!0})})});const Yt=()=>{const e=T();if(k){k.projectId!==e&&k.closeModal();return}if(!e)return;const t=a.find(s=>s.id===e),o=r.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&o&&yt(o,t,{pushHistory:!1})};return window.addEventListener("popstate",Yt),{resetModal:()=>k?.disposeModal(),syncModalWithHistory:Yt}},ot=document.querySelector("[data-pf]"),to=document.querySelector("[data-about]"),_=document.querySelector(".about-photo-stack"),oo=document.querySelector("[data-project-list]"),ar=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const ir=document.querySelector(".counter-line"),ro=document.querySelector(".fixed-project-meta"),nr=document.querySelector("[data-side-number]"),lr=document.querySelector("[data-side-wip]"),cr=document.querySelector("[data-side-title]"),dr=document.querySelector("[data-counter-wip]"),rt=document.querySelector("[data-year-rail]"),pr=[...document.querySelectorAll("[data-gnb-scroll]")],co=document.querySelector(".theme-toggle"),U=document.documentElement,po="portfolio-last-project-slug",so=760,ur=12,mr=8,uo=window.matchMedia("(max-width: 600px)"),it=window.matchMedia("(prefers-reduced-motion: reduce)"),fr=3e3,gr=200,hr={work:40,experience:-50};let st=!1,pe=0,tt=0,ao=0,mo=0;const yr=()=>{const r=_?.lastElementChild;!r||_.children.length<2||r.classList.contains("is-moving-to-back")||(r.classList.add("is-moving-to-back"),mo=window.setTimeout(()=>{_.prepend(r),window.requestAnimationFrame(()=>r.classList.remove("is-moving-to-back"))},gr))},fo=()=>{window.clearInterval(ao),window.clearTimeout(mo),_?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!_||_.children.length<2||it.matches)&&(ao=window.setInterval(yr,fr))},wr=r=>{try{return window.sessionStorage?.getItem(r)||""}catch{return""}},br=(r,a)=>{try{window.sessionStorage?.setItem(r,a)}catch{}},vr=r=>{window.gtag?.("event","project_click",{project_name:r})},Sr=r=>`'${String(r).slice(-2)}`,Lr=r=>{const{start:a,end:p}=lo.yearRange,f=Math.min(5,p-a+1),b=Math.min(Math.max(r-2,a),p-f+1);return Array.from({length:f},(J,O)=>b+O)},kr=r=>r.split("|").join(" "),Tr=(r,a)=>r.button===0&&!r.defaultPrevented&&!r.metaKey&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!a.target&&!a.hasAttribute("download"),Mr=()=>window.matchMedia("(max-width: 600px)").matches?mr:ur,Er=()=>{const r=Mr();return{top:r,left:r,width:window.innerWidth-r*2,height:window.innerHeight-r*2}},$r=r=>{const a=r.getBoundingClientRect(),p=Er(),f=window.getComputedStyle(r),b=window.getComputedStyle(r.querySelector(".project-media")),J=r.querySelector(".project-summary"),O=Number.parseFloat(f.rowGap||f.gap)||0,k=J?.getBoundingClientRect().height||0,ue=Math.max(0,p.height-k-O),Q=document.createElement("div"),T=r.cloneNode(!0);return T.classList.add("project-transition-card"),T.removeAttribute("href"),T.removeAttribute("aria-label"),T.setAttribute("aria-hidden","true"),Object.assign(T.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:f.gap,gridTemplateRows:f.gridTemplateRows,maxHeight:"none"}),T.style.setProperty("--project-media-shadow",b.boxShadow),Q.className="project-transition-layer",Q.append(T),document.body.append(Q),{cardClone:T,targetRect:p,targetGridTemplateRows:`${ue}px ${k}px`}},Pr=r=>{if(st)return;const a=r.closest(".project-section");if(!a){window.location.href=r.href;return}st=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:p,targetRect:f,targetGridTemplateRows:b}=$r(r);p.animate([{top:p.style.top,left:p.style.left,width:p.style.width,height:p.style.height,gridTemplateRows:p.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${f.top}px`,left:`${f.left}px`,width:`${f.width}px`,height:`${f.height}px`,gridTemplateRows:b,opacity:0,offset:1}],{duration:so,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=r.href},so-120)},Cr=()=>{st=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(r=>r.remove()),document.querySelectorAll(".is-transition-source").forEach(r=>{r.classList.remove("is-transition-source")})},Ar=r=>{rt.innerHTML=Lr(r.year).map(a=>{const p=a===r.year;return`
        <span class="year-rail-item" data-year="${a}" ${p?'aria-current="true"':""}>${Sr(a)}</span>
      `}).join("")},Rr=()=>{ro.classList.add("is-changing"),rt.classList.add("is-changing"),window.setTimeout(()=>{ro.classList.remove("is-changing"),rt.classList.remove("is-changing")},180)};let Ee=[],io=-1;const nt=({force:r=!1}={})=>{if(!uo.matches){pe&&(U.style.removeProperty("--mobile-project-viewport"),pe=0,tt=0);return}const a=window.innerWidth;!r&&pe&&a===tt||(pe=window.innerHeight,tt=a,U.style.setProperty("--mobile-project-viewport",`${pe}px`))},xr=()=>{if(!ot)return;const r=ot.getBoundingClientRect(),a=window.innerHeight/2,p=r.top<=a&&r.bottom>=a;U.classList.toggle("is-pf-active",p)},qr=()=>{if(!to)return;const r=to.getBoundingClientRect(),a=window.innerHeight/2,p=r.top<=a&&r.bottom>=a;U.classList.toggle("is-about-active",p)},jr=r=>{if(r===io||r<0)return;const a=or[r],p=(r+1)/lo.totalProjectCount*100;io=r,Rr(),ar.textContent=a.number,nr.textContent=a.number,lr.textContent=a.wip?"🚧":"",dr.textContent=a.wip?"🚧":"",cr.innerHTML=a.sideTitle.split("|").join("<br />"),ir.style.setProperty("--progress",`${p}%`),br(po,a.slug),Ar(a)},Fr=()=>{if(!Ee.length)return;const r=window.innerHeight/2,a=Ee.map((p,f)=>{const b=p.getBoundingClientRect(),J=b.top+b.height/2;return{index:f,distance:Math.abs(J-r)}}).sort((p,f)=>p.distance-f.distance)[0]?.index;Ee.forEach((p,f)=>{const b=f===a;p.classList.toggle("is-active",b),p.classList.toggle("is-inactive",!b)}),jr(a)},Wr=r=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),p=hr[r.id]??0,f=r===document.body?0:r.getBoundingClientRect().top+window.scrollY-p,b=Math.min(a,Math.max(0,f));window.scrollTo({top:b,behavior:it.matches?"auto":"smooth"})};let no=0;const $e=()=>{cancelAnimationFrame(no),no=requestAnimationFrame(()=>{xr(),qr(),Fr()})},go=r=>{U.dataset.theme=r,co.setAttribute("aria-pressed",String(r==="dark")),localStorage.setItem("portfolio-theme",r)},Ir=localStorage.getItem("portfolio-theme")||"light",ho=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";it.addEventListener?.("change",fo);fo();const at=sr(ot,rr,kr);Ee=[...document.querySelectorAll("[data-project]")];nt({force:!0});go(Ir);const Br=()=>{const r=window.location.hash?window.location.hash.slice(1):"",a=ho()==="back_forward",p=r||(a?wr(po):""),f=p?document.getElementById(p):null;r&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),f&&f.scrollIntoView({block:"center",behavior:"auto"})};Br();ho()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));co.addEventListener("click",()=>{go(U.dataset.theme==="dark"?"light":"dark")});pr.forEach(r=>{r.addEventListener("click",a=>{const p=document.querySelector(r.hash);p&&(a.preventDefault(),Wr(p))})});oo?.addEventListener("click",r=>{const a=r.target.closest(".project-link");!a||!oo.contains(a)||!Tr(r,a)||(vr(a.closest(".project-section")?.dataset.analyticsId),r.preventDefault(),Pr(a))});window.addEventListener("scroll",$e,{passive:!0});window.addEventListener("resize",()=>{nt(),$e()});uo.addEventListener?.("change",()=>{nt({force:!0}),$e()});window.addEventListener("pagehide",()=>at?.resetModal());window.addEventListener("pageshow",()=>{at?.resetModal(),at?.syncModalWithHistory(),Cr()});$e();
