import{a as or,p as rr,b as lo}from"./projects-Qes7yPtp.js";const sr=(r,n,p)=>{if(!r)return;const f=760,b="portfolioPfModalProject",O=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let k=null;const ue=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Q=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},T=()=>window.history.state?.[b]||"",yo=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[b]:e},"")},lt=e=>e.deviceType==="web"?`
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
            `][t]:"",a=e.media==="store-finder-renewal"&&t<Pe.length?`
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
                <strong class="pf-modal-result-value--increase">326.2%</strong>
                <p class="pf-modal-result-label">Pickup Conversion</p>
              </div>
              <div class="pf-modal-result-metric pf-modal-result-metric--summary">
                <strong class="pf-modal-result-value--increase">132.6%</strong>
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
        `:e.id==="modular-editorial-system"&&t===1?'<img class="pf-modal-modular-editorial-system-interface" src="./assets/modular-editorial-system/interface.png" alt="" />':"",g=t===0&&["cta-enhancement","store-finder"].includes(e.id)||e.id==="modular-editorial-system"&&t===1?" inner-shadow-lg":"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}${g}">
        ${o||s||a||u||m||w}
      </div>
    `},So=e=>{if(!e.matches(".pf-work--modular-editorial-system"))return;const t=s=>s.matches(`
        .pf-work--modular-editorial-system :is(
          .pf-modal-bento-placeholder--1,
          .pf-modal-bento-placeholder--2
        )
      `),o=s=>{const a=s.videoWidth||s.naturalWidth||s.width,u=s.videoHeight||s.naturalHeight||s.height;if(!a||!u)return null;const m=16,w=document.createElement("canvas"),q=w.getContext("2d",{willReadFrequently:!0});if(!q)return null;w.width=m,w.height=m;try{q.drawImage(s,0,0,m,m);const g=q.getImageData(0,0,m,m).data;let L=0,i=0,$=0,P=0;for(let F=0;F<m;F+=1)for(let A=0;A<m;A+=1){if(A>1&&A<m-2&&F>1&&F<m-2)continue;const x=(F*m+A)*4,h=g[x+3]/255;h<.2||(L+=g[x]*h,i+=g[x+1]*h,$+=g[x+2]*h,P+=h)}return P?`rgb(${Math.round(L/P)} ${Math.round(i/P)} ${Math.round($/P)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(s=>{if(t(s))return;const a=s.querySelector("img, video, canvas");if(!a)return;const u=()=>{if(!s.isConnected)return;const m=o(a);m&&(s.style.setProperty("--pf-modal-media-background",m),s.classList.add("has-media-sampled-background"))};if(a instanceof HTMLImageElement){a.complete&&a.naturalWidth?u():a.addEventListener("load",u,{once:!0});return}if(a instanceof HTMLVideoElement){a.readyState>=2?u():a.addEventListener("loadeddata",u,{once:!0});return}window.requestAnimationFrame(u)})},Lo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const o=Number(t.dataset.segmentStart),s=Number(t.dataset.segmentEnd),a=()=>{t.currentTime=o,t.play().catch(()=>{})},u=()=>{t.currentTime=o,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",u,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=s&&a()}),t.addEventListener("ended",a),t.readyState>=1&&u()})},dt=e=>e.readyState>=1?Promise.resolve():new Promise(t=>{e.addEventListener("loadedmetadata",t,{once:!0}),e.addEventListener("error",t,{once:!0})}),pt=e=>{const{container:t,video:o}=e,s=t.querySelector("[data-modal-media-play-toggle]"),a=t.querySelector("[data-modal-media-replay]");o.loop=!1;const u=()=>{const w=!o.paused&&!o.ended;t.classList.toggle("is-playing",w),s?.classList.toggle("is-playing",w),s?.setAttribute("aria-label",w?"Pause video":"Play video"),s?.setAttribute("aria-pressed",String(w))},m=()=>{t.isConnected&&(o.currentTime=0,o.play().catch(u),u())};return s?.addEventListener("click",()=>{if(!o.paused&&!o.ended){o.pause();return}o.ended&&(o.currentTime=0),o.play().catch(u),u()}),a?.addEventListener("click",m),o.addEventListener("play",u),o.addEventListener("pause",u),o.addEventListener("ended",u),o.addEventListener("loadedmetadata",u),u(),{...e,startFromBeginning:m}},ko=e=>{const{container:t,gif:o}=e,s=o.querySelector("[data-perp-gif-frame]"),a=o.querySelector("[data-perp-gif-player]"),u=t.querySelector("[data-modal-media-play-toggle]"),m=t.querySelector("[data-modal-media-replay]"),w=o.dataset.perpGifSrc,q=Number(o.dataset.perpGifDuration||6600),g=s?.getContext("2d");let L=0,i=0,$=!1;const P=()=>{t.classList.toggle("is-playing",$),u?.classList.toggle("is-playing",$),u?.setAttribute("aria-label",$?"Pause animation":"Play animation"),u?.setAttribute("aria-pressed",String($))},F=()=>{if(!(!s||!g||!a?.naturalWidth)){(!s.width||!s.height)&&(s.width=a.naturalWidth,s.height=a.naturalHeight);try{g.drawImage(a,0,0,s.width,s.height)}catch{}}},A=()=>{window.clearTimeout(L),F(),a?.removeAttribute("src"),$=!1,P()},x=()=>{if(!t.isConnected||!a||!w)return;window.clearTimeout(L);const V=++i;a.removeAttribute("src"),a.src=`${w}?play=${V}`,$=!0,P(),L=window.setTimeout(()=>{V===i&&t.isConnected&&A()},q)},h=new Image;return h.addEventListener("load",()=>{!s||!g||(s.width=h.naturalWidth,s.height=h.naturalHeight,g.drawImage(h,0,0))},{once:!0}),h.src=w,u?.addEventListener("click",()=>{$?A():x()}),m?.addEventListener("click",x),P(),{...e,startFromBeginning:x}},To=e=>{if(!e.matches(".pf-work--perp-dex"))return;const t=[...e.querySelectorAll(".pf-modal-bento-placeholder")].map(o=>({container:o,video:o.querySelector("[data-perp-video]"),gif:o.querySelector("[data-perp-gif]")})).filter(o=>o.video||o.gif).map(o=>o.video?pt(o):ko(o));t.length&&Promise.all(t.filter(o=>o.video).map(o=>dt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Eo=e=>{if(!e.matches(".pf-work--public-transport"))return;const t=[...e.querySelectorAll("[data-public-transport-video]")].map(o=>({video:o,order:Number(o.dataset.publicTransportVideoOrder),container:o.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(o=>o.container).sort((o,s)=>o.order-s.order).map(pt);t.length&&Promise.all(t.map(o=>dt(o.video))).then(()=>{e.isConnected&&t.forEach(o=>o.startFromBeginning())})},Mo=(e,t=!1)=>{const o=e.types?.length?e.types:[e.type||"others"],s=e.id==="public-transport"?'<span class="pf-work-badge">AI-built</span>':"",a=`
      <div class="pf-work-card">
        ${lt(e)}
        ${s}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${ue(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${a}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${o.join(" ")}" draggable="false" aria-label="${p(e.title)} project detail">${a}</a>`},ut=e=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey,mt=(e,t)=>ut(e)&&!t.target&&!t.hasAttribute("download"),ft=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},gt=()=>"24px",me=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},ht=(e,t)=>{const o=t.width?e.width/t.width:1,s=t.height?e.height/t.height:1,a=e.left-t.left,u=e.top-t.top;return`translate3d(${a}px, ${u}px, 0) scale(${o}, ${s})`},$o=()=>{const e=[...r.querySelectorAll(".pf-work video")],t=e.filter(o=>!o.paused&&!o.ended);return e.forEach(o=>o.pause()),t},Po=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},yt=(e,t,{pushHistory:o=!0}={})=>{if(k)return;o&&yo(t.id);const s=$o(),a=e.querySelector(".pf-work-card")||e,u=a.getBoundingClientRect(),m=window.getComputedStyle(a).borderRadius,w=ft(),q=gt(),g=document.createElement("div"),L=document.createElement("div"),i=document.createElement("div"),$=`pf-modal-${t.id}-title`,P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,F=P?1:f,A=t.cta?`
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
      `:"",x=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",h=t.id==="perp-dex",V=t.id==="public-transport",No=V?'<span class="pf-work-badge pf-work-badge--modal">AI-built</span>':"",Kt=h?4:V||t.id==="store-finder"?2:3,Yo=Array.from({length:Kt},(c,y)=>vo(t,y)),Ko=Array.from({length:Kt},(c,y)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${y+1} pf-modal-bento-skeleton"></div>
      `),ie=V,be=!t.cta&&!h&&!ie,Je=t.deviceType==="web"&&!ie&&!be,Xt=t.id==="cta-enhancement",_t=c=>{const y=Xt?c[0]:c.slice(0,2).join("");return h?`
          <div class="pf-modal-perp-left">
            ${c[0]}
            <div class="pf-modal-perp-center-bottom">
              ${c[1]}
              ${c[2]}
            </div>
          </div>
          ${c[3]}
        `:ie||be?c.join(""):Je?`<div class="pf-modal-bento-side">${c.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Xt?" pf-modal-bento-stack-top--single":""}">
              ${y}
            </div>
            ${c[2]||""}
          </div>
        `},Xo=_t(Yo),_o=_t(Ko),Go=h?"":`
        <div class="pf-modal-bento-feature">
          ${bo(t)}
        </div>
      `,Uo=`
      <section class="pf-modal-bento-section${Je?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${be?" pf-modal-bento-section--four-up":""}${h?" pf-modal-bento-section--perp-dex":""}"${h||V?"":' aria-hidden="true"'}>
        ${Go}
        ${Xo}
      </section>
    `,Jo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Je?" pf-modal-bento-section--web":""}${ie?" pf-modal-bento-section--three-up":""}${be?" pf-modal-bento-section--four-up":""}${h?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${h?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${_o}
      </section>
    `;g.className="pf-modal-layer",L.className="pf-modal-backdrop",L.style.opacity="0",i.className=`pf-work-modal pf-work--${t.id}${x?" pf-work-modal--has-description":""}${A?"":" pf-work-modal--no-cta"}`,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-labelledby",$),i.innerHTML=`
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
        ${A||x}
      </div>
    `,me(i,w),i.style.borderRadius=q,i.style.transformOrigin="top left",g.append(L,i),document.body.append(g),i.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const ve=i.animate([{transform:ht(u,w),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:q}],{duration:F,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Se=L.animate([{opacity:0},{opacity:1}],{duration:Math.min(F,420),easing:"ease-out",fill:"forwards"}),Qe=i.querySelector(".pf-modal-close"),_=i.querySelector(".pf-modal-cta"),Le=i.querySelector(".pf-modal-footer"),C=i.querySelector(".pf-modal-card-content"),le=i.querySelector(".pf-modal-scroll-indicator");let Gt=!1,j=!1,ce=0;const Qo=()=>{if(ce=0,!C||!le||j)return;const c=C.scrollHeight-C.clientHeight,y=8,H=Le?.offsetHeight??0,D=Math.max(0,i.clientHeight-H-y*2);if(c<=1||D<=0){le.classList.remove("is-visible");return}const Ee=Math.min(D,Math.max(36,D*(C.clientHeight/C.scrollHeight))),tr=Math.min(1,Math.max(0,C.scrollTop/c))*(D-Ee);le.style.height=`${Ee}px`,le.style.transform=`translate3d(0, ${tr}px, 0)`,le.classList.add("is-visible")},de=()=>{ce||(ce=window.requestAnimationFrame(Qo))},Ze=typeof ResizeObserver=="function"?new ResizeObserver(de):null;Ze?.observe(C),C?.addEventListener("scroll",de,{passive:!0});const Zo=()=>{Gt||!C||j||(Gt=!0,C.classList.remove("is-skeleton"),C.innerHTML=Uo,So(i),Lo(i),To(i),Eo(i),C.querySelectorAll(".pf-modal-bento-section").forEach(c=>Ze?.observe(c)),window.requestAnimationFrame(()=>{!j&&i.isConnected&&(i.classList.add("is-content-ready"),de())}))},ke=()=>{const c=Le?.offsetHeight??0;i.style.setProperty("--pf-modal-footer-space",`${c}px`),de()},Ut=Le&&typeof ResizeObserver=="function"?new ResizeObserver(ke):null;Ut?.observe(Le),ke();const Jt=()=>{!j&&i.classList.contains("is-ready")&&(me(i,ft()),i.style.borderRadius=gt(),ke())};let Qt=!1;const Zt=({restoreFocus:c=!1}={})=>{if(Qt||(Qt=!0,g.getAnimations?.({subtree:!0})?.forEach(H=>H.cancel()),g.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",et),window.removeEventListener("resize",Jt),Ut?.disconnect(),Ze?.disconnect(),C?.removeEventListener("scroll",de),ce&&window.cancelAnimationFrame(ce),k?.modal===i&&(k=null),Po(s),!c))return;(e.matches("a")?e:r.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},eo=()=>{if(j)return;j=!0,i.classList.add("is-closing"),i.classList.remove("is-revealing","is-ready","is-content-ready");const c=i.getBoundingClientRect(),y=window.getComputedStyle(i).borderRadius,H=a.getBoundingClientRect();e.classList.remove("is-modal-source"),ve.cancel(),Se.cancel(),me(i,c),i.style.borderRadius=y,i.style.transform="none";const D=P?1:320,Ee=i.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:y},{transform:ht(H,c),borderRadius:m}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});L.animate([{opacity:1},{opacity:0}],{duration:P?1:200,easing:"ease-out",fill:"forwards"}),Ee.finished.finally(()=>Zt({restoreFocus:!0}))},Te=()=>{if(j)return;const c=T()===t.id;eo(),c&&(window.history.back(),window.setTimeout(()=>{if(T()!==t.id)return;const y=window.history.state&&typeof window.history.state=="object"?{...window.history.state}:{};delete y[b],window.history.replaceState(y,"")},500))},er=c=>{if(_){if(t.cta?.newTab){ut(c)&&Te();return}mt(c,_)&&(c.preventDefault(),!j&&(j=!0,i.classList.add("is-navigating"),document.removeEventListener("keydown",et),ve.cancel(),Se.cancel(),T()===t.id?window.location.replace(_.href):window.location.href=_.href))}},et=c=>{if(c.key==="Escape"){c.preventDefault(),Te();return}if(c.key!=="Tab")return;const y=[Qe,_].filter(Boolean),H=y.indexOf(document.activeElement),D=c.shiftKey?(H-1+y.length)%y.length:(H+1)%y.length;c.preventDefault(),y[D].focus()};k={layer:g,modal:i,projectId:t.id,closeModal:eo,disposeModal:Zt},document.addEventListener("keydown",et),window.addEventListener("resize",Jt),Qe.addEventListener("click",Te),_?.addEventListener("click",er),g.addEventListener("click",c=>{(c.target===g||c.target===L)&&Te()}),Se.finished.then(()=>{L.style.opacity="1",Se.cancel()}).catch(()=>{}),ve.finished.then(()=>{j||(me(i,w),i.style.borderRadius=q,i.style.transform="none",ve.cancel(),ke(),i.classList.add("is-ready"),Zo(),Qe.focus({preventScroll:!0}))}).catch(()=>{})},B=window.matchMedia("(max-width: 600px)"),ee=document.querySelector("[data-pf-type-filter]"),Co=270,Ao=.36;ee&&(ee.innerHTML=`
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
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const v=document.createElement("div");v.className="pf-floating-filter",v.dataset.pfFloatingFilter="",v.setAttribute("role","group"),v.setAttribute("aria-label","Filter projects by type"),v.innerHTML=`
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
  `,document.body.append(v),r.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${n.map(e=>Mo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `,document.querySelector("[data-pf-work-cursor]")?.remove();const S=document.createElement("span");S.className="pf-work-cursor-label",S.dataset.pfWorkCursor="",S.setAttribute("aria-hidden","true"),S.innerHTML="<span>View Details</span>",document.body.append(S);const Ce=S.firstElementChild,wt=[...ee?[...ee.querySelectorAll("[data-project-type-filter]")]:[],...v.querySelectorAll("[data-project-type-filter]")],Ro=ee?.querySelector(".pf-type-filter"),bt=document.documentElement,R=v.querySelector(".pf-floating-filter-scroll"),Ae=[...v.querySelectorAll("[data-project-type-filter]")],xo=[...r.querySelectorAll(".pf-work[data-project-types]")],vt=r.querySelector(".pf-work-grid"),St=r.querySelector(".pf-filter-empty");let N="",Lt=0,kt=0,Tt=0,fe=!1;const qo=()=>{window.clearTimeout(kt),window.clearTimeout(Tt)},Fo=e=>{if(e!==fe){if(fe=e,qo(),!e){v.classList.remove("is-visible"),Tt=window.setTimeout(()=>{fe||bt.classList.remove("is-footer-yielding-to-filter")},220);return}bt.classList.add("is-footer-yielding-to-filter"),kt=window.setTimeout(()=>{fe&&v.classList.add("is-visible")},220)}},ge=()=>{if(!R||!B.matches){v.classList.remove("has-scroll-left","has-scroll-right");return}const e=Math.max(0,R.scrollWidth-R.clientWidth);v.classList.toggle("has-scroll-left",R.scrollLeft>1),v.classList.toggle("has-scroll-right",R.scrollLeft<e-1)},Et=()=>{if(!R||!B.matches)return;const e=Ae.find(a=>a.getAttribute("aria-pressed")==="true"),t=Ae.indexOf(e);if(!e)return;const o=Math.max(0,R.scrollWidth-R.clientWidth),s=t<2?0:t>=Ae.length-2?o:e.offsetLeft-(R.clientWidth-e.offsetWidth)/2;R.scrollTo({left:s,behavior:"smooth"})},Re=()=>{const e=r.getBoundingClientRect().bottom,t=window.innerHeight*Ao;Fo(window.scrollY>Co&&e>t)},jo=()=>{const e=Math.max(0,r.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},Mt=e=>{N=e;let t=0;wt.forEach(o=>{o.setAttribute("aria-pressed",String(o.dataset.projectTypeFilter===N))}),Et(),Ro?.classList.toggle("is-filtering",!!N),xo.forEach(o=>{const s=o.dataset.projectTypes.split(" "),a=!N||s.includes(N);o.hidden=!a,a&&(t+=1)}),vt?.classList.toggle("is-single-result",t===1),St&&(St.hidden=t>0)};wt.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement,o=e.dataset.projectTypeFilter,s=!v.contains(e)&&N===o;window.clearTimeout(Lt),t.style.overflowAnchor="none",Mt(s?"":o),jo(),Lt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Re,{passive:!0}),window.addEventListener("resize",()=>{Re(),ge()},{passive:!0}),R?.addEventListener("scroll",ge,{passive:!0}),B.addEventListener?.("change",()=>{ge(),Et()}),Re(),Mt(""),ge();const l=r.querySelector("[data-pf-work-rail]"),xe=l?[...l.querySelectorAll(".pf-work-set")]:[],$t=r.querySelector(".pf-work-set--primary .pf-work"),d=r.querySelector("[data-pf-work-rail-secondary]"),he=d?[...d.querySelectorAll(".pf-work-set")]:[],Pt=he[1]?.querySelector(".pf-work:nth-child(4)");r.querySelector("[data-mobile-pf-work-rail]"),r.querySelector("[data-mobile-pf-work-rail-secondary]");const Wo=80,Bo=-80,qe=32,Io=12,Ct=180,At=600;let Fe,je=0,We=0,E=0,Be=qe,Ie=!1,te=!1,Rt=0,He=0,oe=!1,ye=!1,re=!1,De=0,I=0,Y=0,W=0,K=0,M=0,ze=0,se=!1,xt=0,Ve=0,ne=!1,we=!1,ae=!1,Oe=0;const qt=({preservePosition:e=!1}={})=>{if(!l||!$t||xe.length<3)return;const t=I,o=Y,s=t?(l.scrollLeft-o)/t:0,a=l.getBoundingClientRect(),u=$t.getBoundingClientRect(),m=l.scrollLeft+u.left-a.left;I=xe[2].getBoundingClientRect().left-xe[1].getBoundingClientRect().left,Y=m-(l.clientWidth-u.width)/2-(B.matches?Wo:0),l.scrollLeft=e?Y+s*I:Y,E=l.scrollLeft},Ne=()=>{if(!l||!I)return 0;const e=Y-I*.5,t=Y+I*.5;let o=l.scrollLeft;for(;o<e;)o+=I;for(;o>=t;)o-=I;const s=o-l.scrollLeft;return Math.abs(s)>.5&&(l.scrollLeft=o),s},Ft=({preservePosition:e=!1}={})=>{if(!d||!Pt||he.length<3||!d.clientWidth)return;const t=W,o=K,s=t?(d.scrollLeft-o)/t:0,a=d.getBoundingClientRect(),u=Pt.getBoundingClientRect(),m=d.scrollLeft+u.left-a.left;W=he[2].getBoundingClientRect().left-he[1].getBoundingClientRect().left,K=m-(d.clientWidth-u.width)/2-Bo,d.scrollLeft=e?K+s*W:K,M=d.scrollLeft},Ye=()=>{if(!d||!W)return 0;const e=K-W*.5,t=K+W*.5;let o=d.scrollLeft;for(;o<e;)o+=W;for(;o>=t;)o-=W;const s=o-d.scrollLeft;return Math.abs(s)>.5&&(d.scrollLeft=o),s},Ke=()=>{E=l?.scrollLeft??E,We=performance.now()+200},jt=()=>{M=d?.scrollLeft??M,ze=performance.now()+200},Ho=()=>{window.clearTimeout(De),re=!0,E=l?.scrollLeft??E},Wt=()=>{window.clearTimeout(De),De=window.setTimeout(()=>{l&&(E=l.scrollLeft,E+=Ne(),re=!1,We=performance.now()+At)},Ct)},Do=()=>{window.clearTimeout(Oe),ae=!0,M=d?.scrollLeft??M},Bt=()=>{window.clearTimeout(Oe),Oe=window.setTimeout(()=>{d&&(M=d.scrollLeft,M+=Ye(),ae=!1,ze=performance.now()+At)},Ct)},It=e=>{const t=Math.min((e-(Fe??e))/1e3,.1),o=Ie?Io:qe;if(Fe=e,Be+=(o-Be)*Math.min(t*6,1),l){const s=r.getBoundingClientRect(),a=s.bottom>0&&s.top<window.innerHeight;a&&!te&&!re&&!ae&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=We&&(E+=t*Be,l.scrollLeft=E,E+=Ne()),a&&d?.clientWidth&&W&&!se&&!ae&&!re&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=ze&&(M-=t*qe,d.scrollLeft=M,M+=Ye())}je=requestAnimationFrame(It)};!l||je||(Fe=void 0,je=requestAnimationFrame(It)),requestAnimationFrame(()=>{qt(),Ft()}),l?.addEventListener("mouseenter",()=>{Ie=!0}),l?.addEventListener("mouseleave",()=>{Ie=!1}),r.addEventListener("wheel",e=>{!l||e.ctrlKey||(Ke(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),l?.addEventListener("pointerdown",e=>{if(!(e.button!==0||k)){if(e.pointerType==="touch"&&B.matches){Ho();return}te=!0,oe=!1,Rt=e.clientX,He=l.scrollLeft,Ke()}}),l?.addEventListener("dragstart",e=>{e.preventDefault()}),l?.addEventListener("pointermove",e=>{if(!te)return;const t=e.clientX-Rt;!oe&&Math.abs(t)<=5||(oe||(oe=!0,l.classList.add("is-dragging"),l.setPointerCapture(e.pointerId)),l.scrollLeft=He-t,He+=Ne(),E=l.scrollLeft,Ke())});const zo=e=>{!l||!te||(te=!1,l.classList.remove("is-dragging"),l.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),E=l.scrollLeft,oe&&(ye=!0,window.setTimeout(()=>{ye=!1},0)))};l?.addEventListener("scroll",()=>{re&&(E=l.scrollLeft,Wt())},{passive:!0});const Ht=e=>{if(e.pointerType==="touch"&&B.matches){Wt();return}zo(e)};l?.addEventListener("pointerup",Ht),l?.addEventListener("pointercancel",Ht),l?.addEventListener("click",e=>{ye&&(ye=!1,e.preventDefault(),e.stopPropagation())},!0),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||k)){if(e.pointerType==="touch"&&B.matches){Do();return}se=!0,ne=!1,xt=e.clientX,Ve=d.scrollLeft,jt()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!se)return;const t=e.clientX-xt;!ne&&Math.abs(t)<=5||(ne||(ne=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Ve-t,Ve+=Ye(),M=d.scrollLeft,jt())});const Vo=e=>{!d||!se||(se=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),M=d.scrollLeft,ne&&(we=!0,window.setTimeout(()=>{we=!1},0)))};d?.addEventListener("scroll",()=>{ae&&(M=d.scrollLeft,Bt())},{passive:!0});const Dt=e=>{if(e.pointerType==="touch"&&B.matches){Bt();return}Vo(e)};d?.addEventListener("pointerup",Dt),d?.addEventListener("pointercancel",Dt),d?.addEventListener("click",e=>{we&&(we=!1,e.preventDefault(),e.stopPropagation())},!0);const Oo=70,Xe=14,_e=12;let z=0,zt=S.offsetWidth,Ge=S.offsetHeight;const Ue=()=>{zt=S.offsetWidth,Ge=S.offsetHeight},Vt=e=>{!Ce||Ce.textContent===e||(Ce.textContent=e,Ue())};document.fonts?.ready.then(Ue);const X=(e=0)=>{if(e){if(z)return;z=window.setTimeout(()=>{z=0,S.classList.remove("is-visible")},e);return}window.clearTimeout(z),z=0,S.classList.remove("is-visible")},Ot=()=>{window.clearTimeout(z),z=0,S.classList.add("is-visible")},Nt=e=>{const t=zt/2,o=Math.min(Math.max(t+_e,e.clientX),window.innerWidth-t-_e),a=e.clientY+Xe+Ge+_e<=window.innerHeight?e.clientY+Xe:e.clientY-Xe-Ge;S.style.transform=`translate3d(${o}px, ${a}px, 0) translateX(-50%)`};document.addEventListener("pointermove",e=>{if(e.pointerType!=="mouse")return;const t=e.target instanceof Element?e.target:null,o=t?.closest("[data-cursor-label]"),s=t?.closest(".pf-work");if(o){Vt(o.dataset.cursorLabel||"View Details"),Nt(e),Ot();return}if(s&&r.contains(s)){Vt("View Details"),Nt(e),Ot();return}if(t&&vt?.contains(t)){X(Oo);return}X()}),r.addEventListener("pointerleave",()=>X()),window.addEventListener("blur",()=>X()),window.addEventListener("scroll",()=>X(),{passive:!0}),r.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!mt(t,e))return;const o=n.find(s=>e.classList.contains(`pf-work--${s.id}`));o&&(Q(o),X(),t.preventDefault(),yt(e,o))})}),window.addEventListener("resize",()=>{Ue(),requestAnimationFrame(()=>{qt({preservePosition:!0}),Ft({preservePosition:!0})})});const Yt=()=>{const e=T();if(k){k.projectId!==e&&k.closeModal();return}if(!e)return;const t=n.find(s=>s.id===e),o=r.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&o&&yt(o,t,{pushHistory:!1})};return window.addEventListener("popstate",Yt),{resetModal:()=>k?.disposeModal(),syncModalWithHistory:Yt}},ot=document.querySelector("[data-pf]"),to=document.querySelector("[data-about]"),G=document.querySelector(".about-photo-stack"),oo=document.querySelector("[data-project-list]"),nr=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const ar=document.querySelector(".counter-line"),ro=document.querySelector(".fixed-project-meta"),ir=document.querySelector("[data-side-number]"),lr=document.querySelector("[data-side-wip]"),cr=document.querySelector("[data-side-title]"),dr=document.querySelector("[data-counter-wip]"),rt=document.querySelector("[data-year-rail]"),pr=[...document.querySelectorAll("[data-gnb-scroll]")],co=document.querySelector(".theme-toggle"),U=document.documentElement,po="portfolio-last-project-slug",so=760,ur=12,mr=8,uo=window.matchMedia("(max-width: 600px)"),at=window.matchMedia("(prefers-reduced-motion: reduce)"),fr=3e3,gr=200,hr={work:40,experience:-50};let st=!1,pe=0,tt=0,no=0,mo=0;const yr=()=>{const r=G?.lastElementChild;!r||G.children.length<2||r.classList.contains("is-moving-to-back")||(r.classList.add("is-moving-to-back"),mo=window.setTimeout(()=>{G.prepend(r),window.requestAnimationFrame(()=>r.classList.remove("is-moving-to-back"))},gr))},fo=()=>{window.clearInterval(no),window.clearTimeout(mo),G?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!G||G.children.length<2||at.matches)&&(no=window.setInterval(yr,fr))},wr=r=>{try{return window.sessionStorage?.getItem(r)||""}catch{return""}},br=(r,n)=>{try{window.sessionStorage?.setItem(r,n)}catch{}},vr=r=>{window.gtag?.("event","project_click",{project_name:r})},Sr=r=>`'${String(r).slice(-2)}`,Lr=r=>{const{start:n,end:p}=lo.yearRange,f=Math.min(5,p-n+1),b=Math.min(Math.max(r-2,n),p-f+1);return Array.from({length:f},(J,O)=>b+O)},kr=r=>r.split("|").join(" "),Tr=(r,n)=>r.button===0&&!r.defaultPrevented&&!r.metaKey&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!n.target&&!n.hasAttribute("download"),Er=()=>window.matchMedia("(max-width: 600px)").matches?mr:ur,Mr=()=>{const r=Er();return{top:r,left:r,width:window.innerWidth-r*2,height:window.innerHeight-r*2}},$r=r=>{const n=r.getBoundingClientRect(),p=Mr(),f=window.getComputedStyle(r),b=window.getComputedStyle(r.querySelector(".project-media")),J=r.querySelector(".project-summary"),O=Number.parseFloat(f.rowGap||f.gap)||0,k=J?.getBoundingClientRect().height||0,ue=Math.max(0,p.height-k-O),Q=document.createElement("div"),T=r.cloneNode(!0);return T.classList.add("project-transition-card"),T.removeAttribute("href"),T.removeAttribute("aria-label"),T.setAttribute("aria-hidden","true"),Object.assign(T.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:f.gap,gridTemplateRows:f.gridTemplateRows,maxHeight:"none"}),T.style.setProperty("--project-media-shadow",b.boxShadow),Q.className="project-transition-layer",Q.append(T),document.body.append(Q),{cardClone:T,targetRect:p,targetGridTemplateRows:`${ue}px ${k}px`}},Pr=r=>{if(st)return;const n=r.closest(".project-section");if(!n){window.location.href=r.href;return}st=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:p,targetRect:f,targetGridTemplateRows:b}=$r(r);p.animate([{top:p.style.top,left:p.style.left,width:p.style.width,height:p.style.height,gridTemplateRows:p.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${f.top}px`,left:`${f.left}px`,width:`${f.width}px`,height:`${f.height}px`,gridTemplateRows:b,opacity:0,offset:1}],{duration:so,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=r.href},so-120)},Cr=()=>{st=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(r=>r.remove()),document.querySelectorAll(".is-transition-source").forEach(r=>{r.classList.remove("is-transition-source")})},Ar=r=>{rt.innerHTML=Lr(r.year).map(n=>{const p=n===r.year;return`
        <span class="year-rail-item" data-year="${n}" ${p?'aria-current="true"':""}>${Sr(n)}</span>
      `}).join("")},Rr=()=>{ro.classList.add("is-changing"),rt.classList.add("is-changing"),window.setTimeout(()=>{ro.classList.remove("is-changing"),rt.classList.remove("is-changing")},180)};let Me=[],ao=-1;const it=({force:r=!1}={})=>{if(!uo.matches){pe&&(U.style.removeProperty("--mobile-project-viewport"),pe=0,tt=0);return}const n=window.innerWidth;!r&&pe&&n===tt||(pe=window.innerHeight,tt=n,U.style.setProperty("--mobile-project-viewport",`${pe}px`))},xr=()=>{if(!ot)return;const r=ot.getBoundingClientRect(),n=window.innerHeight/2,p=r.top<=n&&r.bottom>=n;U.classList.toggle("is-pf-active",p)},qr=()=>{if(!to)return;const r=to.getBoundingClientRect(),n=window.innerHeight/2,p=r.top<=n&&r.bottom>=n;U.classList.toggle("is-about-active",p)},Fr=r=>{if(r===ao||r<0)return;const n=rr[r],p=(r+1)/lo.totalProjectCount*100;ao=r,Rr(),nr.textContent=n.number,ir.textContent=n.number,lr.textContent=n.wip?"🚧":"",dr.textContent=n.wip?"🚧":"",cr.innerHTML=n.sideTitle.split("|").join("<br />"),ar.style.setProperty("--progress",`${p}%`),br(po,n.slug),Ar(n)},jr=()=>{if(!Me.length)return;const r=window.innerHeight/2,n=Me.map((p,f)=>{const b=p.getBoundingClientRect(),J=b.top+b.height/2;return{index:f,distance:Math.abs(J-r)}}).sort((p,f)=>p.distance-f.distance)[0]?.index;Me.forEach((p,f)=>{const b=f===n;p.classList.toggle("is-active",b),p.classList.toggle("is-inactive",!b)}),Fr(n)},Wr=r=>{const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),p=hr[r.id]??0,f=r===document.body?0:r.getBoundingClientRect().top+window.scrollY-p,b=Math.min(n,Math.max(0,f));window.scrollTo({top:b,behavior:at.matches?"auto":"smooth"})};let io=0;const $e=()=>{cancelAnimationFrame(io),io=requestAnimationFrame(()=>{xr(),qr(),jr()})},go=r=>{U.dataset.theme=r,co.setAttribute("aria-pressed",String(r==="dark")),localStorage.setItem("portfolio-theme",r)},Br=localStorage.getItem("portfolio-theme")||"light",ho=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";at.addEventListener?.("change",fo);fo();const nt=sr(ot,or,kr);Me=[...document.querySelectorAll("[data-project]")];it({force:!0});go(Br);const Ir=()=>{const r=window.location.hash?window.location.hash.slice(1):"",n=ho()==="back_forward",p=r||(n?wr(po):""),f=p?document.getElementById(p):null;r&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),f&&f.scrollIntoView({block:"center",behavior:"auto"})};Ir();ho()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));co.addEventListener("click",()=>{go(U.dataset.theme==="dark"?"light":"dark")});pr.forEach(r=>{r.addEventListener("click",n=>{const p=document.querySelector(r.hash);p&&(n.preventDefault(),Wr(p))})});oo?.addEventListener("click",r=>{const n=r.target.closest(".project-link");!n||!oo.contains(n)||!Tr(r,n)||(vr(n.closest(".project-section")?.dataset.analyticsId),r.preventDefault(),Pr(n))});window.addEventListener("scroll",$e,{passive:!0});window.addEventListener("resize",()=>{it(),$e()});uo.addEventListener?.("change",()=>{it({force:!0}),$e()});window.addEventListener("pagehide",()=>nt?.resetModal());window.addEventListener("pageshow",()=>{nt?.resetModal(),nt?.syncModalWithHistory(),Cr()});$e();
