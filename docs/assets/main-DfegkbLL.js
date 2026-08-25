import{p as xo,a as Vt}from"./projects-C3NfBF-1.js";/* empty css               */const Ro=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],jo=(o,a,l)=>{if(!o)return;const g=760,M="portfolioPfModalProject",K=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let x=null;const _=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Se=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},H=()=>window.history.state?.[M]||"",R=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[M]:e},"")},et=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',Ut=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],tt=e=>{const t=Ut[e-1];return`
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
    `},Jt=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?tt(1):et(e),Qt=[{image:"./assets/store-guide/impact-1.png",title:"Flow-level Data Tracking"},{image:"./assets/store-guide/impact-2.png",title:"Increased Page Views"},{image:"./assets/store-guide/impact-3.png",title:"Pickup Conversion up to 11%"}],Zt=[{start:0,end:5},{start:18,end:26}],eo=(e,t)=>{const r=Zt[t],n=e.id==="public-transport"?tt(t+2):"",c=e.id==="perp-dex"?[`
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
            `][t]:"",m=e.media==="store-guide"&&r?`
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
            ${Qt.map(y=>`
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
    `},to=e=>{const t=n=>n.matches(`
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
      `),r=n=>{const c=n.videoWidth||n.naturalWidth||n.width,m=n.videoHeight||n.naturalHeight||n.height;if(!c||!m)return null;const f=16,k=document.createElement("canvas"),b=k.getContext("2d",{willReadFrequently:!0});if(!b)return null;k.width=f,k.height=f;try{b.drawImage(n,0,0,f,f);const w=b.getImageData(0,0,f,f).data;let y=0,s=0,S=0,i=0;for(let h=0;h<f;h+=1)for(let v=0;v<f;v+=1){if(v>1&&v<f-2&&h>1&&h<f-2)continue;const P=(h*f+v)*4,T=w[P+3]/255;T<.2||(y+=w[P]*T,s+=w[P+1]*T,S+=w[P+2]*T,i+=T)}return i?`rgb(${Math.round(y/i)} ${Math.round(s/i)} ${Math.round(S/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const c=n.querySelector("img, video, canvas");if(!c)return;const m=()=>{if(!n.isConnected)return;const f=r(c);f&&(n.style.setProperty("--pf-modal-media-background",f),n.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?m():c.addEventListener("load",m,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?m():c.addEventListener("loadeddata",m,{once:!0});return}window.requestAnimationFrame(m)})},oo=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const r=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=r,t.play().catch(()=>{})},m=()=>{t.currentTime=r,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",m,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&c()}),t.addEventListener("ended",c),t.readyState>=1&&m()})},so=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const h=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?h():i.video.addEventListener("loadedmetadata",h,{once:!0})}if(i.gif){const h=i.gif.querySelector("[data-perp-gif-player]"),v=i.gif.dataset.perpGifSrc;h&&v&&(h.src=v)}});return}let c=null,m=0,f=0,k=0,b=null;const w=i=>{if(i.container.classList.remove("is-playing"),i.video){const h=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(h,Number.isFinite(i.video.duration)?i.video.duration:h))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},y=()=>{window.clearTimeout(f),n.forEach(w)},s=()=>{m=(m+1)%n.length,S(n[m],!0)},S=(i,h=!1)=>{const v=++k;if(y(),c=i,i.container.classList.add("is-playing"),i.video){const P=()=>{v!==k||!e.isConnected||(i.video.loop=!h,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?P():i.video.addEventListener("loadedmetadata",P,{once:!0})}if(i.gif){const P=i.gif.querySelector("[data-perp-gif-player]"),T=i.gif.dataset.perpGifSrc;P&&T&&(P.src=`${T}?play=${v}`),h&&(f=window.setTimeout(()=>{v===k&&!b&&e.isConnected&&s()},Number(i.gif.dataset.perpGifDuration||6600)))}};n.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===c&&!b&&e.isConnected&&s()}),i.gif){const h=i.gif.querySelector("[data-perp-gif-frame]"),v=new Image;v.addEventListener("load",()=>{h.width=v.naturalWidth,h.height=v.naturalHeight,h.getContext("2d")?.drawImage(v,0,0)},{once:!0}),v.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{b=i,S(i)}),i.container.addEventListener("mouseleave",()=>{b===i&&(b=null,m=(n.indexOf(i)+1)%n.length,S(n[m],!0))})}),n.forEach(w),S(n[m],!0)},ro=e=>{const t=window.matchMedia("(max-width: 920px)").matches,r=[...e.querySelectorAll("[data-public-transport-video]")].map(s=>({video:s,order:Number(s.dataset.publicTransportVideoOrder),container:s.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(s=>s.container).sort((s,S)=>s.order-S.order);if(!r.length)return;if(t){r.forEach(s=>{s.container.classList.add("is-playing"),s.video.loop=!0;const S=()=>{e.isConnected&&(s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?S():s.video.addEventListener("loadedmetadata",S,{once:!0})});return}let n=null,c=0,m=null,f=0;const k=s=>{s.container.classList.remove("is-playing"),s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=0)},b=()=>r.forEach(k),w=()=>{c=(c+1)%r.length,y(r[c],!0)},y=(s,S=!1)=>{const i=++f;b(),n=s,s.container.classList.add("is-playing");const h=()=>{i!==f||!e.isConnected||(s.video.loop=!S,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?h():s.video.addEventListener("loadedmetadata",h,{once:!0})};r.forEach(s=>{s.video.addEventListener("ended",()=>{s===n&&!m&&e.isConnected&&w()}),s.container.addEventListener("mouseenter",()=>{m=s,y(s)}),s.container.addEventListener("mouseleave",()=>{m===s&&(m=null,c=(r.indexOf(s)+1)%r.length,y(r[c],!0))})}),r.forEach(k),y(r[c],!0)},io=(e,t=!1)=>{const r=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${et(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${_(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${r.join(" ")}" draggable="false" aria-label="${l(e.title)} project detail">${n}</a>`},ot=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),st=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},rt=()=>"24px",de=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},it=(e,t)=>{const r=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,c=e.left-t.left,m=e.top-t.top;return`translate3d(${c}px, ${m}px, 0) scale(${r}, ${n})`},ao=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(r=>!r.paused&&!r.ended);return e.forEach(r=>r.pause()),t},no=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},at=(e,t,{pushHistory:r=!0}={})=>{if(x)return;r&&R(t.id);const n=ao(),c=e.querySelector(".pf-work-card")||e,m=c.getBoundingClientRect(),f=window.getComputedStyle(c).borderRadius,k=st(),b=rt(),w=document.createElement("div"),y=document.createElement("div"),s=document.createElement("div"),S=`pf-modal-${t.id}-title`,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=i?1:g,v=t.cta?`
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
      `:"",P=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",T=t.id==="perp-dex",Tt=t.id==="public-transport",Mt=T?4:Tt?2:3,yo=Array.from({length:Mt},(u,L)=>eo(t,L)),bo=Array.from({length:Mt},(u,L)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${L+1} pf-modal-bento-skeleton"></div>
      `),se=Tt,fe=!t.cta&&!T&&!se,De=t.deviceType==="web"&&!se&&!fe,Et=t.id==="cta-enhancement",$t=u=>{const L=Et?u[0]:u.slice(0,2).join("");return T?`
          <div class="pf-modal-perp-left">
            ${u[0]}
            <div class="pf-modal-perp-center-bottom">
              ${u[1]}
              ${u[2]}
            </div>
          </div>
          ${u[3]}
        `:se||fe?u.join(""):De?`<div class="pf-modal-bento-side">${u.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Et?" pf-modal-bento-stack-top--single":""}">
              ${L}
            </div>
            ${u[2]}
          </div>
        `},So=$t(yo),Lo=$t(bo),ko=T?"":`
        <div class="pf-modal-bento-feature">
          ${Jt(t)}
        </div>
      `,To=`
      <section class="pf-modal-bento-section${De?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${fe?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${ko}
        ${So}
      </section>
    `,Mo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${De?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${fe?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${T?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Lo}
      </section>
    `;w.className="pf-modal-layer",y.className="pf-modal-backdrop",y.style.opacity="0",s.className=`pf-work-modal pf-work--${t.id}${P?" pf-work-modal--has-description":""}${v?"":" pf-work-modal--no-cta"}`,s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",S),s.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Mo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${v?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${_(t)}
        </div>
        ${v||P}
      </div>
    `,de(s,k),s.style.borderRadius=b,s.style.transformOrigin="top left",w.append(y,s),document.body.append(w),s.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const He=s.animate([{transform:it(m,k),borderRadius:f},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:b}],{duration:h,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Fe=y.animate([{opacity:0},{opacity:1}],{duration:Math.min(h,420),easing:"ease-out",fill:"forwards"}),We=s.querySelector(".pf-modal-close"),G=s.querySelector(".pf-modal-cta"),ge=s.querySelector(".pf-modal-footer"),C=s.querySelector(".pf-modal-card-content"),re=s.querySelector(".pf-modal-scroll-indicator");let Pt=!1,j=!1,he=!1,ie=0;const Eo=()=>{if(ie=0,!C||!re||j)return;const u=C.scrollHeight-C.clientHeight,L=8,B=ge?.offsetHeight??0,D=Math.max(0,s.clientHeight-B-L*2);if(u<=1||D<=0){re.classList.remove("is-visible");return}const we=Math.min(D,Math.max(36,D*(C.clientHeight/C.scrollHeight))),Co=Math.min(1,Math.max(0,C.scrollTop/u))*(D-we);re.style.height=`${we}px`,re.style.transform=`translate3d(0, ${Co}px, 0)`,re.classList.add("is-visible")},ae=()=>{ie||(ie=window.requestAnimationFrame(Eo))},Ve=typeof ResizeObserver=="function"?new ResizeObserver(ae):null;Ve?.observe(C),C?.addEventListener("scroll",ae,{passive:!0});const $o=()=>{Pt||!C||j||(Pt=!0,C.classList.remove("is-skeleton"),C.innerHTML=To,to(s),oo(s),so(s),ro(s),C.querySelectorAll(".pf-modal-bento-section").forEach(u=>Ve?.observe(u)),window.requestAnimationFrame(()=>{!j&&s.isConnected&&(s.classList.add("is-content-ready"),ae())}))},ve=()=>{const u=ge?.offsetHeight??0;s.style.setProperty("--pf-modal-footer-space",`${u}px`),ae()},Ct=ge&&typeof ResizeObserver=="function"?new ResizeObserver(ve):null;Ct?.observe(ge),ve();const xt=()=>{!j&&s.classList.contains("is-ready")&&(de(s,st()),s.style.borderRadius=rt(),ve())};let Rt=!1;const jt=({restoreFocus:u=!1}={})=>{if(Rt||(Rt=!0,w.getAnimations?.({subtree:!0})?.forEach(B=>B.cancel()),w.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",ze),window.removeEventListener("resize",xt),Ct?.disconnect(),Ve?.disconnect(),C?.removeEventListener("scroll",ae),ie&&window.cancelAnimationFrame(ie),x?.modal===s&&(x=null),no(n),!u))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},qt=()=>{if(j)return;j=!0,he=!1,s.classList.add("is-closing"),s.classList.remove("is-revealing","is-ready","is-content-ready");const u=s.getBoundingClientRect(),L=window.getComputedStyle(s).borderRadius,B=c.getBoundingClientRect();e.classList.remove("is-modal-source"),He.cancel(),Fe.cancel(),de(s,u),s.style.borderRadius=L,s.style.transform="none";const D=i?1:320,we=s.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L},{transform:it(B,u),borderRadius:f}],{duration:D,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});y.animate([{opacity:1},{opacity:0}],{duration:i?1:200,easing:"ease-out",fill:"forwards"}),we.finished.finally(()=>jt({restoreFocus:!0}))},Oe=()=>{if(!(j||he)){if(H()===t.id){he=!0,window.history.back();return}qt()}},Po=u=>{!G||t.cta?.newTab!==!1||!ot(u,G)||(u.preventDefault(),!(j||he)&&(j=!0,s.classList.add("is-navigating"),document.removeEventListener("keydown",ze),H()===t.id?window.location.replace(G.href):window.location.href=G.href))},ze=u=>{if(u.key==="Escape"){u.preventDefault(),Oe();return}if(u.key!=="Tab")return;const L=[We,G].filter(Boolean),B=L.indexOf(document.activeElement),D=u.shiftKey?(B-1+L.length)%L.length:(B+1)%L.length;u.preventDefault(),L[D].focus()};x={layer:w,modal:s,projectId:t.id,closeModal:qt,disposeModal:jt},document.addEventListener("keydown",ze),window.addEventListener("resize",xt),We.addEventListener("click",Oe),G?.addEventListener("click",Po),w.addEventListener("click",u=>{(u.target===w||u.target===y)&&Oe()}),Fe.finished.then(()=>{y.style.opacity="1",Fe.cancel()}).catch(()=>{}),He.finished.then(()=>{j||(de(s,k),s.style.borderRadius=b,s.style.transform="none",He.cancel(),ve(),s.classList.add("is-ready"),$o(),We.focus({preventScroll:!0}))}).catch(()=>{})},X=window.matchMedia("(max-width: 600px)"),U=document.querySelector("[data-pf-type-filter]");U&&(U.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${K.map(({value:e,label:t},r)=>`
            ${r>0?'<span class="pf-type-filter-dot" aria-hidden="true">•</span>':""}
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
  `;const nt=U?[...U.querySelectorAll("[data-project-type-filter]")]:[],lo=U?.querySelector(".pf-type-filter"),co=[...o.querySelectorAll(".pf-work[data-project-types]")],lt=o.querySelector(".pf-filter-empty");let V="";const po=e=>{V=V===e?"":e;let t=0;nt.forEach(r=>{r.setAttribute("aria-pressed",String(r.dataset.projectTypeFilter===V))}),lo?.classList.toggle("is-filtering",!!V),co.forEach(r=>{const n=r.dataset.projectTypes.split(" "),c=!V||n.includes(V);r.hidden=!c,c&&(t+=1)}),lt&&(lt.hidden=t>0)};nt.forEach(e=>{e.addEventListener("click",()=>{po(e.dataset.projectTypeFilter),window.scrollTo({top:Math.max(0,o.getBoundingClientRect().top+window.scrollY-10),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})})});const d=o.querySelector("[data-pf-work-rail]"),Le=d?[...d.querySelectorAll(".pf-work-set")]:[],ct=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),pe=p?[...p.querySelectorAll(".pf-work-set")]:[],dt=pe[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const uo=80,mo=-80,ke=32,fo=12,pt=180,ut=600;let Te,Me=0,Ee=0,E=0,$e=ke,Pe=!1,J=!1,mt=0,Ce=0,Q=!1,ue=!1,Z=!1,xe=0,I=0,O=0,A=0,z=0,$=0,Re=0,ee=!1,ft=0,je=0,te=!1,me=!1,oe=!1,qe=0;const gt=({preservePosition:e=!1}={})=>{if(!d||!ct||Le.length<3)return;const t=I,r=O,n=t?(d.scrollLeft-r)/t:0,c=d.getBoundingClientRect(),m=ct.getBoundingClientRect(),f=d.scrollLeft+m.left-c.left;I=Le[2].getBoundingClientRect().left-Le[1].getBoundingClientRect().left,O=f-(d.clientWidth-m.width)/2-(X.matches?uo:0),d.scrollLeft=e?O+n*I:O,E=d.scrollLeft},Ae=()=>{if(!d||!I)return 0;const e=O-I*.5,t=O+I*.5;let r=d.scrollLeft;for(;r<e;)r+=I;for(;r>=t;)r-=I;const n=r-d.scrollLeft;return Math.abs(n)>.5&&(d.scrollLeft=r),n},ht=({preservePosition:e=!1}={})=>{if(!p||!dt||pe.length<3||!p.clientWidth)return;const t=A,r=z,n=t?(p.scrollLeft-r)/t:0,c=p.getBoundingClientRect(),m=dt.getBoundingClientRect(),f=p.scrollLeft+m.left-c.left;A=pe[2].getBoundingClientRect().left-pe[1].getBoundingClientRect().left,z=f-(p.clientWidth-m.width)/2-mo,p.scrollLeft=e?z+n*A:z,$=p.scrollLeft},Ie=()=>{if(!p||!A)return 0;const e=z-A*.5,t=z+A*.5;let r=p.scrollLeft;for(;r<e;)r+=A;for(;r>=t;)r-=A;const n=r-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=r),n},Be=()=>{E=d?.scrollLeft??E,Ee=performance.now()+200},vt=()=>{$=p?.scrollLeft??$,Re=performance.now()+200},go=()=>{window.clearTimeout(xe),Z=!0,E=d?.scrollLeft??E},wt=()=>{window.clearTimeout(xe),xe=window.setTimeout(()=>{d&&(E=d.scrollLeft,E+=Ae(),Z=!1,Ee=performance.now()+ut)},pt)},ho=()=>{window.clearTimeout(qe),oe=!0,$=p?.scrollLeft??$},yt=()=>{window.clearTimeout(qe),qe=window.setTimeout(()=>{p&&($=p.scrollLeft,$+=Ie(),oe=!1,Re=performance.now()+ut)},pt)},bt=e=>{const t=Math.min((e-(Te??e))/1e3,.1),r=Pe?fo:ke;if(Te=e,$e+=(r-$e)*Math.min(t*6,1),d){const n=o.getBoundingClientRect(),c=n.bottom>0&&n.top<window.innerHeight;c&&!J&&!Z&&!oe&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ee&&(E+=t*$e,d.scrollLeft=E,E+=Ae()),c&&p?.clientWidth&&A&&!ee&&!oe&&!Z&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Re&&($-=t*ke,p.scrollLeft=$,$+=Ie())}Me=requestAnimationFrame(bt)};!d||Me||(Te=void 0,Me=requestAnimationFrame(bt)),requestAnimationFrame(()=>{gt(),ht()}),d?.addEventListener("mouseenter",()=>{Pe=!0}),d?.addEventListener("mouseleave",()=>{Pe=!1}),o.addEventListener("wheel",e=>{!d||e.ctrlKey||(Be(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&X.matches){go();return}J=!0,Q=!1,mt=e.clientX,Ce=d.scrollLeft,Be()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!J)return;const t=e.clientX-mt;!Q&&Math.abs(t)<=5||(Q||(Q=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Ce-t,Ce+=Ae(),E=d.scrollLeft,Be())});const vo=e=>{!d||!J||(J=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),E=d.scrollLeft,Q&&(ue=!0,window.setTimeout(()=>{ue=!1},0)))};d?.addEventListener("scroll",()=>{Z&&(E=d.scrollLeft,wt())},{passive:!0});const St=e=>{if(e.pointerType==="touch"&&X.matches){wt();return}vo(e)};d?.addEventListener("pointerup",St),d?.addEventListener("pointercancel",St),d?.addEventListener("click",e=>{ue&&(ue=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&X.matches){ho();return}ee=!0,te=!1,ft=e.clientX,je=p.scrollLeft,vt()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!ee)return;const t=e.clientX-ft;!te&&Math.abs(t)<=5||(te||(te=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=je-t,je+=Ie(),$=p.scrollLeft,vt())});const wo=e=>{!p||!ee||(ee=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),$=p.scrollLeft,te&&(me=!0,window.setTimeout(()=>{me=!1},0)))};p?.addEventListener("scroll",()=>{oe&&($=p.scrollLeft,yt())},{passive:!0});const Lt=e=>{if(e.pointerType==="touch"&&X.matches){yt();return}wo(e)};p?.addEventListener("pointerup",Lt),p?.addEventListener("pointercancel",Lt),p?.addEventListener("click",e=>{me&&(me=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!ot(t,e))return;const r=a.find(n=>e.classList.contains(`pf-work--${n.id}`));r&&(Se(r),t.preventDefault(),at(e,r))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{gt({preservePosition:!0}),ht({preservePosition:!0})})});const kt=()=>{const e=H();if(x){x.projectId!==e&&x.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),r=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&r&&at(r,t,{pushHistory:!1})};return window.addEventListener("popstate",kt),{resetModal:()=>x?.disposeModal(),syncModalWithHistory:kt}},Ne=document.querySelector("[data-pf]"),At=document.querySelector("[data-about]"),N=document.querySelector(".about-photo-stack"),It=document.querySelector("[data-project-list]"),qo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Ao=document.querySelector(".counter-line"),Bt=document.querySelector(".fixed-project-meta"),Io=document.querySelector("[data-side-number]"),Bo=document.querySelector("[data-side-wip]"),Do=document.querySelector("[data-side-title]"),Ho=document.querySelector("[data-counter-wip]"),Ye=document.querySelector("[data-year-rail]"),F=document.querySelector(".index-gnb"),Fo=[...document.querySelectorAll("[data-gnb-scroll]")],Ot=document.querySelector(".theme-toggle"),q=document.documentElement,zt="portfolio-last-project-slug",Dt=760,Wo=12,Vo=8,Gt=window.matchMedia("(max-width: 600px)"),Je=window.matchMedia("(prefers-reduced-motion: reduce)"),Oo=3e3,zo=200;let Ke=!1,ne=0,Ge=0,Ht=0,Nt=0,W=Math.max(0,window.scrollY),le=0,ce=W,Qe=!1,_e=0,Xe=0;const Go=()=>{const o=N?.lastElementChild;!o||N.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Nt=window.setTimeout(()=>{N.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},zo))},Yt=()=>{window.clearInterval(Ht),window.clearTimeout(Nt),N?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!N||N.children.length<2||Je.matches)&&(Ht=window.setInterval(Go,Oo))},No=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},Yo=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},Ko=o=>{window.gtag?.("event","project_click",{project_name:o})},_o=o=>`'${String(o).slice(-2)}`,Xo=o=>{const{start:a,end:l}=Vt.yearRange,g=Math.min(5,l-a+1),M=Math.min(Math.max(o-2,a),l-g+1);return Array.from({length:g},(Y,K)=>M+K)},Uo=o=>o.split("|").join(" "),Jo=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),Qo=()=>window.matchMedia("(max-width: 600px)").matches?Vo:Wo,Zo=()=>{const o=Qo();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},es=o=>{const a=o.getBoundingClientRect(),l=Zo(),g=window.getComputedStyle(o),M=window.getComputedStyle(o.closest(".project-section")),Y=window.getComputedStyle(o.querySelector(".project-media")),K=o.querySelector(".project-summary"),x=Number.parseFloat(g.rowGap||g.gap)||0,_=K?.getBoundingClientRect().height||0,Se=Math.max(0,l.height-_-x),H=document.createElement("div"),R=o.cloneNode(!0);return R.classList.add("project-transition-card"),R.removeAttribute("href"),R.removeAttribute("aria-label"),R.setAttribute("aria-hidden","true"),Object.assign(R.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:g.gap,gridTemplateRows:g.gridTemplateRows,maxHeight:"none"}),R.style.setProperty("--project-color",M.getPropertyValue("--project-color")),R.style.setProperty("--project-sub-color",M.getPropertyValue("--project-sub-color")),R.style.setProperty("--project-media-shadow",Y.boxShadow),H.className="project-transition-layer",H.append(R),document.body.append(H),{cardClone:R,targetRect:l,targetGridTemplateRows:`${Se}px ${_}px`}},ts=o=>{if(Ke)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}Ke=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:l,targetRect:g,targetGridTemplateRows:M}=es(o);l.animate([{top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height,gridTemplateRows:l.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${g.top}px`,left:`${g.left}px`,width:`${g.width}px`,height:`${g.height}px`,gridTemplateRows:M,opacity:0,offset:1}],{duration:Dt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Dt-120)},os=()=>{Ke=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},ss=o=>{Ye.innerHTML=Xo(o.year).map(a=>{const l=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${l?'aria-current="true"':""}>${_o(a)}</span>
      `}).join("")},rs=()=>{Bt.classList.add("is-changing"),Ye.classList.add("is-changing"),window.setTimeout(()=>{Bt.classList.remove("is-changing"),Ye.classList.remove("is-changing")},180)};let ye=[],Ft=-1;const Ze=({force:o=!1}={})=>{if(!Gt.matches){ne&&(q.style.removeProperty("--mobile-project-viewport"),ne=0,Ge=0);return}const a=window.innerWidth;!o&&ne&&a===Ge||(ne=window.innerHeight,Ge=a,q.style.setProperty("--mobile-project-viewport",`${ne}px`))},is=()=>{if(!Ne)return;const o=Ne.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-pf-active",l)},as=()=>{if(!At)return;const o=At.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-about-active",l)},ns=o=>{if(o===Ft||o<0)return;const a=xo[o],l=(o+1)/Vt.totalProjectCount*100;Ft=o,rs(),qo.textContent=a.number,Io.textContent=a.number,Bo.textContent=a.wip?"🚧":"",Ho.textContent=a.wip?"🚧":"",Do.innerHTML=a.sideTitle.split("|").join("<br />"),Ao.style.setProperty("--progress",`${l}%`),q.style.setProperty("--active-project-color",a.keyColor),q.style.setProperty("--active-project-sub-color",a.subColor||a.keyColor),Yo(zt,a.slug),ss(a)},ls=()=>{if(!ye.length)return;const o=window.innerHeight/2,a=ye.map((l,g)=>{const M=l.getBoundingClientRect(),Y=M.top+M.height/2;return{index:g,distance:Math.abs(Y-o)}}).sort((l,g)=>l.distance-g.distance)[0]?.index;ye.forEach((l,g)=>{const M=g===a;l.classList.toggle("is-active",M),l.classList.toggle("is-inactive",!M)}),ns(a)},cs=()=>{window.clearTimeout(_e),Qe=!1,q.classList.remove("is-gnb-menu-scrolling"),F?.classList.remove("is-hidden"),W=Math.max(0,window.scrollY),le=0,ce=W},Kt=o=>{window.clearTimeout(_e),_e=window.setTimeout(cs,o)},ds=()=>{if(!F)return;const o=Math.max(0,window.scrollY);if(Qe){F.classList.remove("is-hidden"),W=o,le=0,ce=o,Kt(Math.abs(o-Xe)<=1?160:1200);return}const a=o-W,l=Math.sign(a);if(o<=16)F.classList.remove("is-hidden"),le=0,ce=o;else if(l!==0){l!==le&&(le=l,ce=W);const g=Math.abs(o-ce);l>0&&g>=8?F.classList.add("is-hidden"):l<0&&g>=64&&F.classList.remove("is-hidden")}W=o},ps=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),l=o.id==="work"?40:0,g=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-l;Xe=Math.min(a,Math.max(0,g)),Qe=!0,q.classList.add("is-gnb-menu-scrolling"),F?.classList.remove("is-hidden"),Kt(1200),window.scrollTo({top:Xe,behavior:Je.matches?"auto":"smooth"})};let Wt=0;const be=()=>{cancelAnimationFrame(Wt),Wt=requestAnimationFrame(()=>{is(),as(),ls()})},_t=o=>{q.dataset.theme=o,Ot.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},us=localStorage.getItem("portfolio-theme")||"light",Xt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Je.addEventListener?.("change",Yt);Yt();const Ue=jo(Ne,Ro,Uo);ye=[...document.querySelectorAll("[data-project]")];Ze({force:!0});_t(us);const ms=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=Xt()==="back_forward",l=o||(a?No(zt):""),g=l?document.getElementById(l):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),g&&g.scrollIntoView({block:"center",behavior:"auto"})};ms();Xt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Ot.addEventListener("click",()=>{_t(q.dataset.theme==="dark"?"light":"dark")});Fo.forEach(o=>{o.addEventListener("click",a=>{const l=document.querySelector(o.hash);l&&(a.preventDefault(),ps(l))})});It?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!It.contains(a)||!Jo(o,a)||(Ko(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),ts(a))});window.addEventListener("scroll",ds,{passive:!0});window.addEventListener("scroll",be,{passive:!0});window.addEventListener("resize",()=>{Ze(),be()});Gt.addEventListener?.("change",()=>{Ze({force:!0}),be()});window.addEventListener("pagehide",()=>Ue?.resetModal());window.addEventListener("pageshow",()=>{Ue?.resetModal(),Ue?.syncModalWithHistory(),os()});be();
