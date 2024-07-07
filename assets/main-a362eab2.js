import{a as g,b as ce,P as K,i as A}from"./vendor-c952f842.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const S=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),le=document.querySelector(".daily-quote"),{BASE_URL:de,QUOTE:ue}=S;g.defaults.baseURL=de;const Q=new Date().toISOString().split("T")[0],ge=async()=>{const e=await g.get(ue);return{quote:e.data.quote,author:e.data.author,date:Q}},O=({author:e,quote:t})=>{le.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},pe=async()=>{const e=localStorage.getItem("quote");if(e){const r=JSON.parse(e);if(r.date===Q){O(r);return}}const t=await ge();localStorage.setItem("quote",JSON.stringify(t)),O(t)};pe();const{BASE_URL:me,FILTERS:fe}=S;g.defaults.baseURL=me;const F=async(e,t=1,r=12)=>{const i=new URLSearchParams({filter:e,limit:r,page:t});return(await g.get(`${fe}?${i}`)).data};document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");try{const r=await F(t)}catch(r){console.error("Error fetching categories:",r)}})});const a={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper"),exercisesListPagination:document.getElementById("js-exercises-list-pagination"),search:document.querySelector(".exercises_search"),searchField:document.querySelector(".exercises_search"),searchInput:document.querySelector(".exercises_search-input"),clearSearchButton:document.querySelector(".exercises_criss-cross-img"),exrciseSlash:document.querySelector(".slash")},N="selected-category",G="selected-group",I="is-exercises-list-visible",D="group-page",U="exercises-page",H="exercises-keyword",ye="Muscles";class he{setExercisesListVisible(){sessionStorage.setItem(I,"true")}setExercisesListHidden(){sessionStorage.setItem(I,"false")}isExercisesListVisible(){return sessionStorage.getItem(I)==="true"}setFilterCategory(t){sessionStorage.setItem(N,t)}getFilterCategory(){return sessionStorage.getItem(N)??ye}setGroup(t){sessionStorage.setItem(G,t)}getGroup(){return sessionStorage.getItem(G)??""}setGroupPage(t){sessionStorage.setItem(D,t.toString())}getGroupPage(){const t=sessionStorage.getItem(D);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(U);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(U,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(H,t)}getExercisesKeyword(){return sessionStorage.getItem(H)??""}}const c=new he;function ve(e){return e.map(({filter:t,name:r,imgURL:i})=>{const s=`data-filter="${t}"`,o=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${r}" ${s} ${o}></img>
          <div class="group-list-card-info" ${s} ${o}>
          <h2 class="group-list-card-title" ${s} ${o}>${r}</h2>
          <p class="group-list-card-text" ${s} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function xe(){const e=a.groupList;e.style.opacity="0",ce({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{a.groupListPagination.style.display="flex"}})}function J(e,t){if(!e)return;e.innerHTML="",xe(),e.insertAdjacentHTML("beforeend",ve(t)),Se(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-group");Le(s)})})}function Le(e){const t=document.querySelector(".exercises_name");a.exrciseSlash.style.display="inline",t.textContent=`${e}`,t.style.display="block",t.style.textTransform="capitalize"}function Se(){const e=document.querySelector(".exercises_name");e.style.display="none"}function be({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.groupListPagination;if(!o)return;i>1&&!c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new K("js-group-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}async function Ee(e){const t=c.getFilterCategory(),r=await F(t,e),{results:i}=r,s=a.groupList;J(s,i)}async function V({page:e,filter:t}){const r=await F(t,e),{results:i,page:s,perPage:o,totalPages:n}=r,l=n*o;be({currentPage:s,perPage:o,totalItems:l,totalPages:n,onChange:d=>{c.setGroupPage(d),Ee(d)}});const u=a.groupList;J(u,i)}function X(){c.setExercisesListVisible(),a.groupListWrapper.classList.add("is-hidden"),a.exercisesWrapper.classList.remove("is-hidden"),a.exercisesListPagination.classList.remove("is-hidden"),a.search.style.display="block"}function $e(){c.setExercisesListHidden(),a.groupListWrapper.classList.remove("is-hidden"),a.exercisesWrapper.classList.add("is-hidden"),a.exercisesListPagination.classList.add("is-hidden"),a.search.style.display="none"}const j=document.querySelector(".exercises_nav"),we=async e=>{try{let t=e.target.closest("a");if(!t)return;let r=document.querySelector(".exercises__nav-item-current");((o,n)=>{o.classList.remove("exercises__nav-item-current"),n.classList.add("exercises__nav-item-current")})(r,t),a.searchField.style.display="none",a.exrciseSlash.style.display="none",Pe();const s=e.target.textContent.trim();a.groupList.innerHTML="",$e(),c.setFilterCategory(s),c.setGroupPage(1),c.setExercisesPage(1),c.setExercisesKeyword(""),a.groupListPagination&&(a.groupListPagination.style.display="none"),V({page:1,filter:s})}catch(t){console.error(t)}},Pe=()=>{a.searchInput.value="",a.clearSearchButton.style.display="none"};j&&j.addEventListener("click",we);const p="/energy-project-team/assets/icons-e87e2418.svg",{BASE_URL:Ce,EXERCISES:Y}=S;g.defaults.baseURL=Ce;const z=async(e,t,r="",i=1,s=10)=>{const o=new URLSearchParams({[e]:t,keyword:r,limit:s,page:i}),n=await g.get(`${Y}?${o}`);a.searchField.style.display="block";const l=document.querySelector(".exercises_search-input").value.toLowerCase(),u=n.data.results.filter(d=>d.name.toLowerCase().includes(l));return{...n.data,results:u}},Ie=async e=>(await g.get(`${Y}/${e}`)).data;let y=!1,qe;const b=document.querySelector(".modal-exercises"),L=document.querySelector(".overlay");document.querySelector(".exercise-card-header-btn");function Re(){const e=window.innerWidth-document.body.offsetWidth+"px";b.classList.remove("hidden"),L.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function _e(e){b.innerHTML=e,Me()}function Te(e){const t="#EEA10C",r="#F4F4F4";let s="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,$=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:r,opacity:"0.20"}],w=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${$.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,P=`url(#${u})`;s+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${w}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${P}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${s}`}function Fe({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:s,target:o,description:n,rating:l,burnedCalories:u,time:d,popularity:$}){const w=P(i);function P(C){return C===null||!C?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${C}"`}const f=Te(l);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${p}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${w}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${s}</h2>
      <div class="modal-exercises-rating">${f}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${o}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Body Part</h3>
              <p class="modal-exercises-text">${t}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Equipment</h3>
              <p class="modal-exercises-text">${r}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Popular</h3>
              <p class="modal-exercises-text">${$}</p>
            </li>
            
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${u}/${d}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${n}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises-btn-container">
  <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites-icon">
        <use href="${p}#heart"></use>
      </svg>
    </button>
 
</div>
`}function E(){b.classList.add("hidden"),L.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto";const e=document.querySelector(".modal-exercises-btn-favorites"),t=document.querySelector(".modal-exercises-btn-close");e.removeEventListener("click",Z),t.removeEventListener("click",E)}L.addEventListener("click",function(e){e.target===L&&E()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!b.classList.contains("hidden")&&E()});function Me(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises-btn-favorites");e!=null&&e.some(r=>r._id===qe)?(y=!0,t.innerHTML=te()):(y=!1,t.innerHTML=ee())}function Z(){y=!y;const e=document.querySelector(".modal-exercises-btn-favorites");if(!e){console.error("Element  not found.");return}const t=e.getAttribute("data-id");if(!t){console.error("Element  not have.");return}let r=JSON.parse(localStorage.getItem("favorites"))||[];if(y)r.push({id:t}),localStorage.setItem("favorites",JSON.stringify(r)),e.innerHTML=te();else{const i=r.findIndex(s=>s.id===t);i!==-1&&(r.splice(i,1),localStorage.setItem("favorites",JSON.stringify(r))),e.innerHTML=ee()}}function ee(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${p}#heart"></use>
    </svg>`}function te(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${p}#trash"></use>
  </svg>`}function q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function se(e){return e.map(({_id:t,bodyPart:r,target:i,rating:s,burnedCalories:o,time:n,name:l})=>`<li id="${t}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${s.toFixed(1)}</span>
              <svg width="34" height="32">
                <use href="${p}#star"></use>
              </svg>
            </span>
            <button class="exercise-card-header-btn" data-button-id="${t}">
              Start
              <svg class="exercise-card-header-btn-icon" width="32" height="32">
                <use href="${p}#arrow"></use>
              </svg>
              </svg>
            </button>
          </div>
          <div class="exercise-card-content-holder">
            <div class="exercise-card-title-holder">
              <span class="exercise-card-title-icon" >
                <svg width="20" height="20">
                  <use href="${p}#running-stick-figure"></use>
                </svg>
              </span>
              <div class="exercise-card-title-name">${q(l)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${o} / ${n} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${q(r)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${q(i)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function re(e,t){if(e.innerHTML="",(t==null?void 0:t.length)===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}async function r(i){try{const s=await Ie(i);console.log("Exercise Data:",s);const o=Fe(s);_e(o),Re(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",Z),document.querySelector(".modal-exercises-btn-close").addEventListener("click",E)}catch(s){console.error("ERROR:",s)}}e.addEventListener("click",function(i){const s=i.target.closest(".exercise-card-header-btn");if(s){const o=s.getAttribute("data-button-id");console.log(`Button with id ${o} was clicked.`),r(o)}}),e.insertAdjacentHTML("beforeend",se(t))}const oe={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};function Be({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.exercisesListPagination;if(!o)return;i>1&&c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new K("js-exercises-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}const ie=document.querySelector(".exercises_search-input");async function ke(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===oe.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesPage(),s=c.getExercisesKeyword(),o=await z(e,r,s,i);ie.value=s??"",re(a.exercisesWrapper,o.results)}async function ae(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===oe.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesKeyword(),s=await z(e,r,i);ie.value=i??"",re(a.exercisesWrapper,s.results);const o=s.totalPages*s.perPage;Be({currentPage:s.page,perPage:s.perPage,totalItems:o,totalPages:s.totalPages,visiblePages:s.totalPages,onChange:n=>{c.setExercisesPage(n),ke()}})}const W=document.querySelector(".exercises_search-img"),h=document.querySelector(".exercises_criss-cross-img"),m=document.querySelector(".exercises_search-input"),M=async()=>{const e=m.value.trim();c.setExercisesKeyword(e),ae(),X()};W&&W.addEventListener("click",M);h&&h.addEventListener("click",()=>{m.value="",h.style.display="none",M()});m&&(m.addEventListener("input",()=>{m.value.length>0?h.style.display="block":h.style.display="none"}),m.addEventListener("keypress",e=>{e.key==="Enter"&&M()}));const B="Muscles";c.setGroupPage(1);c.setFilterCategory(B);a.groupListPagination&&(a.groupListPagination.style.display="none");V({page:1,filter:B});a.exercisesNavList.forEach(e=>{e.textContent.trim()===B&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),r=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team/")&&(r.classList.remove("current-page"),t.classList.add("current-page")),e.href===r.href&&(t.classList.remove("current-page"),r.classList.add("current-page"))});function Ae(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile"),r=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),r.classList.toggle("overlow")})}Ae();a.groupList&&a.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,r=e.target.dataset.group;r=r==null?void 0:r.toLowerCase(),t&&r&&(c.setGroup(r),c.setFilterCategory(t),ae(),X())});const R=document.querySelector(".scrollup-btn"),Oe=function(){window.scrollY<300?R.classList.add("visually-hidden"):R.classList.remove("visually-hidden")};window.addEventListener("scroll",Oe);R.addEventListener("click",Ne);function Ne(){window.scrollTo({top:0,behavior:"smooth"})}function Ge(e){let t=k();if(!t.find(s=>s._id===e))return!1;const i=t.filter(s=>s._id!==e);return localStorage.setItem("favorites",JSON.stringify(i)),!0}function k(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let _=[];const T=document.querySelector(".favorite-text");console.log(T);const v=document.querySelector(".favourites_list");function De(e){const t=e.target.closest(".exercise-remove-btn");if(!t)return;const r=t.getAttribute("data-exercise-id");r&&Ge(r)&&ne(k())}function Ue(e){v.innerHTML=se(e)}function ne(e=_){if(e.length)T.classList.add("visually-hidden"),v.classList.remove("hidden");else{T.classList.remove("visually-hidden"),v.innerHTML="",v.classList.add("hidden");return}Ue(e)}document.addEventListener("DOMContentLoaded",()=>{window.location.pathname.includes("favorites.html")&&(_=k(),ne(_),v.addEventListener("click",De))});const{BASE_URL:He,SUBSCRIPTION:je}=S;g.defaults.baseURL=He;const We=async e=>(await g.post(`${je}`,{email:e})).data,x={form:document.querySelector(".subscribe__form"),emailInput:document.querySelector('[name="email"]')};async function Ke(e){if(e.preventDefault(),!!x.emailInput.value)try{const t=x.emailInput.value,r=await We(t);A.success({title:"Success",message:r.message,position:"topRight"}),x.form.reset()}catch(t){A.error({title:"Error",message:t.response.data.message||t.message,position:"topRight"})}}x.form&&x.form.addEventListener("submit",Ke);
//# sourceMappingURL=main-a362eab2.js.map
