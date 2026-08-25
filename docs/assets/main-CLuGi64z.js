import{p as io,a as Lt}from"./projects-C3NfBF-1.js";/* empty css               */const ro=[{id:"store-finder",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"cta-enhancement",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"public-transport",title:"Public Transport App in SG",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"article-studio",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"perp-dex",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],no=(o,n,u)=>{if(!o)return;const h=760,T="portfolioPfModalProject";let M=null;const H=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},V=()=>window.history.state?.[T]||"",Q=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[T]:e},"")},Z=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',z=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],$=e=>{const t=z[e-1];return`
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
    `},xt=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?$(1):Z(e),qt=[{image:"./assets/store-guide/impact-1.png",title:"Flow-level Data Tracking"},{image:"./assets/store-guide/impact-2.png",title:"Increased Page Views"},{image:"./assets/store-guide/impact-3.png",title:"Pickup Conversion up to 11%"}],At=[{start:0,end:5},{start:18,end:26}],jt=(e,t)=>{const i=At[t],r=e.id==="public-transport"?$(t+2):"",c=e.id==="perp-dex"?[`
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
            `][t]:"",p=e.media==="store-guide"&&i?`
          <video
            class="pf-modal-bento-video pf-modal-segment-video"
            autoplay
            muted
            playsinline
            preload="auto"
            poster="./assets/store-guide/solution-tobe1.png"
            data-segment-start="${i.start}"
            data-segment-end="${i.end}"
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
        `:e.id==="article-studio"&&t===1?'<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />':"",w=e.media==="store-guide"&&t===2?`
          <div class="pf-modal-impact-list">
            ${qt.map(y=>`
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
        ${r||c||p||f||L||b||w}
      </div>
    `},It=e=>{const t=r=>r.matches(`
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
      `),i=r=>{const c=r.videoWidth||r.naturalWidth||r.width,p=r.videoHeight||r.naturalHeight||r.height;if(!c||!p)return null;const f=16,L=document.createElement("canvas"),b=L.getContext("2d",{willReadFrequently:!0});if(!b)return null;L.width=f,L.height=f;try{b.drawImage(r,0,0,f,f);const w=b.getImageData(0,0,f,f).data;let y=0,a=0,S=0,s=0;for(let g=0;g<f;g+=1)for(let v=0;v<f;v+=1){if(v>1&&v<f-2&&g>1&&g<f-2)continue;const R=(g*f+v)*4,k=w[R+3]/255;k<.2||(y+=w[R]*k,a+=w[R+1]*k,S+=w[R+2]*k,s+=k)}return s?`rgb(${Math.round(y/s)} ${Math.round(a/s)} ${Math.round(S/s)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(r=>{if(t(r))return;const c=r.querySelector("img, video, canvas");if(!c)return;const p=()=>{if(!r.isConnected)return;const f=i(c);f&&(r.style.setProperty("--pf-modal-media-background",f),r.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?p():c.addEventListener("load",p,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?p():c.addEventListener("loadeddata",p,{once:!0});return}window.requestAnimationFrame(p)})},Wt=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const i=Number(t.dataset.segmentStart),r=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=i,t.play().catch(()=>{})},p=()=>{t.currentTime=i,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",p,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=r&&c()}),t.addEventListener("ended",c),t.readyState>=1&&p()})},Bt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,r=(t?[1,2,3,4]:[4,1,2,3]).map(s=>e.querySelector(`.pf-modal-bento-placeholder--${s}`)).filter(Boolean).map(s=>({container:s,video:s.querySelector("[data-perp-video]"),gif:s.querySelector("[data-perp-gif]")}));if(!r.length)return;if(t){r.forEach(s=>{if(s.container.classList.add("is-playing"),s.video){const g=()=>{e.isConnected&&(s.video.loop=!0,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?g():s.video.addEventListener("loadedmetadata",g,{once:!0})}if(s.gif){const g=s.gif.querySelector("[data-perp-gif-player]"),v=s.gif.dataset.perpGifSrc;g&&v&&(g.src=v)}});return}let c=null,p=0,f=0,L=0,b=null;const w=s=>{if(s.container.classList.remove("is-playing"),s.video){const g=Number(s.video.dataset.perpThumbnailTime||0);s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=Math.min(g,Number.isFinite(s.video.duration)?s.video.duration:g))}s.gif&&s.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},y=()=>{window.clearTimeout(f),r.forEach(w)},a=()=>{p=(p+1)%r.length,S(r[p],!0)},S=(s,g=!1)=>{const v=++L;if(y(),c=s,s.container.classList.add("is-playing"),s.video){const R=()=>{v!==L||!e.isConnected||(s.video.loop=!g,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?R():s.video.addEventListener("loadedmetadata",R,{once:!0})}if(s.gif){const R=s.gif.querySelector("[data-perp-gif-player]"),k=s.gif.dataset.perpGifSrc;R&&k&&(R.src=`${k}?play=${v}`),g&&(f=window.setTimeout(()=>{v===L&&!b&&e.isConnected&&a()},Number(s.gif.dataset.perpGifDuration||6600)))}};r.forEach(s=>{if(s.video&&s.video.addEventListener("ended",()=>{s===c&&!b&&e.isConnected&&a()}),s.gif){const g=s.gif.querySelector("[data-perp-gif-frame]"),v=new Image;v.addEventListener("load",()=>{g.width=v.naturalWidth,g.height=v.naturalHeight,g.getContext("2d")?.drawImage(v,0,0)},{once:!0}),v.src=s.gif.dataset.perpGifSrc}s.container.addEventListener("mouseenter",()=>{b=s,S(s)}),s.container.addEventListener("mouseleave",()=>{b===s&&(b=null,p=(r.indexOf(s)+1)%r.length,S(r[p],!0))})}),r.forEach(w),S(r[p],!0)},Dt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=[...e.querySelectorAll("[data-public-transport-video]")].map(a=>({video:a,order:Number(a.dataset.publicTransportVideoOrder),container:a.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(a=>a.container).sort((a,S)=>a.order-S.order);if(!i.length)return;if(t){i.forEach(a=>{a.container.classList.add("is-playing"),a.video.loop=!0;const S=()=>{e.isConnected&&(a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?S():a.video.addEventListener("loadedmetadata",S,{once:!0})});return}let r=null,c=0,p=null,f=0;const L=a=>{a.container.classList.remove("is-playing"),a.video.loop=!1,a.video.pause(),a.video.readyState>=2&&(a.video.currentTime=0)},b=()=>i.forEach(L),w=()=>{c=(c+1)%i.length,y(i[c],!0)},y=(a,S=!1)=>{const s=++f;b(),r=a,a.container.classList.add("is-playing");const g=()=>{s!==f||!e.isConnected||(a.video.loop=!S,a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?g():a.video.addEventListener("loadedmetadata",g,{once:!0})};i.forEach(a=>{a.video.addEventListener("ended",()=>{a===r&&!p&&e.isConnected&&w()}),a.container.addEventListener("mouseenter",()=>{p=a,y(a)}),a.container.addEventListener("mouseleave",()=>{p===a&&(p=null,c=(i.indexOf(a)+1)%i.length,y(i[c],!0))})}),i.forEach(L),y(i[c],!0)},Ft=(e,t=!1)=>{const i=`
      <div class="pf-work-card">
        ${Z(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${e.companyLabel?`<span>@ ${e.companyLabel}</span>`:""}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${i}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" draggable="false" aria-label="${u(e.title)} project detail">${i}</a>`},Fe=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),He=()=>{const e=window.innerWidth<=600?12:window.innerWidth<=920?16:24;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},Ve=()=>window.innerWidth<=600?"28px":window.innerWidth<=920?"32px":"36px",ee=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},ze=(e,t)=>{const i=t.width?e.width/t.width:1,r=t.height?e.height/t.height:1,c=e.left-t.left,p=e.top-t.top;return`translate3d(${c}px, ${p}px, 0) scale(${i}, ${r})`},Ht=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(i=>!i.paused&&!i.ended);return e.forEach(i=>i.pause()),t},Vt=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},Ne=(e,t,{pushHistory:i=!0}={})=>{if(M)return;i&&Q(t.id);const r=Ht(),c=e.querySelector(".pf-work-card")||e,p=c.getBoundingClientRect(),f=window.getComputedStyle(c).borderRadius,L=He(),b=Ve(),w=document.createElement("div"),y=document.createElement("div"),a=document.createElement("div"),S=`pf-modal-${t.id}-title`,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=s?1:h,v=t.cta?`
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
      `:"",R=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",k=t.id==="perp-dex",it=t.id==="public-transport",rt=k?4:it?2:3,Yt=Array.from({length:rt},(m,E)=>jt(t,E)),Ut=Array.from({length:rt},(m,E)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${E+1} pf-modal-bento-skeleton"></div>
      `),U=it,se=!t.cta&&!k&&!U,Te=t.deviceType==="web"&&!U&&!se,nt=t.id==="cta-enhancement",lt=m=>{const E=nt?m[0]:m.slice(0,2).join("");return k?`
          <div class="pf-modal-perp-left">
            ${m[0]}
            <div class="pf-modal-perp-center-bottom">
              ${m[1]}
              ${m[2]}
            </div>
          </div>
          ${m[3]}
        `:U||se?m.join(""):Te?`<div class="pf-modal-bento-side">${m.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${nt?" pf-modal-bento-stack-top--single":""}">
              ${E}
            </div>
            ${m[2]}
          </div>
        `},Jt=lt(Yt),Qt=lt(Ut),Zt=k?"":`
        <div class="pf-modal-bento-feature">
          ${xt(t)}
        </div>
      `,eo=`
      <section class="pf-modal-bento-section${Te?" pf-modal-bento-section--web":""}${U?" pf-modal-bento-section--three-up":""}${se?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Zt}
        ${Jt}
      </section>
    `,to=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Te?" pf-modal-bento-section--web":""}${U?" pf-modal-bento-section--three-up":""}${se?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${k?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Qt}
      </section>
    `;w.className="pf-modal-layer",y.className="pf-modal-backdrop",y.style.opacity="0",a.className=`pf-work-modal pf-work--${t.id}${R?" pf-work-modal--has-description":""}${v?"":" pf-work-modal--no-cta"}`,a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby",S),a.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${to}</div>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${v?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${t.companyLabel?`<span>@ ${t.companyLabel}</span>`:""}
        </div>
        ${v||R}
      </div>
    `,ee(a,L),a.style.borderRadius=b,a.style.transformOrigin="top left",w.append(y,a),document.body.append(w),a.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const Me=a.animate([{transform:ze(p,L),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:b}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ee=y.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),$e=a.querySelector(".pf-modal-close"),B=a.querySelector(".pf-modal-cta"),Pe=a.querySelector(".pf-modal-footer"),Ce=a.querySelector(".pf-modal-card-content");let ct=!1,q=!1,ie=!1;const oo=()=>{ct||!Ce||q||(ct=!0,Ce.classList.remove("is-skeleton"),Ce.innerHTML=eo,It(a),Wt(a),Bt(a),Dt(a),window.requestAnimationFrame(()=>{!q&&a.isConnected&&a.classList.add("is-content-ready")}))},re=()=>{const m=Pe?.offsetHeight??0;a.style.setProperty("--pf-modal-footer-space",`${m}px`)},dt=Pe&&typeof ResizeObserver=="function"?new ResizeObserver(re):null;dt?.observe(Pe),re();const pt=()=>{!q&&a.classList.contains("is-ready")&&(ee(a,He()),a.style.borderRadius=Ve(),re())};let ut=!1;const mt=({restoreFocus:m=!1}={})=>{if(ut||(ut=!0,w.getAnimations?.({subtree:!0})?.forEach(D=>D.cancel()),w.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",xe),window.removeEventListener("resize",pt),dt?.disconnect(),M?.modal===a&&(M=null),Vt(r),!m))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},ft=()=>{if(q)return;q=!0,ie=!1,a.classList.add("is-closing"),a.classList.remove("is-revealing","is-ready","is-content-ready");const m=a.getBoundingClientRect(),E=window.getComputedStyle(a).borderRadius,D=c.getBoundingClientRect();e.classList.remove("is-modal-source"),Me.cancel(),Ee.cancel(),ee(a,m),a.style.borderRadius=E,a.style.transform="none";const qe=s?1:320,so=a.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:E},{transform:ze(D,m),borderRadius:f}],{duration:qe,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});y.animate([{opacity:1},{opacity:0}],{duration:s?1:200,easing:"ease-out",fill:"forwards"}),so.finished.finally(()=>mt({restoreFocus:!0}))},Re=()=>{if(!(q||ie)){if(V()===t.id){ie=!0,window.history.back();return}ft()}},ao=m=>{!B||t.cta?.newTab!==!1||!Fe(m,B)||(m.preventDefault(),!(q||ie)&&(q=!0,a.classList.add("is-navigating"),document.removeEventListener("keydown",xe),V()===t.id?window.location.replace(B.href):window.location.href=B.href))},xe=m=>{if(m.key==="Escape"){m.preventDefault(),Re();return}if(m.key!=="Tab")return;const E=[$e,B].filter(Boolean),D=E.indexOf(document.activeElement),qe=m.shiftKey?(D-1+E.length)%E.length:(D+1)%E.length;m.preventDefault(),E[qe].focus()};M={layer:w,modal:a,projectId:t.id,closeModal:ft,disposeModal:mt},document.addEventListener("keydown",xe),window.addEventListener("resize",pt),$e.addEventListener("click",Re),B?.addEventListener("click",ao),w.addEventListener("click",m=>{(m.target===w||m.target===y)&&Re()}),Ee.finished.then(()=>{y.style.opacity="1",Ee.cancel()}).catch(()=>{}),Me.finished.then(()=>{q||(ee(a,L),a.style.borderRadius=b,a.style.transform="none",Me.cancel(),re(),a.classList.add("is-ready"),oo(),$e.focus({preventScroll:!0}))}).catch(()=>{})},N=window.matchMedia("(max-width: 600px)");o.innerHTML=`
    <div class="pf-work-grid">
      ${n.map(e=>Ft(e)).join("")}
    </div>
  `;const l=o.querySelector("[data-pf-work-rail]"),ce=l?[...l.querySelectorAll(".pf-work-set")]:[],Oe=o.querySelector(".pf-work-set--primary .pf-work"),d=o.querySelector("[data-pf-work-rail-secondary]"),te=d?[...d.querySelectorAll(".pf-work-set")]:[],Ke=te[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const zt=80,Nt=-80,de=32,Ot=12,Ge=180,_e=600;let pe,ue=0,me=0,P=0,fe=de,ge=!1,O=!1,Xe=0,he=0,K=!1,oe=!1,G=!1,ve=0,A=0,I=0,x=0,W=0,C=0,we=0,_=!1,Ye=0,ye=0,X=!1,ae=!1,Y=!1,be=0;const Ue=({preservePosition:e=!1}={})=>{if(!l||!Oe||ce.length<3)return;const t=A,i=I,r=t?(l.scrollLeft-i)/t:0,c=l.getBoundingClientRect(),p=Oe.getBoundingClientRect(),f=l.scrollLeft+p.left-c.left;A=ce[2].getBoundingClientRect().left-ce[1].getBoundingClientRect().left,I=f-(l.clientWidth-p.width)/2-(N.matches?zt:0),l.scrollLeft=e?I+r*A:I,P=l.scrollLeft},Se=()=>{if(!l||!A)return 0;const e=I-A*.5,t=I+A*.5;let i=l.scrollLeft;for(;i<e;)i+=A;for(;i>=t;)i-=A;const r=i-l.scrollLeft;return Math.abs(r)>.5&&(l.scrollLeft=i),r},Je=({preservePosition:e=!1}={})=>{if(!d||!Ke||te.length<3||!d.clientWidth)return;const t=x,i=W,r=t?(d.scrollLeft-i)/t:0,c=d.getBoundingClientRect(),p=Ke.getBoundingClientRect(),f=d.scrollLeft+p.left-c.left;x=te[2].getBoundingClientRect().left-te[1].getBoundingClientRect().left,W=f-(d.clientWidth-p.width)/2-Nt,d.scrollLeft=e?W+r*x:W,C=d.scrollLeft},Le=()=>{if(!d||!x)return 0;const e=W-x*.5,t=W+x*.5;let i=d.scrollLeft;for(;i<e;)i+=x;for(;i>=t;)i-=x;const r=i-d.scrollLeft;return Math.abs(r)>.5&&(d.scrollLeft=i),r},ke=()=>{P=l?.scrollLeft??P,me=performance.now()+200},Qe=()=>{C=d?.scrollLeft??C,we=performance.now()+200},Kt=()=>{window.clearTimeout(ve),G=!0,P=l?.scrollLeft??P},Ze=()=>{window.clearTimeout(ve),ve=window.setTimeout(()=>{l&&(P=l.scrollLeft,P+=Se(),G=!1,me=performance.now()+_e)},Ge)},Gt=()=>{window.clearTimeout(be),Y=!0,C=d?.scrollLeft??C},et=()=>{window.clearTimeout(be),be=window.setTimeout(()=>{d&&(C=d.scrollLeft,C+=Le(),Y=!1,we=performance.now()+_e)},Ge)},tt=e=>{const t=Math.min((e-(pe??e))/1e3,.1),i=ge?Ot:de;if(pe=e,fe+=(i-fe)*Math.min(t*6,1),l){const r=o.getBoundingClientRect(),c=r.bottom>0&&r.top<window.innerHeight;c&&!O&&!G&&!Y&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=me&&(P+=t*fe,l.scrollLeft=P,P+=Se()),c&&d?.clientWidth&&x&&!_&&!Y&&!G&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=we&&(C-=t*de,d.scrollLeft=C,C+=Le())}ue=requestAnimationFrame(tt)};!l||ue||(pe=void 0,ue=requestAnimationFrame(tt)),requestAnimationFrame(()=>{Ue(),Je()}),l?.addEventListener("mouseenter",()=>{ge=!0}),l?.addEventListener("mouseleave",()=>{ge=!1}),o.addEventListener("wheel",e=>{!l||e.ctrlKey||(ke(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),l?.addEventListener("pointerdown",e=>{if(!(e.button!==0||M)){if(e.pointerType==="touch"&&N.matches){Kt();return}O=!0,K=!1,Xe=e.clientX,he=l.scrollLeft,ke()}}),l?.addEventListener("dragstart",e=>{e.preventDefault()}),l?.addEventListener("pointermove",e=>{if(!O)return;const t=e.clientX-Xe;!K&&Math.abs(t)<=5||(K||(K=!0,l.classList.add("is-dragging"),l.setPointerCapture(e.pointerId)),l.scrollLeft=he-t,he+=Se(),P=l.scrollLeft,ke())});const _t=e=>{!l||!O||(O=!1,l.classList.remove("is-dragging"),l.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),P=l.scrollLeft,K&&(oe=!0,window.setTimeout(()=>{oe=!1},0)))};l?.addEventListener("scroll",()=>{G&&(P=l.scrollLeft,Ze())},{passive:!0});const ot=e=>{if(e.pointerType==="touch"&&N.matches){Ze();return}_t(e)};l?.addEventListener("pointerup",ot),l?.addEventListener("pointercancel",ot),l?.addEventListener("click",e=>{oe&&(oe=!1,e.preventDefault(),e.stopPropagation())},!0),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||M)){if(e.pointerType==="touch"&&N.matches){Gt();return}_=!0,X=!1,Ye=e.clientX,ye=d.scrollLeft,Qe()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!_)return;const t=e.clientX-Ye;!X&&Math.abs(t)<=5||(X||(X=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=ye-t,ye+=Le(),C=d.scrollLeft,Qe())});const Xt=e=>{!d||!_||(_=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),C=d.scrollLeft,X&&(ae=!0,window.setTimeout(()=>{ae=!1},0)))};d?.addEventListener("scroll",()=>{Y&&(C=d.scrollLeft,et())},{passive:!0});const at=e=>{if(e.pointerType==="touch"&&N.matches){et();return}Xt(e)};d?.addEventListener("pointerup",at),d?.addEventListener("pointercancel",at),d?.addEventListener("click",e=>{ae&&(ae=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!Fe(t,e))return;const i=n.find(r=>e.classList.contains(`pf-work--${r.id}`));i&&(H(i),t.preventDefault(),Ne(e,i))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{Ue({preservePosition:!0}),Je({preservePosition:!0})})});const st=()=>{const e=V();if(M){M.projectId!==e&&M.closeModal();return}if(!e)return;const t=n.find(r=>r.id===e),i=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&i&&Ne(i,t,{pushHistory:!1})};return window.addEventListener("popstate",st),{resetModal:()=>M?.disposeModal(),syncModalWithHistory:st}},je=document.querySelector("[data-pf]"),gt=document.querySelector("[data-about]"),F=document.querySelector(".about-photo-stack"),ht=document.querySelector("[data-project-list]"),lo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const co=document.querySelector(".counter-line"),vt=document.querySelector(".fixed-project-meta"),po=document.querySelector("[data-side-number]"),uo=document.querySelector("[data-side-wip]"),mo=document.querySelector("[data-side-title]"),fo=document.querySelector("[data-counter-wip]"),Ie=document.querySelector("[data-year-rail]"),kt=document.querySelector(".theme-toggle"),j=document.documentElement,Tt="portfolio-last-project-slug",wt=760,go=12,ho=8,Mt=window.matchMedia("(max-width: 600px)"),Et=window.matchMedia("(prefers-reduced-motion: reduce)"),vo=3e3,wo=200;let We=!1,J=0,Ae=0,yt=0,$t=0;const yo=()=>{const o=F?.lastElementChild;!o||F.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),$t=window.setTimeout(()=>{F.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},wo))},Pt=()=>{window.clearInterval(yt),window.clearTimeout($t),F?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!F||F.children.length<2||Et.matches)&&(yt=window.setInterval(yo,vo))},bo=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},So=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},Lo=o=>{window.gtag?.("event","project_click",{project_name:o})},ko=o=>`'${String(o).slice(-2)}`,To=o=>{const{start:n,end:u}=Lt.yearRange,h=Math.min(5,u-n+1),T=Math.min(Math.max(o-2,n),u-h+1);return Array.from({length:h},(M,H)=>T+H)},Mo=o=>o.split("|").join(" "),Eo=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),$o=()=>window.matchMedia("(max-width: 600px)").matches?ho:go,Po=()=>{const o=$o();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},Co=o=>{const n=o.getBoundingClientRect(),u=Po(),h=window.getComputedStyle(o),T=window.getComputedStyle(o.closest(".project-section")),M=window.getComputedStyle(o.querySelector(".project-media")),H=o.querySelector(".project-summary"),V=Number.parseFloat(h.rowGap||h.gap)||0,Q=H?.getBoundingClientRect().height||0,Z=Math.max(0,u.height-Q-V),z=document.createElement("div"),$=o.cloneNode(!0);return $.classList.add("project-transition-card"),$.removeAttribute("href"),$.removeAttribute("aria-label"),$.setAttribute("aria-hidden","true"),Object.assign($.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),$.style.setProperty("--project-color",T.getPropertyValue("--project-color")),$.style.setProperty("--project-sub-color",T.getPropertyValue("--project-sub-color")),$.style.setProperty("--project-media-shadow",M.boxShadow),z.className="project-transition-layer",z.append($),document.body.append(z),{cardClone:$,targetRect:u,targetGridTemplateRows:`${Z}px ${Q}px`}},Ro=o=>{if(We)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}We=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:h,targetGridTemplateRows:T}=Co(o);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:T,opacity:0,offset:1}],{duration:wt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},wt-120)},xo=()=>{We=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},qo=o=>{Ie.innerHTML=To(o.year).map(n=>{const u=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${u?'aria-current="true"':""}>${ko(n)}</span>
      `}).join("")},Ao=()=>{vt.classList.add("is-changing"),Ie.classList.add("is-changing"),window.setTimeout(()=>{vt.classList.remove("is-changing"),Ie.classList.remove("is-changing")},180)};let ne=[],bt=-1;const De=({force:o=!1}={})=>{if(!Mt.matches){J&&(j.style.removeProperty("--mobile-project-viewport"),J=0,Ae=0);return}const n=window.innerWidth;!o&&J&&n===Ae||(J=window.innerHeight,Ae=n,j.style.setProperty("--mobile-project-viewport",`${J}px`))},jo=()=>{if(!je)return;const o=je.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;j.classList.toggle("is-pf-active",u)},Io=()=>{if(!gt)return;const o=gt.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;j.classList.toggle("is-about-active",u)},Wo=o=>{if(o===bt||o<0)return;const n=io[o],u=(o+1)/Lt.totalProjectCount*100;bt=o,Ao(),lo.textContent=n.number,po.textContent=n.number,uo.textContent=n.wip?"🚧":"",fo.textContent=n.wip?"🚧":"",mo.innerHTML=n.sideTitle.split("|").join("<br />"),co.style.setProperty("--progress",`${u}%`),j.style.setProperty("--active-project-color",n.keyColor),j.style.setProperty("--active-project-sub-color",n.subColor||n.keyColor),So(Tt,n.slug),qo(n)},Bo=()=>{if(!ne.length)return;const o=window.innerHeight/2,n=ne.map((u,h)=>{const T=u.getBoundingClientRect(),M=T.top+T.height/2;return{index:h,distance:Math.abs(M-o)}}).sort((u,h)=>u.distance-h.distance)[0]?.index;ne.forEach((u,h)=>{const T=h===n;u.classList.toggle("is-active",T),u.classList.toggle("is-inactive",!T)}),Wo(n)};let St=0;const le=()=>{cancelAnimationFrame(St),St=requestAnimationFrame(()=>{jo(),Io(),Bo()})},Ct=o=>{j.dataset.theme=o,kt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},Do=localStorage.getItem("portfolio-theme")||"light",Rt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Et.addEventListener?.("change",Pt);Pt();const Be=no(je,ro,Mo);ne=[...document.querySelectorAll("[data-project]")];De({force:!0});Ct(Do);const Fo=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=Rt()==="back_forward",u=o||(n?bo(Tt):""),h=u?document.getElementById(u):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};Fo();Rt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));kt.addEventListener("click",()=>{Ct(j.dataset.theme==="dark"?"light":"dark")});ht?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!ht.contains(n)||!Eo(o,n)||(Lo(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),Ro(n))});window.addEventListener("scroll",le,{passive:!0});window.addEventListener("resize",()=>{De(),le()});Mt.addEventListener?.("change",()=>{De({force:!0}),le()});window.addEventListener("pagehide",()=>Be?.resetModal());window.addEventListener("pageshow",()=>{Be?.resetModal(),Be?.syncModalWithHistory(),xo()});le();
