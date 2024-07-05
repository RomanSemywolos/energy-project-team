import{a as l,b as A,P as q}from"./assets/vendor-a6d4c47e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const y=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),G=document.querySelector(".daily-quote"),{BASE_URL:B,QUOTE:O}=y;l.defaults.baseURL=B;const U=async()=>{try{const t=await l.get(O);N(t.data)}catch(t){console.error(t)}},N=({author:t,quote:e})=>{G.innerHTML=`<p class="daily-quote-text">${e}</p>
    <h4 class="daily-quote-author">${t}</h4>`};U();const{BASE_URL:F,FILTERS:M}=y;l.defaults.baseURL=F;const b=async(t="Muscles",e=1,r=12)=>{const o=new URLSearchParams({filter:t,limit:r,page:e});return(await l.get(`${M}?${o}`)).data},n={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},L="selected-category",E="selected-group",p="is-exercises-list-visible",h="group-page",S="exercises-page",v="exercises-keyword",j="Muscles";class k{setExercisesListVisible(){sessionStorage.setItem(p,"true")}setExercisesListHidden(){sessionStorage.setItem(p,"false")}isExercisesListVisible(){return sessionStorage.getItem(p)==="true"}setFilterCategory(e){sessionStorage.setItem(L,e)}getFilterCategory(){return sessionStorage.getItem(L)??j}setGroup(e){sessionStorage.setItem(E,e)}getGroup(){return sessionStorage.getItem(E)??""}setGroupPage(e){sessionStorage.setItem(h,e.toString())}getGroupPage(){const e=sessionStorage.getItem(h);return e?Number(e):1}getExercisesPage(){const e=sessionStorage.getItem(S);return e?Number(e):1}setExercisesPage(e){sessionStorage.setItem(S,e.toString())}setExercisesKeyword(e){sessionStorage.setItem(v,e)}getExercisesKeyword(){return sessionStorage.getItem(v)??""}}const a=new k;function H(t){return t.map(({filter:e,name:r,imgURL:o})=>{const s=`data-filter="${e}"`,i=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${i}>
          <img class="group-list-card-img" src="${o}" alt="${e} - ${r}" ${s} ${i}></img>
          <div class="group-list-card-info" ${s} ${i}>
          <h2 class="group-list-card-title" ${s} ${i}>${r}</h2>
          <p class="group-list-card-text" ${s} ${i}>${e}</p>
          </div>
        </li>
      `}).join("")}function D(){const t=n.groupList;t.style.opacity="0",A({targets:t,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{n.groupListPagination.style.display="flex"}})}function P(t,e){t.innerHTML="",D(),t.insertAdjacentHTML("beforeend",H(e)),V(),t.querySelectorAll(".group-list-card").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-group");W(s)})})}function W(t){const e=document.querySelector(".exercises_name");e.textContent=`/ ${t}`,e.style.display="block",e.style.textTransform="capitalize"}function V(){const t=document.querySelector(".exercises_name");t.style.display="none"}function Q({currentPage:t,perPage:e,totalItems:r,totalPages:o,onChange:s}){const i="js-group-list-pagination",c=n.groupListPagination;o>1&&!a.isExercisesListVisible()?c.classList.remove("is-hidden"):c.classList.add("is-hidden");const u={page:Number(t),itemsPerPage:e,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new q(i,u).on("beforeMove",d=>{const T=d.page;s(T)})}async function K(t){const e=a.getFilterCategory(),r=await b(e,t),{results:o}=r,s=n.groupList;P(s,o)}async function C({page:t,filter:e}){const r=await b(e,t),{results:o,page:s,perPage:i,totalPages:c}=r,u=c*i;Q({currentPage:s,perPage:i,totalItems:u,totalPages:c,onChange:d=>{a.setGroupPage(d),K(d)}});const x=n.groupList;P(x,o)}function I(){a.setExercisesListVisible(),n.groupListWrapper.classList.add("is-hidden"),n.exercisesWrapper.classList.remove("is-hidden")}function $(){a.setExercisesListHidden(),n.groupListWrapper.classList.remove("is-hidden"),n.exercisesWrapper.classList.add("is-hidden")}const X=document.querySelector(".exercises_nav"),Y=async t=>{try{let e=t.target,r=document.querySelector(".exercises__nav-item-current");((i,c)=>{i.classList.remove("exercises__nav-item-current"),c.classList.add("exercises__nav-item-current")})(r,e);const s=t.target.textContent.trim();n.groupList.innerHTML="",$(),a.setFilterCategory(s),a.setGroupPage(1),a.setExercisesPage(1),a.setExercisesKeyword(""),n.groupListPagination.style.display="none",C({page:1,filter:s})}catch(e){console.error(e)}};X.addEventListener("click",Y);const{BASE_URL:z,EXERCISES:J}=y;l.defaults.baseURL=z;const _=async(t,e,r=1,o=10)=>{const s=new URLSearchParams({[t]:e,limit:o,page:r});return(await l.get(`${J}?${s}`)).data},Z=document.querySelector(".exercises_search-img"),g=document.querySelector(".exercises_criss-cross-img"),f=document.querySelector(".exercises_search-input"),ee=async()=>{const t=await _("abs","heel");console.log(t.data)};Z.addEventListener("click",ee);g.addEventListener("click",()=>{f.value="",g.style.display="none"});f.addEventListener("input",()=>{f.value.length>0?g.style.display="block":g.style.display="none"});function m(t){return t.charAt(0).toUpperCase()+t.slice(1)}function te(t){return t.map(({_id:e,bodyPart:r,target:o,rating:s,burnedCalories:i,time:c,name:u})=>`<li id="${e}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${s}</span>
              <svg width="34" height="32">
                <use href="./img/icons.svg#star"></use>
              </svg>
            </span>
            <button class="exercise-card-header-btn" data-button-id="${e}">
              Start
              <svg class="exercise-card-header-btn-icon" width="32" height="32">
               <use href="./img/icons.svg#arrow"></use>
              </svg>
              </svg>
            </button>
          </div>
          <div class="exercise-card-content-holder">
            <div class="exercise-card-title-holder">
              <span class="exercise-card-title-icon" >
                <svg width="24" height="24">
                  <use href="./img/icons.svg#running-stick-figure-boder"></use>
                </svg>
              </span>
              <div class="exercise-card-title-name">${m(u)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${i} / ${c} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${m(r)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${m(o)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function se(t,e){if(t.innerHTML="",!e||e.length===0){t.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}t.insertAdjacentHTML("beforeend",te(e))}const re={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function R(){let t=a.getFilterCategory(),e=a.getGroup();t=t.toLowerCase().split(" ").join(""),t===re.BODY_PARTS&&(t=t.slice(0,-1)),e=e==null?void 0:e.toLowerCase();const r=a.getExercisesPage(),o=await _(t,e,r);se(n.exercisesWrapper,o.results)}const ie=a.getGroupPage(),w=a.getFilterCategory();n.groupListPagination.style.display="none";C({page:ie,filter:w});a.isExercisesListVisible()?(R(),I()):$();n.exercisesNavList.forEach(t=>{t.textContent.trim()===w&&t.classList.add("exercises__nav-item-current")});n.groupList.addEventListener("click",t=>{let e=t.target.dataset.filter,r=t.target.dataset.group;r=r==null?void 0:r.toLowerCase(),e&&r&&(a.setGroup(r),a.setFilterCategory(e),R(),I())});
//# sourceMappingURL=commonHelpers2.js.map
