import{a as p,b as W,P as Q}from"./assets/vendor-a6d4c47e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const C=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),V=document.querySelector(".daily-quote"),{BASE_URL:X,QUOTE:K}=C;p.defaults.baseURL=X;const F=new Date().toISOString().split("T")[0],z=async()=>{const e=await p.get(K);return{quote:e.data.quote,author:e.data.author,date:F}},P=({author:e,quote:t})=>{V.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},Y=async()=>{const e=localStorage.getItem("quote");if(e){const r=JSON.parse(e);if(r.date===F){P(r);return}}const t=await z();localStorage.setItem("quote",JSON.stringify(t)),P(t)};Y();const{BASE_URL:J,FILTERS:Z}=C;p.defaults.baseURL=J;const A=async(e="Muscles",t=1,r=12)=>{const o=new URLSearchParams({filter:e,limit:r,page:t});return(await p.get(`${Z}?${o}`)).data},c={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},w="selected-category",T="selected-group",S="is-exercises-list-visible",M="group-page",R="exercises-page",q="exercises-keyword",ee="Muscles";class te{setExercisesListVisible(){sessionStorage.setItem(S,"true")}setExercisesListHidden(){sessionStorage.setItem(S,"false")}isExercisesListVisible(){return sessionStorage.getItem(S)==="true"}setFilterCategory(t){sessionStorage.setItem(w,t)}getFilterCategory(){return sessionStorage.getItem(w)??ee}setGroup(t){sessionStorage.setItem(T,t)}getGroup(){return sessionStorage.getItem(T)??""}setGroupPage(t){sessionStorage.setItem(M,t.toString())}getGroupPage(){const t=sessionStorage.getItem(M);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(R);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(R,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(q,t)}getExercisesKeyword(){return sessionStorage.getItem(q)??""}}const n=new te;function se(e){return e.map(({filter:t,name:r,imgURL:o})=>{const s=`data-filter="${t}"`,i=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${i}>
          <img class="group-list-card-img" src="${o}" alt="${t} - ${r}" ${s} ${i}></img>
          <div class="group-list-card-info" ${s} ${i}>
          <h2 class="group-list-card-title" ${s} ${i}>${r}</h2>
          <p class="group-list-card-text" ${s} ${i}>${t}</p>
          </div>
        </li>
      `}).join("")}function re(){const e=c.groupList;e.style.opacity="0",W({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{c.groupListPagination.style.display="flex"}})}function G(e,t){e.innerHTML="",re(),e.insertAdjacentHTML("beforeend",se(t)),oe(),e.querySelectorAll(".group-list-card").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-group");ie(s)})})}function ie(e){const t=document.querySelector(".exercises_name");t.textContent=`/ ${e}`,t.style.display="block",t.style.textTransform="capitalize"}function oe(){const e=document.querySelector(".exercises_name");e.style.display="none"}function ae({currentPage:e,perPage:t,totalItems:r,totalPages:o,onChange:s}){const i="js-group-list-pagination",a=c.groupListPagination;o>1&&!n.isExercisesListVisible()?a.classList.remove("is-hidden"):a.classList.add("is-hidden");const l={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new Q(i,l).on("beforeMove",d=>{const m=d.page;s(m)})}async function ne(e){const t=n.getFilterCategory(),r=await A(t,e),{results:o}=r,s=c.groupList;G(s,o)}async function k({page:e,filter:t}){const r=await A(t,e),{results:o,page:s,perPage:i,totalPages:a}=r,l=a*i;ae({currentPage:s,perPage:i,totalItems:l,totalPages:a,onChange:d=>{n.setGroupPage(d),ne(d)}});const u=c.groupList;G(u,o)}function ce(){n.setExercisesListVisible(),c.groupListWrapper.classList.add("is-hidden"),c.exercisesWrapper.classList.remove("is-hidden")}function B(){n.setExercisesListHidden(),c.groupListWrapper.classList.remove("is-hidden"),c.exercisesWrapper.classList.add("is-hidden")}const le=document.querySelector(".exercises_nav"),de=async e=>{try{let t=e.target,r=document.querySelector(".exercises__nav-item-current");((i,a)=>{i.classList.remove("exercises__nav-item-current"),a.classList.add("exercises__nav-item-current")})(r,t);const s=e.target.textContent.trim();c.groupList.innerHTML="",B(),n.setFilterCategory(s),n.setGroupPage(1),n.setExercisesPage(1),n.setExercisesKeyword(""),c.groupListPagination.style.display="none",k({page:1,filter:s})}catch(t){console.error(t)}};le.addEventListener("click",de);const{BASE_URL:ue,EXERCISES:N}=C;p.defaults.baseURL=ue;const O=async(e,t,r=1,o=10)=>{const s=new URLSearchParams({[e]:t,limit:o,page:r});return(await p.get(`${N}?${s}`)).data},ge=async e=>(await p.get(`${N}/${e}`)).data,pe=document.querySelector(".exercises_search-img"),y=document.querySelector(".exercises_criss-cross-img"),$=document.querySelector(".exercises_search-input"),me=async()=>{const e=await O("abs","heel");console.log(e.data)};pe.addEventListener("click",me);y.addEventListener("click",()=>{$.value="",y.style.display="none"});$.addEventListener("input",()=>{$.value.length>0?y.style.display="block":y.style.display="none"});const g="/energy-project-team/assets/icons-d02f50f9.svg";function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}function fe(e){return e.map(({_id:t,bodyPart:r,target:o,rating:s,burnedCalories:i,time:a,name:l})=>`<li id="${t}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${s}</span>
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
                <span class="exercise-card-info-text">${i} / ${a} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${b(r)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${b(o)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function xe(e,t){if(e.innerHTML="",!t||t.length===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}e.insertAdjacentHTML("beforeend",fe(t))}const ye={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function he(){let e=n.getFilterCategory(),t=n.getGroup();e=e.toLowerCase().split(" ").join(""),e===ye.BODY_PARTS&&(e=e.slice(0,-1)),t=t==null?void 0:t.toLowerCase();const r=n.getExercisesPage(),o=await O(e,t,r);xe(c.exercisesWrapper,o.results)}const ve=n.getGroupPage(),H=n.getFilterCategory();c.groupListPagination.style.display="none";k({page:ve,filter:H});n.isExercisesListVisible()?(he(),ce()):B();c.exercisesNavList.forEach(e=>{e.textContent.trim()===H&&e.classList.add("exercises__nav-item-current")});let x=!1,D;const v=document.querySelector(".modal-exercises"),h=document.querySelector(".overlay"),_e=document.querySelector(".exercises-list-wrapper");_e.addEventListener("click",Le);async function Le(e){if(e.target.closest(".exercise-card-header-btn"))try{const t=e.target.closest(".exercise-card-header-btn").getAttribute("data-id"),r=await ge(e);console.log(r),console.log("Exercise Data:",r),D=t;const o=$e(r);console.log("Generated Markup:",o),Se(o),Ee(),document.querySelector(".modal-exercises__btn-favorites").addEventListener("click",Ie),document.querySelector(".modal-exercises__btn-close").addEventListener("click",I)}catch(t){console.log(t)}}function Ee(){const e=window.innerWidth-document.body.offsetWidth+"px";v.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Se(e){v.innerHTML=e,Ce()}function be(e){const t="#EEA10C",r="#F4F4F4";let s="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,m=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:r,opacity:"0.20"}],_=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${m.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,L=`url(#${u})`;s+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${_}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${L}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${s}`}function $e({_id:e,bodyPart:t,equipment:r,gifUrl:o,name:s,target:i,description:a,rating:l,burnedCalories:u,time:d,popularity:m}){const _=L(o);function L(E){return E===null||!E?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${E}"`}const f=be(l);return`
  <div class="modal-exercises__container" data-id="${e}">
    <button class="modal-exercises__btn-close">
      <svg width="24" height="24">
        <use href="${g}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises__img"
    ${_}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises__card">
      <h2 class="modal-exercises__name">${s}</h2>
      <div class="modal-exercises__rating">${f}</div>

        <div class="modal-exercises__block">
          <ul class="modal-exercises__list">
            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Target</h3>
              <p class="modal-exercises__text">${i}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Body Part</h3>
              <p class="modal-exercises__text">${t}</p>
            </li>

            <li class="modal-exercises__item">
              <h3 class="modal-exercises__subtitle">Equipment</h3>
              <p class="modal-exercises__text">${r}</p>
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
          <p class="modal-exercises__description">${a}</p>
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
`}function I(){v.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h.addEventListener("click",function(e){e.target===h&&I()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!v.classList.contains("hidden")&&I()});function Ce(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises__btn-favorites");e!=null&&e.some(r=>r._id===D)?(x=!0,t.innerHTML=j()):(x=!1,t.innerHTML=U())}function Ie(){x=!x;const e=document.querySelector(".modal-exercises__btn-favorites"),t=document.querySelector(".favorites__list");x?(e.innerHTML=j(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=U(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function U(){return`
  Add to favorites
    <svg class="btn-favorites__icon">
    <use href="${g}#heart"></use>
    </svg>`}function j(){return`
  Remove from favorites
  <svg class="btn-favorites__icon">
    <use href="${g}#trash"></use>
  </svg>`}
//# sourceMappingURL=commonHelpers2.js.map
