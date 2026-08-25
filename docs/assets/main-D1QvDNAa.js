import{p as uo,a as Mt}from"./projects-C3NfBF-1.js";/* empty css               */const fo=[{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"public-transport",type:"mobility",title:"Public Transport App in SG",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],mo=(o,n,u)=>{if(!o)return;const h=760,T="portfolioPfModalProject",I=[{value:"enterprise",label:"Enterprise/SaaS"},{value:"fintech",label:"Fintech"},{value:"e-commerce",label:"E-commerce"},{value:"mobility",label:"Mobility"},{value:"others",label:"Others"}];let M=null;const le=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},W=()=>window.history.state?.[T]||"",ce=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[T]:e},"")},B=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',R=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],He=e=>{const t=R[e-1];return`
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
    `},It=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?He(1):B(e),Wt=[{image:"./assets/store-guide/impact-1.png",title:"Flow-level Data Tracking"},{image:"./assets/store-guide/impact-2.png",title:"Increased Page Views"},{image:"./assets/store-guide/impact-3.png",title:"Pickup Conversion up to 11%"}],Bt=[{start:0,end:5},{start:18,end:26}],Dt=(e,t)=>{const r=Bt[t],s=e.id==="public-transport"?He(t+2):"",c=e.id==="perp-dex"?[`
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
            `][t]:"",p=e.media==="store-guide"&&r?`
          <video
            class="pf-modal-bento-video pf-modal-segment-video"
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
        `:"",m=e.id==="cta-enhancement"&&t===0?`
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
            ${Wt.map(y=>`
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
        ${s||c||p||m||L||b||w}
      </div>
    `},Ft=e=>{const t=s=>s.matches(`
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
      `),r=s=>{const c=s.videoWidth||s.naturalWidth||s.width,p=s.videoHeight||s.naturalHeight||s.height;if(!c||!p)return null;const m=16,L=document.createElement("canvas"),b=L.getContext("2d",{willReadFrequently:!0});if(!b)return null;L.width=m,L.height=m;try{b.drawImage(s,0,0,m,m);const w=b.getImageData(0,0,m,m).data;let y=0,a=0,S=0,i=0;for(let g=0;g<m;g+=1)for(let v=0;v<m;v+=1){if(v>1&&v<m-2&&g>1&&g<m-2)continue;const C=(g*m+v)*4,k=w[C+3]/255;k<.2||(y+=w[C]*k,a+=w[C+1]*k,S+=w[C+2]*k,i+=k)}return i?`rgb(${Math.round(y/i)} ${Math.round(a/i)} ${Math.round(S/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(s=>{if(t(s))return;const c=s.querySelector("img, video, canvas");if(!c)return;const p=()=>{if(!s.isConnected)return;const m=r(c);m&&(s.style.setProperty("--pf-modal-media-background",m),s.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?p():c.addEventListener("load",p,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?p():c.addEventListener("loadeddata",p,{once:!0});return}window.requestAnimationFrame(p)})},Ht=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const r=Number(t.dataset.segmentStart),s=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=r,t.play().catch(()=>{})},p=()=>{t.currentTime=r,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",p,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=s&&c()}),t.addEventListener("ended",c),t.readyState>=1&&p()})},Vt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!s.length)return;if(t){s.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const g=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?g():i.video.addEventListener("loadedmetadata",g,{once:!0})}if(i.gif){const g=i.gif.querySelector("[data-perp-gif-player]"),v=i.gif.dataset.perpGifSrc;g&&v&&(g.src=v)}});return}let c=null,p=0,m=0,L=0,b=null;const w=i=>{if(i.container.classList.remove("is-playing"),i.video){const g=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(g,Number.isFinite(i.video.duration)?i.video.duration:g))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},y=()=>{window.clearTimeout(m),s.forEach(w)},a=()=>{p=(p+1)%s.length,S(s[p],!0)},S=(i,g=!1)=>{const v=++L;if(y(),c=i,i.container.classList.add("is-playing"),i.video){const C=()=>{v!==L||!e.isConnected||(i.video.loop=!g,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?C():i.video.addEventListener("loadedmetadata",C,{once:!0})}if(i.gif){const C=i.gif.querySelector("[data-perp-gif-player]"),k=i.gif.dataset.perpGifSrc;C&&k&&(C.src=`${k}?play=${v}`),g&&(m=window.setTimeout(()=>{v===L&&!b&&e.isConnected&&a()},Number(i.gif.dataset.perpGifDuration||6600)))}};s.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===c&&!b&&e.isConnected&&a()}),i.gif){const g=i.gif.querySelector("[data-perp-gif-frame]"),v=new Image;v.addEventListener("load",()=>{g.width=v.naturalWidth,g.height=v.naturalHeight,g.getContext("2d")?.drawImage(v,0,0)},{once:!0}),v.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{b=i,S(i)}),i.container.addEventListener("mouseleave",()=>{b===i&&(b=null,p=(s.indexOf(i)+1)%s.length,S(s[p],!0))})}),s.forEach(w),S(s[p],!0)},zt=e=>{const t=window.matchMedia("(max-width: 920px)").matches,r=[...e.querySelectorAll("[data-public-transport-video]")].map(a=>({video:a,order:Number(a.dataset.publicTransportVideoOrder),container:a.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(a=>a.container).sort((a,S)=>a.order-S.order);if(!r.length)return;if(t){r.forEach(a=>{a.container.classList.add("is-playing"),a.video.loop=!0;const S=()=>{e.isConnected&&(a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?S():a.video.addEventListener("loadedmetadata",S,{once:!0})});return}let s=null,c=0,p=null,m=0;const L=a=>{a.container.classList.remove("is-playing"),a.video.loop=!1,a.video.pause(),a.video.readyState>=2&&(a.video.currentTime=0)},b=()=>r.forEach(L),w=()=>{c=(c+1)%r.length,y(r[c],!0)},y=(a,S=!1)=>{const i=++m;b(),s=a,a.container.classList.add("is-playing");const g=()=>{i!==m||!e.isConnected||(a.video.loop=!S,a.video.currentTime=0,a.video.play().catch(()=>{}))};a.video.readyState>=1?g():a.video.addEventListener("loadedmetadata",g,{once:!0})};r.forEach(a=>{a.video.addEventListener("ended",()=>{a===s&&!p&&e.isConnected&&w()}),a.container.addEventListener("mouseenter",()=>{p=a,y(a)}),a.container.addEventListener("mouseleave",()=>{p===a&&(p=null,c=(r.indexOf(a)+1)%r.length,y(r[c],!0))})}),r.forEach(L),y(r[c],!0)},Nt=(e,t=!1)=>{const r=`
      <div class="pf-work-card">
        ${B(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${e.companyLabel?`<span>@ ${e.companyLabel}</span>`:""}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${r}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-type="${e.type||"others"}" draggable="false" aria-label="${u(e.title)} project detail">${r}</a>`},Ve=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),ze=()=>{const e=window.innerWidth<=600?12:window.innerWidth<=920?16:24;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},Ne=()=>window.innerWidth<=600?"28px":window.innerWidth<=920?"32px":"36px",Z=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},Oe=(e,t)=>{const r=t.width?e.width/t.width:1,s=t.height?e.height/t.height:1,c=e.left-t.left,p=e.top-t.top;return`translate3d(${c}px, ${p}px, 0) scale(${r}, ${s})`},Ot=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(r=>!r.paused&&!r.ended);return e.forEach(r=>r.pause()),t},Kt=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},Ke=(e,t,{pushHistory:r=!0}={})=>{if(M)return;r&&ce(t.id);const s=Ot(),c=e.querySelector(".pf-work-card")||e,p=c.getBoundingClientRect(),m=window.getComputedStyle(c).borderRadius,L=ze(),b=Ne(),w=document.createElement("div"),y=document.createElement("div"),a=document.createElement("div"),S=`pf-modal-${t.id}-title`,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=i?1:h,v=t.cta?`
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
      `:"",C=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",k=t.id==="perp-dex",ct=t.id==="public-transport",dt=k?4:ct?2:3,to=Array.from({length:dt},(f,E)=>Dt(t,E)),oo=Array.from({length:dt},(f,E)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${E+1} pf-modal-bento-skeleton"></div>
      `),J=ct,ae=!t.cta&&!k&&!J,Ee=t.deviceType==="web"&&!J&&!ae,pt=t.id==="cta-enhancement",ut=f=>{const E=pt?f[0]:f.slice(0,2).join("");return k?`
          <div class="pf-modal-perp-left">
            ${f[0]}
            <div class="pf-modal-perp-center-bottom">
              ${f[1]}
              ${f[2]}
            </div>
          </div>
          ${f[3]}
        `:J||ae?f.join(""):Ee?`<div class="pf-modal-bento-side">${f.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${pt?" pf-modal-bento-stack-top--single":""}">
              ${E}
            </div>
            ${f[2]}
          </div>
        `},ao=ut(to),ro=ut(oo),io=k?"":`
        <div class="pf-modal-bento-feature">
          ${It(t)}
        </div>
      `,so=`
      <section class="pf-modal-bento-section${Ee?" pf-modal-bento-section--web":""}${J?" pf-modal-bento-section--three-up":""}${ae?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${io}
        ${ao}
      </section>
    `,no=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Ee?" pf-modal-bento-section--web":""}${J?" pf-modal-bento-section--three-up":""}${ae?" pf-modal-bento-section--four-up":""}${k?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${k?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${ro}
      </section>
    `;w.className="pf-modal-layer",y.className="pf-modal-backdrop",y.style.opacity="0",a.className=`pf-work-modal pf-work--${t.id}${C?" pf-work-modal--has-description":""}${v?"":" pf-work-modal--no-cta"}`,a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby",S),a.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${no}</div>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${v?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${t.companyLabel?`<span>@ ${t.companyLabel}</span>`:""}
        </div>
        ${v||C}
      </div>
    `,Z(a,L),a.style.borderRadius=b,a.style.transformOrigin="top left",w.append(y,a),document.body.append(w),a.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const Me=a.animate([{transform:Oe(p,L),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:b}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),$e=y.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),Pe=a.querySelector(".pf-modal-close"),H=a.querySelector(".pf-modal-cta"),Ce=a.querySelector(".pf-modal-footer"),Re=a.querySelector(".pf-modal-card-content");let ft=!1,x=!1,re=!1;const lo=()=>{ft||!Re||x||(ft=!0,Re.classList.remove("is-skeleton"),Re.innerHTML=so,Ft(a),Ht(a),Vt(a),zt(a),window.requestAnimationFrame(()=>{!x&&a.isConnected&&a.classList.add("is-content-ready")}))},ie=()=>{const f=Ce?.offsetHeight??0;a.style.setProperty("--pf-modal-footer-space",`${f}px`)},mt=Ce&&typeof ResizeObserver=="function"?new ResizeObserver(ie):null;mt?.observe(Ce),ie();const gt=()=>{!x&&a.classList.contains("is-ready")&&(Z(a,ze()),a.style.borderRadius=Ne(),ie())};let ht=!1;const vt=({restoreFocus:f=!1}={})=>{if(ht||(ht=!0,w.getAnimations?.({subtree:!0})?.forEach(V=>V.cancel()),w.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",xe),window.removeEventListener("resize",gt),mt?.disconnect(),M?.modal===a&&(M=null),Kt(s),!f))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},wt=()=>{if(x)return;x=!0,re=!1,a.classList.add("is-closing"),a.classList.remove("is-revealing","is-ready","is-content-ready");const f=a.getBoundingClientRect(),E=window.getComputedStyle(a).borderRadius,V=c.getBoundingClientRect();e.classList.remove("is-modal-source"),Me.cancel(),$e.cancel(),Z(a,f),a.style.borderRadius=E,a.style.transform="none";const qe=i?1:320,po=a.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:E},{transform:Oe(V,f),borderRadius:m}],{duration:qe,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});y.animate([{opacity:1},{opacity:0}],{duration:i?1:200,easing:"ease-out",fill:"forwards"}),po.finished.finally(()=>vt({restoreFocus:!0}))},je=()=>{if(!(x||re)){if(W()===t.id){re=!0,window.history.back();return}wt()}},co=f=>{!H||t.cta?.newTab!==!1||!Ve(f,H)||(f.preventDefault(),!(x||re)&&(x=!0,a.classList.add("is-navigating"),document.removeEventListener("keydown",xe),W()===t.id?window.location.replace(H.href):window.location.href=H.href))},xe=f=>{if(f.key==="Escape"){f.preventDefault(),je();return}if(f.key!=="Tab")return;const E=[Pe,H].filter(Boolean),V=E.indexOf(document.activeElement),qe=f.shiftKey?(V-1+E.length)%E.length:(V+1)%E.length;f.preventDefault(),E[qe].focus()};M={layer:w,modal:a,projectId:t.id,closeModal:wt,disposeModal:vt},document.addEventListener("keydown",xe),window.addEventListener("resize",gt),Pe.addEventListener("click",je),H?.addEventListener("click",co),w.addEventListener("click",f=>{(f.target===w||f.target===y)&&je()}),$e.finished.then(()=>{y.style.opacity="1",$e.cancel()}).catch(()=>{}),Me.finished.then(()=>{x||(Z(a,L),a.style.borderRadius=b,a.style.transform="none",Me.cancel(),ie(),a.classList.add("is-ready"),lo(),Pe.focus({preventScroll:!0}))}).catch(()=>{})},N=window.matchMedia("(max-width: 600px)");o.innerHTML=`
    <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${I.map(({value:e,label:t})=>`
            <button
              class="pf-type-filter-button"
              type="button"
              data-project-type-filter="${e}"
              aria-controls="pf-work-grid"
              aria-pressed="false"
            >${t}</button>
          `).join("")}
    </div>
    <div class="pf-work-grid" id="pf-work-grid">
      ${n.map(e=>Nt(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const Ge=[...o.querySelectorAll("[data-project-type-filter]")],Gt=[...o.querySelectorAll(".pf-work[data-project-type]")],_e=o.querySelector(".pf-filter-empty");let O="";const _t=e=>{O=O===e?"":e;let t=0;Ge.forEach(r=>{r.setAttribute("aria-pressed",String(r.dataset.projectTypeFilter===O))}),Gt.forEach(r=>{const s=!O||r.dataset.projectType===O;r.hidden=!s,s&&(t+=1)}),_e&&(_e.hidden=t>0)};Ge.forEach(e=>{e.addEventListener("click",()=>{_t(e.dataset.projectTypeFilter)})});const l=o.querySelector("[data-pf-work-rail]"),de=l?[...l.querySelectorAll(".pf-work-set")]:[],Xe=o.querySelector(".pf-work-set--primary .pf-work"),d=o.querySelector("[data-pf-work-rail-secondary]"),ee=d?[...d.querySelectorAll(".pf-work-set")]:[],Ye=ee[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Xt=80,Yt=-80,pe=32,Ut=12,Ue=180,Je=600;let ue,fe=0,me=0,$=0,ge=pe,he=!1,K=!1,Qe=0,ve=0,G=!1,te=!1,_=!1,we=0,q=0,D=0,j=0,F=0,P=0,ye=0,X=!1,Ze=0,be=0,Y=!1,oe=!1,U=!1,Se=0;const et=({preservePosition:e=!1}={})=>{if(!l||!Xe||de.length<3)return;const t=q,r=D,s=t?(l.scrollLeft-r)/t:0,c=l.getBoundingClientRect(),p=Xe.getBoundingClientRect(),m=l.scrollLeft+p.left-c.left;q=de[2].getBoundingClientRect().left-de[1].getBoundingClientRect().left,D=m-(l.clientWidth-p.width)/2-(N.matches?Xt:0),l.scrollLeft=e?D+s*q:D,$=l.scrollLeft},Le=()=>{if(!l||!q)return 0;const e=D-q*.5,t=D+q*.5;let r=l.scrollLeft;for(;r<e;)r+=q;for(;r>=t;)r-=q;const s=r-l.scrollLeft;return Math.abs(s)>.5&&(l.scrollLeft=r),s},tt=({preservePosition:e=!1}={})=>{if(!d||!Ye||ee.length<3||!d.clientWidth)return;const t=j,r=F,s=t?(d.scrollLeft-r)/t:0,c=d.getBoundingClientRect(),p=Ye.getBoundingClientRect(),m=d.scrollLeft+p.left-c.left;j=ee[2].getBoundingClientRect().left-ee[1].getBoundingClientRect().left,F=m-(d.clientWidth-p.width)/2-Yt,d.scrollLeft=e?F+s*j:F,P=d.scrollLeft},ke=()=>{if(!d||!j)return 0;const e=F-j*.5,t=F+j*.5;let r=d.scrollLeft;for(;r<e;)r+=j;for(;r>=t;)r-=j;const s=r-d.scrollLeft;return Math.abs(s)>.5&&(d.scrollLeft=r),s},Te=()=>{$=l?.scrollLeft??$,me=performance.now()+200},ot=()=>{P=d?.scrollLeft??P,ye=performance.now()+200},Jt=()=>{window.clearTimeout(we),_=!0,$=l?.scrollLeft??$},at=()=>{window.clearTimeout(we),we=window.setTimeout(()=>{l&&($=l.scrollLeft,$+=Le(),_=!1,me=performance.now()+Je)},Ue)},Qt=()=>{window.clearTimeout(Se),U=!0,P=d?.scrollLeft??P},rt=()=>{window.clearTimeout(Se),Se=window.setTimeout(()=>{d&&(P=d.scrollLeft,P+=ke(),U=!1,ye=performance.now()+Je)},Ue)},it=e=>{const t=Math.min((e-(ue??e))/1e3,.1),r=he?Ut:pe;if(ue=e,ge+=(r-ge)*Math.min(t*6,1),l){const s=o.getBoundingClientRect(),c=s.bottom>0&&s.top<window.innerHeight;c&&!K&&!_&&!U&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=me&&($+=t*ge,l.scrollLeft=$,$+=Le()),c&&d?.clientWidth&&j&&!X&&!U&&!_&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=ye&&(P-=t*pe,d.scrollLeft=P,P+=ke())}fe=requestAnimationFrame(it)};!l||fe||(ue=void 0,fe=requestAnimationFrame(it)),requestAnimationFrame(()=>{et(),tt()}),l?.addEventListener("mouseenter",()=>{he=!0}),l?.addEventListener("mouseleave",()=>{he=!1}),o.addEventListener("wheel",e=>{!l||e.ctrlKey||(Te(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),l?.addEventListener("pointerdown",e=>{if(!(e.button!==0||M)){if(e.pointerType==="touch"&&N.matches){Jt();return}K=!0,G=!1,Qe=e.clientX,ve=l.scrollLeft,Te()}}),l?.addEventListener("dragstart",e=>{e.preventDefault()}),l?.addEventListener("pointermove",e=>{if(!K)return;const t=e.clientX-Qe;!G&&Math.abs(t)<=5||(G||(G=!0,l.classList.add("is-dragging"),l.setPointerCapture(e.pointerId)),l.scrollLeft=ve-t,ve+=Le(),$=l.scrollLeft,Te())});const Zt=e=>{!l||!K||(K=!1,l.classList.remove("is-dragging"),l.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),$=l.scrollLeft,G&&(te=!0,window.setTimeout(()=>{te=!1},0)))};l?.addEventListener("scroll",()=>{_&&($=l.scrollLeft,at())},{passive:!0});const st=e=>{if(e.pointerType==="touch"&&N.matches){at();return}Zt(e)};l?.addEventListener("pointerup",st),l?.addEventListener("pointercancel",st),l?.addEventListener("click",e=>{te&&(te=!1,e.preventDefault(),e.stopPropagation())},!0),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||M)){if(e.pointerType==="touch"&&N.matches){Qt();return}X=!0,Y=!1,Ze=e.clientX,be=d.scrollLeft,ot()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!X)return;const t=e.clientX-Ze;!Y&&Math.abs(t)<=5||(Y||(Y=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=be-t,be+=ke(),P=d.scrollLeft,ot())});const eo=e=>{!d||!X||(X=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),P=d.scrollLeft,Y&&(oe=!0,window.setTimeout(()=>{oe=!1},0)))};d?.addEventListener("scroll",()=>{U&&(P=d.scrollLeft,rt())},{passive:!0});const nt=e=>{if(e.pointerType==="touch"&&N.matches){rt();return}eo(e)};d?.addEventListener("pointerup",nt),d?.addEventListener("pointercancel",nt),d?.addEventListener("click",e=>{oe&&(oe=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!Ve(t,e))return;const r=n.find(s=>e.classList.contains(`pf-work--${s.id}`));r&&(le(r),t.preventDefault(),Ke(e,r))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{et({preservePosition:!0}),tt({preservePosition:!0})})});const lt=()=>{const e=W();if(M){M.projectId!==e&&M.closeModal();return}if(!e)return;const t=n.find(s=>s.id===e),r=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&r&&Ke(r,t,{pushHistory:!1})};return window.addEventListener("popstate",lt),{resetModal:()=>M?.disposeModal(),syncModalWithHistory:lt}},Ie=document.querySelector("[data-pf]"),yt=document.querySelector("[data-about]"),z=document.querySelector(".about-photo-stack"),bt=document.querySelector("[data-project-list]"),go=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const ho=document.querySelector(".counter-line"),St=document.querySelector(".fixed-project-meta"),vo=document.querySelector("[data-side-number]"),wo=document.querySelector("[data-side-wip]"),yo=document.querySelector("[data-side-title]"),bo=document.querySelector("[data-counter-wip]"),We=document.querySelector("[data-year-rail]"),$t=document.querySelector(".theme-toggle"),A=document.documentElement,Pt="portfolio-last-project-slug",Lt=760,So=12,Lo=8,Ct=window.matchMedia("(max-width: 600px)"),Rt=window.matchMedia("(prefers-reduced-motion: reduce)"),ko=3e3,To=200;let Be=!1,Q=0,Ae=0,kt=0,jt=0;const Eo=()=>{const o=z?.lastElementChild;!o||z.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),jt=window.setTimeout(()=>{z.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},To))},xt=()=>{window.clearInterval(kt),window.clearTimeout(jt),z?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!z||z.children.length<2||Rt.matches)&&(kt=window.setInterval(Eo,ko))},Mo=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},$o=(o,n)=>{try{window.sessionStorage?.setItem(o,n)}catch{}},Po=o=>{window.gtag?.("event","project_click",{project_name:o})},Co=o=>`'${String(o).slice(-2)}`,Ro=o=>{const{start:n,end:u}=Mt.yearRange,h=Math.min(5,u-n+1),T=Math.min(Math.max(o-2,n),u-h+1);return Array.from({length:h},(I,M)=>T+M)},jo=o=>o.split("|").join(" "),xo=(o,n)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!n.target&&!n.hasAttribute("download"),qo=()=>window.matchMedia("(max-width: 600px)").matches?Lo:So,Ao=()=>{const o=qo();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},Io=o=>{const n=o.getBoundingClientRect(),u=Ao(),h=window.getComputedStyle(o),T=window.getComputedStyle(o.closest(".project-section")),I=window.getComputedStyle(o.querySelector(".project-media")),M=o.querySelector(".project-summary"),le=Number.parseFloat(h.rowGap||h.gap)||0,W=M?.getBoundingClientRect().height||0,ce=Math.max(0,u.height-W-le),B=document.createElement("div"),R=o.cloneNode(!0);return R.classList.add("project-transition-card"),R.removeAttribute("href"),R.removeAttribute("aria-label"),R.setAttribute("aria-hidden","true"),Object.assign(R.style,{top:`${n.top}px`,left:`${n.left}px`,width:`${n.width}px`,height:`${n.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),R.style.setProperty("--project-color",T.getPropertyValue("--project-color")),R.style.setProperty("--project-sub-color",T.getPropertyValue("--project-sub-color")),R.style.setProperty("--project-media-shadow",I.boxShadow),B.className="project-transition-layer",B.append(R),document.body.append(B),{cardClone:R,targetRect:u,targetGridTemplateRows:`${ce}px ${W}px`}},Wo=o=>{if(Be)return;const n=o.closest(".project-section");if(!n){window.location.href=o.href;return}Be=!0,n.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:u,targetRect:h,targetGridTemplateRows:T}=Io(o);u.animate([{top:u.style.top,left:u.style.left,width:u.style.width,height:u.style.height,gridTemplateRows:u.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:T,opacity:0,offset:1}],{duration:Lt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Lt-120)},Bo=()=>{Be=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},Do=o=>{We.innerHTML=Ro(o.year).map(n=>{const u=n===o.year;return`
        <span class="year-rail-item" data-year="${n}" ${u?'aria-current="true"':""}>${Co(n)}</span>
      `}).join("")},Fo=()=>{St.classList.add("is-changing"),We.classList.add("is-changing"),window.setTimeout(()=>{St.classList.remove("is-changing"),We.classList.remove("is-changing")},180)};let se=[],Tt=-1;const Fe=({force:o=!1}={})=>{if(!Ct.matches){Q&&(A.style.removeProperty("--mobile-project-viewport"),Q=0,Ae=0);return}const n=window.innerWidth;!o&&Q&&n===Ae||(Q=window.innerHeight,Ae=n,A.style.setProperty("--mobile-project-viewport",`${Q}px`))},Ho=()=>{if(!Ie)return;const o=Ie.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;A.classList.toggle("is-pf-active",u)},Vo=()=>{if(!yt)return;const o=yt.getBoundingClientRect(),n=window.innerHeight/2,u=o.top<=n&&o.bottom>=n;A.classList.toggle("is-about-active",u)},zo=o=>{if(o===Tt||o<0)return;const n=uo[o],u=(o+1)/Mt.totalProjectCount*100;Tt=o,Fo(),go.textContent=n.number,vo.textContent=n.number,wo.textContent=n.wip?"🚧":"",bo.textContent=n.wip?"🚧":"",yo.innerHTML=n.sideTitle.split("|").join("<br />"),ho.style.setProperty("--progress",`${u}%`),A.style.setProperty("--active-project-color",n.keyColor),A.style.setProperty("--active-project-sub-color",n.subColor||n.keyColor),$o(Pt,n.slug),Do(n)},No=()=>{if(!se.length)return;const o=window.innerHeight/2,n=se.map((u,h)=>{const T=u.getBoundingClientRect(),I=T.top+T.height/2;return{index:h,distance:Math.abs(I-o)}}).sort((u,h)=>u.distance-h.distance)[0]?.index;se.forEach((u,h)=>{const T=h===n;u.classList.toggle("is-active",T),u.classList.toggle("is-inactive",!T)}),zo(n)};let Et=0;const ne=()=>{cancelAnimationFrame(Et),Et=requestAnimationFrame(()=>{Ho(),Vo(),No()})},qt=o=>{A.dataset.theme=o,$t.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},Oo=localStorage.getItem("portfolio-theme")||"light",At=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Rt.addEventListener?.("change",xt);xt();const De=mo(Ie,fo,jo);se=[...document.querySelectorAll("[data-project]")];Fe({force:!0});qt(Oo);const Ko=()=>{const o=window.location.hash?window.location.hash.slice(1):"",n=At()==="back_forward",u=o||(n?Mo(Pt):""),h=u?document.getElementById(u):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};Ko();At()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));$t.addEventListener("click",()=>{qt(A.dataset.theme==="dark"?"light":"dark")});bt?.addEventListener("click",o=>{const n=o.target.closest(".project-link");!n||!bt.contains(n)||!xo(o,n)||(Po(n.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),Wo(n))});window.addEventListener("scroll",ne,{passive:!0});window.addEventListener("resize",()=>{Fe(),ne()});Ct.addEventListener?.("change",()=>{Fe({force:!0}),ne()});window.addEventListener("pagehide",()=>De?.resetModal());window.addEventListener("pageshow",()=>{De?.resetModal(),De?.syncModalWithHistory(),Bo()});ne();
