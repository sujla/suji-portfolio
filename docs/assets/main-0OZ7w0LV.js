import{p as Co,a as Wt}from"./projects-C3NfBF-1.js";/* empty css               */const xo=[{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Ro=(o,a,l)=>{if(!o)return;const h=760,M="portfolioPfModalProject",Y=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let R=null;const de=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},K=()=>window.history.state?.[M]||"",_=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[M]:e},"")},E=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',Xt=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],et=e=>{const t=Xt[e-1];return`
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
    `},Ut=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?et(1):E(e),Jt=[{image:"./assets/store-guide/impact-1.png",title:"Flow-level Data Tracking"},{image:"./assets/store-guide/impact-2.png",title:"Increased Page Views"},{image:"./assets/store-guide/impact-3.png",title:"Pickup Conversion up to 11%"}],Qt=[{start:0,end:5},{start:18,end:26}],Zt=(e,t)=>{const i=Qt[t],n=e.id==="public-transport"?et(t+2):"",c=e.id==="perp-dex"?[`
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
            `][t]:"",m=e.media==="store-guide"&&i?`
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
        `:"",k=e.id==="cta-enhancement"&&t===2?`
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
            ${Jt.map(y=>`
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
        ${n||c||m||f||k||b||w}
      </div>
    `},eo=e=>{const t=n=>n.matches(`
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
      `),i=n=>{const c=n.videoWidth||n.naturalWidth||n.width,m=n.videoHeight||n.naturalHeight||n.height;if(!c||!m)return null;const f=16,k=document.createElement("canvas"),b=k.getContext("2d",{willReadFrequently:!0});if(!b)return null;k.width=f,k.height=f;try{b.drawImage(n,0,0,f,f);const w=b.getImageData(0,0,f,f).data;let y=0,s=0,S=0,r=0;for(let g=0;g<f;g+=1)for(let v=0;v<f;v+=1){if(v>1&&v<f-2&&g>1&&g<f-2)continue;const C=(g*f+v)*4,T=w[C+3]/255;T<.2||(y+=w[C]*T,s+=w[C+1]*T,S+=w[C+2]*T,r+=T)}return r?`rgb(${Math.round(y/r)} ${Math.round(s/r)} ${Math.round(S/r)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const c=n.querySelector("img, video, canvas");if(!c)return;const m=()=>{if(!n.isConnected)return;const f=i(c);f&&(n.style.setProperty("--pf-modal-media-background",f),n.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?m():c.addEventListener("load",m,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?m():c.addEventListener("loadeddata",m,{once:!0});return}window.requestAnimationFrame(m)})},to=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const i=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=i,t.play().catch(()=>{})},m=()=>{t.currentTime=i,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",m,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&c()}),t.addEventListener("ended",c),t.readyState>=1&&m()})},oo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(r=>e.querySelector(`.pf-modal-bento-placeholder--${r}`)).filter(Boolean).map(r=>({container:r,video:r.querySelector("[data-perp-video]"),gif:r.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(r=>{if(r.container.classList.add("is-playing"),r.video){const g=()=>{e.isConnected&&(r.video.loop=!0,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?g():r.video.addEventListener("loadedmetadata",g,{once:!0})}if(r.gif){const g=r.gif.querySelector("[data-perp-gif-player]"),v=r.gif.dataset.perpGifSrc;g&&v&&(g.src=v)}});return}let c=null,m=0,f=0,k=0,b=null;const w=r=>{if(r.container.classList.remove("is-playing"),r.video){const g=Number(r.video.dataset.perpThumbnailTime||0);r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=Math.min(g,Number.isFinite(r.video.duration)?r.video.duration:g))}r.gif&&r.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},y=()=>{window.clearTimeout(f),n.forEach(w)},s=()=>{m=(m+1)%n.length,S(n[m],!0)},S=(r,g=!1)=>{const v=++k;if(y(),c=r,r.container.classList.add("is-playing"),r.video){const C=()=>{v!==k||!e.isConnected||(r.video.loop=!g,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?C():r.video.addEventListener("loadedmetadata",C,{once:!0})}if(r.gif){const C=r.gif.querySelector("[data-perp-gif-player]"),T=r.gif.dataset.perpGifSrc;C&&T&&(C.src=`${T}?play=${v}`),g&&(f=window.setTimeout(()=>{v===k&&!b&&e.isConnected&&s()},Number(r.gif.dataset.perpGifDuration||6600)))}};n.forEach(r=>{if(r.video&&r.video.addEventListener("ended",()=>{r===c&&!b&&e.isConnected&&s()}),r.gif){const g=r.gif.querySelector("[data-perp-gif-frame]"),v=new Image;v.addEventListener("load",()=>{g.width=v.naturalWidth,g.height=v.naturalHeight,g.getContext("2d")?.drawImage(v,0,0)},{once:!0}),v.src=r.gif.dataset.perpGifSrc}r.container.addEventListener("mouseenter",()=>{b=r,S(r)}),r.container.addEventListener("mouseleave",()=>{b===r&&(b=null,m=(n.indexOf(r)+1)%n.length,S(n[m],!0))})}),n.forEach(w),S(n[m],!0)},so=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=[...e.querySelectorAll("[data-public-transport-video]")].map(s=>({video:s,order:Number(s.dataset.publicTransportVideoOrder),container:s.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(s=>s.container).sort((s,S)=>s.order-S.order);if(!i.length)return;if(t){i.forEach(s=>{s.container.classList.add("is-playing"),s.video.loop=!0;const S=()=>{e.isConnected&&(s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?S():s.video.addEventListener("loadedmetadata",S,{once:!0})});return}let n=null,c=0,m=null,f=0;const k=s=>{s.container.classList.remove("is-playing"),s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=0)},b=()=>i.forEach(k),w=()=>{c=(c+1)%i.length,y(i[c],!0)},y=(s,S=!1)=>{const r=++f;b(),n=s,s.container.classList.add("is-playing");const g=()=>{r!==f||!e.isConnected||(s.video.loop=!S,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?g():s.video.addEventListener("loadedmetadata",g,{once:!0})};i.forEach(s=>{s.video.addEventListener("ended",()=>{s===n&&!m&&e.isConnected&&w()}),s.container.addEventListener("mouseenter",()=>{m=s,y(s)}),s.container.addEventListener("mouseleave",()=>{m===s&&(m=null,c=(i.indexOf(s)+1)%i.length,y(i[c],!0))})}),i.forEach(k),y(i[c],!0)},io=(e,t=!1)=>{const i=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${E(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${e.companyLabel?`<span>@ ${e.companyLabel}</span>`:""}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${i.join(" ")}" draggable="false" aria-label="${l(e.title)} project detail">${n}</a>`},tt=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),ot=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},st=()=>"24px",pe=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},it=(e,t)=>{const i=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,c=e.left-t.left,m=e.top-t.top;return`translate3d(${c}px, ${m}px, 0) scale(${i}, ${n})`},ro=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(i=>!i.paused&&!i.ended);return e.forEach(i=>i.pause()),t},ao=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},rt=(e,t,{pushHistory:i=!0}={})=>{if(R)return;i&&_(t.id);const n=ro(),c=e.querySelector(".pf-work-card")||e,m=c.getBoundingClientRect(),f=window.getComputedStyle(c).borderRadius,k=ot(),b=st(),w=document.createElement("div"),y=document.createElement("div"),s=document.createElement("div"),S=`pf-modal-${t.id}-title`,r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=r?1:h,v=t.cta?`
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
      `:"",C=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",T=t.id==="perp-dex",kt=t.id==="public-transport",Tt=T?4:kt?2:3,wo=Array.from({length:Tt},(u,L)=>Zt(t,L)),yo=Array.from({length:Tt},(u,L)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${L+1} pf-modal-bento-skeleton"></div>
      `),se=kt,ge=!t.cta&&!T&&!se,Be=t.deviceType==="web"&&!se&&!ge,Mt=t.id==="cta-enhancement",Et=u=>{const L=Mt?u[0]:u.slice(0,2).join("");return T?`
          <div class="pf-modal-perp-left">
            ${u[0]}
            <div class="pf-modal-perp-center-bottom">
              ${u[1]}
              ${u[2]}
            </div>
          </div>
          ${u[3]}
        `:se||ge?u.join(""):Be?`<div class="pf-modal-bento-side">${u.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Mt?" pf-modal-bento-stack-top--single":""}">
              ${L}
            </div>
            ${u[2]}
          </div>
        `},bo=Et(wo),So=Et(yo),Lo=T?"":`
        <div class="pf-modal-bento-feature">
          ${Ut(t)}
        </div>
      `,ko=`
      <section class="pf-modal-bento-section${Be?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${ge?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Lo}
        ${bo}
      </section>
    `,To=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Be?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${ge?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${T?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${So}
      </section>
    `;w.className="pf-modal-layer",y.className="pf-modal-backdrop",y.style.opacity="0",s.className=`pf-work-modal pf-work--${t.id}${C?" pf-work-modal--has-description":""}${v?"":" pf-work-modal--no-cta"}`,s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",S),s.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${To}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${v?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${t.companyLabel?`<span>@ ${t.companyLabel}</span>`:""}
        </div>
        ${v||C}
      </div>
    `,pe(s,k),s.style.borderRadius=b,s.style.transformOrigin="top left",w.append(y,s),document.body.append(w),s.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const He=s.animate([{transform:it(m,k),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:b}],{duration:g,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Fe=y.animate([{opacity:0},{opacity:1}],{duration:Math.min(g,420),easing:"ease-out",fill:"forwards"}),We=s.querySelector(".pf-modal-close"),O=s.querySelector(".pf-modal-cta"),he=s.querySelector(".pf-modal-footer"),x=s.querySelector(".pf-modal-card-content"),ie=s.querySelector(".pf-modal-scroll-indicator");let $t=!1,j=!1,ve=!1,re=0;const Mo=()=>{if(re=0,!x||!ie||j)return;const u=x.scrollHeight-x.clientHeight,L=8,D=he?.offsetHeight??0,B=Math.max(0,s.clientHeight-D-L*2);if(u<=1||B<=0){ie.classList.remove("is-visible");return}const ye=Math.min(B,Math.max(36,B*(x.clientHeight/x.scrollHeight))),Po=Math.min(1,Math.max(0,x.scrollTop/u))*(B-ye);ie.style.height=`${ye}px`,ie.style.transform=`translate3d(0, ${Po}px, 0)`,ie.classList.add("is-visible")},ae=()=>{re||(re=window.requestAnimationFrame(Mo))},Ve=typeof ResizeObserver=="function"?new ResizeObserver(ae):null;Ve?.observe(x),x?.addEventListener("scroll",ae,{passive:!0});const Eo=()=>{$t||!x||j||($t=!0,x.classList.remove("is-skeleton"),x.innerHTML=ko,eo(s),to(s),oo(s),so(s),x.querySelectorAll(".pf-modal-bento-section").forEach(u=>Ve?.observe(u)),window.requestAnimationFrame(()=>{!j&&s.isConnected&&(s.classList.add("is-content-ready"),ae())}))},we=()=>{const u=he?.offsetHeight??0;s.style.setProperty("--pf-modal-footer-space",`${u}px`),ae()},Pt=he&&typeof ResizeObserver=="function"?new ResizeObserver(we):null;Pt?.observe(he),we();const Ct=()=>{!j&&s.classList.contains("is-ready")&&(pe(s,ot()),s.style.borderRadius=st(),we())};let xt=!1;const Rt=({restoreFocus:u=!1}={})=>{if(xt||(xt=!0,w.getAnimations?.({subtree:!0})?.forEach(D=>D.cancel()),w.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Oe),window.removeEventListener("resize",Ct),Pt?.disconnect(),Ve?.disconnect(),x?.removeEventListener("scroll",ae),re&&window.cancelAnimationFrame(re),R?.modal===s&&(R=null),ao(n),!u))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},jt=()=>{if(j)return;j=!0,ve=!1,s.classList.add("is-closing"),s.classList.remove("is-revealing","is-ready","is-content-ready");const u=s.getBoundingClientRect(),L=window.getComputedStyle(s).borderRadius,D=c.getBoundingClientRect();e.classList.remove("is-modal-source"),He.cancel(),Fe.cancel(),pe(s,u),s.style.borderRadius=L,s.style.transform="none";const B=r?1:320,ye=s.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L},{transform:it(D,u),borderRadius:f}],{duration:B,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});y.animate([{opacity:1},{opacity:0}],{duration:r?1:200,easing:"ease-out",fill:"forwards"}),ye.finished.finally(()=>Rt({restoreFocus:!0}))},ze=()=>{if(!(j||ve)){if(K()===t.id){ve=!0,window.history.back();return}jt()}},$o=u=>{!O||t.cta?.newTab!==!1||!tt(u,O)||(u.preventDefault(),!(j||ve)&&(j=!0,s.classList.add("is-navigating"),document.removeEventListener("keydown",Oe),K()===t.id?window.location.replace(O.href):window.location.href=O.href))},Oe=u=>{if(u.key==="Escape"){u.preventDefault(),ze();return}if(u.key!=="Tab")return;const L=[We,O].filter(Boolean),D=L.indexOf(document.activeElement),B=u.shiftKey?(D-1+L.length)%L.length:(D+1)%L.length;u.preventDefault(),L[B].focus()};R={layer:w,modal:s,projectId:t.id,closeModal:jt,disposeModal:Rt},document.addEventListener("keydown",Oe),window.addEventListener("resize",Ct),We.addEventListener("click",ze),O?.addEventListener("click",$o),w.addEventListener("click",u=>{(u.target===w||u.target===y)&&ze()}),Fe.finished.then(()=>{y.style.opacity="1",Fe.cancel()}).catch(()=>{}),He.finished.then(()=>{j||(pe(s,k),s.style.borderRadius=b,s.style.transform="none",He.cancel(),we(),s.classList.add("is-ready"),Eo(),We.focus({preventScroll:!0}))}).catch(()=>{})},X=window.matchMedia("(max-width: 600px)"),U=document.querySelector("[data-pf-type-filter]");U&&(U.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${Y.map(({value:e,label:t},i)=>`
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
    `),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${a.map(e=>io(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const at=U?[...U.querySelectorAll("[data-project-type-filter]")]:[],no=U?.querySelector(".pf-type-filter"),lo=[...o.querySelectorAll(".pf-work[data-project-types]")],nt=o.querySelector(".pf-filter-empty");let W="";const co=e=>{W=W===e?"":e;let t=0;at.forEach(i=>{i.setAttribute("aria-pressed",String(i.dataset.projectTypeFilter===W))}),no?.classList.toggle("is-filtering",!!W),lo.forEach(i=>{const n=i.dataset.projectTypes.split(" "),c=!W||n.includes(W);i.hidden=!c,c&&(t+=1)}),nt&&(nt.hidden=t>0)};at.forEach(e=>{e.addEventListener("click",()=>{co(e.dataset.projectTypeFilter),window.scrollTo({top:Math.max(0,o.getBoundingClientRect().top+window.scrollY-30),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})});const d=o.querySelector("[data-pf-work-rail]"),Le=d?[...d.querySelectorAll(".pf-work-set")]:[],lt=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),ue=p?[...p.querySelectorAll(".pf-work-set")]:[],ct=ue[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const po=80,uo=-80,ke=32,mo=12,dt=180,pt=600;let Te,Me=0,Ee=0,$=0,$e=ke,Pe=!1,J=!1,ut=0,Ce=0,Q=!1,me=!1,Z=!1,xe=0,I=0,V=0,A=0,z=0,P=0,Re=0,ee=!1,mt=0,je=0,te=!1,fe=!1,oe=!1,qe=0;const ft=({preservePosition:e=!1}={})=>{if(!d||!lt||Le.length<3)return;const t=I,i=V,n=t?(d.scrollLeft-i)/t:0,c=d.getBoundingClientRect(),m=lt.getBoundingClientRect(),f=d.scrollLeft+m.left-c.left;I=Le[2].getBoundingClientRect().left-Le[1].getBoundingClientRect().left,V=f-(d.clientWidth-m.width)/2-(X.matches?po:0),d.scrollLeft=e?V+n*I:V,$=d.scrollLeft},Ae=()=>{if(!d||!I)return 0;const e=V-I*.5,t=V+I*.5;let i=d.scrollLeft;for(;i<e;)i+=I;for(;i>=t;)i-=I;const n=i-d.scrollLeft;return Math.abs(n)>.5&&(d.scrollLeft=i),n},gt=({preservePosition:e=!1}={})=>{if(!p||!ct||ue.length<3||!p.clientWidth)return;const t=A,i=z,n=t?(p.scrollLeft-i)/t:0,c=p.getBoundingClientRect(),m=ct.getBoundingClientRect(),f=p.scrollLeft+m.left-c.left;A=ue[2].getBoundingClientRect().left-ue[1].getBoundingClientRect().left,z=f-(p.clientWidth-m.width)/2-uo,p.scrollLeft=e?z+n*A:z,P=p.scrollLeft},Ie=()=>{if(!p||!A)return 0;const e=z-A*.5,t=z+A*.5;let i=p.scrollLeft;for(;i<e;)i+=A;for(;i>=t;)i-=A;const n=i-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=i),n},De=()=>{$=d?.scrollLeft??$,Ee=performance.now()+200},ht=()=>{P=p?.scrollLeft??P,Re=performance.now()+200},fo=()=>{window.clearTimeout(xe),Z=!0,$=d?.scrollLeft??$},vt=()=>{window.clearTimeout(xe),xe=window.setTimeout(()=>{d&&($=d.scrollLeft,$+=Ae(),Z=!1,Ee=performance.now()+pt)},dt)},go=()=>{window.clearTimeout(qe),oe=!0,P=p?.scrollLeft??P},wt=()=>{window.clearTimeout(qe),qe=window.setTimeout(()=>{p&&(P=p.scrollLeft,P+=Ie(),oe=!1,Re=performance.now()+pt)},dt)},yt=e=>{const t=Math.min((e-(Te??e))/1e3,.1),i=Pe?mo:ke;if(Te=e,$e+=(i-$e)*Math.min(t*6,1),d){const n=o.getBoundingClientRect(),c=n.bottom>0&&n.top<window.innerHeight;c&&!J&&!Z&&!oe&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ee&&($+=t*$e,d.scrollLeft=$,$+=Ae()),c&&p?.clientWidth&&A&&!ee&&!oe&&!Z&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Re&&(P-=t*ke,p.scrollLeft=P,P+=Ie())}Me=requestAnimationFrame(yt)};!d||Me||(Te=void 0,Me=requestAnimationFrame(yt)),requestAnimationFrame(()=>{ft(),gt()}),d?.addEventListener("mouseenter",()=>{Pe=!0}),d?.addEventListener("mouseleave",()=>{Pe=!1}),o.addEventListener("wheel",e=>{!d||e.ctrlKey||(De(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&X.matches){fo();return}J=!0,Q=!1,ut=e.clientX,Ce=d.scrollLeft,De()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!J)return;const t=e.clientX-ut;!Q&&Math.abs(t)<=5||(Q||(Q=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Ce-t,Ce+=Ae(),$=d.scrollLeft,De())});const ho=e=>{!d||!J||(J=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),$=d.scrollLeft,Q&&(me=!0,window.setTimeout(()=>{me=!1},0)))};d?.addEventListener("scroll",()=>{Z&&($=d.scrollLeft,vt())},{passive:!0});const bt=e=>{if(e.pointerType==="touch"&&X.matches){vt();return}ho(e)};d?.addEventListener("pointerup",bt),d?.addEventListener("pointercancel",bt),d?.addEventListener("click",e=>{me&&(me=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||R)){if(e.pointerType==="touch"&&X.matches){go();return}ee=!0,te=!1,mt=e.clientX,je=p.scrollLeft,ht()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!ee)return;const t=e.clientX-mt;!te&&Math.abs(t)<=5||(te||(te=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=je-t,je+=Ie(),P=p.scrollLeft,ht())});const vo=e=>{!p||!ee||(ee=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),P=p.scrollLeft,te&&(fe=!0,window.setTimeout(()=>{fe=!1},0)))};p?.addEventListener("scroll",()=>{oe&&(P=p.scrollLeft,wt())},{passive:!0});const St=e=>{if(e.pointerType==="touch"&&X.matches){wt();return}vo(e)};p?.addEventListener("pointerup",St),p?.addEventListener("pointercancel",St),p?.addEventListener("click",e=>{fe&&(fe=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!tt(t,e))return;const i=a.find(n=>e.classList.contains(`pf-work--${n.id}`));i&&(de(i),t.preventDefault(),rt(e,i))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{ft({preservePosition:!0}),gt({preservePosition:!0})})});const Lt=()=>{const e=K();if(R){R.projectId!==e&&R.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),i=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&i&&rt(i,t,{pushHistory:!1})};return window.addEventListener("popstate",Lt),{resetModal:()=>R?.disposeModal(),syncModalWithHistory:Lt}},Ne=document.querySelector("[data-pf]"),qt=document.querySelector("[data-about]"),G=document.querySelector(".about-photo-stack"),At=document.querySelector("[data-project-list]"),jo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const qo=document.querySelector(".counter-line"),It=document.querySelector(".fixed-project-meta"),Ao=document.querySelector("[data-side-number]"),Io=document.querySelector("[data-side-wip]"),Do=document.querySelector("[data-side-title]"),Bo=document.querySelector("[data-counter-wip]"),Ye=document.querySelector("[data-year-rail]"),H=document.querySelector(".index-gnb"),Ho=[...document.querySelectorAll("[data-gnb-scroll]")],Vt=document.querySelector(".theme-toggle"),q=document.documentElement,zt="portfolio-last-project-slug",Dt=760,Fo=12,Wo=8,Ot=window.matchMedia("(max-width: 600px)"),Je=window.matchMedia("(prefers-reduced-motion: reduce)"),Vo=3e3,zo=200;let Ke=!1,ne=0,Ge=0,Bt=0,Gt=0,F=Math.max(0,window.scrollY),le=0,ce=F,Qe=!1,_e=0,Xe=0;const Oo=()=>{const o=G?.lastElementChild;!o||G.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Gt=window.setTimeout(()=>{G.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},zo))},Nt=()=>{window.clearInterval(Bt),window.clearTimeout(Gt),G?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!G||G.children.length<2||Je.matches)&&(Bt=window.setInterval(Oo,Vo))},Go=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},No=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},Yo=o=>{window.gtag?.("event","project_click",{project_name:o})},Ko=o=>`'${String(o).slice(-2)}`,_o=o=>{const{start:a,end:l}=Wt.yearRange,h=Math.min(5,l-a+1),M=Math.min(Math.max(o-2,a),l-h+1);return Array.from({length:h},(N,Y)=>M+Y)},Xo=o=>o.split("|").join(" "),Uo=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),Jo=()=>window.matchMedia("(max-width: 600px)").matches?Wo:Fo,Qo=()=>{const o=Jo();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},Zo=o=>{const a=o.getBoundingClientRect(),l=Qo(),h=window.getComputedStyle(o),M=window.getComputedStyle(o.closest(".project-section")),N=window.getComputedStyle(o.querySelector(".project-media")),Y=o.querySelector(".project-summary"),R=Number.parseFloat(h.rowGap||h.gap)||0,de=Y?.getBoundingClientRect().height||0,K=Math.max(0,l.height-de-R),_=document.createElement("div"),E=o.cloneNode(!0);return E.classList.add("project-transition-card"),E.removeAttribute("href"),E.removeAttribute("aria-label"),E.setAttribute("aria-hidden","true"),Object.assign(E.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:h.gap,gridTemplateRows:h.gridTemplateRows,maxHeight:"none"}),E.style.setProperty("--project-color",M.getPropertyValue("--project-color")),E.style.setProperty("--project-sub-color",M.getPropertyValue("--project-sub-color")),E.style.setProperty("--project-media-shadow",N.boxShadow),_.className="project-transition-layer",_.append(E),document.body.append(_),{cardClone:E,targetRect:l,targetGridTemplateRows:`${K}px ${de}px`}},es=o=>{if(Ke)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}Ke=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:l,targetRect:h,targetGridTemplateRows:M}=Zo(o);l.animate([{top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height,gridTemplateRows:l.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${h.top}px`,left:`${h.left}px`,width:`${h.width}px`,height:`${h.height}px`,gridTemplateRows:M,opacity:0,offset:1}],{duration:Dt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Dt-120)},ts=()=>{Ke=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},os=o=>{Ye.innerHTML=_o(o.year).map(a=>{const l=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${l?'aria-current="true"':""}>${Ko(a)}</span>
      `}).join("")},ss=()=>{It.classList.add("is-changing"),Ye.classList.add("is-changing"),window.setTimeout(()=>{It.classList.remove("is-changing"),Ye.classList.remove("is-changing")},180)};let be=[],Ht=-1;const Ze=({force:o=!1}={})=>{if(!Ot.matches){ne&&(q.style.removeProperty("--mobile-project-viewport"),ne=0,Ge=0);return}const a=window.innerWidth;!o&&ne&&a===Ge||(ne=window.innerHeight,Ge=a,q.style.setProperty("--mobile-project-viewport",`${ne}px`))},is=()=>{if(!Ne)return;const o=Ne.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-pf-active",l)},rs=()=>{if(!qt)return;const o=qt.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-about-active",l)},as=o=>{if(o===Ht||o<0)return;const a=Co[o],l=(o+1)/Wt.totalProjectCount*100;Ht=o,ss(),jo.textContent=a.number,Ao.textContent=a.number,Io.textContent=a.wip?"🚧":"",Bo.textContent=a.wip?"🚧":"",Do.innerHTML=a.sideTitle.split("|").join("<br />"),qo.style.setProperty("--progress",`${l}%`),q.style.setProperty("--active-project-color",a.keyColor),q.style.setProperty("--active-project-sub-color",a.subColor||a.keyColor),No(zt,a.slug),os(a)},ns=()=>{if(!be.length)return;const o=window.innerHeight/2,a=be.map((l,h)=>{const M=l.getBoundingClientRect(),N=M.top+M.height/2;return{index:h,distance:Math.abs(N-o)}}).sort((l,h)=>l.distance-h.distance)[0]?.index;be.forEach((l,h)=>{const M=h===a;l.classList.toggle("is-active",M),l.classList.toggle("is-inactive",!M)}),as(a)},ls=()=>{window.clearTimeout(_e),Qe=!1,q.classList.remove("is-gnb-menu-scrolling"),H?.classList.remove("is-hidden"),F=Math.max(0,window.scrollY),le=0,ce=F},Yt=o=>{window.clearTimeout(_e),_e=window.setTimeout(ls,o)},cs=()=>{if(!H)return;const o=Math.max(0,window.scrollY);if(Qe){H.classList.remove("is-hidden"),F=o,le=0,ce=o,Yt(Math.abs(o-Xe)<=1?160:1200);return}const a=o-F,l=Math.sign(a);if(o<=16)H.classList.remove("is-hidden"),le=0,ce=o;else if(l!==0){l!==le&&(le=l,ce=F);const h=Math.abs(o-ce);l>0&&h>=8?H.classList.add("is-hidden"):l<0&&h>=64&&H.classList.remove("is-hidden")}F=o},ds=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),l=o===document.body?0:o.getBoundingClientRect().top+window.scrollY;Xe=Math.min(a,Math.max(0,l)),Qe=!0,q.classList.add("is-gnb-menu-scrolling"),H?.classList.remove("is-hidden"),Yt(1200),window.scrollTo({top:Xe,behavior:Je.matches?"auto":"smooth"})};let Ft=0;const Se=()=>{cancelAnimationFrame(Ft),Ft=requestAnimationFrame(()=>{is(),rs(),ns()})},Kt=o=>{q.dataset.theme=o,Vt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},ps=localStorage.getItem("portfolio-theme")||"light",_t=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Je.addEventListener?.("change",Nt);Nt();const Ue=Ro(Ne,xo,Xo);be=[...document.querySelectorAll("[data-project]")];Ze({force:!0});Kt(ps);const us=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=_t()==="back_forward",l=o||(a?Go(zt):""),h=l?document.getElementById(l):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),h&&h.scrollIntoView({block:"center",behavior:"auto"})};us();_t()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Vt.addEventListener("click",()=>{Kt(q.dataset.theme==="dark"?"light":"dark")});Ho.forEach(o=>{o.addEventListener("click",a=>{const l=document.querySelector(o.hash);l&&(a.preventDefault(),ds(l))})});At?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!At.contains(a)||!Uo(o,a)||(Yo(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),es(a))});window.addEventListener("scroll",cs,{passive:!0});window.addEventListener("scroll",Se,{passive:!0});window.addEventListener("resize",()=>{Ze(),Se()});Ot.addEventListener?.("change",()=>{Ze({force:!0}),Se()});window.addEventListener("pagehide",()=>Ue?.resetModal());window.addEventListener("pageshow",()=>{Ue?.resetModal(),Ue?.syncModalWithHistory(),ts()});Se();
