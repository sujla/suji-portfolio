const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/flyer-flutter-hnPPva0v.js","assets/main-CRx_pg7c.js","assets/index-BvyVWk2v.js","assets/SiteFooter-Dt6vVGwZ.js","assets/main-Bzsr2Ve8.css"])))=>i.map(i=>d[i]);
import{a as hr,p as yr,b as To}from"./projects-SaPXIQgG.js";import{_ as yo}from"./SiteFooter-Dt6vVGwZ.js";import"./index-BvyVWk2v.js";const wr=(r,i,u)=>{if(!r)return;const m=760,b="portfolioPfModalProject",_="portfolioPfList",X=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let P=null;const O=(e,t=!1)=>{const a=[(e.types?.length?e.types:[e.type]).filter(Boolean).map(l=>X.find(f=>f.value===l)?.label||l).join(", "),t&&e.companyLabel,e.year].filter(Boolean);return a.length?`<span>${a.join(" · ")}</span>`:""},x=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},ye=()=>window.history.state?.[b]||"",Ao=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[b]:e},"")},yt=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',Ro=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & Short MRT Routes"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],oe=(e,t="video")=>`
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
  `,wt=e=>{const t=Ro[e-1];return`
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
      ${oe(t.label)}
    `},qo=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?wt(1):yt(e),Be=[{start:0,end:5},{start:18,end:26}],xo=(e,t)=>{const o=e.id==="public-transport"?wt(t+2):"",s=e.id==="perp-dex"?[`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/logo-intro-poster.jpg" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
              ${oe("Logo introduction")}
            `,`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/sltp-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
              ${oe("Stop loss and take profit")}
            `,`
              <div class="pf-modal-perp-media pf-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="pf-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="pf-modal-perp-gif-frame pf-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
              ${oe("Multi-wallet animation","animation")}
            `,`
              <video class="pf-modal-perp-media pf-modal-perp-media--trading" muted playsinline preload="auto" poster="./assets/perp-dex/trading-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
              ${oe("Perpetual trading")}
            `][t]:"",a=e.media==="store-finder-renewal"&&t<Be.length?`
          <div class="pf-modal-store-finder-video-frame">
            <video
              class="pf-modal-store-finder-video pf-modal-segment-video"
              autoplay
              muted
              playsinline
              preload="auto"
              poster="./assets/store-finder-renewal/solution-tobe1.png"
              data-segment-start="${Be[t].start}"
              data-segment-end="${Be[t].end}"
            >
              <source src="./assets/store-finder-renewal/solution-final-scroll.mp4" type="video/mp4" />
            </video>
          </div>
        `:"",l=e.id==="cta-enhancement"&&t===0?`
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
            <div class="pf-modal-result-metrics pf-modal-result-metrics--summary pf-modal-result-metrics--cta inner-shadow-md">
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">326.2%</strong>
                <p class="pf-modal-result-label">Pickup Conversion</p>
              </div>
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">132.6%</strong>
                <p class="pf-modal-result-label">Total Pickup Orders</p>
              </div>
            </div>
          </div>
        `:"",h=e.id==="modular-editorial-system"&&t===0?`
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
        `:e.id==="modular-editorial-system"&&t===1?'<img class="pf-modal-modular-editorial-system-interface" src="./assets/modular-editorial-system/interface.png" alt="" />':"",g=t===0&&["cta-enhancement","store-finder"].includes(e.id)||e.id==="modular-editorial-system"&&t===1?" inner-shadow-lg":"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}${g}">
        ${o||s||a||l||f||h}
      </div>
    `},Fo=e=>{if(!e.matches(".pf-work--modular-editorial-system"))return;const t=s=>s.matches(`
        .pf-work--modular-editorial-system :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        )
      `),o=s=>{const a=s.videoWidth||s.naturalWidth||s.width,l=s.videoHeight||s.naturalHeight||s.height;if(!a||!l)return null;const f=16,h=document.createElement("canvas"),v=h.getContext("2d",{willReadFrequently:!0});if(!v)return null;h.width=f,h.height=f;try{v.drawImage(s,0,0,f,f);const g=v.getImageData(0,0,f,f).data;let k=0,n=0,M=0,$=0;for(let F=0;F<f;F+=1)for(let A=0;A<f;A+=1){if(A>1&&A<f-2&&F>1&&F<f-2)continue;const q=(F*f+A)*4,y=g[q+3]/255;y<.2||(k+=g[q]*y,n+=g[q+1]*y,M+=g[q+2]*y,$+=y)}return $?`rgb(${Math.round(k/$)} ${Math.round(n/$)} ${Math.round(M/$)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(s=>{if(t(s))return;const a=s.querySelector("img, video, canvas");if(!a)return;const l=()=>{if(!s.isConnected)return;const f=o(a);f&&(s.style.setProperty("--pf-modal-media-background",f),s.classList.add("has-media-sampled-background"))};if(a instanceof HTMLImageElement){a.complete&&a.naturalWidth?l():a.addEventListener("load",l,{once:!0});return}if(a instanceof HTMLVideoElement){a.readyState>=2?l():a.addEventListener("loadeddata",l,{once:!0});return}window.requestAnimationFrame(l)})},jo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const o=Number(t.dataset.segmentStart),s=Number(t.dataset.segmentEnd),a=()=>{t.currentTime=o,t.play().catch(()=>{})},l=()=>{t.currentTime=o,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",l,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=s&&a()}),t.addEventListener("ended",a),t.readyState>=1&&l()})},vt=e=>e.readyState>=1?Promise.resolve():new Promise(t=>{e.addEventListener("loadedmetadata",t,{once:!0}),e.addEventListener("error",t,{once:!0})}),bt=e=>{const{container:t,video:o}=e,s=t.querySelector("[data-modal-media-play-toggle]"),a=t.querySelector("[data-modal-media-replay]");o.loop=!1;const l=()=>{const h=!o.paused&&!o.ended;t.classList.toggle("is-playing",h),s?.classList.toggle("is-playing",h),s?.setAttribute("aria-label",h?"Pause video":"Play video"),s?.setAttribute("aria-pressed",String(h))},f=()=>{t.isConnected&&(o.currentTime=0,o.play().catch(l),l())};return s?.addEventListener("click",()=>{if(!o.paused&&!o.ended){o.pause();return}o.ended&&(o.currentTime=0),o.play().catch(l),l()}),a?.addEventListener("click",f),o.addEventListener("play",l),o.addEventListener("pause",l),o.addEventListener("ended",l),o.addEventListener("loadedmetadata",l),l(),{...e,startFromBeginning:f}},Wo=e=>{const{container:t,gif:o}=e,s=o.querySelector("[data-perp-gif-frame]"),a=o.querySelector("[data-perp-gif-player]"),l=t.querySelector("[data-modal-media-play-toggle]"),f=t.querySelector("[data-modal-media-replay]"),h=o.dataset.perpGifSrc,v=Number(o.dataset.perpGifDuration||6600),g=s?.getContext("2d");let k=0,n=0,M=!1;const $=()=>{t.classList.toggle("is-playing",M),l?.classList.toggle("is-playing",M),l?.setAttribute("aria-label",M?"Pause animation":"Play animation"),l?.setAttribute("aria-pressed",String(M))},F=()=>{if(!(!s||!g||!a?.naturalWidth)){(!s.width||!s.height)&&(s.width=a.naturalWidth,s.height=a.naturalHeight);try{g.drawImage(a,0,0,s.width,s.height)}catch{}}},A=()=>{window.clearTimeout(k),F(),a?.removeAttribute("src"),M=!1,$()},q=()=>{if(!t.isConnected||!a||!h)return;window.clearTimeout(k);const K=++n;a.removeAttribute("src"),a.src=`${h}?play=${K}`,M=!0,$(),k=window.setTimeout(()=>{K===n&&t.isConnected&&A()},v)},y=new Image;return y.addEventListener("load",()=>{!s||!g||(s.width=y.naturalWidth,s.height=y.naturalHeight,g.drawImage(y,0,0))},{once:!0}),y.src=h,l?.addEventListener("click",()=>{M?A():q()}),f?.addEventListener("click",q),$(),{...e,startFromBeginning:q}},Bo=e=>{if(!e.matches(".pf-work--perp-dex"))return;const t=[...e.querySelectorAll(".pf-modal-bento-placeholder")].map(o=>({container:o,video:o.querySelector("[data-perp-video]"),gif:o.querySelector("[data-perp-gif]")})).filter(o=>o.video||o.gif).map(o=>o.video?bt(o):Wo(o));t.length&&Promise.all(t.filter(o=>o.video).map(o=>vt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Ho=e=>{if(!e.matches(".pf-work--public-transport"))return;const t=[...e.querySelectorAll("[data-public-transport-video]")].map(o=>({video:o,order:Number(o.dataset.publicTransportVideoOrder),container:o.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(o=>o.container).sort((o,s)=>o.order-s.order).map(bt);t.length&&Promise.all(t.map(o=>vt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Io=(e,t=!1)=>{const o=e.types?.length?e.types:[e.type||"others"],s=e.id==="public-transport"?'<span class="pf-work-badge">AI-built</span>':"",a=`
      <div class="pf-work-card">
        ${yt(e)}
        ${s}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${O(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${o.join(" ")}" draggable="false" aria-label="${u(e.title)} project detail">${a}</a>`},Do=e=>`
    <div class="pf-featured-cell">
    <a class="pf-work pf-work--${e.id} pf-work--featured"
       href="${e.href}" data-project-types="${(e.types||[e.type]).join(" ")}"
       data-cursor-label="View Case Study" draggable="false">
      <div class="pf-work-card pf-featured-image">
        <img src="${e.projectMedia}" alt="" loading="lazy" decoding="async" />
      </div>
      <div class="pf-featured-caption">
        <div class="pf-featured-copy">
          <h2>${e.title}</h2>
          ${O(e,!0)}
        </div>
      </div>
    </a>
    </div>
  `,St=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,Lt=(e,t)=>St(e)&&!t.target&&!t.hasAttribute("download"),kt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},Tt=()=>"24px",we=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},Et=(e,t)=>{const o=t.width?e.width/t.width:1,s=t.height?e.height/t.height:1,a=e.left-t.left,l=e.top-t.top;return`translate3d(${a}px, ${l}px, 0) scale(${o}, ${s})`},zo=()=>{const e=[...r.querySelectorAll(".pf-work video")],t=e.filter(o=>!o.paused&&!o.ended);return e.forEach(o=>o.pause()),t},Vo=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},Mt=(e,t,{pushHistory:o=!0}={})=>{if(P)return;o&&Ao(t.id);const s=zo(),a=e.querySelector(".pf-work-card")||e,l=a.getBoundingClientRect(),f=window.getComputedStyle(a).borderRadius,h=kt(),v=Tt(),g=document.createElement("div"),k=document.createElement("div"),n=document.createElement("div"),M=`pf-modal-${t.id}-title`,$=window.matchMedia("(prefers-reduced-motion: reduce)").matches,F=$?1:m,A=t.cta?`
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
      `:"",q=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",y=t.id==="perp-dex",K=t.id==="public-transport",sr=K?'<span class="pf-work-badge pf-work-badge--modal">AI-built</span>':"",no=y?4:K||t.id==="store-finder"?2:3,ar=Array.from({length:no},(d,w)=>xo(t,w)),ir=Array.from({length:no},(d,w)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${w+1} pf-modal-bento-skeleton"></div>
      `),pe=K,Ce=!t.cta&&!y&&!pe,nt=t.deviceType==="web"&&!pe&&!Ce,lo=t.id==="cta-enhancement",co=d=>{const w=lo?d[0]:d.slice(0,2).join("");return y?`
          <div class="pf-modal-perp-left">
            ${d[0]}
            <div class="pf-modal-perp-center-bottom">
              ${d[1]}
              ${d[2]}
            </div>
          </div>
          ${d[3]}
        `:pe||Ce?d.join(""):nt?`<div class="pf-modal-bento-side">${d.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${lo?" pf-modal-bento-stack-top--single":""}">
              ${w}
            </div>
            ${d[2]||""}
          </div>
        `},nr=co(ar),lr=co(ir),cr=y?"":`
        <div class="pf-modal-bento-feature">
          ${qo(t)}
        </div>
      `,dr=`
      <section class="pf-modal-bento-section${nt?" pf-modal-bento-section--web":""}${pe?" pf-modal-bento-section--three-up":""}${Ce?" pf-modal-bento-section--four-up":""}${y?" pf-modal-bento-section--perp-dex":""}"${y||K?"":' aria-hidden="true"'}>
        ${cr}
        ${nr}
      </section>
    `,pr=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${nt?" pf-modal-bento-section--web":""}${pe?" pf-modal-bento-section--three-up":""}${Ce?" pf-modal-bento-section--four-up":""}${y?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${y?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${lr}
      </section>
    `;g.className="pf-modal-layer",k.className="pf-modal-backdrop",k.style.opacity="0",n.className=`pf-work-modal pf-work--${t.id}${q?" pf-work-modal--has-description":""}${A?"":" pf-work-modal--no-cta"}`,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",M),n.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${pr}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${A?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <div class="pf-modal-title-row">
            <h2 id="${M}">${t.title}</h2>
            ${sr}
          </div>
          ${O(t)}
        </div>
        ${A||q}
      </div>
    `,we(n,h),n.style.borderRadius=v,n.style.transformOrigin="top left",g.append(k,n),document.body.append(g),n.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const Pe=n.animate([{transform:Et(l,h),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v}],{duration:F,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ae=k.animate([{opacity:0},{opacity:1}],{duration:Math.min(F,420),easing:"ease-out",fill:"forwards"}),lt=n.querySelector(".pf-modal-close"),ee=n.querySelector(".pf-modal-cta"),Re=n.querySelector(".pf-modal-footer"),C=n.querySelector(".pf-modal-card-content"),ue=n.querySelector(".pf-modal-scroll-indicator");let po=!1,j=!1,fe=0;const ur=()=>{if(fe=0,!C||!ue||j)return;const d=C.scrollHeight-C.clientHeight,w=8,z=Re?.offsetHeight??0,V=Math.max(0,n.clientHeight-z-w*2);if(d<=1||V<=0){ue.classList.remove("is-visible");return}const Fe=Math.min(V,Math.max(36,V*(C.clientHeight/C.scrollHeight))),gr=Math.min(1,Math.max(0,C.scrollTop/d))*(V-Fe);ue.style.height=`${Fe}px`,ue.style.transform=`translate3d(0, ${gr}px, 0)`,ue.classList.add("is-visible")},me=()=>{fe||(fe=window.requestAnimationFrame(ur))},ct=typeof ResizeObserver=="function"?new ResizeObserver(me):null;ct?.observe(C),C?.addEventListener("scroll",me,{passive:!0});const fr=()=>{po||!C||j||(po=!0,C.classList.remove("is-skeleton"),C.innerHTML=dr,Fo(n),jo(n),Bo(n),Ho(n),C.querySelectorAll(".pf-modal-bento-section").forEach(d=>ct?.observe(d)),window.requestAnimationFrame(()=>{!j&&n.isConnected&&(n.classList.add("is-content-ready"),me())}))},qe=()=>{const d=Re?.offsetHeight??0;n.style.setProperty("--pf-modal-footer-space",`${d}px`),me()},uo=Re&&typeof ResizeObserver=="function"?new ResizeObserver(qe):null;uo?.observe(Re),qe();const fo=()=>{!j&&n.classList.contains("is-ready")&&(we(n,kt()),n.style.borderRadius=Tt(),qe())};let mo=!1;const go=({restoreFocus:d=!1}={})=>{if(mo||(mo=!0,g.getAnimations?.({subtree:!0})?.forEach(z=>z.cancel()),g.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",dt),window.removeEventListener("resize",fo),uo?.disconnect(),ct?.disconnect(),C?.removeEventListener("scroll",me),fe&&window.cancelAnimationFrame(fe),P?.modal===n&&(P=null),Vo(s),!d))return;(e.matches("a")?e:r.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},ho=()=>{if(j)return;j=!0,n.classList.add("is-closing"),n.classList.remove("is-revealing","is-ready","is-content-ready");const d=n.getBoundingClientRect(),w=window.getComputedStyle(n).borderRadius,z=a.getBoundingClientRect();e.classList.remove("is-modal-source"),Pe.cancel(),Ae.cancel(),we(n,d),n.style.borderRadius=w,n.style.transform="none";const V=$?1:320,Fe=n.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:w},{transform:Et(z,d),borderRadius:f}],{duration:V,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});k.animate([{opacity:1},{opacity:0}],{duration:$?1:200,easing:"ease-out",fill:"forwards"}),Fe.finished.finally(()=>go({restoreFocus:!0}))},xe=()=>{if(j)return;const d=ye()===t.id;ho(),d&&(window.history.back(),window.setTimeout(()=>{if(ye()!==t.id)return;const w=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete w[b],window.history.replaceState(w,"")},500))},mr=d=>{if(ee){if(t.cta?.newTab){St(d)&&xe();return}Lt(d,ee)&&(d.preventDefault(),!j&&(j=!0,n.classList.add("is-navigating"),document.removeEventListener("keydown",dt),Pe.cancel(),Ae.cancel(),ye()===t.id?window.location.replace(ee.href):window.location.href=ee.href))}},dt=d=>{if(d.key==="Escape"){d.preventDefault(),xe();return}if(d.key!=="Tab")return;const w=[lt,ee].filter(Boolean),z=w.indexOf(document.activeElement),V=d.shiftKey?(z-1+w.length)%w.length:(z+1)%w.length;d.preventDefault(),w[V].focus()};P={layer:g,modal:n,projectId:t.id,closeModal:ho,disposeModal:go},document.addEventListener("keydown",dt),window.addEventListener("resize",fo),lt.addEventListener("click",xe),ee?.addEventListener("click",mr),g.addEventListener("click",d=>{(d.target===g||d.target===k)&&xe()}),Ae.finished.then(()=>{k.style.opacity="1",Ae.cancel()}).catch(()=>{}),Pe.finished.then(()=>{j||(we(n,h),n.style.borderRadius=v,n.style.transform="none",Pe.cancel(),qe(),n.classList.add("is-ready"),fr(),lt.focus({preventScroll:!0}))}).catch(()=>{})},I=window.matchMedia("(max-width: 600px)"),Y=document.querySelector("[data-pf-type-filter]"),_o=270,Oo=.36;if(Y){const e=Y.hasAttribute("data-flyer-filters");Y.innerHTML=`
      <div class="${e?"flyer-tabs":"pf-type-filter"}" role="group" aria-label="Filter projects by type">
      ${X.map(({value:t,label:o},s)=>`
            ${!e&&s>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
            <button
              class="${e?"flyer-tab":"pf-type-filter-button"}"
              type="button"
              data-project-type-filter="${t}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${e?`<span class="flyer-tab-label">${o}</span>`:o}</button>
          `).join("")}
      </div>
    `,e&&yo(async()=>{const{mountFlyerFlutter:t}=await import("./flyer-flutter-hnPPva0v.js");return{mountFlyerFlutter:t}},__vite__mapDeps([0,1,2,3,4])).then(({mountFlyerFlutter:t})=>t(Y.querySelector(".flyer-tabs"))).catch(()=>{})}document.querySelector("[data-pf-floating-filter]")?.remove();const S=document.createElement("div");S.className="pf-floating-filter",S.dataset.pfFloatingFilter="",S.setAttribute("role","group"),S.setAttribute("aria-label","Filter projects by type"),S.innerHTML=`
    <div class="pf-floating-filter-scroll">
      ${[{value:"",label:"All"},...X].map(({value:e,label:t})=>`
            <button
              class="pf-floating-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}<span data-pf-filter-count></span></button>
          `).join("")}
    </div>
  `,document.body.append(S),r.innerHTML=`
    <div class="pf-work-grid pf-work-collection" id="pf-work-grid">
      <div class="pf-work-group pf-featured-section" data-work-group>
        <div class="pf-featured-sticky">
          <div class="pf-featured-viewport">
            <div class="pf-featured-grid">
              <div class="pf-featured-intro"><span>Selected projects / 01—03</span><h2>Selected<br>work</h2><p>Product design with<br>measurable impact.</p></div>
              ${i.filter(e=>e.cta).map(Do).join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="pf-work-group pf-work-group--secondary" data-work-group>
        <div class="pf-group-heading"><h2>More work</h2></div>
        <div class="pf-secondary-grid">
          ${i.filter(e=>!e.cta).map(e=>Io(e)).join("")}
        </div>
      </div>
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const L=document.createElement("span");L.className="pf-work-cursor-label",L.dataset.pfWorkCursor="",L.setAttribute("aria-hidden","true"),L.innerHTML="<span>View Details</span>",document.body.append(L);const He=L.firstElementChild,$t=[...Y?[...Y.querySelectorAll("[data-project-type-filter]")]:[],...S.querySelectorAll("[data-project-type-filter]")],Yo=Y?.querySelector(".pf-type-filter, .flyer-tabs"),Ct=document.documentElement,R=S.querySelector(".pf-floating-filter-scroll"),ve=[...S.querySelectorAll("[data-project-type-filter]")],No=[...r.querySelectorAll(".pf-work[data-project-types]")],Pt=r.querySelector(".pf-work-grid"),At=r.querySelector(".pf-filter-empty"),Rt=r.querySelector(".pf-work-group--secondary .pf-group-heading"),be=r.querySelector(".pf-featured-section"),qt=r.querySelector(".pf-featured-sticky"),xt=r.querySelector(".pf-featured-viewport"),Se=r.querySelector(".pf-featured-grid");let G=0,Le=0,ke=0,W=0,U=0;const Ft=e=>{if(Le=0,be.hidden){U=0;return}const t=Math.min(G,Math.max(0,window.scrollY-ke)),o=U?Math.min(e-U,64):16.67;U=e,W+=(t-W)*(1-Math.exp(-o/85)),Math.abs(t-W)<.1&&(W=t),window.scrollY>=ke+G&&(W=G),Se.style.transform=`translate3d(${-W}px, 0, 0)`,W!==t?Le=requestAnimationFrame(Ft):U=0},re=()=>{if(be.hidden)return;G=Math.max(0,Se.scrollWidth-xt.clientWidth);const e=parseFloat(getComputedStyle(qt).top)||0;ke=be.getBoundingClientRect().top+window.scrollY-e,be.style.height=`${qt.offsetHeight+G}px`,W=Math.min(G,Math.max(0,window.scrollY-ke)),Se.style.transform=`translate3d(${-W}px, 0, 0)`,U=0};window.addEventListener("scroll",()=>{Le||(Le=requestAnimationFrame(Ft))},{passive:!0}),window.addEventListener("resize",re,{passive:!0});const jt=new ResizeObserver(re);jt.observe(xt),jt.observe(Se),document.fonts.ready.then(re);let B="",Wt=0,Bt=0,Ht=0,Te=!1;const Ko=()=>{window.clearTimeout(Bt),window.clearTimeout(Ht)},Xo=e=>{if(e!==Te){if(Te=e,Ko(),!e){S.classList.remove("is-visible"),Ht=window.setTimeout(()=>{Te||Ct.classList.remove("is-footer-yielding-to-filter")},220);return}Ct.classList.add("is-footer-yielding-to-filter"),Bt=window.setTimeout(()=>{Te&&S.classList.add("is-visible")},220)}},se=()=>{if(!R||!I.matches){S.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,R.scrollWidth-R.clientWidth);S.classList.toggle("has-scroll-left",R.scrollLeft>1),S.classList.toggle("has-scroll-right",R.scrollLeft<e-1)},It=()=>{if(!R||!I.matches)return;const e=ve.find(a=>a.getAttribute("aria-pressed")==="true"),t=ve.indexOf(e);if(!e)return;const o=Math.max(0,R.scrollWidth-R.clientWidth),s=t<2?0:t>=ve.length-2?o:e.offsetLeft-(R.clientWidth-e.offsetWidth)/2;R.scrollTo({left:s,behavior:"smooth"})},Ie=()=>{const e=r.getBoundingClientRect().bottom,t=window.innerHeight*Oo;Xo(window.scrollY>_o&&e>t)},Go=()=>{const e=Math.max(0,r.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},Dt=e=>{B=e,Rt&&(Rt.hidden=!!B);let t=0;$t.forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.projectTypeFilter===B))}),Yo?.classList.toggle("is-filtering",!!B),No.forEach(o=>{const s=o.dataset.projectTypes.split(" "),a=!B||s.includes(B);o.hidden=!a,o.parentElement.classList.contains("pf-featured-cell")&&(o.parentElement.hidden=!a),a&&(t+=1)}),ve.forEach(o=>{o.querySelector("[data-pf-filter-count]").textContent=o.dataset.projectTypeFilter===B?` ${t}`:""}),It(),se(),Pt?.classList.toggle("is-single-result",t===1),r.querySelectorAll("[data-work-group]").forEach(o=>{o.hidden=!o.querySelector(".pf-work:not([hidden])")}),re(),At&&(At.hidden=t>0)};let zt=0,De=!1;$t.forEach(e=>{e.addEventListener("click",async()=>{const t=e.classList.contains("flyer-tab");if(t&&De)return;const o=++zt;if(t){De=!0;const f=e.closest(".flyer-tabs"),h=[...f.querySelectorAll(".flyer-tab")].map(v=>[v,v.disabled]);f.classList.add("is-tear-locked"),h.forEach(([v])=>{v.disabled=!0});try{const{playFlyerTear:v}=await yo(async()=>{const{playFlyerTear:g}=await import("./flyer-flutter-hnPPva0v.js");return{playFlyerTear:g}},__vite__mapDeps([0,1,2,3,4]));if(!await v(e))return}catch{}finally{h.forEach(([v,g])=>{v.disabled=g}),f.classList.remove("is-tear-locked"),De=!1}if(o!==zt||!e.isConnected)return}const s=document.documentElement,a=e.dataset.projectTypeFilter,l=!S.contains(e)&&B===a;window.clearTimeout(Wt),s.style.overflowAnchor="none",Dt(l?"":a),Go(),Wt=window.setTimeout(()=>{s.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Ie,{passive:!0}),window.addEventListener("resize",()=>{Ie(),se()},{passive:!0}),R?.addEventListener("scroll",se,{passive:!0}),I.addEventListener?.("change",()=>{se(),It()}),Ie();const ze=window.performance.getEntriesByType("navigation")[0]?.type==="back_forward"?window.history.state?.[_]:null;Dt(ze?.projectType||""),Number.isFinite(ze?.scrollY)&&(window.scrollTo({top:ze.scrollY,behavior:"instant"}),re()),se(),window.addEventListener("pagehide",()=>{window.history.replaceState({...window.history.state,[_]:{projectType:B,scrollY:window.scrollY}},"")});const c=r.querySelector("[data-pf-work-rail]"),Ve=c?[...c.querySelectorAll(".pf-work-set")]:[],Vt=r.querySelector(".pf-work-set--primary .pf-work"),p=r.querySelector("[data-pf-work-rail-secondary]"),Ee=p?[...p.querySelectorAll(".pf-work-set")]:[],_t=Ee[1]?.querySelector(".pf-work:nth-child(4)");r.querySelector("[data-mobile-pf-work-rail]"),r.querySelector("[data-mobile-pf-work-rail-secondary]");const Uo=80,Jo=-80,_e=32,Qo=12,Ot=180,Yt=600;let Oe,Ye=0,Ne=0,T=0,Ke=_e,Xe=!1,ae=!1,Nt=0,Ge=0,ie=!1,Me=!1,ne=!1,Ue=0,D=0,J=0,H=0,Q=0,E=0,Je=0,le=!1,Kt=0,Qe=0,ce=!1,$e=!1,de=!1,Ze=0;const Xt=({preservePosition:e=!1}={})=>{if(!c||!Vt||Ve.length<3)return;const t=D,o=J,s=t?(c.scrollLeft-o)/t:0,a=c.getBoundingClientRect(),l=Vt.getBoundingClientRect(),f=c.scrollLeft+l.left-a.left;D=Ve[2].getBoundingClientRect().left-Ve[1].getBoundingClientRect().left,J=f-(c.clientWidth-l.width)/2-(I.matches?Uo:0),c.scrollLeft=e?J+s*D:J,T=c.scrollLeft},et=()=>{if(!c||!D)return 0;const e=J-D*.5,t=J+D*.5;let o=c.scrollLeft;for(;o<e;)o+=D;for(;o>=t;)o-=D;const s=o-c.scrollLeft;return Math.abs(s)>.5&&(c.scrollLeft=o),s},Gt=({preservePosition:e=!1}={})=>{if(!p||!_t||Ee.length<3||!p.clientWidth)return;const t=H,o=Q,s=t?(p.scrollLeft-o)/t:0,a=p.getBoundingClientRect(),l=_t.getBoundingClientRect(),f=p.scrollLeft+l.left-a.left;H=Ee[2].getBoundingClientRect().left-Ee[1].getBoundingClientRect().left,Q=f-(p.clientWidth-l.width)/2-Jo,p.scrollLeft=e?Q+s*H:Q,E=p.scrollLeft},tt=()=>{if(!p||!H)return 0;const e=Q-H*.5,t=Q+H*.5;let o=p.scrollLeft;for(;o<e;)o+=H;for(;o>=t;)o-=H;const s=o-p.scrollLeft;return Math.abs(s)>.5&&(p.scrollLeft=o),s},ot=()=>{T=c?.scrollLeft??T,Ne=performance.now()+200},Ut=()=>{E=p?.scrollLeft??E,Je=performance.now()+200},Zo=()=>{window.clearTimeout(Ue),ne=!0,T=c?.scrollLeft??T},Jt=()=>{window.clearTimeout(Ue),Ue=window.setTimeout(()=>{c&&(T=c.scrollLeft,T+=et(),ne=!1,Ne=performance.now()+Yt)},Ot)},er=()=>{window.clearTimeout(Ze),de=!0,E=p?.scrollLeft??E},Qt=()=>{window.clearTimeout(Ze),Ze=window.setTimeout(()=>{p&&(E=p.scrollLeft,E+=tt(),de=!1,Je=performance.now()+Yt)},Ot)},Zt=e=>{const t=Math.min((e-(Oe??e))/1e3,.1),o=Xe?Qo:_e;if(Oe=e,Ke+=(o-Ke)*Math.min(t*6,1),c){const s=r.getBoundingClientRect(),a=s.bottom>0&&s.top<window.innerHeight;a&&!ae&&!ne&&!de&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ne&&(T+=t*Ke,c.scrollLeft=T,T+=et()),a&&p?.clientWidth&&H&&!le&&!de&&!ne&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Je&&(E-=t*_e,p.scrollLeft=E,E+=tt())}Ye=requestAnimationFrame(Zt)};!c||Ye||(Oe=void 0,Ye=requestAnimationFrame(Zt)),requestAnimationFrame(()=>{Xt(),Gt()}),c?.addEventListener("mouseenter",()=>{Xe=!0}),c?.addEventListener("mouseleave",()=>{Xe=!1}),r.addEventListener("wheel",e=>{!c||e.ctrlKey||(ot(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||P)){if(e.pointerType==="touch"&&I.matches){Zo();return}ae=!0,ie=!1,Nt=e.clientX,Ge=c.scrollLeft,ot()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!ae)return;const t=e.clientX-Nt;!ie&&Math.abs(t)<=5||(ie||(ie=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=Ge-t,Ge+=et(),T=c.scrollLeft,ot())});const tr=e=>{!c||!ae||(ae=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),T=c.scrollLeft,ie&&(Me=!0,window.setTimeout(()=>{Me=!1},0)))};c?.addEventListener("scroll",()=>{ne&&(T=c.scrollLeft,Jt())},{passive:!0});const eo=e=>{if(e.pointerType==="touch"&&I.matches){Jt();return}tr(e)};c?.addEventListener("pointerup",eo),c?.addEventListener("pointercancel",eo),c?.addEventListener("click",e=>{Me&&(Me=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||P)){if(e.pointerType==="touch"&&I.matches){er();return}le=!0,ce=!1,Kt=e.clientX,Qe=p.scrollLeft,Ut()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!le)return;const t=e.clientX-Kt;!ce&&Math.abs(t)<=5||(ce||(ce=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Qe-t,Qe+=tt(),E=p.scrollLeft,Ut())});const or=e=>{!p||!le||(le=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),E=p.scrollLeft,ce&&($e=!0,window.setTimeout(()=>{$e=!1},0)))};p?.addEventListener("scroll",()=>{de&&(E=p.scrollLeft,Qt())},{passive:!0});const to=e=>{if(e.pointerType==="touch"&&I.matches){Qt();return}or(e)};p?.addEventListener("pointerup",to),p?.addEventListener("pointercancel",to),p?.addEventListener("click",e=>{$e&&($e=!1,e.preventDefault(),e.stopPropagation())},!0);const rr=70,rt=14,st=12;let N=0,oo=L.offsetWidth,at=L.offsetHeight;const it=()=>{oo=L.offsetWidth,at=L.offsetHeight},ro=e=>{!He||He.textContent===e||(He.textContent=e,L.classList.toggle("is-case-study",e==="View Case Study"),it())};document.fonts?.ready.then(it);const Z=(e=0)=>{if(e){if(N)return;N=window.setTimeout(()=>{N=0,L.classList.remove("is-visible")},e);return}window.clearTimeout(N),N=0,L.classList.remove("is-visible")},so=()=>{window.clearTimeout(N),N=0,L.classList.add("is-visible")},ao=e=>{const t=oo/2,o=Math.min(Math.max(t+st,e.clientX),window.innerWidth-t-st),a=e.clientY+rt+at+st<=window.innerHeight?e.clientY+rt:e.clientY-rt-at;L.style.transform=`translate3d(${o}px, ${a}px, 0) translateX(-50%)`};document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const t=e.target instanceof Element?e.target:null,o=t?.closest("[data-cursor-label]"),s=t?.closest(".pf-work");if(o){ro(o.dataset.cursorLabel||"View Details"),ao(e),so();return}if(s&&r.contains(s)){ro("View Details"),ao(e),so();return}if(t&&Pt?.contains(t)){Z(rr);return}Z()}),r.addEventListener("pointerleave",()=>Z()),window.addEventListener("blur",()=>Z()),window.addEventListener("scroll",()=>Z(),{passive:!0}),r.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!Lt(t,e))return;const o=i.find(s=>e.classList.contains(`pf-work--${s.id}`));o&&(x(o),Z(),!e.classList.contains("pf-work--featured")&&(t.preventDefault(),Mt(e,o)))})}),window.addEventListener("resize",()=>{it(),requestAnimationFrame(()=>{Xt({preservePosition:!0}),Gt({preservePosition:!0})})});const io=()=>{const e=ye();if(P){P.projectId!==e&&P.closeModal();return}if(!e)return;const t=i.find(s=>s.id===e),o=r.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&o&&Mt(o,t,{pushHistory:!1})};return window.addEventListener("popstate",io),{resetModal:()=>P?.disposeModal(),syncModalWithHistory:io}},ut=document.querySelector("[data-pf]"),wo=document.querySelector("[data-about]"),vo=document.querySelector("[data-project-list]"),vr=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const br=document.querySelector(".counter-line"),bo=document.querySelector(".fixed-project-meta"),Sr=document.querySelector("[data-side-number]"),Lr=document.querySelector("[data-side-wip]"),kr=document.querySelector("[data-side-title]"),Tr=document.querySelector("[data-counter-wip]"),ft=document.querySelector("[data-year-rail]"),Er=[...document.querySelectorAll("[data-gnb-scroll]")],Eo=document.querySelector(".theme-toggle"),te=document.documentElement,Mo="portfolio-last-project-slug",So=760,Mr=12,$r=8,$o=window.matchMedia("(max-width: 600px)"),Cr=window.matchMedia("(prefers-reduced-motion: reduce)"),Pr={work:40,experience:-50};let mt=!1,ge=0,pt=0;const Ar=r=>{try{return window.sessionStorage?.getItem(r)||""}catch{return""}},Rr=(r,i)=>{try{window.sessionStorage?.setItem(r,i)}catch{}},qr=r=>{window.gtag?.("event","project_click",{project_name:r})},xr=r=>`'${String(r).slice(-2)}`,Fr=r=>{const{start:i,end:u}=To.yearRange,m=Math.min(5,u-i+1),b=Math.min(Math.max(r-2,i),u-m+1);return Array.from({length:m},(_,he)=>b+he)},jr=r=>r.split("|").join(" "),Wr=(r,i)=>r.button===0&&!r.defaultPrevented&&!r.metaKey&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!i.target&&!i.hasAttribute("download"),Br=()=>window.matchMedia("(max-width: 600px)").matches?$r:Mr,Hr=()=>{const r=Br();return{top:r,left:r,width:window.innerWidth-r*2,height:window.innerHeight-r*2}},Ir=r=>{const i=r.getBoundingClientRect(),u=Hr(),m=window.getComputedStyle(r),b=window.getComputedStyle(r.querySelector(".project-media")),_=r.querySelector(".project-summary"),he=Number.parseFloat(m.rowGap||m.gap)||0,X=_?.getBoundingClientRect().height||0,P=Math.max(0,u.height-X-he),O=document.createElement("div"),x=r.cloneNode(!0);return x.classList.add("project-transition-card"),x.removeAttribute("href"),x.removeAttribute("aria-label"),x.setAttribute("aria-hidden","true"),Object.assign(x.style,{top:`${i.top}px`,left:`${i.left}px`,width:`${i.width}px`,height:`${i.height}px`,gap:m.gap,gridTemplateRows:m.gridTemplateRows,maxHeight:"none"}),x.style.setProperty("--project-media-shadow",b.boxShadow),O.className="project-transition-layer",O.append(x),document.body.append(O),{cardClone:x,targetRect:u,targetGridTemplateRows:`${P}px ${X}px`}},Dr=r=>{if(mt)return;const i=r.closest(".project-section");if(!i){window.location.href=r.href;return}mt=!0,i.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:m,targetGridTemplateRows:b}=Ir(r);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${m.top}px`,left:`${m.left}px`,width:`${m.width}px`,height:`${m.height}px`,gridTemplateRows:b,opacity:0,offset:1}],{duration:So,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=r.href},So-120)},zr=()=>{mt=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(r=>r.remove()),document.querySelectorAll(".is-transition-source").forEach(r=>{r.classList.remove("is-transition-source")})},Vr=r=>{ft.innerHTML=Fr(r.year).map(i=>{const u=i===r.year;return`
        <span class="year-rail-item" data-year="${i}" ${u?'aria-current="true"':""}>${xr(i)}</span>
      `}).join("")},_r=()=>{bo.classList.add("is-changing"),ft.classList.add("is-changing"),window.setTimeout(()=>{bo.classList.remove("is-changing"),ft.classList.remove("is-changing")},180)};let je=[],Lo=-1;const ht=({force:r=!1}={})=>{if(!$o.matches){ge&&(te.style.removeProperty("--mobile-project-viewport"),ge=0,pt=0);return}const i=window.innerWidth;!r&&ge&&i===pt||(ge=window.innerHeight,pt=i,te.style.setProperty("--mobile-project-viewport",`${ge}px`))},Or=()=>{if(!ut)return;const r=ut.getBoundingClientRect(),i=window.innerHeight/2,u=r.top<=i&&r.bottom>=i;te.classList.toggle("is-pf-active",u)},Yr=()=>{if(!wo)return;const r=wo.getBoundingClientRect(),i=window.innerHeight/2,u=r.top<=i&&r.bottom>=i;te.classList.toggle("is-about-active",u)},Nr=r=>{if(r===Lo||r<0)return;const i=yr[r],u=(r+1)/To.totalProjectCount*100;Lo=r,_r(),vr.textContent=i.number,Sr.textContent=i.number,Lr.textContent=i.wip?"🚧":"",Tr.textContent=i.wip?"🚧":"",kr.innerHTML=i.sideTitle.split("|").join("<br />"),br.style.setProperty("--progress",`${u}%`),Rr(Mo,i.slug),Vr(i)},Kr=()=>{if(!je.length)return;const r=window.innerHeight/2,i=je.map((u,m)=>{const b=u.getBoundingClientRect(),_=b.top+b.height/2;return{index:m,distance:Math.abs(_-r)}}).sort((u,m)=>u.distance-m.distance)[0]?.index;je.forEach((u,m)=>{const b=m===i;u.classList.toggle("is-active",b),u.classList.toggle("is-inactive",!b)}),Nr(i)},Xr=r=>{const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),u=Pr[r.id]??0,m=r===document.body?0:r.getBoundingClientRect().top+window.scrollY-u,b=Math.min(i,Math.max(0,m));window.scrollTo({top:b,behavior:Cr.matches?"auto":"smooth"})};let ko=0;const We=()=>{cancelAnimationFrame(ko),ko=requestAnimationFrame(()=>{Or(),Yr(),Kr()})},Co=r=>{te.dataset.theme=r,Eo.setAttribute("aria-pressed",String(r==="dark")),localStorage.setItem("portfolio-theme",r)},Gr=localStorage.getItem("portfolio-theme")||"light",Po=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate",gt=wr(ut,hr,jr);je=[...document.querySelectorAll("[data-project]")];ht({force:!0});Co(Gr);const Ur=()=>{const r=window.location.hash?window.location.hash.slice(1):"",i=Po()==="back_forward",u=r||(i?Ar(Mo):""),m=u?document.getElementById(u):null;r&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),m&&m.scrollIntoView({block:"center",behavior:"auto"})};Ur();Po()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Eo.addEventListener("click",()=>{Co(te.dataset.theme==="dark"?"light":"dark")});Er.forEach(r=>{r.addEventListener("click",i=>{const u=document.querySelector(r.hash);u&&(i.preventDefault(),Xr(u))})});vo?.addEventListener("click",r=>{const i=r.target.closest(".project-link");!i||!vo.contains(i)||!Wr(r,i)||(qr(i.closest(".project-section")?.dataset.analyticsId),r.preventDefault(),Dr(i))});window.addEventListener("scroll",We,{passive:!0});window.addEventListener("resize",()=>{ht(),We()});$o.addEventListener?.("change",()=>{ht({force:!0}),We()});window.addEventListener("pagehide",()=>gt?.resetModal());window.addEventListener("pageshow",()=>{gt?.resetModal(),gt?.syncModalWithHistory(),zr()});We();
