import{p as Fo,a as Yt}from"./projects-CERzB3nP.js";const Bo=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],Ho=(o,a,l)=>{if(!o)return;const g=760,M="portfolioPfModalProject",z=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let x=null;const X=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Le=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},D=()=>window.history.state?.[M]||"",R=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[M]:e},"")},ot=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',eo=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],rt=e=>{const t=eo[e-1];return`
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
    `},to=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?rt(1):ot(e),oo=[{start:0,end:5},{start:18,end:26}],ro=(e,t)=>{const i=e.id==="public-transport"?rt(t+2):"",n=e.id==="perp-dex"?[`
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
            `][t]:"",c=e.media==="store-guide"&&t===0?`
          <div class="pf-modal-store-finder-video-pair">
            ${oo.map(w=>`
                  <video
                    class="pf-modal-store-finder-video pf-modal-segment-video"
                    autoplay
                    muted
                    playsinline
                    preload="auto"
                    poster="./assets/store-guide/solution-tobe1.png"
                    data-segment-start="${w.start}"
                    data-segment-end="${w.end}"
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
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>321.3%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p class="pf-modal-result-metric-title--nowrap">Total Pickup Orders</p>
                <strong>128.2%</strong>
              </div>
            </div>
          </div>
        `:"",k=e.id==="article-studio"&&t===0?`
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
        `:e.id==="article-studio"&&t===1?'<img class="pf-modal-article-studio-interface" src="./assets/article-studio/interface.png" alt="" />':"",y=e.media==="store-guide"&&t===2?`
          <div class="pf-modal-result">
            <div class="pf-modal-result-metrics">
              <div class="pf-modal-result-metric">
                <p>Increase in Page Views</p>
                <strong>+32.9%</strong>
              </div>
              <div class="pf-modal-result-metric">
                <p>Pickup Conversion</p>
                <strong>Up to 11%</strong>
              </div>
            </div>
          </div>
        `:"";return`
      <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${t+1}">
        ${i||n||c||f||m||k||y}
      </div>
    `},so=e=>{const t=n=>n.matches(`
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
      `),i=n=>{const c=n.videoWidth||n.naturalWidth||n.width,f=n.videoHeight||n.naturalHeight||n.height;if(!c||!f)return null;const m=16,k=document.createElement("canvas"),y=k.getContext("2d",{willReadFrequently:!0});if(!y)return null;k.width=m,k.height=m;try{y.drawImage(n,0,0,m,m);const w=y.getImageData(0,0,m,m).data;let b=0,r=0,S=0,s=0;for(let h=0;h<m;h+=1)for(let v=0;v<m;v+=1){if(v>1&&v<m-2&&h>1&&h<m-2)continue;const P=(h*m+v)*4,T=w[P+3]/255;T<.2||(b+=w[P]*T,r+=w[P+1]*T,S+=w[P+2]*T,s+=T)}return s?`rgb(${Math.round(b/s)} ${Math.round(r/s)} ${Math.round(S/s)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const c=n.querySelector("img, video, canvas");if(!c)return;const f=()=>{if(!n.isConnected)return;const m=i(c);m&&(n.style.setProperty("--pf-modal-media-background",m),n.classList.add("has-media-sampled-background"))};if(c instanceof HTMLImageElement){c.complete&&c.naturalWidth?f():c.addEventListener("load",f,{once:!0});return}if(c instanceof HTMLVideoElement){c.readyState>=2?f():c.addEventListener("loadeddata",f,{once:!0});return}window.requestAnimationFrame(f)})},io=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const i=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),c=()=>{t.currentTime=i,t.play().catch(()=>{})},f=()=>{t.currentTime=i,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",f,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&c()}),t.addEventListener("ended",c),t.readyState>=1&&f()})},ao=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(s=>e.querySelector(`.pf-modal-bento-placeholder--${s}`)).filter(Boolean).map(s=>({container:s,video:s.querySelector("[data-perp-video]"),gif:s.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(s=>{if(s.container.classList.add("is-playing"),s.video){const h=()=>{e.isConnected&&(s.video.loop=!0,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?h():s.video.addEventListener("loadedmetadata",h,{once:!0})}if(s.gif){const h=s.gif.querySelector("[data-perp-gif-player]"),v=s.gif.dataset.perpGifSrc;h&&v&&(h.src=v)}});return}let c=null,f=0,m=0,k=0,y=null;const w=s=>{if(s.container.classList.remove("is-playing"),s.video){const h=Number(s.video.dataset.perpThumbnailTime||0);s.video.loop=!1,s.video.pause(),s.video.readyState>=2&&(s.video.currentTime=Math.min(h,Number.isFinite(s.video.duration)?s.video.duration:h))}s.gif&&s.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},b=()=>{window.clearTimeout(m),n.forEach(w)},r=()=>{f=(f+1)%n.length,S(n[f],!0)},S=(s,h=!1)=>{const v=++k;if(b(),c=s,s.container.classList.add("is-playing"),s.video){const P=()=>{v!==k||!e.isConnected||(s.video.loop=!h,s.video.currentTime=0,s.video.play().catch(()=>{}))};s.video.readyState>=1?P():s.video.addEventListener("loadedmetadata",P,{once:!0})}if(s.gif){const P=s.gif.querySelector("[data-perp-gif-player]"),T=s.gif.dataset.perpGifSrc;P&&T&&(P.src=`${T}?play=${v}`),h&&(m=window.setTimeout(()=>{v===k&&!y&&e.isConnected&&r()},Number(s.gif.dataset.perpGifDuration||6600)))}};n.forEach(s=>{if(s.video&&s.video.addEventListener("ended",()=>{s===c&&!y&&e.isConnected&&r()}),s.gif){const h=s.gif.querySelector("[data-perp-gif-frame]"),v=new Image;v.addEventListener("load",()=>{h.width=v.naturalWidth,h.height=v.naturalHeight,h.getContext("2d")?.drawImage(v,0,0)},{once:!0}),v.src=s.gif.dataset.perpGifSrc}s.container.addEventListener("mouseenter",()=>{y=s,S(s)}),s.container.addEventListener("mouseleave",()=>{y===s&&(y=null,f=(n.indexOf(s)+1)%n.length,S(n[f],!0))})}),n.forEach(w),S(n[f],!0)},no=e=>{const t=window.matchMedia("(max-width: 920px)").matches,i=[...e.querySelectorAll("[data-public-transport-video]")].map(r=>({video:r,order:Number(r.dataset.publicTransportVideoOrder),container:r.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(r=>r.container).sort((r,S)=>r.order-S.order);if(!i.length)return;if(t){i.forEach(r=>{r.container.classList.add("is-playing"),r.video.loop=!0;const S=()=>{e.isConnected&&(r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?S():r.video.addEventListener("loadedmetadata",S,{once:!0})});return}let n=null,c=0,f=null,m=0;const k=r=>{r.container.classList.remove("is-playing"),r.video.loop=!1,r.video.pause(),r.video.readyState>=2&&(r.video.currentTime=0)},y=()=>i.forEach(k),w=()=>{c=(c+1)%i.length,b(i[c],!0)},b=(r,S=!1)=>{const s=++m;y(),n=r,r.container.classList.add("is-playing");const h=()=>{s!==m||!e.isConnected||(r.video.loop=!S,r.video.currentTime=0,r.video.play().catch(()=>{}))};r.video.readyState>=1?h():r.video.addEventListener("loadedmetadata",h,{once:!0})};i.forEach(r=>{r.video.addEventListener("ended",()=>{r===n&&!f&&e.isConnected&&w()}),r.container.addEventListener("mouseenter",()=>{f=r,b(r)}),r.container.addEventListener("mouseleave",()=>{f===r&&(f=null,c=(i.indexOf(r)+1)%i.length,b(i[c],!0))})}),i.forEach(k),b(i[c],!0)},lo=(e,t=!1)=>{const i=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${ot(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${X(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${i.join(" ")}" draggable="false" aria-label="${l(e.title)} project detail">${n}</a>`},st=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),it=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},at=()=>"24px",pe=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},nt=(e,t)=>{const i=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,c=e.left-t.left,f=e.top-t.top;return`translate3d(${c}px, ${f}px, 0) scale(${i}, ${n})`},co=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(i=>!i.paused&&!i.ended);return e.forEach(i=>i.pause()),t},po=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},lt=(e,t,{pushHistory:i=!0}={})=>{if(x)return;i&&R(t.id);const n=co(),c=e.querySelector(".pf-work-card")||e,f=c.getBoundingClientRect(),m=window.getComputedStyle(c).borderRadius,k=it(),y=at(),w=document.createElement("div"),b=document.createElement("div"),r=document.createElement("div"),S=`pf-modal-${t.id}-title`,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=s?1:g,v=t.cta?`
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
      `:"",P=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",T=t.id==="perp-dex",Pt=t.id==="public-transport",Ct=T?4:Pt?2:3,Mo=Array.from({length:Ct},(u,L)=>ro(t,L)),Eo=Array.from({length:Ct},(u,L)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${L+1} pf-modal-bento-skeleton"></div>
      `),se=Pt,ge=!t.cta&&!T&&!se,De=t.deviceType==="web"&&!se&&!ge,xt=["cta-enhancement","store-finder"].includes(t.id),Rt=u=>{const L=xt?u[0]:u.slice(0,2).join("");return T?`
          <div class="pf-modal-perp-left">
            ${u[0]}
            <div class="pf-modal-perp-center-bottom">
              ${u[1]}
              ${u[2]}
            </div>
          </div>
          ${u[3]}
        `:se||ge?u.join(""):De?`<div class="pf-modal-bento-side">${u.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${xt?" pf-modal-bento-stack-top--single":""}">
              ${L}
            </div>
            ${u[2]}
          </div>
        `},$o=Rt(Mo),Po=Rt(Eo),Co=T?"":`
        <div class="pf-modal-bento-feature">
          ${to(t)}
        </div>
      `,xo=`
      <section class="pf-modal-bento-section${De?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${ge?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Co}
        ${$o}
      </section>
    `,Ro=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${De?" pf-modal-bento-section--web":""}${se?" pf-modal-bento-section--three-up":""}${ge?" pf-modal-bento-section--four-up":""}${T?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${T?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Po}
      </section>
    `;w.className="pf-modal-layer",b.className="pf-modal-backdrop",b.style.opacity="0",r.className=`pf-work-modal pf-work--${t.id}${P?" pf-work-modal--has-description":""}${v?"":" pf-work-modal--no-cta"}`,r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby",S),r.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Ro}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${v?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${S}">${t.title}</h2>
          ${X(t)}
        </div>
        ${v||P}
      </div>
    `,pe(r,k),r.style.borderRadius=y,r.style.transformOrigin="top left",w.append(b,r),document.body.append(w),r.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const We=r.animate([{transform:nt(f,k),borderRadius:m},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:y}],{duration:h,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),Ve=b.animate([{opacity:0},{opacity:1}],{duration:Math.min(h,420),easing:"ease-out",fill:"forwards"}),ze=r.querySelector(".pf-modal-close"),G=r.querySelector(".pf-modal-cta"),he=r.querySelector(".pf-modal-footer"),C=r.querySelector(".pf-modal-card-content"),ie=r.querySelector(".pf-modal-scroll-indicator");let jt=!1,j=!1,ve=!1,ae=0;const jo=()=>{if(ae=0,!C||!ie||j)return;const u=C.scrollHeight-C.clientHeight,L=8,B=he?.offsetHeight??0,H=Math.max(0,r.clientHeight-B-L*2);if(u<=1||H<=0){ie.classList.remove("is-visible");return}const ye=Math.min(H,Math.max(36,H*(C.clientHeight/C.scrollHeight))),Io=Math.min(1,Math.max(0,C.scrollTop/u))*(H-ye);ie.style.height=`${ye}px`,ie.style.transform=`translate3d(0, ${Io}px, 0)`,ie.classList.add("is-visible")},ne=()=>{ae||(ae=window.requestAnimationFrame(jo))},Oe=typeof ResizeObserver=="function"?new ResizeObserver(ne):null;Oe?.observe(C),C?.addEventListener("scroll",ne,{passive:!0});const qo=()=>{jt||!C||j||(jt=!0,C.classList.remove("is-skeleton"),C.innerHTML=xo,so(r),io(r),ao(r),no(r),C.querySelectorAll(".pf-modal-bento-section").forEach(u=>Oe?.observe(u)),window.requestAnimationFrame(()=>{!j&&r.isConnected&&(r.classList.add("is-content-ready"),ne())}))},we=()=>{const u=he?.offsetHeight??0;r.style.setProperty("--pf-modal-footer-space",`${u}px`),ne()},qt=he&&typeof ResizeObserver=="function"?new ResizeObserver(we):null;qt?.observe(he),we();const At=()=>{!j&&r.classList.contains("is-ready")&&(pe(r,it()),r.style.borderRadius=at(),we())};let It=!1;const Ft=({restoreFocus:u=!1}={})=>{if(It||(It=!0,w.getAnimations?.({subtree:!0})?.forEach(B=>B.cancel()),w.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",Ye),window.removeEventListener("resize",At),qt?.disconnect(),Oe?.disconnect(),C?.removeEventListener("scroll",ne),ae&&window.cancelAnimationFrame(ae),x?.modal===r&&(x=null),po(n),!u))return;(e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`))?.focus({preventScroll:!0})},Bt=()=>{if(j)return;j=!0,ve=!1,r.classList.add("is-closing"),r.classList.remove("is-revealing","is-ready","is-content-ready");const u=r.getBoundingClientRect(),L=window.getComputedStyle(r).borderRadius,B=c.getBoundingClientRect();e.classList.remove("is-modal-source"),We.cancel(),Ve.cancel(),pe(r,u),r.style.borderRadius=L,r.style.transform="none";const H=s?1:320,ye=r.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:L},{transform:nt(B,u),borderRadius:m}],{duration:H,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});b.animate([{opacity:1},{opacity:0}],{duration:s?1:200,easing:"ease-out",fill:"forwards"}),ye.finished.finally(()=>Ft({restoreFocus:!0}))},Ne=()=>{if(!(j||ve)){if(D()===t.id){ve=!0,window.history.back();return}Bt()}},Ao=u=>{!G||t.cta?.newTab!==!1||!st(u,G)||(u.preventDefault(),!(j||ve)&&(j=!0,r.classList.add("is-navigating"),document.removeEventListener("keydown",Ye),D()===t.id?window.location.replace(G.href):window.location.href=G.href))},Ye=u=>{if(u.key==="Escape"){u.preventDefault(),Ne();return}if(u.key!=="Tab")return;const L=[ze,G].filter(Boolean),B=L.indexOf(document.activeElement),H=u.shiftKey?(B-1+L.length)%L.length:(B+1)%L.length;u.preventDefault(),L[H].focus()};x={layer:w,modal:r,projectId:t.id,closeModal:Bt,disposeModal:Ft},document.addEventListener("keydown",Ye),window.addEventListener("resize",At),ze.addEventListener("click",Ne),G?.addEventListener("click",Ao),w.addEventListener("click",u=>{(u.target===w||u.target===b)&&Ne()}),Ve.finished.then(()=>{b.style.opacity="1",Ve.cancel()}).catch(()=>{}),We.finished.then(()=>{j||(pe(r,k),r.style.borderRadius=y,r.style.transform="none",We.cancel(),we(),r.classList.add("is-ready"),qo(),ze.focus({preventScroll:!0}))}).catch(()=>{})},U=window.matchMedia("(max-width: 600px)"),J=document.querySelector("[data-pf-type-filter]"),uo=270,fo=.36;J&&(J.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${z.map(({value:e,label:t},i)=>`
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
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const I=document.createElement("div");I.className="pf-floating-filter",I.dataset.pfFloatingFilter="",I.setAttribute("role","group"),I.setAttribute("aria-label","Filter projects by type"),I.innerHTML=[{value:"",label:"All"},...z].map(({value:e,label:t})=>`
        <button
          class="pf-floating-filter-button"
          type="button"
          data-project-type-filter="${e}"
          aria-controls="pf-work-grid"
          aria-pressed="false"
        >${t}</button>
      `).join(""),document.body.append(I),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${a.map(e=>lo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const ct=[...J?[...J.querySelectorAll("[data-project-type-filter]")]:[],...I.querySelectorAll("[data-project-type-filter]")],mo=J?.querySelector(".pf-type-filter"),go=[...o.querySelectorAll(".pf-work[data-project-types]")],ho=o.querySelector(".pf-work-grid"),dt=o.querySelector(".pf-filter-empty");let O="",pt=0;const ke=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*fo;I.classList.toggle("is-visible",window.scrollY>uo&&e>t)},vo=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},ut=e=>{O=O===e?"":e;let t=0;ct.forEach(i=>{i.setAttribute("aria-pressed",String(i.dataset.projectTypeFilter===O))}),mo?.classList.toggle("is-filtering",!!O),go.forEach(i=>{const n=i.dataset.projectTypes.split(" "),c=!O||n.includes(O);i.hidden=!c,c&&(t+=1)}),ho?.classList.toggle("is-single-result",t===1),dt&&(dt.hidden=t>0)};ct.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement;window.clearTimeout(pt),t.style.overflowAnchor="none",ut(e.dataset.projectTypeFilter),vo(),pt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",ke,{passive:!0}),window.addEventListener("resize",ke,{passive:!0}),ke(),ut("");const d=o.querySelector("[data-pf-work-rail]"),Te=d?[...d.querySelectorAll(".pf-work-set")]:[],ft=o.querySelector(".pf-work-set--primary .pf-work"),p=o.querySelector("[data-pf-work-rail-secondary]"),ue=p?[...p.querySelectorAll(".pf-work-set")]:[],mt=ue[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const wo=80,yo=-80,Me=32,bo=12,gt=180,ht=600;let Ee,$e=0,Pe=0,E=0,Ce=Me,xe=!1,Q=!1,vt=0,Re=0,Z=!1,fe=!1,ee=!1,je=0,F=0,N=0,A=0,Y=0,$=0,qe=0,te=!1,wt=0,Ae=0,oe=!1,me=!1,re=!1,Ie=0;const yt=({preservePosition:e=!1}={})=>{if(!d||!ft||Te.length<3)return;const t=F,i=N,n=t?(d.scrollLeft-i)/t:0,c=d.getBoundingClientRect(),f=ft.getBoundingClientRect(),m=d.scrollLeft+f.left-c.left;F=Te[2].getBoundingClientRect().left-Te[1].getBoundingClientRect().left,N=m-(d.clientWidth-f.width)/2-(U.matches?wo:0),d.scrollLeft=e?N+n*F:N,E=d.scrollLeft},Fe=()=>{if(!d||!F)return 0;const e=N-F*.5,t=N+F*.5;let i=d.scrollLeft;for(;i<e;)i+=F;for(;i>=t;)i-=F;const n=i-d.scrollLeft;return Math.abs(n)>.5&&(d.scrollLeft=i),n},bt=({preservePosition:e=!1}={})=>{if(!p||!mt||ue.length<3||!p.clientWidth)return;const t=A,i=Y,n=t?(p.scrollLeft-i)/t:0,c=p.getBoundingClientRect(),f=mt.getBoundingClientRect(),m=p.scrollLeft+f.left-c.left;A=ue[2].getBoundingClientRect().left-ue[1].getBoundingClientRect().left,Y=m-(p.clientWidth-f.width)/2-yo,p.scrollLeft=e?Y+n*A:Y,$=p.scrollLeft},Be=()=>{if(!p||!A)return 0;const e=Y-A*.5,t=Y+A*.5;let i=p.scrollLeft;for(;i<e;)i+=A;for(;i>=t;)i-=A;const n=i-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=i),n},He=()=>{E=d?.scrollLeft??E,Pe=performance.now()+200},St=()=>{$=p?.scrollLeft??$,qe=performance.now()+200},So=()=>{window.clearTimeout(je),ee=!0,E=d?.scrollLeft??E},Lt=()=>{window.clearTimeout(je),je=window.setTimeout(()=>{d&&(E=d.scrollLeft,E+=Fe(),ee=!1,Pe=performance.now()+ht)},gt)},Lo=()=>{window.clearTimeout(Ie),re=!0,$=p?.scrollLeft??$},kt=()=>{window.clearTimeout(Ie),Ie=window.setTimeout(()=>{p&&($=p.scrollLeft,$+=Be(),re=!1,qe=performance.now()+ht)},gt)},Tt=e=>{const t=Math.min((e-(Ee??e))/1e3,.1),i=xe?bo:Me;if(Ee=e,Ce+=(i-Ce)*Math.min(t*6,1),d){const n=o.getBoundingClientRect(),c=n.bottom>0&&n.top<window.innerHeight;c&&!Q&&!ee&&!re&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Pe&&(E+=t*Ce,d.scrollLeft=E,E+=Fe()),c&&p?.clientWidth&&A&&!te&&!re&&!ee&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=qe&&($-=t*Me,p.scrollLeft=$,$+=Be())}$e=requestAnimationFrame(Tt)};!d||$e||(Ee=void 0,$e=requestAnimationFrame(Tt)),requestAnimationFrame(()=>{yt(),bt()}),d?.addEventListener("mouseenter",()=>{xe=!0}),d?.addEventListener("mouseleave",()=>{xe=!1}),o.addEventListener("wheel",e=>{!d||e.ctrlKey||(He(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),d?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&U.matches){So();return}Q=!0,Z=!1,vt=e.clientX,Re=d.scrollLeft,He()}}),d?.addEventListener("dragstart",e=>{e.preventDefault()}),d?.addEventListener("pointermove",e=>{if(!Q)return;const t=e.clientX-vt;!Z&&Math.abs(t)<=5||(Z||(Z=!0,d.classList.add("is-dragging"),d.setPointerCapture(e.pointerId)),d.scrollLeft=Re-t,Re+=Fe(),E=d.scrollLeft,He())});const ko=e=>{!d||!Q||(Q=!1,d.classList.remove("is-dragging"),d.hasPointerCapture(e.pointerId)&&d.releasePointerCapture(e.pointerId),E=d.scrollLeft,Z&&(fe=!0,window.setTimeout(()=>{fe=!1},0)))};d?.addEventListener("scroll",()=>{ee&&(E=d.scrollLeft,Lt())},{passive:!0});const Mt=e=>{if(e.pointerType==="touch"&&U.matches){Lt();return}ko(e)};d?.addEventListener("pointerup",Mt),d?.addEventListener("pointercancel",Mt),d?.addEventListener("click",e=>{fe&&(fe=!1,e.preventDefault(),e.stopPropagation())},!0),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&U.matches){Lo();return}te=!0,oe=!1,wt=e.clientX,Ae=p.scrollLeft,St()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!te)return;const t=e.clientX-wt;!oe&&Math.abs(t)<=5||(oe||(oe=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Ae-t,Ae+=Be(),$=p.scrollLeft,St())});const To=e=>{!p||!te||(te=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),$=p.scrollLeft,oe&&(me=!0,window.setTimeout(()=>{me=!1},0)))};p?.addEventListener("scroll",()=>{re&&($=p.scrollLeft,kt())},{passive:!0});const Et=e=>{if(e.pointerType==="touch"&&U.matches){kt();return}To(e)};p?.addEventListener("pointerup",Et),p?.addEventListener("pointercancel",Et),p?.addEventListener("click",e=>{me&&(me=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!st(t,e))return;const i=a.find(n=>e.classList.contains(`pf-work--${n.id}`));i&&(Le(i),t.preventDefault(),lt(e,i))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{yt({preservePosition:!0}),bt({preservePosition:!0})})});const $t=()=>{const e=D();if(x){x.projectId!==e&&x.closeModal();return}if(!e)return;const t=a.find(n=>n.id===e),i=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&i&&lt(i,t,{pushHistory:!1})};return window.addEventListener("popstate",$t),{resetModal:()=>x?.disposeModal(),syncModalWithHistory:$t}},Ke=document.querySelector("[data-pf]"),Ht=document.querySelector("[data-about]"),K=document.querySelector(".about-photo-stack"),Dt=document.querySelector("[data-project-list]"),Do=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Wo=document.querySelector(".counter-line"),Wt=document.querySelector(".fixed-project-meta"),Vo=document.querySelector("[data-side-number]"),zo=document.querySelector("[data-side-wip]"),Oo=document.querySelector("[data-side-title]"),No=document.querySelector("[data-counter-wip]"),_e=document.querySelector("[data-year-rail]"),W=document.querySelector(".index-gnb"),Yo=[...document.querySelectorAll("[data-gnb-scroll]")],Gt=document.querySelector(".theme-toggle"),q=document.documentElement,Kt="portfolio-last-project-slug",Vt=760,Go=12,Ko=8,_t=window.matchMedia("(max-width: 600px)"),Ze=window.matchMedia("(prefers-reduced-motion: reduce)"),_o=3e3,Xo=200;let Xe=!1,le=0,Ge=0,zt=0,Xt=0,V=Math.max(0,window.scrollY),ce=0,de=V,et=!1,Ue=0,Je=0;const Uo=()=>{const o=K?.lastElementChild;!o||K.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),Xt=window.setTimeout(()=>{K.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},Xo))},Ut=()=>{window.clearInterval(zt),window.clearTimeout(Xt),K?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!K||K.children.length<2||Ze.matches)&&(zt=window.setInterval(Uo,_o))},Jo=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},Qo=(o,a)=>{try{window.sessionStorage?.setItem(o,a)}catch{}},Zo=o=>{window.gtag?.("event","project_click",{project_name:o})},er=o=>`'${String(o).slice(-2)}`,tr=o=>{const{start:a,end:l}=Yt.yearRange,g=Math.min(5,l-a+1),M=Math.min(Math.max(o-2,a),l-g+1);return Array.from({length:g},(_,z)=>M+z)},or=o=>o.split("|").join(" "),rr=(o,a)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!a.target&&!a.hasAttribute("download"),sr=()=>window.matchMedia("(max-width: 600px)").matches?Ko:Go,ir=()=>{const o=sr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},ar=o=>{const a=o.getBoundingClientRect(),l=ir(),g=window.getComputedStyle(o),M=window.getComputedStyle(o.closest(".project-section")),_=window.getComputedStyle(o.querySelector(".project-media")),z=o.querySelector(".project-summary"),x=Number.parseFloat(g.rowGap||g.gap)||0,X=z?.getBoundingClientRect().height||0,Le=Math.max(0,l.height-X-x),D=document.createElement("div"),R=o.cloneNode(!0);return R.classList.add("project-transition-card"),R.removeAttribute("href"),R.removeAttribute("aria-label"),R.setAttribute("aria-hidden","true"),Object.assign(R.style,{top:`${a.top}px`,left:`${a.left}px`,width:`${a.width}px`,height:`${a.height}px`,gap:g.gap,gridTemplateRows:g.gridTemplateRows,maxHeight:"none"}),R.style.setProperty("--project-color",M.getPropertyValue("--project-color")),R.style.setProperty("--project-sub-color",M.getPropertyValue("--project-sub-color")),R.style.setProperty("--project-media-shadow",_.boxShadow),D.className="project-transition-layer",D.append(R),document.body.append(D),{cardClone:R,targetRect:l,targetGridTemplateRows:`${Le}px ${X}px`}},nr=o=>{if(Xe)return;const a=o.closest(".project-section");if(!a){window.location.href=o.href;return}Xe=!0,a.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:l,targetRect:g,targetGridTemplateRows:M}=ar(o);l.animate([{top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height,gridTemplateRows:l.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${g.top}px`,left:`${g.left}px`,width:`${g.width}px`,height:`${g.height}px`,gridTemplateRows:M,opacity:0,offset:1}],{duration:Vt,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},Vt-120)},lr=()=>{Xe=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},cr=o=>{_e.innerHTML=tr(o.year).map(a=>{const l=a===o.year;return`
        <span class="year-rail-item" data-year="${a}" ${l?'aria-current="true"':""}>${er(a)}</span>
      `}).join("")},dr=()=>{Wt.classList.add("is-changing"),_e.classList.add("is-changing"),window.setTimeout(()=>{Wt.classList.remove("is-changing"),_e.classList.remove("is-changing")},180)};let be=[],Ot=-1;const tt=({force:o=!1}={})=>{if(!_t.matches){le&&(q.style.removeProperty("--mobile-project-viewport"),le=0,Ge=0);return}const a=window.innerWidth;!o&&le&&a===Ge||(le=window.innerHeight,Ge=a,q.style.setProperty("--mobile-project-viewport",`${le}px`))},pr=()=>{if(!Ke)return;const o=Ke.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-pf-active",l)},ur=()=>{if(!Ht)return;const o=Ht.getBoundingClientRect(),a=window.innerHeight/2,l=o.top<=a&&o.bottom>=a;q.classList.toggle("is-about-active",l)},fr=o=>{if(o===Ot||o<0)return;const a=Fo[o],l=(o+1)/Yt.totalProjectCount*100;Ot=o,dr(),Do.textContent=a.number,Vo.textContent=a.number,zo.textContent=a.wip?"🚧":"",No.textContent=a.wip?"🚧":"",Oo.innerHTML=a.sideTitle.split("|").join("<br />"),Wo.style.setProperty("--progress",`${l}%`),q.style.setProperty("--active-project-color",a.keyColor),q.style.setProperty("--active-project-sub-color",a.subColor||a.keyColor),Qo(Kt,a.slug),cr(a)},mr=()=>{if(!be.length)return;const o=window.innerHeight/2,a=be.map((l,g)=>{const M=l.getBoundingClientRect(),_=M.top+M.height/2;return{index:g,distance:Math.abs(_-o)}}).sort((l,g)=>l.distance-g.distance)[0]?.index;be.forEach((l,g)=>{const M=g===a;l.classList.toggle("is-active",M),l.classList.toggle("is-inactive",!M)}),fr(a)},gr=()=>{window.clearTimeout(Ue),et=!1,q.classList.remove("is-gnb-menu-scrolling"),W?.classList.remove("is-hidden"),V=Math.max(0,window.scrollY),ce=0,de=V},Jt=o=>{window.clearTimeout(Ue),Ue=window.setTimeout(gr,o)},hr=()=>{if(!W)return;const o=Math.max(0,window.scrollY);if(et){W.classList.remove("is-hidden"),V=o,ce=0,de=o,Jt(Math.abs(o-Je)<=1?160:1200);return}const a=o-V,l=Math.sign(a);if(o<=16)W.classList.remove("is-hidden"),ce=0,de=o;else if(l!==0){l!==ce&&(ce=l,de=V);const g=Math.abs(o-de);l>0&&g>=8?W.classList.add("is-hidden"):l<0&&g>=64&&W.classList.remove("is-hidden")}V=o},vr=o=>{const a=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),l=o.id==="work"?40:0,g=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-l;Je=Math.min(a,Math.max(0,g)),et=!0,q.classList.add("is-gnb-menu-scrolling"),W?.classList.remove("is-hidden"),Jt(1200),window.scrollTo({top:Je,behavior:Ze.matches?"auto":"smooth"})};let Nt=0;const Se=()=>{cancelAnimationFrame(Nt),Nt=requestAnimationFrame(()=>{pr(),ur(),mr()})},Qt=o=>{q.dataset.theme=o,Gt.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},wr=localStorage.getItem("portfolio-theme")||"light",Zt=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";Ze.addEventListener?.("change",Ut);Ut();const Qe=Ho(Ke,Bo,or);be=[...document.querySelectorAll("[data-project]")];tt({force:!0});Qt(wr);const yr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",a=Zt()==="back_forward",l=o||(a?Jo(Kt):""),g=l?document.getElementById(l):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),g&&g.scrollIntoView({block:"center",behavior:"auto"})};yr();Zt()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));Gt.addEventListener("click",()=>{Qt(q.dataset.theme==="dark"?"light":"dark")});Yo.forEach(o=>{o.addEventListener("click",a=>{const l=document.querySelector(o.hash);l&&(a.preventDefault(),vr(l))})});Dt?.addEventListener("click",o=>{const a=o.target.closest(".project-link");!a||!Dt.contains(a)||!rr(o,a)||(Zo(a.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),nr(a))});window.addEventListener("scroll",hr,{passive:!0});window.addEventListener("scroll",Se,{passive:!0});window.addEventListener("resize",()=>{tt(),Se()});_t.addEventListener?.("change",()=>{tt({force:!0}),Se()});window.addEventListener("pagehide",()=>Qe?.resetModal());window.addEventListener("pageshow",()=>{Qe?.resetModal(),Qe?.syncModalWithHistory(),lr()});Se();
