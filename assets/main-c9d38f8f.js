import{a as p,b as K,P as z}from"./vendor-a6d4c47e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const w=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),Y=document.querySelector(".daily-quote"),{BASE_URL:J,QUOTE:Z}=w;p.defaults.baseURL=J;const _=new Date().toISOString().split("T")[0],ee=async()=>{const e=await p.get(Z);return{quote:e.data.quote,author:e.data.author,date:_}},P=({author:e,quote:t})=>{Y.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},te=async()=>{const e=localStorage.getItem("quote");if(e){const s=JSON.parse(e);if(s.date===_){P(s);return}}const t=await ee();localStorage.setItem("quote",JSON.stringify(t)),P(t)};te();const{BASE_URL:se,FILTERS:re}=w;p.defaults.baseURL=se;const A=async(e="Muscles",t=1,s=12)=>{const i=new URLSearchParams({filter:e,limit:s,page:t});return(await p.get(`${re}?${i}`)).data},c={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},q="selected-category",M="selected-group",$="is-exercises-list-visible",T="group-page",F="exercises-page",R="exercises-keyword",oe="Muscles";class ie{setExercisesListVisible(){sessionStorage.setItem($,"true")}setExercisesListHidden(){sessionStorage.setItem($,"false")}isExercisesListVisible(){return sessionStorage.getItem($)==="true"}setFilterCategory(t){sessionStorage.setItem(q,t)}getFilterCategory(){return sessionStorage.getItem(q)??oe}setGroup(t){sessionStorage.setItem(M,t)}getGroup(){return sessionStorage.getItem(M)??""}setGroupPage(t){sessionStorage.setItem(T,t.toString())}getGroupPage(){const t=sessionStorage.getItem(T);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(F);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(F,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(R,t)}getExercisesKeyword(){return sessionStorage.getItem(R)??""}}const n=new ie;function ae(e){return e.map(({filter:t,name:s,imgURL:i})=>{const r=`data-filter="${t}"`,o=`data-group="${s}"`;return`
        <li class="group-list-card" ${r} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${s}" ${r} ${o}></img>
          <div class="group-list-card-info" ${r} ${o}>
          <h2 class="group-list-card-title" ${r} ${o}>${s}</h2>
          <p class="group-list-card-text" ${r} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function ne(){const e=c.groupList;e.style.opacity="0",K({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{c.groupListPagination.style.display="flex"}})}function k(e,t){e.innerHTML="",ne(),e.insertAdjacentHTML("beforeend",ae(t)),le(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-group");ce(r)})})}function ce(e){const t=document.querySelector(".exercises_name");t.textContent=`/ ${e}`,t.style.display="block",t.style.textTransform="capitalize"}function le(){const e=document.querySelector(".exercises_name");e.style.display="none"}function de({currentPage:e,perPage:t,totalItems:s,totalPages:i,onChange:r}){const o="js-group-list-pagination",a=c.groupListPagination;i>1&&!n.isExercisesListVisible()?a.classList.remove("is-hidden"):a.classList.add("is-hidden");const l={page:Number(e),itemsPerPage:t,totalItems:s,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new z(o,l).on("beforeMove",u=>{const m=u.page;r(m)})}async function ue(e){const t=n.getFilterCategory(),s=await A(t,e),{results:i}=s,r=c.groupList;k(r,i)}async function B({page:e,filter:t}){const s=await A(t,e),{results:i,page:r,perPage:o,totalPages:a}=s,l=a*o;de({currentPage:r,perPage:o,totalItems:l,totalPages:a,onChange:u=>{n.setGroupPage(u),ue(u)}});const d=c.groupList;k(d,i)}function G(){n.setExercisesListVisible(),c.groupListWrapper.classList.add("is-hidden"),c.exercisesWrapper.classList.remove("is-hidden")}function N(){n.setExercisesListHidden(),c.groupListWrapper.classList.remove("is-hidden"),c.exercisesWrapper.classList.add("is-hidden")}const ge=document.querySelector(".exercises_nav"),pe=async e=>{try{let t=e.target,s=document.querySelector(".exercises__nav-item-current");((o,a)=>{o.classList.remove("exercises__nav-item-current"),a.classList.add("exercises__nav-item-current")})(s,t);const r=e.target.textContent.trim();c.groupList.innerHTML="",N(),n.setFilterCategory(r),n.setGroupPage(1),n.setExercisesPage(1),n.setExercisesKeyword(""),c.groupListPagination.style.display="none",B({page:1,filter:r})}catch(t){console.error(t)}};ge.addEventListener("click",pe);const{BASE_URL:me,EXERCISES:O}=w;p.defaults.baseURL=me;const H=async(e,t,s=1,i=10)=>{const r=new URLSearchParams({[e]:t,limit:i,page:s}),o=await p.get(`${O}?${r}`);console.log(`Fetching exercises with params: ${r.toString()}`),console.log("API response:",o.data);const a=document.querySelector(".exercises_search-input").value.toLowerCase(),l=o.data.results.filter(d=>d.name.toLowerCase().includes(a));return{...o.data,results:l}},fe=async e=>(await p.get(`${O}/${e}`)).data,g="/energy-project-team/assets/icons-6b93d54f.svg";function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xe(e){return e.map(({_id:t,bodyPart:s,target:i,rating:r,burnedCalories:o,time:a,name:l})=>`<li id="${t}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${r.toFixed(1)}</span>
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
                <svg width="20" height="20">
                  <use href="${g}#running-stick-figure"></use>
                </svg>
              </span>
              <div class="exercise-card-title-name">${C(l)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${o} / ${a} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${C(s)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${C(i)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function U(e,t){if(e.innerHTML="",!t||t.length===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}e.insertAdjacentHTML("beforeend",xe(t))}const ye=document.querySelector(".exercises_search-img"),y=document.querySelector(".exercises_criss-cross-img"),h=document.querySelector(".exercises_search-input"),D=async()=>{const e=await H(document.querySelector(".exercises_name").textContent,document.querySelector(".exercises_search-input").value);console.log("Full response:",e),console.log("NAME: "+document.querySelector(".exercises_name").textContent),console.log("SEARCH: "+document.querySelector(".exercises_search-input").value),e&&e.results?(console.log("Exercises data:",e.results),U(c.exercisesWrapper,e.results)):console.error("Invalid response structure:",e)};ye.addEventListener("click",D);y.addEventListener("click",()=>{h.value="",y.style.display="none"});h.addEventListener("input",()=>{h.value.length>0?y.style.display="block":y.style.display="none"});h.addEventListener("keypress",e=>{e.key==="Enter"&&D()});const he={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function j(){let e=n.getFilterCategory(),t=n.getGroup();e=e.toLowerCase().split(" ").join(""),e===he.BODY_PARTS&&(e=e.slice(0,-1)),t=t==null?void 0:t.toLowerCase();const s=n.getExercisesPage(),i=await H(e,t,s);U(c.exercisesWrapper,i.results)}const ve=n.getGroupPage(),W=n.getFilterCategory();c.groupListPagination.style.display="none";B({page:ve,filter:W});n.isExercisesListVisible()?(j(),G()):N();c.exercisesNavList.forEach(e=>{e.textContent.trim()===W&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),s=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team.git/")&&(s.classList.remove("current-page"),t.classList.add("current-page")),e.href===s.href&&(t.classList.remove("current-page"),s.classList.add("current-page"))});function Le(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile"),s=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),s.classList.toggle("overlow")})}Le();c.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,s=e.target.dataset.group;s=s==null?void 0:s.toLowerCase(),t&&s&&(n.setGroup(s),n.setFilterCategory(t),j(),G())});let x=!1,Q;const L=document.querySelector(".modal-exercises"),v=document.querySelector(".overlay"),Se=document.querySelector(".exercise-card-header-btn");Se.addEventListener("click",Ee);async function Ee(e){if(e.target.closest(".exercise-card"))try{const t=e.target.closest(".exercise-card").getAttribute("data-id"),s=await fe(e);console.log(s),console.log("Exercise Data:",s),Q=t;const i=we(s);console.log("Generated Markup:",i),$e(i),be(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",Pe),document.querySelector(".modal-exercises-btn-close").addEventListener("click",I)}catch(t){console.log(t)}}function be(){const e=window.innerWidth-document.body.offsetWidth+"px";L.classList.remove("hidden"),v.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function $e(e){L.innerHTML=e,Ie()}function Ce(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let l=0;l<5;l++){const d=`starGradient${l}`,u=l+1<=e?100:l<e?e%1*100:0,m=[{offset:"0%",color:t,opacity:"1"},{offset:`${u}%`,color:t,opacity:"1"},{offset:`${u+1}%`,color:s,opacity:"0.20"}],S=`
        <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${m.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,E=`url(#${d})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${S}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${E}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function we({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:o,description:a,rating:l,burnedCalories:d,time:u,popularity:m}){const S=E(i);function E(b){return b===null||!b?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${b}"`}const f=Ce(l);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${g}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${S}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${r}</h2>
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
              <p class="modal-exercises-text">${s}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Popular</h3>
              <p class="modal-exercises-text">${m}</p>
            </li>
            
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${d}/${u}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${a}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises-btn-container">
  <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${e}">
      Add to favorites
      <svg class="btn-favorites-icon">
        <use href="${g}#heart"></use>
      </svg>
    </button>
 
</div>
`}function I(){L.classList.add("hidden"),v.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}v.addEventListener("click",function(e){e.target===v&&I()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!L.classList.contains("hidden")&&I()});function Ie(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises-btn-favorites");e!=null&&e.some(s=>s._id===Q)?(x=!0,t.innerHTML=X()):(x=!1,t.innerHTML=V())}function Pe(){x=!x;const e=document.querySelector(".modal-exercises-btn-favorites"),t=document.querySelector(".favorites-list");x?(e.innerHTML=X(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=V(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function V(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${g}#heart"></use>
    </svg>`}function X(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${g}#trash"></use>
  </svg>`}
//# sourceMappingURL=main-c9d38f8f.js.map
