import{p as Go,a as ao}from"./projects-C3NfBF-1.js";/* empty css               */const Ko=[{id:"cta-enhancement",type:"e-commerce",href:"./projects/cta-enhancement/",title:"Pickup Order UX Enhancement",companyLabel:"CJ Olive Young",year:2025,deviceType:"mobile",projectMedia:"./assets/common/cta-enh-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/cta-enhancement",newTab:!0}},{id:"article-studio",type:"enterprise",href:"./projects/modular-editorial-system/",title:"Editorial Workflow: From Weeks to Minutes",companyLabel:"CJ Olive Young",year:2024,deviceType:"web",projectMedia:"./assets/common/article-studio-main.avif",cta:{label:"View Case Study",href:"https://sujikweon.framer.website/article-studio",newTab:!0}},{id:"public-transport",type:"mobility",types:["ai","mobility"],title:"Public Transport App in SG",companyLabel:"Taurus Labs",year:2026,deviceType:"mobile",modalDescription:"Finding the right MRT exit and exploring transit routes on a full-screen map still felt harder than it should be. I built BusMrtSG to solve those transit-specific problems using AI coding tools and a serverless architecture."},{id:"store-finder",type:"e-commerce",href:"./projects/store-finder-renewal/",title:"Map-based Store Finder Renewal",companyLabel:"CJ Olive Young",year:2024,deviceType:"mobile",media:"store-guide",projectMedia:"./assets/common/store-guide-main.avif",cta:{label:"View Case Study",href:"./projects/store-finder-renewal/",newTab:!1}},{id:"perp-dex",type:"fintech",title:"Clearer Control for Perp Trading",companyLabel:"Taurus Labs",year:2025,deviceType:"mobile",modalDescription:"I redesigned the trading and wallet experience to streamline key workflows, helping users act with greater speed and confidence while improving portfolio visibility and transaction clarity."}],_o=(o,r,a)=>{if(!o)return;const u=760,y="portfolioPfModalProject",D=Object.entries({AI:"ai","Enterprise/SaaS":"enterprise",Fintech:"fintech","E-commerce":"e-commerce",Mobility:"mobility"}).map(([e,t])=>({label:e,value:t}));let x=null;const z=e=>{const t=[e.companyLabel,e.year].filter(Boolean);return t.length?`<span>${t.join(" · ")}</span>`:""},Y=e=>{window.gtag?.("event","pf_work_card_click",{project_id:e.id,project_title:e.title})},P=()=>window.history.state?.[y]||"",k=e=>{const t=window.history.state&&typeof window.history.state=="object"?window.history.state:{};window.history.pushState({...t,[y]:e},"")},U=e=>e.deviceType==="web"?`
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
      `:'<div class="pf-work-empty" aria-hidden="true"></div>',Re=[{source:"./assets/public-transport/bus-route.mp4",poster:"./assets/public-transport/bus-route-poster.jpg",label:"Bus timings & route"},{source:"./assets/public-transport/mrt-route.mp4",poster:"./assets/public-transport/mrt-route-poster.jpg",label:"Simple & shortest MRT route options"},{source:"./assets/public-transport/google-map-share.mp4",poster:"./assets/public-transport/google-map-share-poster.jpg",label:"Locations shared via Google Maps"}],we=e=>{const t=Re[e-1];return`
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
    `},Ae=e=>e.projectMedia?`<img class="pf-modal-project-media" src="${e.projectMedia}" alt="" />`:e.id==="public-transport"?we(1):U(e),je=[{start:0,end:5},{start:18,end:26}],ve=(e,t)=>{const s=e.id==="public-transport"?we(t+2):"",n=e.id==="perp-dex"?[`
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
            `][t]:"",d=e.media==="store-guide"&&t===0?`
          <div class="pf-modal-store-finder-video-pair">
            ${je.map(T=>`
                  <video
                    class="pf-modal-store-finder-video pf-modal-segment-video"
                    autoplay
                    muted
                    playsinline
                    preload="auto"
                    poster="./assets/store-guide/solution-tobe1.png"
                    data-segment-start="${T.start}"
                    data-segment-end="${T.end}"
                  >
                    <source src="./assets/store-guide/solution-final-scroll.mp4" type="video/mp4" />
                  </video>
                `).join("")}
          </div>
        `:"",g=e.id==="cta-enhancement"&&t===0?`
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
        `:"",w=e.id==="cta-enhancement"&&t===2?`
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
        `:"",E=e.id==="article-studio"&&t===0?`
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
        ${s||n||d||g||w||E||L}
      </div>
    `},qe=e=>{const t=n=>n.matches(`
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
      `),s=n=>{const d=n.videoWidth||n.naturalWidth||n.width,g=n.videoHeight||n.naturalHeight||n.height;if(!d||!g)return null;const w=16,E=document.createElement("canvas"),L=E.getContext("2d",{willReadFrequently:!0});if(!L)return null;E.width=w,E.height=w;try{L.drawImage(n,0,0,w,w);const T=L.getImageData(0,0,w,w).data;let S=0,c=0,l=0,i=0;for(let h=0;h<w;h+=1)for(let b=0;b<w;b+=1){if(b>1&&b<w-2&&h>1&&h<w-2)continue;const $=(h*w+b)*4,j=T[$+3]/255;j<.2||(S+=T[$]*j,c+=T[$+1]*j,l+=T[$+2]*j,i+=j)}return i?`rgb(${Math.round(S/i)} ${Math.round(c/i)} ${Math.round(l/i)})`:null}catch{return null}};e.querySelectorAll(".pf-modal-bento-feature, .pf-modal-bento-placeholder").forEach(n=>{if(t(n))return;const d=n.querySelector("img, video, canvas");if(!d)return;const g=()=>{if(!n.isConnected)return;const w=s(d);w&&(n.style.setProperty("--pf-modal-media-background",w),n.classList.add("has-media-sampled-background"))};if(d instanceof HTMLImageElement){d.complete&&d.naturalWidth?g():d.addEventListener("load",g,{once:!0});return}if(d instanceof HTMLVideoElement){d.readyState>=2?g():d.addEventListener("loadeddata",g,{once:!0});return}window.requestAnimationFrame(g)})},Ie=e=>{e.querySelectorAll(".pf-modal-segment-video").forEach(t=>{const s=Number(t.dataset.segmentStart),n=Number(t.dataset.segmentEnd),d=()=>{t.currentTime=s,t.play().catch(()=>{})},g=()=>{t.currentTime=s,t.classList.add("is-ready"),t.play().catch(()=>{})};t.addEventListener("loadedmetadata",g,{once:!0}),t.addEventListener("timeupdate",()=>{t.currentTime>=n&&d()}),t.addEventListener("ended",d),t.readyState>=1&&g()})},Fe=e=>{const t=window.matchMedia("(max-width: 920px)").matches,n=(t?[1,2,3,4]:[4,1,2,3]).map(i=>e.querySelector(`.pf-modal-bento-placeholder--${i}`)).filter(Boolean).map(i=>({container:i,video:i.querySelector("[data-perp-video]"),gif:i.querySelector("[data-perp-gif]")}));if(!n.length)return;if(t){n.forEach(i=>{if(i.container.classList.add("is-playing"),i.video){const h=()=>{e.isConnected&&(i.video.loop=!0,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?h():i.video.addEventListener("loadedmetadata",h,{once:!0})}if(i.gif){const h=i.gif.querySelector("[data-perp-gif-player]"),b=i.gif.dataset.perpGifSrc;h&&b&&(h.src=b)}});return}let d=null,g=0,w=0,E=0,L=null;const T=i=>{if(i.container.classList.remove("is-playing"),i.video){const h=Number(i.video.dataset.perpThumbnailTime||0);i.video.loop=!1,i.video.pause(),i.video.readyState>=2&&(i.video.currentTime=Math.min(h,Number.isFinite(i.video.duration)?i.video.duration:h))}i.gif&&i.gif.querySelector("[data-perp-gif-player]")?.removeAttribute("src")},S=()=>{window.clearTimeout(w),n.forEach(T)},c=()=>{g=(g+1)%n.length,l(n[g],!0)},l=(i,h=!1)=>{const b=++E;if(S(),d=i,i.container.classList.add("is-playing"),i.video){const $=()=>{b!==E||!e.isConnected||(i.video.loop=!h,i.video.currentTime=0,i.video.play().catch(()=>{}))};i.video.readyState>=1?$():i.video.addEventListener("loadedmetadata",$,{once:!0})}if(i.gif){const $=i.gif.querySelector("[data-perp-gif-player]"),j=i.gif.dataset.perpGifSrc;$&&j&&($.src=`${j}?play=${b}`),h&&(w=window.setTimeout(()=>{b===E&&!L&&e.isConnected&&c()},Number(i.gif.dataset.perpGifDuration||6600)))}};n.forEach(i=>{if(i.video&&i.video.addEventListener("ended",()=>{i===d&&!L&&e.isConnected&&c()}),i.gif){const h=i.gif.querySelector("[data-perp-gif-frame]"),b=new Image;b.addEventListener("load",()=>{h.width=b.naturalWidth,h.height=b.naturalHeight,h.getContext("2d")?.drawImage(b,0,0)},{once:!0}),b.src=i.gif.dataset.perpGifSrc}i.container.addEventListener("mouseenter",()=>{L=i,l(i)}),i.container.addEventListener("mouseleave",()=>{L===i&&(L=null,g=(n.indexOf(i)+1)%n.length,l(n[g],!0))})}),n.forEach(T),l(n[g],!0)},vo=e=>{const t=window.matchMedia("(max-width: 920px)").matches,s=[...e.querySelectorAll("[data-public-transport-video]")].map(c=>({video:c,order:Number(c.dataset.publicTransportVideoOrder),container:c.closest(".pf-modal-bento-feature, .pf-modal-bento-placeholder")})).filter(c=>c.container).sort((c,l)=>c.order-l.order);if(!s.length)return;if(t){s.forEach(c=>{c.container.classList.add("is-playing"),c.video.loop=!0;const l=()=>{e.isConnected&&(c.video.currentTime=0,c.video.play().catch(()=>{}))};c.video.readyState>=1?l():c.video.addEventListener("loadedmetadata",l,{once:!0})});return}let n=null,d=0,g=null,w=0;const E=c=>{c.container.classList.remove("is-playing"),c.video.loop=!1,c.video.pause(),c.video.readyState>=2&&(c.video.currentTime=0)},L=()=>s.forEach(E),T=()=>{d=(d+1)%s.length,S(s[d],!0)},S=(c,l=!1)=>{const i=++w;L(),n=c,c.container.classList.add("is-playing");const h=()=>{i!==w||!e.isConnected||(c.video.loop=!l,c.video.currentTime=0,c.video.play().catch(()=>{}))};c.video.readyState>=1?h():c.video.addEventListener("loadedmetadata",h,{once:!0})};s.forEach(c=>{c.video.addEventListener("ended",()=>{c===n&&!g&&e.isConnected&&T()}),c.container.addEventListener("mouseenter",()=>{g=c,S(c)}),c.container.addEventListener("mouseleave",()=>{g===c&&(g=null,d=(s.indexOf(c)+1)%s.length,S(s[d],!0))})}),s.forEach(E),S(s[d],!0)},yo=(e,t=!1)=>{const s=e.types?.length?e.types:[e.type||"others"],n=`
      <div class="pf-work-card">
        ${U(e)}
      </div>
      <div class="pf-work-meta">
        <h2>${e.title}</h2>
        ${z(e)}
      </div>
    `;return t?`<div class="pf-work pf-work--${e.id} pf-work--clone" aria-hidden="true">${n}</div>`:`<a class="pf-work pf-work--${e.id}" href="${e.href}" data-project-types="${s.join(" ")}" draggable="false" aria-label="${a(e.title)} project detail">${n}</a>`},ht=(e,t)=>e.button===0&&!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!t.target&&!t.hasAttribute("download"),wt=()=>{const e=window.innerWidth<=600?12:16;return{top:e,left:e,width:window.innerWidth-e*2,height:window.innerHeight-e*2}},vt=()=>"24px",ye=(e,t)=>{Object.assign(e.style,{top:`${t.top}px`,left:`${t.left}px`,width:`${t.width}px`,height:`${t.height}px`})},yt=(e,t)=>{const s=t.width?e.width/t.width:1,n=t.height?e.height/t.height:1,d=e.left-t.left,g=e.top-t.top;return`translate3d(${d}px, ${g}px, 0) scale(${s}, ${n})`},bo=()=>{const e=[...o.querySelectorAll(".pf-work video")],t=e.filter(s=>!s.paused&&!s.ended);return e.forEach(s=>s.pause()),t},So=e=>{e.forEach(t=>{t.isConnected&&t.play().catch(()=>{})})},bt=(e,t,{pushHistory:s=!0}={})=>{if(x)return;s&&k(t.id);const n=bo(),d=e.querySelector(".pf-work-card")||e,g=e.matches(":focus-visible"),w=d.getBoundingClientRect(),E=window.getComputedStyle(d).borderRadius,L=wt(),T=vt(),S=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),i=`pf-modal-${t.id}-title`,h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=h?1:u,$=t.cta?`
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
      `:"",j=t.modalDescription?`<p class="pf-modal-description">${t.modalDescription}</p>`:"",G=t.id==="perp-dex",Wt=t.id==="public-transport",Vt=G?4:Wt?2:3,Io=Array.from({length:Vt},(m,v)=>ve(t,v)),Fo=Array.from({length:Vt},(m,v)=>`
        <div class="pf-modal-bento-placeholder pf-modal-bento-placeholder--${v+1} pf-modal-bento-skeleton"></div>
      `),ce=Wt,ke=!t.cta&&!G&&!ce,Ze=t.deviceType==="web"&&!ce&&!ke,Nt=["cta-enhancement","store-finder"].includes(t.id),Ot=m=>{const v=Nt?m[0]:m.slice(0,2).join("");return G?`
          <div class="pf-modal-perp-left">
            ${m[0]}
            <div class="pf-modal-perp-center-bottom">
              ${m[1]}
              ${m[2]}
            </div>
          </div>
          ${m[3]}
        `:ce||ke?m.join(""):Ze?`<div class="pf-modal-bento-side">${m.slice(0,2).join("")}</div>`:`
          <div class="pf-modal-bento-stack">
            <div class="pf-modal-bento-stack-top${Nt?" pf-modal-bento-stack-top--single":""}">
              ${v}
            </div>
            ${m[2]}
          </div>
        `},Bo=Ot(Io),Ho=Ot(Fo),Do=G?"":`
        <div class="pf-modal-bento-feature">
          ${Ae(t)}
        </div>
      `,Wo=`
      <section class="pf-modal-bento-section${Ze?" pf-modal-bento-section--web":""}${ce?" pf-modal-bento-section--three-up":""}${ke?" pf-modal-bento-section--four-up":""}${G?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${Do}
        ${Bo}
      </section>
    `,Vo=`
      <section class="pf-modal-bento-section pf-modal-bento-section--skeleton${Ze?" pf-modal-bento-section--web":""}${ce?" pf-modal-bento-section--three-up":""}${ke?" pf-modal-bento-section--four-up":""}${G?" pf-modal-bento-section--perp-dex":""}" aria-hidden="true">
        ${G?"":'<div class="pf-modal-bento-feature pf-modal-bento-skeleton"></div>'}
        ${Ho}
      </section>
    `;S.className="pf-modal-layer",c.className="pf-modal-backdrop",c.style.opacity="0",l.className=`pf-work-modal pf-work--${t.id}${j?" pf-work-modal--has-description":""}${$?"":" pf-work-modal--no-cta"}`,l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-labelledby",i),l.innerHTML=`
      <div class="pf-modal-card-content is-skeleton">${Vo}</div>
      <span class="pf-modal-scroll-indicator" aria-hidden="true"></span>
      <button class="pf-modal-close" type="button" aria-label="Close project preview"></button>
      <div class="pf-modal-footer${$?"":" pf-modal-footer--no-cta"}">
        <div class="pf-work-meta">
          <h2 id="${i}">${t.title}</h2>
          ${z(t)}
        </div>
        ${$||j}
      </div>
    `,ye(l,L),l.style.borderRadius=T,l.style.transformOrigin="top left",S.append(c,l),document.body.append(S),l.classList.add("is-revealing"),e.classList.add("is-modal-source"),document.documentElement.classList.add("is-pf-modal-open");const et=l.animate([{transform:yt(w,L),borderRadius:E},{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:T}],{duration:b,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),tt=c.animate([{opacity:0},{opacity:1}],{duration:Math.min(b,420),easing:"ease-out",fill:"forwards"}),ot=l.querySelector(".pf-modal-close"),Z=l.querySelector(".pf-modal-cta"),Te=l.querySelector(".pf-modal-footer"),A=l.querySelector(".pf-modal-card-content"),de=l.querySelector(".pf-modal-scroll-indicator");let zt=!1,F=!1,Me=!1,pe=0;const No=()=>{if(pe=0,!A||!de||F)return;const m=A.scrollHeight-A.clientHeight,v=8,q=Te?.offsetHeight??0,O=Math.max(0,l.clientHeight-q-v*2);if(m<=1||O<=0){de.classList.remove("is-visible");return}const xe=Math.min(O,Math.max(36,O*(A.clientHeight/A.scrollHeight))),Yo=Math.min(1,Math.max(0,A.scrollTop/m))*(O-xe);de.style.height=`${xe}px`,de.style.transform=`translate3d(0, ${Yo}px, 0)`,de.classList.add("is-visible")},ue=()=>{pe||(pe=window.requestAnimationFrame(No))},rt=typeof ResizeObserver=="function"?new ResizeObserver(ue):null;rt?.observe(A),A?.addEventListener("scroll",ue,{passive:!0});const Oo=()=>{zt||!A||F||(zt=!0,A.classList.remove("is-skeleton"),A.innerHTML=Wo,qe(l),Ie(l),Fe(l),vo(l),A.querySelectorAll(".pf-modal-bento-section").forEach(m=>rt?.observe(m)),window.requestAnimationFrame(()=>{!F&&l.isConnected&&(l.classList.add("is-content-ready"),ue())}))},Ee=()=>{const m=Te?.offsetHeight??0;l.style.setProperty("--pf-modal-footer-space",`${m}px`),ue()},Yt=Te&&typeof ResizeObserver=="function"?new ResizeObserver(Ee):null;Yt?.observe(Te),Ee();const Gt=()=>{!F&&l.classList.contains("is-ready")&&(ye(l,wt()),l.style.borderRadius=vt(),Ee())};let Kt=!1;const _t=({restoreFocus:m=!1}={})=>{if(Kt||(Kt=!0,S.getAnimations?.({subtree:!0})?.forEach(q=>q.cancel()),S.remove(),e.classList.remove("is-modal-source"),document.documentElement.classList.remove("is-pf-modal-open"),document.removeEventListener("keydown",it),window.removeEventListener("resize",Gt),Yt?.disconnect(),rt?.disconnect(),A?.removeEventListener("scroll",ue),pe&&window.cancelAnimationFrame(pe),x?.modal===l&&(x=null),So(n),!m))return;const v=e.matches("a")?e:o.querySelector(`.pf-work--${t.id}`);if(!g){const q=()=>{v?.classList.remove("is-pointer-focus-restored")};v?.classList.add("is-pointer-focus-restored"),v?.addEventListener("blur",q,{once:!0}),v?.addEventListener("keydown",q,{once:!0})}v?.focus({preventScroll:!0})},Ut=()=>{if(F)return;F=!0,Me=!1,l.classList.add("is-closing"),l.classList.remove("is-revealing","is-ready","is-content-ready");const m=l.getBoundingClientRect(),v=window.getComputedStyle(l).borderRadius,q=d.getBoundingClientRect();e.classList.remove("is-modal-source"),et.cancel(),tt.cancel(),ye(l,m),l.style.borderRadius=v,l.style.transform="none";const O=h?1:320,xe=l.animate([{transform:"translate3d(0, 0, 0) scale(1, 1)",borderRadius:v},{transform:yt(q,m),borderRadius:E}],{duration:O,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"});c.animate([{opacity:1},{opacity:0}],{duration:h?1:200,easing:"ease-out",fill:"forwards"}),xe.finished.finally(()=>_t({restoreFocus:!0}))},st=()=>{if(!(F||Me)){if(P()===t.id){Me=!0,window.history.back();return}Ut()}},zo=m=>{!Z||t.cta?.newTab!==!1||!ht(m,Z)||(m.preventDefault(),!(F||Me)&&(F=!0,l.classList.add("is-navigating"),document.removeEventListener("keydown",it),P()===t.id?window.location.replace(Z.href):window.location.href=Z.href))},it=m=>{if(m.key==="Escape"){m.preventDefault(),st();return}if(m.key!=="Tab")return;const v=[ot,Z].filter(Boolean),q=v.indexOf(document.activeElement),O=m.shiftKey?(q-1+v.length)%v.length:(q+1)%v.length;m.preventDefault(),v[O].focus()};x={layer:S,modal:l,projectId:t.id,closeModal:Ut,disposeModal:_t},document.addEventListener("keydown",it),window.addEventListener("resize",Gt),ot.addEventListener("click",st),Z?.addEventListener("click",zo),S.addEventListener("click",m=>{(m.target===S||m.target===c)&&st()}),tt.finished.then(()=>{c.style.opacity="1",tt.cancel()}).catch(()=>{}),et.finished.then(()=>{F||(ye(l,L),l.style.borderRadius=T,l.style.transform="none",et.cancel(),Ee(),l.classList.add("is-ready"),Oo(),ot.focus({preventScroll:!0}))}).catch(()=>{})},te=window.matchMedia("(max-width: 600px)"),oe=document.querySelector("[data-pf-type-filter]"),Lo=270,ko=.36;oe&&(oe.innerHTML=`
      <div class="pf-type-filter" role="group" aria-label="Filter projects by type">
      ${D.map(({value:e,label:t},s)=>`
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
    `),document.querySelector("[data-pf-floating-filter]")?.remove();const V=document.createElement("div");V.className="pf-floating-filter",V.dataset.pfFloatingFilter="",V.setAttribute("role","group"),V.setAttribute("aria-label","Filter projects by type"),V.innerHTML=[{value:"",label:"All"},...D].map(({value:e,label:t})=>`
        <button
          class="pf-floating-filter-button"
          type="button"
          data-project-type-filter="${e}"
          aria-controls="pf-work-grid"
          aria-pressed="false"
        >${t}</button>
      `).join(""),document.body.append(V),o.innerHTML=`
    <div class="pf-work-grid" id="pf-work-grid">
      ${r.map(e=>yo(e)).join("")}
    </div>
    <p class="pf-filter-empty" role="status" hidden>No projects in this category yet.</p>
  `;const St=[...oe?[...oe.querySelectorAll("[data-project-type-filter]")]:[],...V.querySelectorAll("[data-project-type-filter]")],To=oe?.querySelector(".pf-type-filter"),Mo=[...o.querySelectorAll(".pf-work[data-project-types]")],Eo=o.querySelector(".pf-work-grid"),Lt=o.querySelector(".pf-filter-empty");let X="",kt=0;const Be=()=>{const e=o.getBoundingClientRect().bottom,t=window.innerHeight*ko;V.classList.toggle("is-visible",window.scrollY>Lo&&e>t)},xo=()=>{const e=Math.max(0,o.getBoundingClientRect().top+window.scrollY-10);window.scrollTo({top:e,behavior:"smooth"})},Tt=e=>{X=X===e?"":e;let t=0;St.forEach(s=>{s.setAttribute("aria-pressed",String(s.dataset.projectTypeFilter===X))}),To?.classList.toggle("is-filtering",!!X),Mo.forEach(s=>{const n=s.dataset.projectTypes.split(" "),d=!X||n.includes(X);s.hidden=!d,d&&(t+=1)}),Eo?.classList.toggle("is-single-result",t===1),Lt&&(Lt.hidden=t>0)};St.forEach(e=>{e.addEventListener("click",()=>{const t=document.documentElement;window.clearTimeout(kt),t.style.overflowAnchor="none",Tt(e.dataset.projectTypeFilter),xo(),kt=window.setTimeout(()=>{t.style.removeProperty("overflow-anchor")},700)})}),window.addEventListener("scroll",Be,{passive:!0}),window.addEventListener("resize",Be,{passive:!0}),Be(),Tt("");const p=o.querySelector("[data-pf-work-rail]"),He=p?[...p.querySelectorAll(".pf-work-set")]:[],Mt=o.querySelector(".pf-work-set--primary .pf-work"),f=o.querySelector("[data-pf-work-rail-secondary]"),be=f?[...f.querySelectorAll(".pf-work-set")]:[],Et=be[1]?.querySelector(".pf-work:nth-child(4)");o.querySelector("[data-mobile-pf-work-rail]"),o.querySelector("[data-mobile-pf-work-rail-secondary]");const Po=80,$o=-80,De=32,Co=12,xt=180,Pt=600;let We,Ve=0,Ne=0,C=0,Oe=De,ze=!1,re=!1,$t=0,Ye=0,se=!1,Se=!1,ie=!1,Ge=0,N=0,J=0,W=0,Q=0,R=0,Ke=0,ne=!1,Ct=0,_e=0,ae=!1,Le=!1,le=!1,Ue=0;const Rt=({preservePosition:e=!1}={})=>{if(!p||!Mt||He.length<3)return;const t=N,s=J,n=t?(p.scrollLeft-s)/t:0,d=p.getBoundingClientRect(),g=Mt.getBoundingClientRect(),w=p.scrollLeft+g.left-d.left;N=He[2].getBoundingClientRect().left-He[1].getBoundingClientRect().left,J=w-(p.clientWidth-g.width)/2-(te.matches?Po:0),p.scrollLeft=e?J+n*N:J,C=p.scrollLeft},Xe=()=>{if(!p||!N)return 0;const e=J-N*.5,t=J+N*.5;let s=p.scrollLeft;for(;s<e;)s+=N;for(;s>=t;)s-=N;const n=s-p.scrollLeft;return Math.abs(n)>.5&&(p.scrollLeft=s),n},At=({preservePosition:e=!1}={})=>{if(!f||!Et||be.length<3||!f.clientWidth)return;const t=W,s=Q,n=t?(f.scrollLeft-s)/t:0,d=f.getBoundingClientRect(),g=Et.getBoundingClientRect(),w=f.scrollLeft+g.left-d.left;W=be[2].getBoundingClientRect().left-be[1].getBoundingClientRect().left,Q=w-(f.clientWidth-g.width)/2-$o,f.scrollLeft=e?Q+n*W:Q,R=f.scrollLeft},Je=()=>{if(!f||!W)return 0;const e=Q-W*.5,t=Q+W*.5;let s=f.scrollLeft;for(;s<e;)s+=W;for(;s>=t;)s-=W;const n=s-f.scrollLeft;return Math.abs(n)>.5&&(f.scrollLeft=s),n},Qe=()=>{C=p?.scrollLeft??C,Ne=performance.now()+200},jt=()=>{R=f?.scrollLeft??R,Ke=performance.now()+200},Ro=()=>{window.clearTimeout(Ge),ie=!0,C=p?.scrollLeft??C},qt=()=>{window.clearTimeout(Ge),Ge=window.setTimeout(()=>{p&&(C=p.scrollLeft,C+=Xe(),ie=!1,Ne=performance.now()+Pt)},xt)},Ao=()=>{window.clearTimeout(Ue),le=!0,R=f?.scrollLeft??R},It=()=>{window.clearTimeout(Ue),Ue=window.setTimeout(()=>{f&&(R=f.scrollLeft,R+=Je(),le=!1,Ke=performance.now()+Pt)},xt)},Ft=e=>{const t=Math.min((e-(We??e))/1e3,.1),s=ze?Co:De;if(We=e,Oe+=(s-Oe)*Math.min(t*6,1),p){const n=o.getBoundingClientRect(),d=n.bottom>0&&n.top<window.innerHeight;d&&!re&&!ie&&!le&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ne&&(C+=t*Oe,p.scrollLeft=C,C+=Xe()),d&&f?.clientWidth&&W&&!ne&&!le&&!ie&&!document.documentElement.classList.contains("is-pf-modal-open")&&e>=Ke&&(R-=t*De,f.scrollLeft=R,R+=Je())}Ve=requestAnimationFrame(Ft)};!p||Ve||(We=void 0,Ve=requestAnimationFrame(Ft)),requestAnimationFrame(()=>{Rt(),At()}),p?.addEventListener("mouseenter",()=>{ze=!0}),p?.addEventListener("mouseleave",()=>{ze=!1}),o.addEventListener("wheel",e=>{!p||e.ctrlKey||(Qe(),(e.shiftKey||Math.abs(e.deltaX)>Math.abs(e.deltaY))&&e.preventDefault())},{passive:!1}),p?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&te.matches){Ro();return}re=!0,se=!1,$t=e.clientX,Ye=p.scrollLeft,Qe()}}),p?.addEventListener("dragstart",e=>{e.preventDefault()}),p?.addEventListener("pointermove",e=>{if(!re)return;const t=e.clientX-$t;!se&&Math.abs(t)<=5||(se||(se=!0,p.classList.add("is-dragging"),p.setPointerCapture(e.pointerId)),p.scrollLeft=Ye-t,Ye+=Xe(),C=p.scrollLeft,Qe())});const jo=e=>{!p||!re||(re=!1,p.classList.remove("is-dragging"),p.hasPointerCapture(e.pointerId)&&p.releasePointerCapture(e.pointerId),C=p.scrollLeft,se&&(Se=!0,window.setTimeout(()=>{Se=!1},0)))};p?.addEventListener("scroll",()=>{ie&&(C=p.scrollLeft,qt())},{passive:!0});const Bt=e=>{if(e.pointerType==="touch"&&te.matches){qt();return}jo(e)};p?.addEventListener("pointerup",Bt),p?.addEventListener("pointercancel",Bt),p?.addEventListener("click",e=>{Se&&(Se=!1,e.preventDefault(),e.stopPropagation())},!0),f?.addEventListener("pointerdown",e=>{if(!(e.button!==0||x)){if(e.pointerType==="touch"&&te.matches){Ao();return}ne=!0,ae=!1,Ct=e.clientX,_e=f.scrollLeft,jt()}}),f?.addEventListener("dragstart",e=>{e.preventDefault()}),f?.addEventListener("pointermove",e=>{if(!ne)return;const t=e.clientX-Ct;!ae&&Math.abs(t)<=5||(ae||(ae=!0,f.classList.add("is-dragging"),f.setPointerCapture(e.pointerId)),f.scrollLeft=_e-t,_e+=Je(),R=f.scrollLeft,jt())});const qo=e=>{!f||!ne||(ne=!1,f.classList.remove("is-dragging"),f.hasPointerCapture(e.pointerId)&&f.releasePointerCapture(e.pointerId),R=f.scrollLeft,ae&&(Le=!0,window.setTimeout(()=>{Le=!1},0)))};f?.addEventListener("scroll",()=>{le&&(R=f.scrollLeft,It())},{passive:!0});const Ht=e=>{if(e.pointerType==="touch"&&te.matches){It();return}qo(e)};f?.addEventListener("pointerup",Ht),f?.addEventListener("pointercancel",Ht),f?.addEventListener("click",e=>{Le&&(Le=!1,e.preventDefault(),e.stopPropagation())},!0),o.querySelectorAll(".pf-work").forEach(e=>{e.addEventListener("click",t=>{if(!ht(t,e))return;const s=r.find(n=>e.classList.contains(`pf-work--${n.id}`));s&&(Y(s),t.preventDefault(),bt(e,s))})}),window.addEventListener("resize",()=>{requestAnimationFrame(()=>{Rt({preservePosition:!0}),At({preservePosition:!0})})});const Dt=()=>{const e=P();if(x){x.projectId!==e&&x.closeModal();return}if(!e)return;const t=r.find(n=>n.id===e),s=o.querySelector(`.pf-work--${e}:not(.pf-work--clone)`);t&&s&&bt(s,t,{pushHistory:!1})};return window.addEventListener("popstate",Dt),{resetModal:()=>x?.disposeModal(),syncModalWithHistory:Dt}},at=document.querySelector("[data-pf]"),Xt=document.querySelector("[data-about]"),ee=document.querySelector(".about-photo-stack"),Jt=document.querySelector("[data-project-list]"),Uo=document.querySelector("[data-current-project]");document.querySelector("[data-total-projects]");const Xo=document.querySelector(".counter-line"),Qt=document.querySelector(".fixed-project-meta"),Jo=document.querySelector("[data-side-number]"),Qo=document.querySelector("[data-side-wip]"),Zo=document.querySelector("[data-side-title]"),er=document.querySelector("[data-counter-wip]"),lt=document.querySelector("[data-year-rail]"),K=document.querySelector(".index-gnb"),tr=[...document.querySelectorAll("[data-gnb-scroll]")],lo=document.querySelector(".theme-toggle"),Zt=document.querySelector(".experience-section"),or=document.querySelector("[data-experience-stack]"),eo=[...document.querySelectorAll(".experience-card-step")],M=[...document.querySelectorAll("[data-experience-card]")],B=document.documentElement,co="portfolio-last-project-slug",to=760,rr=12,sr=8,po=window.matchMedia("(max-width: 600px)"),he=window.matchMedia("(prefers-reduced-motion: reduce)"),ir=3e3,nr=200;let ct=!1,fe=0,nt=0,oo=0,uo=0,_=Math.max(0,window.scrollY),me=0,ge=_,mt=!1,dt=0,pt=0,I=-1,ut=0;const ro=o=>Math.min(Math.max(o,0),1),fo=o=>{if(!M.length)return;I=Math.min(Math.max(o,0),M.length-1),M.forEach((a,u)=>{const y=u===I;a.classList.toggle("is-active",y),a.classList.toggle("is-past",u<I),a.classList.toggle("is-future",u>I),a.setAttribute("aria-pressed",String(y))})},ar=()=>{if(ut=0,!Zt||!or||!M.length)return;const o=Zt.getBoundingClientRect(),r=Math.max(1,o.height-window.innerHeight),a=ro(-o.top/r);let u=0,y=Number.NEGATIVE_INFINITY;const H=eo.at(-1),D=H?.getBoundingClientRect(),x=H&&Number.parseFloat(window.getComputedStyle(H).top)||0,z=!!(D&&D.top<=x+4);M.forEach((Y,P)=>{const k=eo[P];if(!k)return;const U=M.length>1?P/(M.length-1):0,Re=U>=1?a>=1?1:0:ro((a-U)/(1-U)),we=z&&P<M.length-1?1:Re,Ae=Math.max(.68,1-(M.length-P-1)*.075),je=he.matches?1:1+(Ae-1)*we,ve=Y.getBoundingClientRect(),qe=k.getBoundingClientRect(),Ie=Number.parseFloat(window.getComputedStyle(k).top)||0,Fe=Math.max(0,Ie-qe.top);Y.style.setProperty("--experience-scale",je.toFixed(4)),Y.style.setProperty("--experience-release-offset",`${Fe.toFixed(3)}px`),P>0&&ve.top<y-1&&(u=P),y=ve.bottom}),u!==I&&fo(u)},$e=()=>{ut||(ut=window.requestAnimationFrame(ar))},so=o=>{const r=M[o];r&&r.scrollIntoView({block:"center",behavior:he.matches?"auto":"smooth"})},lr=()=>{const o=ee?.lastElementChild;!o||ee.children.length<2||o.classList.contains("is-moving-to-back")||(o.classList.add("is-moving-to-back"),uo=window.setTimeout(()=>{ee.prepend(o),window.requestAnimationFrame(()=>o.classList.remove("is-moving-to-back"))},nr))},mo=()=>{window.clearInterval(oo),window.clearTimeout(uo),ee?.querySelector(".is-moving-to-back")?.classList.remove("is-moving-to-back"),!(!ee||ee.children.length<2||he.matches)&&(oo=window.setInterval(lr,ir))},cr=o=>{try{return window.sessionStorage?.getItem(o)||""}catch{return""}},dr=(o,r)=>{try{window.sessionStorage?.setItem(o,r)}catch{}},pr=o=>{window.gtag?.("event","project_click",{project_name:o})},ur=o=>`'${String(o).slice(-2)}`,fr=o=>{const{start:r,end:a}=ao.yearRange,u=Math.min(5,a-r+1),y=Math.min(Math.max(o-2,r),a-u+1);return Array.from({length:u},(H,D)=>y+D)},mr=o=>o.split("|").join(" "),gr=(o,r)=>o.button===0&&!o.defaultPrevented&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!r.target&&!r.hasAttribute("download"),hr=()=>window.matchMedia("(max-width: 600px)").matches?sr:rr,wr=()=>{const o=hr();return{top:o,left:o,width:window.innerWidth-o*2,height:window.innerHeight-o*2}},vr=o=>{const r=o.getBoundingClientRect(),a=wr(),u=window.getComputedStyle(o),y=window.getComputedStyle(o.closest(".project-section")),H=window.getComputedStyle(o.querySelector(".project-media")),D=o.querySelector(".project-summary"),x=Number.parseFloat(u.rowGap||u.gap)||0,z=D?.getBoundingClientRect().height||0,Y=Math.max(0,a.height-z-x),P=document.createElement("div"),k=o.cloneNode(!0);return k.classList.add("project-transition-card"),k.removeAttribute("href"),k.removeAttribute("aria-label"),k.setAttribute("aria-hidden","true"),Object.assign(k.style,{top:`${r.top}px`,left:`${r.left}px`,width:`${r.width}px`,height:`${r.height}px`,gap:u.gap,gridTemplateRows:u.gridTemplateRows,maxHeight:"none"}),k.style.setProperty("--project-color",y.getPropertyValue("--project-color")),k.style.setProperty("--project-sub-color",y.getPropertyValue("--project-sub-color")),k.style.setProperty("--project-media-shadow",H.boxShadow),P.className="project-transition-layer",P.append(k),document.body.append(P),{cardClone:k,targetRect:a,targetGridTemplateRows:`${Y}px ${z}px`}},yr=o=>{if(ct)return;const r=o.closest(".project-section");if(!r){window.location.href=o.href;return}ct=!0,r.classList.add("is-transition-source"),document.body.classList.add("is-project-transitioning"),document.documentElement.classList.add("is-project-transitioning");const{cardClone:a,targetRect:u,targetGridTemplateRows:y}=vr(o);a.animate([{top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height,gridTemplateRows:a.style.gridTemplateRows,opacity:1,offset:0},{opacity:1,offset:.9},{top:`${u.top}px`,left:`${u.left}px`,width:`${u.width}px`,height:`${u.height}px`,gridTemplateRows:y,opacity:0,offset:1}],{duration:to,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"forwards"}),window.setTimeout(()=>{window.location.href=o.href},to-120)},br=()=>{ct=!1,document.documentElement.classList.remove("is-project-transitioning"),document.body.classList.remove("is-project-transitioning"),document.querySelectorAll(".project-transition-layer").forEach(o=>o.remove()),document.querySelectorAll(".is-transition-source").forEach(o=>{o.classList.remove("is-transition-source")})},Sr=o=>{lt.innerHTML=fr(o.year).map(r=>{const a=r===o.year;return`
        <span class="year-rail-item" data-year="${r}" ${a?'aria-current="true"':""}>${ur(r)}</span>
      `}).join("")},Lr=()=>{Qt.classList.add("is-changing"),lt.classList.add("is-changing"),window.setTimeout(()=>{Qt.classList.remove("is-changing"),lt.classList.remove("is-changing")},180)};let Pe=[],io=-1;const gt=({force:o=!1}={})=>{if(!po.matches){fe&&(B.style.removeProperty("--mobile-project-viewport"),fe=0,nt=0);return}const r=window.innerWidth;!o&&fe&&r===nt||(fe=window.innerHeight,nt=r,B.style.setProperty("--mobile-project-viewport",`${fe}px`))},kr=()=>{if(!at)return;const o=at.getBoundingClientRect(),r=window.innerHeight/2,a=o.top<=r&&o.bottom>=r;B.classList.toggle("is-pf-active",a)},Tr=()=>{if(!Xt)return;const o=Xt.getBoundingClientRect(),r=window.innerHeight/2,a=o.top<=r&&o.bottom>=r;B.classList.toggle("is-about-active",a)},Mr=o=>{if(o===io||o<0)return;const r=Go[o],a=(o+1)/ao.totalProjectCount*100;io=o,Lr(),Uo.textContent=r.number,Jo.textContent=r.number,Qo.textContent=r.wip?"🚧":"",er.textContent=r.wip?"🚧":"",Zo.innerHTML=r.sideTitle.split("|").join("<br />"),Xo.style.setProperty("--progress",`${a}%`),B.style.setProperty("--active-project-color",r.keyColor),B.style.setProperty("--active-project-sub-color",r.subColor||r.keyColor),dr(co,r.slug),Sr(r)},Er=()=>{if(!Pe.length)return;const o=window.innerHeight/2,r=Pe.map((a,u)=>{const y=a.getBoundingClientRect(),H=y.top+y.height/2;return{index:u,distance:Math.abs(H-o)}}).sort((a,u)=>a.distance-u.distance)[0]?.index;Pe.forEach((a,u)=>{const y=u===r;a.classList.toggle("is-active",y),a.classList.toggle("is-inactive",!y)}),Mr(r)},xr=()=>{window.clearTimeout(dt),mt=!1,B.classList.remove("is-gnb-menu-scrolling"),K?.classList.remove("is-hidden"),_=Math.max(0,window.scrollY),me=0,ge=_},go=o=>{window.clearTimeout(dt),dt=window.setTimeout(xr,o)},Pr=()=>{if(!K)return;const o=Math.max(0,window.scrollY);if(mt){K.classList.remove("is-hidden"),_=o,me=0,ge=o,go(Math.abs(o-pt)<=1?160:1200);return}const r=o-_,a=Math.sign(r);if(o<=16)K.classList.remove("is-hidden"),me=0,ge=o;else if(a!==0){a!==me&&(me=a,ge=_);const u=Math.abs(o-ge);a>0&&u>=8?K.classList.add("is-hidden"):a<0&&u>=64&&K.classList.remove("is-hidden")}_=o},$r=o=>{const r=Math.max(0,document.documentElement.scrollHeight-window.innerHeight),a=o.id==="work"?40:0,u=o===document.body?0:o.getBoundingClientRect().top+window.scrollY-a;pt=Math.min(r,Math.max(0,u)),mt=!0,B.classList.add("is-gnb-menu-scrolling"),K?.classList.remove("is-hidden"),go(1200),window.scrollTo({top:pt,behavior:he.matches?"auto":"smooth"})};let no=0;const Ce=()=>{cancelAnimationFrame(no),no=requestAnimationFrame(()=>{kr(),Tr(),Er()})},ho=o=>{B.dataset.theme=o,lo.setAttribute("aria-pressed",String(o==="dark")),localStorage.setItem("portfolio-theme",o)},Cr=localStorage.getItem("portfolio-theme")||"light",wo=()=>window.performance.getEntriesByType("navigation")[0]?.type||"navigate";he.addEventListener?.("change",()=>{mo(),$e()});mo();const ft=_o(at,Ko,mr);Pe=[...document.querySelectorAll("[data-project]")];gt({force:!0});ho(Cr);fo(0);const Rr=()=>{const o=window.location.hash?window.location.hash.slice(1):"",r=wo()==="back_forward",a=o||(r?cr(co):""),u=a?document.getElementById(a):null;o&&window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}`),u&&u.scrollIntoView({block:"center",behavior:"auto"})};Rr();wo()==="reload"&&window.requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}));lo.addEventListener("click",()=>{ho(B.dataset.theme==="dark"?"light":"dark")});M.forEach((o,r)=>{o.addEventListener("click",()=>{const a=r===I?I+1:r;a<M.length&&so(a)}),o.addEventListener("keydown",a=>{const u={ArrowDown:Math.min(I+1,M.length-1),ArrowRight:Math.min(I+1,M.length-1),ArrowUp:Math.max(I-1,0),ArrowLeft:Math.max(I-1,0),Home:0,End:M.length-1};a.key in u&&(a.preventDefault(),so(u[a.key]),M[u[a.key]].focus({preventScroll:!0}))})});tr.forEach(o=>{o.addEventListener("click",r=>{const a=document.querySelector(o.hash);a&&(r.preventDefault(),$r(a))})});Jt?.addEventListener("click",o=>{const r=o.target.closest(".project-link");!r||!Jt.contains(r)||!gr(o,r)||(pr(r.closest(".project-section")?.dataset.analyticsId),o.preventDefault(),yr(r))});window.addEventListener("scroll",Pr,{passive:!0});window.addEventListener("scroll",Ce,{passive:!0});window.addEventListener("scroll",$e,{passive:!0});window.addEventListener("resize",()=>{gt(),Ce(),$e()});po.addEventListener?.("change",()=>{gt({force:!0}),Ce()});window.addEventListener("pagehide",()=>ft?.resetModal());window.addEventListener("pageshow",()=>{ft?.resetModal(),ft?.syncModalWithHistory(),br()});Ce();$e();
