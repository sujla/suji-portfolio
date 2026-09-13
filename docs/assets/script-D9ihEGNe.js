const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/flyer-flutter-ChZDFASH.js","assets/main-UYbrhh6w.js","assets/index-BvyVWk2v.js","assets/SiteFooter-Dt6vVGwZ.js","assets/main-CEsucule.css"])))=>i.map(i=>d[i]);
import{a as yr,p as wr,b as Eo}from"./projects-RdS7dd6_.js";import{_ as wo}from"./SiteFooter-Dt6vVGwZ.js";import"./index-BvyVWk2v.js";const vr=(r,i,u)=>{if(!r)return;const m=760,b="portfolioPfModalProject",O="portfolioPfList",U=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let P=null;const Y=(e,t=!1)=>{const a=[(e.types?.length?e.types:[e.type]).filter(Boolean).map(l=>U.find(f=>f.value===l)?.label||l).join(", "),t&&e.companyLabel,e.year].filter(Boolean);return a.length?`<span>${a.join(" · ")}</span>`:""},q=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},ve=()=>window.history.state?.[b]||"",Ro=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[b]:e},"")},wt=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',xo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & Short MRT Routes"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],se=(e,t="video")=>`
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
  `,vt=e=>{const t=xo[e-1];return`
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
      ${se(t.label)}
    `},qo=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?vt(1):wt(e),Be=[{start:0,end:5},{start:18,end:26}],Fo=(e,t)=>{const o=e.id==="public-transport"?vt(t+2):"",s=e.id==="perp-dex"?[`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/logo-intro-poster.jpg" data-perp-video data-perp-thumbnail-time="3.44">
                <source src="./assets/perp-dex/logo-intro.mp4" type="video/mp4" />
              </video>
              ${se("Logo introduction")}
            `,`
              <video class="pf-modal-perp-media" muted playsinline preload="auto" poster="./assets/perp-dex/sltp-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/sltp.mp4" type="video/mp4" />
              </video>
              ${se("Stop loss and take profit")}
            `,`
              <div class="pf-modal-perp-media pf-modal-perp-gif" data-perp-gif data-perp-gif-src="./assets/perp-dex/multiwallet.gif" data-perp-gif-duration="6600">
                <canvas class="pf-modal-perp-gif-frame" data-perp-gif-frame></canvas>
                <img class="pf-modal-perp-gif-frame pf-modal-perp-gif-player" alt="" data-perp-gif-player />
              </div>
              ${se("Multi-wallet animation","animation")}
            `,`
              <video class="pf-modal-perp-media pf-modal-perp-media--trading" muted playsinline preload="auto" poster="./assets/perp-dex/trading-poster.jpg" data-perp-video>
                <source src="./assets/perp-dex/trading.mov" />
              </video>
              ${se("Perpetual trading")}
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
    `},Wo=e=>{if(!e.matches(".pf-work--modular-editorial-system"))return;const t=s=>s.matches(`
        .pf-work--modular-editorial-system :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        )
      `),o=s=>{const a=s.videoWidth||s.naturalWidth||s.width,l=s.videoHeight||s.naturalHeight||s.height;if(!a||!l)return null;const f=16,h=document.createElement("canvas"),v=h.getContext("2d",{willReadFrequently:!0});if(!v)return null;h.width=f,h.height=f;try{v.drawImage(s,0,0,f,f);const g=v.getImageData(0,0,f,f).data;let k=0,n=0,M=0,$=0;for(let W=0;W<f;W+=1)for(let A=0;A<f;A+=1){if(A>1&&A<f-2&&W>1&&W<f-2)continue;const x=(W*f+A)*4,y=g[x+3]/255;y<.2||(k+=g[x]*y,n+=g[x+1]*y,M+=g[x+2]*y,$+=y)}return $?`rgb(${Math.round(k/$)} ${Math.round(n/$)} ${Math.round(M/$)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(s=>{if(t(s))return;const a=s.querySelector("img, video, canvas");if(!a)return;const l=()=>{if(!s.isConnected)return;const f=o(a);f&&(s.style.setProperty("--pf-modal-media-background",f),s.classList.add("has-media-sampled-background"))};if(a instanceof HTMLImageElement){a.complete&&a.naturalWidth?l():a.addEventListener("load",l,{once:!0});return}if(a instanceof HTMLVideoElement){a.readyState>=2?l():a.addEventListener("loadeddata",l,{once:!0});return}window.requestAnimationFrame(l)})},jo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const o=Number(t.dataset.segmentStart),s=Number(t.dataset.segmentEnd),a=()=>{t.currentTime=o,t.play().catch(()=>{})},l=()=>{t.currentTime=o,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",l,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=s&&a()}),t.addEventListener("ended",a),t.readyState>=1&&l()})},bt=e=>e.readyState>=1?Promise.resolve():new Promise(t=>{e.addEventListener("loadedmetadata",t,{once:!0}),e.addEventListener("error",t,{once:!0})}),St=e=>{const{container:t,video:o}=e,s=t.querySelector("[data-modal-media-play-toggle]"),a=t.querySelector("[data-modal-media-replay]");o.loop=!1;const l=()=>{const h=!o.paused&&!o.ended;t.classList.toggle("is-playing",h),s?.classList.toggle("is-playing",h),s?.setAttribute("aria-label",h?"Pause video":"Play video"),s?.setAttribute("aria-pressed",String(h))},f=()=>{t.isConnected&&(o.currentTime=0,o.play().catch(l),l())};return s?.addEventListener("click",()=>{if(!o.paused&&!o.ended){o.pause();return}o.ended&&(o.currentTime=0),o.play().catch(l),l()}),a?.addEventListener("click",f),o.addEventListener("play",l),o.addEventListener("pause",l),o.addEventListener("ended",l),o.addEventListener("loadedmetadata",l),l(),{...e,startFromBeginning:f}},Bo=e=>{const{container:t,gif:o}=e,s=o.querySelector("[data-perp-gif-frame]"),a=o.querySelector("[data-perp-gif-player]"),l=t.querySelector("[data-modal-media-play-toggle]"),f=t.querySelector("[data-modal-media-replay]"),h=o.dataset.perpGifSrc,v=Number(o.dataset.perpGifDuration||6600),g=s?.getContext("2d");let k=0,n=0,M=!1;const $=()=>{t.classList.toggle("is-playing",M),l?.classList.toggle("is-playing",M),l?.setAttribute("aria-label",M?"Pause animation":"Play animation"),l?.setAttribute("aria-pressed",String(M))},W=()=>{if(!(!s||!g||!a?.naturalWidth)){(!s.width||!s.height)&&(s.width=a.naturalWidth,s.height=a.naturalHeight);try{g.drawImage(a,0,0,s.width,s.height)}catch{}}},A=()=>{window.clearTimeout(k),W(),a?.removeAttribute("src"),M=!1,$()},x=()=>{if(!t.isConnected||!a||!h)return;window.clearTimeout(k);const G=++n;a.removeAttribute("src"),a.src=`${h}?play=${G}`,M=!0,$(),k=window.setTimeout(()=>{G===n&&t.isConnected&&A()},v)},y=new Image;return y.addEventListener("load",()=>{!s||!g||(s.width=y.naturalWidth,s.height=y.naturalHeight,g.drawImage(y,0,0))},{once:!0}),y.src=h,l?.addEventListener("click",()=>{M?A():x()}),f?.addEventListener("click",x),$(),{...e,startFromBeginning:x}},Ho=e=>{if(!e.matches(".pf-work--perp-dex"))return;const t=[...e.querySelectorAll(".pf-modal-bento-placeholder")].map(o=>({container:o,video:o.querySelector("[data-perp-video]"),gif:o.querySelector("[data-perp-gif]")})).filter(o=>o.video||o.gif).map(o=>o.video?St(o):Bo(o));t.length&&Promise.all(t.filter(o=>o.video).map(o=>bt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Io=e=>{if(!e.matches(".pf-work--public-transport"))return;const t=[...e.querySelectorAll("[data-public-transport-video]")].map(o=>({video:o,order:Number(o.dataset.publicTransportVideoOrder),container:o.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(o=>o.container).sort((o,s)=>o.order-s.order).map(St);t.length&&Promise.all(t.map(o=>bt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Do=(e,t=!1)=>{const o=e.types?.length?e.types:[e.type||"others"],s=e.id==="public-transport"?'<span class="pf-work-badge">AI-built</span>':"",a=`
      <div class="pf-work-card">
        ${wt(e)}
        ${s}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${Y(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${o.join(" ")}" draggable="false" aria-label="${u(e.title)} project detail">${a}</a>`},zo=e=>`
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
          ${Y(e,!0)}
        </div>
      </div>
    </a>
    </div>
  `,Lt=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,kt=(e,t)=>Lt(e)&&!t.target&&!t.hasAttribute("download"),Tt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},Et=()=>"24px",be=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},Mt=(e,t)=>{const o=t.width?e.width/t.width:1,s=t.height?e.height/t.height:1,a=e.left-t.left,l=e.top-t.top;return`translate3d(${a}px, ${l}px, 0) scale(${o}, ${s})`},Vo=()=>{const e=[...r.querySelectorAll(".pf-work video")],t=e.filter(o=>!o.paused&&!o.ended);return e.forEach(o=>o.pause()),t},_o=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},$t=(e,t,{pushHistory:o=!0}={})=>{if(P)return;o&&Ro(t.id);const s=Vo(),a=e.querySelector(".pf-work-card")||e,l=a.getBoundingClientRect(),f=window.getComputedStyle(a).borderRadius,h=Tt(),v=Et(),g=document.createElement("div"),k=document.createElement("div"),n=document.createElement("div"),M=`pf-modal-${t.id}-title`,$=window.matchMedia("(prefers-reduced-motion: reduce)").matches,W=$?1:m,A=t.cta?`
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
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",y=t.id==="perp-dex",G=t.id==="public-transport",ar=G?'<span class="pf-work-badge pf-work-badge--modal">AI-built</span>':"",lo=y?4:G||t.id==="store-finder"?2:3,ir=Array.from({length:lo},(d,w)=>Fo(t,w)),nr=Array.from({length:lo},(d,w)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${w+1} pf-modal-bento-skeleton"></div>
      `),fe=G,Ce=!t.cta&&!y&&!fe,lt=t.deviceType==="web"&&!fe&&!Ce,co=t.id==="cta-enhancement",po=d=>{const w=co?d[0]:d.slice(0,2).join("");return y?`
          <div class="pf-modal-perp-left">
            ${d[0]}
            <div class="pf-modal-perp-center-bottom">
              ${d[1]}
              ${d[2]}
            </div>
          </div>
          ${d[3]}
        `:fe||Ce?d.join(""):lt?`<div class="pf-modal-bento-side">${d.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${co?" pf-modal-bento-stack-top--single":""}">
              ${w}
            </div>
            ${d[2]||""}
          </div>
        `},lr=po(ir),cr=po(nr),dr=y?"":`
        <div class="pf-modal-bento-feature">
          ${qo(t)}
        </div>
      `,pr=`
      <section class="pf-modal-bento-section${lt?" pf-modal-bento-section--web":""}${fe?" pf-modal-bento-section--three-up":""}${Ce?" pf-modal-bento-section--four-up":""}${y?" pf-modal-bento-section--perp-dex":""}"${y||G?"":' aria-hidden="true"'}>
        ${dr}
        ${lr}
      </section>
    `,ur=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${lt?" pf-modal-bento-section--web":""}${fe?" pf-modal-bento-section--three-up":""}${Ce?" pf-modal-bento-section--four-up":""}${y?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${y?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${cr}
      </section>
    `;g.className="pf-modal-layer",k.className="pf-modal-backdrop",k.style.opacity="0",n.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${A?"":" pf-work-modal--no-cta"}`,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby",M),n.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${ur}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${A?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <div class="pf-modal-title-row">
            <h2 id="${M}">${t.title}</h2>
            ${ar}
          </div>
          ${Y(t)}
        </div>
        ${A||x}
      </div>
    `,be(n,h),n.style.borderRadius=v,n.style.transformOrigin="top left",g.append(k,n),document.body.append(g),n.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const Pe=n.animate([{transform:Mt(l,h),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v}],{duration:W,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ae=k.animate([{opacity:0},{opacity:1}],{duration:Math.min(W,420),easing:"ease-out",fill:"forwards"}),ct=n.querySelector(".pf-modal-close"),oe=n.querySelector(".pf-modal-cta"),Re=n.querySelector(".pf-modal-footer"),C=n.querySelector(".pf-modal-card-content"),me=n.querySelector(".pf-modal-scroll-indicator");let uo=!1,j=!1,ge=0;const fr=()=>{if(ge=0,!C||!me||j)return;const d=C.scrollHeight-C.clientHeight,w=8,V=Re?.offsetHeight??0,_=Math.max(0,n.clientHeight-V-w*2);if(d<=1||_<=0){me.classList.remove("is-visible");return}const Fe=Math.min(_,Math.max(36,_*(C.clientHeight/C.scrollHeight))),hr=Math.min(1,Math.max(0,C.scrollTop/d))*(_-Fe);me.style.height=`${Fe}px`,me.style.transform=`translate3d(0, ${hr}px, 0)`,me.classList.add("is-visible")},he=()=>{ge||(ge=window.requestAnimationFrame(fr))},dt=typeof ResizeObserver=="function"?new ResizeObserver(he):null;dt?.observe(C),C?.addEventListener("scroll",he,{passive:!0});const mr=()=>{uo||!C||j||(uo=!0,C.classList.remove("is-skeleton"),C.innerHTML=pr,Wo(n),jo(n),Ho(n),Io(n),C.querySelectorAll(".pf-modal-bento-section").forEach(d=>dt?.observe(d)),window.requestAnimationFrame(()=>{!j&&n.isConnected&&(n.classList.add("is-content-ready"),he())}))},xe=()=>{const d=Re?.offsetHeight??0;n.style.setProperty("--pf-modal-footer-space",`${d}px`),he()},fo=Re&&typeof ResizeObserver=="function"?new ResizeObserver(xe):null;fo?.observe(Re),xe();const mo=()=>{!j&&n.classList.contains("is-ready")&&(be(n,Tt()),n.style.borderRadius=Et(),xe())};let go=!1;const ho=({restoreFocus:d=!1}={})=>{if(go||(go=!0,g.getAnimations?.({subtree:!0})?.forEach(V=>V.cancel()),g.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",pt),window.removeEventListener("resize",mo),fo?.disconnect(),dt?.disconnect(),C?.removeEventListener("scroll",he),ge&&window.cancelAnimationFrame(ge),P?.modal===n&&(P=null),_o(s),!d))return;(e.matches("a")?e:r.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},yo=()=>{if(j)return;j=!0,n.classList.add("is-closing"),n.classList.remove("is-revealing","is-ready","is-content-ready");const d=n.getBoundingClientRect(),w=window.getComputedStyle(n).borderRadius,V=a.getBoundingClientRect();e.classList.remove("is-modal-source"),Pe.cancel(),Ae.cancel(),be(n,d),n.style.borderRadius=w,n.style.transform="none";const _=$?1:320,Fe=n.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:w},{transform:Mt(V,d),borderRadius:f}],{duration:_,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});k.animate([{opacity:1},{opacity:0}],{duration:$?1:200,easing:"ease-out",fill:"forwards"}),Fe.finished.finally(()=>ho({restoreFocus:!0}))},qe=()=>{if(j)return;const d=ve()===t.id;yo(),d&&(window.history.back(),window.setTimeout(()=>{if(ve()!==t.id)return;const w=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete w[b],window.history.replaceState(w,"")},500))},gr=d=>{if(oe){if(t.cta?.newTab){Lt(d)&&qe();return}kt(d,oe)&&(d.preventDefault(),!j&&(j=!0,n.classList.add("is-navigating"),document.removeEventListener("keydown",pt),Pe.cancel(),Ae.cancel(),ve()===t.id?window.location.replace(oe.href):window.location.href=oe.href))}},pt=d=>{if(d.key==="Escape"){d.preventDefault(),qe();return}if(d.key!=="Tab")return;const w=[ct,oe].filter(Boolean),V=w.indexOf(document.activeElement),_=d.shiftKey?(V-1+w.length)%w.length:(V+1)%w.length;d.preventDefault(),w[_].focus()};P={layer:g,modal:n,projectId:t.id,closeModal:yo,disposeModal:ho},document.addEventListener("keydown",pt),window.addEventListener("resize",mo),ct.addEventListener("click",qe),oe?.addEventListener("click",gr),g.addEventListener("click",d=>{(d.target===g||d.target===k)&&qe()}),Ae.finished.then(()=>{k.style.opacity="1",Ae.cancel()}).catch(()=>{}),Pe.finished.then(()=>{j||(be(n,h),n.style.borderRadius=v,n.style.transform="none",Pe.cancel(),xe(),n.classList.add("is-ready"),mr(),ct.focus({preventScroll:!0}))}).catch(()=>{})},I=window.matchMedia("(max-width: 600px)"),N=document.querySelector("[data-pf-type-filter]"),Oo=270,Yo=.36;if(N){const e=N.hasAttribute("data-flyer-filters");N.innerHTML=`
      <div class="${e?"flyer-tabs":"pf-type-filter"}" role="group" aria-label="Filter projects by type">
      ${U.map(({value:t,label:o},s)=>`
            ${!e&&s>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
            <button
              class="${e?"flyer-tab":"pf-type-filter-button"}"
              type="button"
              data-project-type-filter="${t}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${e?`<span class="flyer-tab-label">${t==="enterprise"?"Enterprise<br>/SaaS":t==="e-commerce"?"E-Commerce":o}</span>`:o}</button>
          `).join("")}
      </div>
    `,e&&wo(async()=>{const{mountFlyerFlutter:t}=await import("./flyer-flutter-ChZDFASH.js");return{mountFlyerFlutter:t}},__vite__mapDeps([0,1,2,3,4])).then(({mountFlyerFlutter:t})=>t(N.querySelector(".flyer-tabs"))).catch(()=>{})}document.querySelector("[data-pf-floating-filter]")?.remove();const S=document.createElement("div");S.className="pf-floating-filter",S.dataset.pfFloatingFilter="",S.setAttribute("role","group"),S.setAttribute("aria-label","Filter projects by type"),S.innerHTML=`
    <div class="pf-floating-filter-scroll">
      ${[{value:"",label:"All"},...U].map(({value:e,label:t})=>`
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
              <div class="pf-featured-intro"><span>Case Studies 01—03</span><h2>Selected<br>work</h2><p>Product design with <br>measurable impact.</p></div>
              ${i.filter(e=>e.cta).map(zo).join("")}
            </div>
          </div>
        </div>
      </div>
      <div class="pf-work-group pf-work-group--secondary" data-work-group>
        <div class="pf-group-heading"><h2>More work</h2></div>
        <div class="pf-secondary-grid">
          ${i.filter(e=>!e.cta).map(e=>Do(e)).join("")}
        </div>
      </div>
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const L=document.createElement("span");L.className="pf-work-cursor-label",L.dataset.pfWorkCursor="",L.setAttribute("aria-hidden","true"),L.innerHTML="<span>View Details</span>",document.body.append(L);const He=L.firstElementChild,Ct=[...N?[...N.querySelectorAll("[data-project-type-filter]")]:[],...S.querySelectorAll("[data-project-type-filter]")],No=N?.querySelector(".pf-type-filter, .flyer-tabs"),Pt=document.documentElement,R=S.querySelector(".pf-floating-filter-scroll"),Se=[...S.querySelectorAll("[data-project-type-filter]")],Ko=[...r.querySelectorAll(".pf-work[data-project-types]")],At=r.querySelector(".pf-work-grid"),Rt=r.querySelector(".pf-filter-empty"),xt=r.querySelector(".pf-work-group--secondary .pf-group-heading"),ae=r.querySelector(".pf-featured-section"),qt=r.querySelector(".pf-featured-sticky"),Ft=r.querySelector(".pf-featured-viewport"),J=r.querySelector(".pf-featured-grid");let K=0,Le=0,ke=0,F=0,D=0;const Ie=window.matchMedia("(max-width: 920px)"),Wt=e=>{if(Le=0,Ie.matches){J.style.transform="none",D=0;return}if(ae.hidden){D=0;return}const t=Math.min(K,Math.max(0,window.scrollY-ke)),o=D?Math.min(e-D,64):16.67;D=e,F+=(t-F)*(1-Math.exp(-o/85)),Math.abs(t-F)<.1&&(F=t),window.scrollY>=ke+K&&(F=K),J.style.transform=`translate3d(${-F}px, 0, 0)`,F!==t?Le=requestAnimationFrame(Wt):D=0},Q=()=>{if(ae.hidden)return;if(Ie.matches){K=0,F=0,ae.style.height="auto",J.style.transform="none",D=0;return}K=Math.max(0,J.scrollWidth-Ft.clientWidth);const e=parseFloat(getComputedStyle(qt).top)||0;ke=ae.getBoundingClientRect().top+window.scrollY-e,ae.style.height=`${qt.offsetHeight+K}px`,F=Math.min(K,Math.max(0,window.scrollY-ke)),J.style.transform=`translate3d(${-F}px, 0, 0)`,D=0};window.addEventListener("scroll",()=>{Le||(Le=requestAnimationFrame(Wt))},{passive:!0}),window.addEventListener("resize",Q,{passive:!0}),Ie.addEventListener?.("change",Q);const jt=new ResizeObserver(Q);jt.observe(Ft),jt.observe(J),document.fonts.ready.then(Q);let B="",Bt=0,Ht=0,It=0,Te=!1;const Xo=()=>{window.clearTimeout(Ht),window.clearTimeout(It)},Go=e=>{if(e!==Te){if(Te=e,Xo(),!e){S.classList.remove("is-visible"),It=window.setTimeout(()=>{Te||Pt.classList.remove("is-footer-yielding-to-filter")},220);return}Pt.classList.add("is-footer-yielding-to-filter"),Ht=window.setTimeout(()=>{Te&&S.classList.add("is-visible")},220)}},ie=()=>{if(!R||!I.matches){S.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,R.scrollWidth-R.clientWidth);S.classList.toggle("has-scroll-left",R.scrollLeft>1),S.classList.toggle("has-scroll-right",R.scrollLeft<e-1)},Dt=()=>{if(!R||!I.matches)return;const e=Se.find(a=>a.getAttribute("aria-pressed")==="true"),t=Se.indexOf(e);if(!e)return;const o=Math.max(0,R.scrollWidth-R.clientWidth),s=t<2?0:t>=Se.length-2?o:e.offsetLeft-(R.clientWidth-e.offsetWidth)/2;R.scrollTo({left:s,behavior:"smooth"})},De=()=>{const e=r.getBoundingClientRect().bottom,t=window.innerHeight*Yo;Go(window.scrollY>Oo&&e>t)},Uo=()=>{const e=Math.max(0,r.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},zt=e=>{B=e,xt&&(xt.hidden=!!B);let t=0;Ct.forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.projectTypeFilter===B))}),No?.classList.toggle("is-filtering",!!B),Ko.forEach(o=>{const s=o.dataset.projectTypes.split(" "),a=!B||s.includes(B);o.hidden=!a,o.parentElement.classList.contains("pf-featured-cell")&&(o.parentElement.hidden=!a),a&&(t+=1)}),Se.forEach(o=>{o.querySelector("[data-pf-filter-count]").textContent=o.dataset.projectTypeFilter===B?` ${t}`:""}),Dt(),ie(),At?.classList.toggle("is-single-result",t===1),r.querySelectorAll("[data-work-group]").forEach(o=>{o.hidden=!o.querySelector(".pf-work:not([hidden])")}),Q(),Rt&&(Rt.hidden=t>0)};let Vt=0,ze=!1;Ct.forEach(e=>{e.addEventListener("click",async()=>{const t=e.classList.contains("flyer-tab");if(t&&ze)return;const o=++Vt;if(t){ze=!0;const f=e.closest(".flyer-tabs"),h=[...f.querySelectorAll(".flyer-tab")].map(v=>[v,v.disabled]);f.classList.add("is-tear-locked"),h.forEach(([v])=>{v.disabled=!0});try{const{playFlyerTear:v}=await wo(async()=>{const{playFlyerTear:g}=await import("./flyer-flutter-ChZDFASH.js");return{playFlyerTear:g}},__vite__mapDeps([0,1,2,3,4]));if(!await v(e))return}catch{}finally{h.forEach(([v,g])=>{v.disabled=g}),f.classList.remove("is-tear-locked"),ze=!1}if(o!==Vt||!e.isConnected)return}const s=document.documentElement,a=e.dataset.projectTypeFilter,l=!S.contains(e)&&B===a;window.clearTimeout(Bt),s.style.overflowAnchor="none",zt(l?"":a),Uo(),Bt=window.setTimeout(()=>{s.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",De,{passive:!0}),window.addEventListener("resize",()=>{De(),ie()},{passive:!0}),R?.addEventListener("scroll",ie,{passive:!0}),I.addEventListener?.("change",()=>{ie(),Dt()}),De();const Ve=window.performance.getEntriesByType("navigation")[0]?.type==="back_forward"?window.history.state?.[O]:null;zt(Ve?.projectType||""),Number.isFinite(Ve?.scrollY)&&(window.scrollTo({top:Ve.scrollY,behavior:"instant"}),Q()),ie(),window.addEventListener("pagehide",()=>{window.history.replaceState({...window.history.state,[O]:{projectType:B,scrollY:window.scrollY}},"")});const c=r.querySelector("[data-pf-work-rail]"),_e=c?[...c.querySelectorAll(".pf-work-set")]:[],_t=r.querySelector(".pf-work-set--primary .pf-work"),p=r.querySelector("[data-pf-work-rail-secondary]"),Ee=p?[...p.querySelectorAll(".pf-work-set")]:[],Ot=Ee[1]?.querySelector(".pf-work:nth-child(4)");r.querySelector("[data-mobile-pf-work-rail]"),r.querySelector("[data-mobile-pf-work-rail-secondary]");const Jo=80,Qo=-80,Oe=32,Zo=12,Yt=180,Nt=600;let Ye,Ne=0,Ke=0,T=0,Xe=Oe,Ge=!1,ne=!1,Kt=0,Ue=0,le=!1,Me=!1,ce=!1,Je=0,z=0,Z=0,H=0,ee=0,E=0,Qe=0,de=!1,Xt=0,Ze=0,pe=!1,$e=!1,ue=!1,et=0;const Gt=({preservePosition:e=!1}={})=>{if(!c||!_t||_e.length<3)return;const t=z,o=Z,s=t?(c.scrollLeft-o)/t:0,a=c.getBoundingClientRect(),l=_t.getBoundingClientRect(),f=c.scrollLeft+l.left-a.left;z=_e[2].getBoundingClientRect().left-_e[1].getBoundingClientRect().left,Z=f-(c.clientWidth-l.width)/2-(I.matches?Jo:0),c.scrollLeft=e?Z+s*z:Z,T=c.scrollLeft},tt=()=>{if(!c||!z)return 0;const e=Z-z*.5,t=Z+z*.5;let o=c.scrollLeft;for(;o<e;)o+=z;for(;o>=t;)o-=z;const s=o-c.scrollLeft;return Math.abs(s)>.5&&(c.scrollLeft=o),s},Ut=({preservePosition:e=!1}={})=>{if(!p||!Ot||Ee.length<3||!p.clientWidth)return;const t=H,o=ee,s=t?(p.scrollLeft-o)/t:0,a=p.getBoundingClientRect(),l=Ot.getBoundingClientRect(),f=p.scrollLeft+l.left-a.left;H=Ee[2].getBoundingClientRect().left-Ee[1].getBoundingClientRect().left,ee=f-(p.clientWidth-l.width)/2-Qo,p.scrollLeft=e?ee+s*H:ee,E=p.scrollLeft},ot=()=>{if(!p||!H)return 0;const e=ee-H*.5,t=ee+H*.5;let o=p.scrollLeft;for(;o<e;)o+=H;for(;o>=t;)o-=H;const s=o-p.scrollLeft;return Math.abs(s)>.5&&(p.scrollLeft=o),s},rt=()=>{T=c?.scrollLeft??T,Ke=performance.now()+200},Jt=()=>{E=p?.scrollLeft??E,Qe=performance.now()+200},er=()=>{window.clearTimeout(Je),ce=!0,T=c?.scrollLeft??T},Qt=()=>{window.clearTimeout(Je),Je=window.setTimeout(()=>{c&&(T=c.scrollLeft,T+=tt(),ce=!1,Ke=performance.now()+Nt)},Yt)},tr=()=>{window.clearTimeout(et),ue=!0,E=p?.scrollLeft??E},Zt=()=>{window.clearTimeout(et),et=window.setTimeout(()=>{p&&(E=p.scrollLeft,E+=ot(),ue=!1,Qe=performance.now()+Nt)},Yt)},eo=e=>{const t=Math.min((e-(Ye??e))/1e3,.1),o=Ge?Zo:Oe;if(Ye=e,Xe+=(o-Xe)*Math.min(t*6,1),c){const s=r.getBoundingClientRect(),a=s.bottom>0&&s.top<window.innerHeight;a&&!ne&&!ce&&!ue&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ke&&(T+=t*Xe,c.scrollLeft=T,T+=tt()),a&&p?.clientWidth&&H&&!de&&!ue&&!ce&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Qe&&(E-=t*Oe,p.scrollLeft=E,E+=ot())}Ne=requestAnimationFrame(eo)};!c||Ne||(Ye=void 0,Ne=requestAnimationFrame(eo)),requestAnimationFrame(()=>{Gt(),Ut()}),c?.addEventListener("mouseenter",()=>{Ge=!0}),c?.addEventListener("mouseleave",()=>{Ge=!1}),r.addEventListener("wheel",e=>{!c||e.ctrlKey||(rt(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),c?.addEventListener("pointerdown",e=>{if(!(e.button!==0||P)){if(e.pointerType==="touch"&&I.matches){er();return}ne=!0,le=!1,Kt=e.clientX,Ue=c.scrollLeft,rt()}}),c?.addEventListener("dragstart",e=>{e.preventDefault()}),c?.addEventListener("pointermove",e=>{if(!ne)return;const t=e.clientX-Kt;!le&&Math.abs(t)<=5||(le||(le=!0,c.classList.add("is-dragging"),c.setPointerCapture(e.pointerId)),c.scrollLeft=Ue-t,Ue+=tt(),T=c.scrollLeft,rt())});const or=e=>{!c||!ne||(ne=!1,c.classList.remove("is-dragging"),c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId),T=c.scrollLeft,le&&(Me=!0,window.setTimeout(()=>{Me=!1},0)))};c?.addEventListener("scroll",()=>{ce&&(T=c.scrollLeft,Qt())},{passive:!0});const to=e=>{if(e.pointerType==="touch"&&I.matches){Qt();return}or(e)};c?.addEventListener("pointerup",to),c?.addEventListener("pointercancel",to),c?.addEventListener("click",e=>{Me&&(Me=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||P)){if(e.pointerType==="touch"&&I.matches){tr();return}de=!0,pe=!1,Xt=e.clientX,Ze=p.scrollLeft,Jt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!de)return;const t=e.clientX-Xt;!pe&&Math.abs(t)<=5||(pe||(pe=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Ze-t,Ze+=ot(),E=p.scrollLeft,Jt())});const rr=e=>{!p||!de||(de=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),E=p.scrollLeft,pe&&($e=!0,window.setTimeout(()=>{$e=!1},0)))};p?.addEventListener("scroll",()=>{ue&&(E=p.scrollLeft,Zt())},{passive:!0});const oo=e=>{if(e.pointerType==="touch"&&I.matches){Zt();return}rr(e)};p?.addEventListener("pointerup",oo),p?.addEventListener("pointercancel",oo),p?.addEventListener("click",e=>{$e&&($e=!1,e.preventDefault(),e.stopPropagation())},!0);const sr=70,st=14,at=12;let X=0,ro=L.offsetWidth,it=L.offsetHeight;const nt=()=>{ro=L.offsetWidth,it=L.offsetHeight},so=e=>{!He||He.textContent===e||(He.textContent=e,L.classList.toggle("is-case-study",e==="View Case Study"),nt())};document.fonts?.ready.then(nt);const te=(e=0)=>{if(e){if(X)return;X=window.setTimeout(()=>{X=0,L.classList.remove("is-visible")},e);return}window.clearTimeout(X),X=0,L.classList.remove("is-visible")},ao=()=>{window.clearTimeout(X),X=0,L.classList.add("is-visible")},io=e=>{const t=ro/2,o=Math.min(Math.max(t+at,e.clientX),window.innerWidth-t-at),a=e.clientY+st+it+at<=window.innerHeight?e.clientY+st:e.clientY-st-it;L.style.transform=`translate3d(${o}px, ${a}px, 0) translateX(-50%)`};document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const t=e.target instanceof Element?e.target:null,o=t?.closest("[data-cursor-label]"),s=t?.closest(".pf-work");if(o){so(o.dataset.cursorLabel||"View Details"),io(e),ao();return}if(s&&r.contains(s)){so("View Details"),io(e),ao();return}if(t&&At?.contains(t)){te(sr);return}te()}),r.addEventListener("pointerleave",()=>te()),window.addEventListener("blur",()=>te()),window.addEventListener("scroll",()=>te(),{passive:!0}),r.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!kt(t,e))return;const o=i.find(s=>e.classList.contains(`pf-work--${s.id}`));o&&(q(o),te(),!e.classList.contains("pf-work--featured")&&(t.preventDefault(),$t(e,o)))})}),window.addEventListener("resize",()=>{nt(),requestAnimationFrame(()=>{Gt({preservePosition:!0}),Ut({preservePosition:!0})})});const no=()=>{const e=ve();if(P){P.projectId!==e&&P.closeModal();return}if(!e)return;const t=i.find(s=>s.id===e),o=r.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&o&&$t(o,t,{pushHistory:!1})};return window.addEventListener("popstate",no),{resetModal:()=>P?.disposeModal(),syncModalWithHistory:no}},ft=document.querySelector("[data-pf]"),vo=document.querySelector("[data-about]"),bo=document.querySelector("[data-project-list]"),br=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Sr=document.querySelector(".counter-line"),So=document.querySelector(".fixed-project-meta"),Lr=document.querySelector("[data-side-number]"),kr=document.querySelector("[data-side-wip]"),Tr=document.querySelector("[data-side-title]"),Er=document.querySelector("[data-counter-wip]"),mt=document.querySelector("[data-year-rail]"),Mr=[...document.querySelectorAll("[data-gnb-scroll]")],Mo=document.querySelector(".theme-toggle"),re=document.documentElement,$o="portfolio-last-project-slug",Lo=760,$r=12,Cr=8,Co=window.matchMedia("(max-width: 600px)"),Pr=window.matchMedia("(prefers-reduced-motion: reduce)"),Ar={work:40,experience:-50};let gt=!1,ye=0,ut=0;const Rr=r=>{try{return window.sessionStorage?.getItem(r)||""}catch{return""}},xr=(r,i)=>{try{window.sessionStorage?.setItem(r,i)}catch{}},qr=r=>{window.gtag?.("event","project_click",{project_name:r})},Fr=r=>`'${String(r).slice(-2)}`,Wr=r=>{const{start:i,end:u}=Eo.yearRange,m=Math.min(5,u-i+1),b=Math.min(Math.max(r-2,i),u-m+1);return Array.from({length:m},(O,we)=>b+we)},jr=r=>r.split("|").join(" "),Br=(r,i)=>r.button===0&&!r.defaultPrevented&&!r.metaKey&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!i.target&&!i.hasAttribute("download"),Hr=()=>window.matchMedia("(max-width: 600px)").matches?Cr:$r,Ir=()=>{const r=Hr();return{top:r,left:r,width:window.innerWidth-r*2,height:window.innerHeight-r*2}},Dr=r=>{const i=r.getBoundingClientRect(),u=Ir(),m=window.getComputedStyle(r),b=window.getComputedStyle(r.querySelector(".project-media")),O=r.querySelector(".project-summary"),we=Number.parseFloat(m.rowGap||m.gap)||0,U=O?.getBoundingClientRect().height||0,P=Math.max(0,u.height-U-we),Y=document.createElement("div"),q=r.cloneNode(!0);return q.classList.add("project-transition-card"),q.removeAttribute("href"),q.removeAttribute("aria-label"),q.setAttribute("aria-hidden","true"),Object.assign(q.style,{top:`${i.top}px`,left:`${i.left}px`,width:`${i.width}px`,height:`${i.height}px`,gap:m.gap,gridTemplateRows:m.gridTemplateRows,maxHeight:"none"}),q.style.setProperty("--project-media-shadow",b.boxShadow),Y.className="project-transition-layer",Y.append(q),document.body.append(Y),{cardClone:q,targetRect:u,targetGridTemplateRows:`${P}px ${U}px`}},zr=r=>{if(gt)return;const i=r.closest(".project-section");if(!i){window.location.href=r.href;return}gt=!0,i.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:m,targetGridTemplateRows:b}=Dr(r);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${m.top}px`,left:`${m.left}px`,width:`${m.width}px`,height:`${m.height}px`,gridTemplateRows:b,opacity:0,offset:1}],{duration:Lo,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=r.href},Lo-120)},Vr=()=>{gt=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(r=>r.remove()),document.querySelectorAll(".is-transition-source").forEach(r=>{r.classList.remove("is-transition-source")})},_r=r=>{mt.innerHTML=Wr(r.year).map(i=>{const u=i===r.year;return`
        <span class="year-rail-item" data-year="${i}" ${u?'aria-current="true"':""}>${Fr(i)}</span>
      `}).join("")},Or=()=>{So.classList.add("is-changing"),mt.classList.add("is-changing"),window.setTimeout(()=>{So.classList.remove("is-changing"),mt.classList.remove("is-changing")},180)};let We=[],ko=-1;const yt=({force:r=!1}={})=>{if(!Co.matches){ye&&(re.style.removeProperty("--mobile-project-viewport"),ye=0,ut=0);return}const i=window.innerWidth;!r&&ye&&i===ut||(ye=window.innerHeight,ut=i,re.style.setProperty("--mobile-project-viewport",`${ye}px`))},Yr=()=>{if(!ft)return;const r=ft.getBoundingClientRect(),i=window.innerHeight/2,u=r.top<=i&&r.bottom>=i;re.classList.toggle("is-pf-active",u)},Nr=()=>{if(!vo)return;const r=vo.getBoundingClientRect(),i=window.innerHeight/2,u=r.top<=i&&r.bottom>=i;re.classList.toggle("is-about-active",u)},Kr=r=>{if(r===ko||r<0)return;const i=wr[r],u=(r+1)/Eo.totalProjectCount*100;ko=r,Or(),br.textContent=i.number,Lr.textContent=i.number,kr.textContent=i.wip?"🚧":"",Er.textContent=i.wip?"🚧":"",Tr.innerHTML=i.sideTitle.split("|").join("<br />"),Sr.style.setProperty("--progress",`${u}%`),xr($o,i.slug),_r(i)},Xr=()=>{if(!We.length)return;const r=window.innerHeight/2,i=We.map((u,m)=>{const b=u.getBoundingClientRect(),O=b.top+b.height/2;return{index:m,distance:Math.abs(O-r)}}).sort((u,m)=>u.distance-m.distance)[0]?.index;We.forEach((u,m)=>{const b=m===i;u.classList.toggle("is-active",b),u.classList.toggle("is-inactive",!b)}),Kr(i)},Gr=r=>{const i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),u=Ar[r.id]??0,m=r===document.body?0:r.getBoundingClientRect().top+window.scrollY-u,b=Math.min(i,Math.max(0,m));window.scrollTo({top:b,behavior:Pr.matches?"auto":"smooth"})};let To=0;const je=()=>{cancelAnimationFrame(To),To=requestAnimationFrame(()=>{Yr(),Nr(),Xr()})},Po=r=>{re.dataset.theme=r,Mo.setAttribute("aria-pressed",String(r==="dark")),localStorage.setItem("portfolio-theme",r)},Ur=localStorage.getItem("portfolio-theme")||"light",Ao=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate",ht=vr(ft,yr,jr);We=[...document.querySelectorAll("[data-project]")];yt({force:!0});Po(Ur);const Jr=()=>{const r=window.location.hash?window.location.hash.slice(1):"",i=Ao()==="back_forward",u=r||(i?Rr($o):""),m=u?document.getElementById(u):null;r&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),m&&m.scrollIntoView({block:"center",behavior:"auto"})};Jr();Ao()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Mo.addEventListener("click",()=>{Po(re.dataset.theme==="dark"?"light":"dark")});Mr.forEach(r=>{r.addEventListener("click",i=>{const u=document.querySelector(r.hash);u&&(i.preventDefault(),Gr(u))})});bo?.addEventListener("click",r=>{const i=r.target.closest(".project-link");!i||!bo.contains(i)||!Br(r,i)||(qr(i.closest(".project-section")?.dataset.analyticsId),r.preventDefault(),zr(i))});window.addEventListener("scroll",je,{passive:!0});window.addEventListener("resize",()=>{yt(),je()});Co.addEventListener?.("change",()=>{yt({force:!0}),je()});window.addEventListener("pagehide",()=>ht?.resetModal());window.addEventListener("pageshow",()=>{ht?.resetModal(),ht?.syncModalWithHistory(),Vr()});je();
