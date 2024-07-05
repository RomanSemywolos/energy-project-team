import{a as p,b as V,P as X}from"./assets/vendor-a6d4c47e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const C=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),K=document.querySelector(".daily-quote"),{BASE_URL:z,QUOTE:Y}=C;p.defaults.baseURL=z;const F=new Date().toISOString().split("T")[0],J=async()=>{const e=await p.get(Y);return{quote:e.data.quote,author:e.data.author,date:F}},w=({author:e,quote:t})=>{K.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},Z=async()=>{const e=localStorage.getItem("quote");if(e){const s=JSON.parse(e);if(s.date===F){w(s);return}}const t=await J();localStorage.setItem("quote",JSON.stringify(t)),w(t)};Z();const{BASE_URL:ee,FILTERS:te}=C;p.defaults.baseURL=ee;const A=async(e="Muscles",t=1,s=12)=>{const i=new URLSearchParams({filter:e,limit:s,page:t});return(await p.get(`${te}?${i}`)).data},c={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},I="selected-category",M="selected-group",S="is-exercises-list-visible",T="group-page",q="exercises-page",R="exercises-keyword",se="Muscles";class re{setExercisesListVisible(){sessionStorage.setItem(S,"true")}setExercisesListHidden(){sessionStorage.setItem(S,"false")}isExercisesListVisible(){return sessionStorage.getItem(S)==="true"}setFilterCategory(t){sessionStorage.setItem(I,t)}getFilterCategory(){return sessionStorage.getItem(I)??se}setGroup(t){sessionStorage.setItem(M,t)}getGroup(){return sessionStorage.getItem(M)??""}setGroupPage(t){sessionStorage.setItem(T,t.toString())}getGroupPage(){const t=sessionStorage.getItem(T);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(q);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(q,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(R,t)}getExercisesKeyword(){return sessionStorage.getItem(R)??""}}const a=new re;function oe(e){return e.map(({filter:t,name:s,imgURL:i})=>{const r=`data-filter="${t}"`,o=`data-group="${s}"`;return`
        <li class="group-list-card" ${r} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${s}" ${r} ${o}></img>
          <div class="group-list-card-info" ${r} ${o}>
          <h2 class="group-list-card-title" ${r} ${o}>${s}</h2>
          <p class="group-list-card-text" ${r} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function ie(){const e=c.groupList;e.style.opacity="0",V({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{c.groupListPagination.style.display="flex"}})}function G(e,t){e.innerHTML="",ie(),e.insertAdjacentHTML("beforeend",oe(t)),ne(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-group");ae(r)})})}function ae(e){const t=document.querySelector(".exercises_name");t.textContent=`/ ${e}`,t.style.display="block",t.style.textTransform="capitalize"}function ne(){const e=document.querySelector(".exercises_name");e.style.display="none"}function ce({currentPage:e,perPage:t,totalItems:s,totalPages:i,onChange:r}){const o="js-group-list-pagination",n=c.groupListPagination;i>1&&!a.isExercisesListVisible()?n.classList.remove("is-hidden"):n.classList.add("is-hidden");const l={page:Number(e),itemsPerPage:t,totalItems:s,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new X(o,l).on("beforeMove",d=>{const m=d.page;r(m)})}async function le(e){const t=a.getFilterCategory(),s=await A(t,e),{results:i}=s,r=c.groupList;G(r,i)}async function k({page:e,filter:t}){const s=await A(t,e),{results:i,page:r,perPage:o,totalPages:n}=s,l=n*o;ce({currentPage:r,perPage:o,totalItems:l,totalPages:n,onChange:d=>{a.setGroupPage(d),le(d)}});const u=c.groupList;G(u,i)}function B(){a.setExercisesListVisible(),c.groupListWrapper.classList.add("is-hidden"),c.exercisesWrapper.classList.remove("is-hidden")}function O(){a.setExercisesListHidden(),c.groupListWrapper.classList.remove("is-hidden"),c.exercisesWrapper.classList.add("is-hidden")}const de=document.querySelector(".exercises_nav"),ue=async e=>{try{let t=e.target,s=document.querySelector(".exercises__nav-item-current");((o,n)=>{o.classList.remove("exercises__nav-item-current"),n.classList.add("exercises__nav-item-current")})(s,t);const r=e.target.textContent.trim();c.groupList.innerHTML="",O(),a.setFilterCategory(r),a.setGroupPage(1),a.setExercisesPage(1),a.setExercisesKeyword(""),c.groupListPagination.style.display="none",k({page:1,filter:r})}catch(t){console.error(t)}};de.addEventListener("click",ue);const{BASE_URL:ge,EXERCISES:N}=C;p.defaults.baseURL=ge;const H=async(e,t,s=1,i=10)=>{const r=new URLSearchParams({[e]:t,limit:i,page:s});return(await p.get(`${N}?${r}`)).data},pe=async e=>(await p.get(`${N}/${e}`)).data,me=document.querySelector(".exercises_search-img"),y=document.querySelector(".exercises_criss-cross-img"),$=document.querySelector(".exercises_search-input"),fe=async()=>{const e=await H("abs","heel");console.log(e.data)};me.addEventListener("click",fe);y.addEventListener("click",()=>{$.value="",y.style.display="none"});$.addEventListener("input",()=>{$.value.length>0?y.style.display="block":y.style.display="none"});const g="/energy-project-team/assets/icons-001fdf71.svg";function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xe(e){return e.map(({_id:t,bodyPart:s,target:i,rating:r,burnedCalories:o,time:n,name:l})=>`<li id="${t}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${r}</span>
              <svg width="34" height="32">
                <use href="${g}#star"></use>
              </svg>
            </span>
            <button class="exercise-card-header-btn" data-button-id="${t}">
              Start
              <svg class="exercise-card-header-btn-icon" width="32" height="32">
               <use href="${g}#arrow"></use>
              </svg>
              </svg>
            </button>
          </div>
          <div class="exercise-card-content-holder">
            <div class="exercise-card-title-holder">
              <span class="exercise-card-title-icon" >
                <svg width="24" height="24">
                  <use href="${g}#running-stick-figure-boder"></use>
                </svg>
              </span>
              <div class="exercise-card-title-name">${b(l)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${o} / ${n} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${b(s)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${b(i)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function ye(e,t){if(e.innerHTML="",!t||t.length===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}e.insertAdjacentHTML("beforeend",xe(t))}const he={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function U(){let e=a.getFilterCategory(),t=a.getGroup();e=e.toLowerCase().split(" ").join(""),e===he.BODY_PARTS&&(e=e.slice(0,-1)),t=t==null?void 0:t.toLowerCase();const s=a.getExercisesPage(),i=await H(e,t,s);ye(c.exercisesWrapper,i.results)}const ve=a.getGroupPage(),D=a.getFilterCategory();c.groupListPagination.style.display="none";k({page:ve,filter:D});a.isExercisesListVisible()?(U(),B()):O();c.exercisesNavList.forEach(e=>{e.textContent.trim()===D&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),s=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team.git/")&&(s.classList.remove("current-page"),t.classList.add("current-page")),e.href===s.href&&(t.classList.remove("current-page"),s.classList.add("current-page"))});c.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,s=e.target.dataset.group;s=s==null?void 0:s.toLowerCase(),t&&s&&(a.setGroup(s),a.setFilterCategory(t),U(),B())});let x=!1,j;const v=document.querySelector(".modal-exercises"),h=document.querySelector(".overlay"),Le=document.querySelector(".exercises-list-wrapper");Le.addEventListener("click",_e);async function _e(e){if(e.target.closest(".exercise-card-header-btn"))try{const t=e.target.closest(".exercise-card-header-btn").getAttribute("data-id"),s=await pe(e);console.log(s),console.log("Exercise Data:",s),j=t;const i=$e(s);console.log("Generated Markup:",i),Se(i),Ee(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",Pe),document.querySelector(".modal-exercises__btn-close").addEventListener("click",P)}catch(t){console.log(t)}}function Ee(){const e=window.innerWidth-document.body.offsetWidth+"px";v.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Se(e){v.innerHTML=e,Ce()}function be(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,m=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:s,opacity:"0.20"}],L=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${m.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,_=`url(#${u})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${L}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${_}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function $e({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:o,description:n,rating:l,burnedCalories:u,time:d,popularity:m}){const L=_(i);function _(E){return E===null||!E?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${E}"`}const f=be(l);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${g}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${L}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${r}</h2>
      <div class="modal-exercises__rating">${f}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${o}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${t}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${s}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Popular</h3>
              <p class="modal-exercises__text">${m}</p>
            </li>
            
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Burned Calories</h3>
              <p class="modal-exercises__text">${u}/${d}</p>
            </li>
          </ul>
          <p class="modal-exercises__description">${n}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises__btn-container">
  <button class="modal-exercises__btn-favorites modal-exercises__btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites__icon">
        <use href="${g}#heart"></use>
      </svg>
    </button>
 
</div>
`}function P(){v.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h.addEventListener("click",function(e){e.target===h&&P()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!v.classList.contains("hidden")&&P()});function Ce(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(s=>s._id===j)?(x=!0,t.innerHTML=Q()):(x=!1,t.innerHTML=W())}function Pe(){x=!x;const e=document.querySelector(".modal-exercises__btn-favorites"),t=document.querySelector(".favorites__list");x?(e.innerHTML=Q(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=W(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function W(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${g}#heart"></use>
    </svg>`}function Q(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${g}#trash"></use>
  </svg>`}
//# sourceMappingURL=commonHelpers2.js.map
