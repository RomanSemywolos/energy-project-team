import{a as g,b as Z,P as N,i as F}from"./vendor-c952f842.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const L=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),ee=document.querySelector(".daily-quote"),{BASE_URL:te,QUOTE:se}=L;g.defaults.baseURL=te;const U=new Date().toISOString().split("T")[0],re=async()=>{const e=await g.get(se);return{quote:e.data.quote,author:e.data.author,date:U}},M=({author:e,quote:t})=>{ee.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},oe=async()=>{const e=localStorage.getItem("quote");if(e){const r=JSON.parse(e);if(r.date===U){M(r);return}}const t=await re();localStorage.setItem("quote",JSON.stringify(t)),M(t)};oe();const{BASE_URL:ie,FILTERS:ae}=L;g.defaults.baseURL=ie;const I=async(e,t=1,r=12)=>{const i=new URLSearchParams({filter:e,limit:r,page:t});return(await g.get(`${ae}?${i}`)).data};document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");try{const r=await I(t)}catch(r){console.error("Error fetching categories:",r)}})});const a={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper"),exercisesListPagination:document.getElementById("js-exercises-list-pagination"),search:document.querySelector(".exercises_search"),searchField:document.querySelector(".exercises_search"),searchInput:document.querySelector(".exercises_search-input"),clearSearchButton:document.querySelector(".exercises_criss-cross-img"),exrciseSlash:document.querySelector(".slash")},B="selected-category",A="selected-group",w="is-exercises-list-visible",k="group-page",G="exercises-page",O="exercises-keyword",ne="Muscles";class ce{setExercisesListVisible(){sessionStorage.setItem(w,"true")}setExercisesListHidden(){sessionStorage.setItem(w,"false")}isExercisesListVisible(){return sessionStorage.getItem(w)==="true"}setFilterCategory(t){sessionStorage.setItem(B,t)}getFilterCategory(){return sessionStorage.getItem(B)??ne}setGroup(t){sessionStorage.setItem(A,t)}getGroup(){return sessionStorage.getItem(A)??""}setGroupPage(t){sessionStorage.setItem(k,t.toString())}getGroupPage(){const t=sessionStorage.getItem(k);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(G);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(G,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(O,t)}getExercisesKeyword(){return sessionStorage.getItem(O)??""}}const c=new ce;function le(e){return e.map(({filter:t,name:r,imgURL:i})=>{const s=`data-filter="${t}"`,o=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${r}" ${s} ${o}></img>
          <div class="group-list-card-info" ${s} ${o}>
          <h2 class="group-list-card-title" ${s} ${o}>${r}</h2>
          <p class="group-list-card-text" ${s} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function de(){const e=a.groupList;e.style.opacity="0",Z({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{a.groupListPagination.style.display="flex"}})}function D(e,t){e.innerHTML="",de(),e.insertAdjacentHTML("beforeend",le(t)),ge(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-group");ue(s)})})}function ue(e){const t=document.querySelector(".exercises_name");a.exrciseSlash.style.display="inline",t.textContent=`${e}`,t.style.display="block",t.style.textTransform="capitalize"}function ge(){const e=document.querySelector(".exercises_name");e.style.display="none"}function pe({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.groupListPagination;i>1&&!c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new N("js-group-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}async function me(e){const t=c.getFilterCategory(),r=await I(t,e),{results:i}=r,s=a.groupList;D(s,i)}async function H({page:e,filter:t}){const r=await I(t,e),{results:i,page:s,perPage:o,totalPages:n}=r,l=n*o;pe({currentPage:s,perPage:o,totalItems:l,totalPages:n,onChange:d=>{c.setGroupPage(d),me(d)}});const u=a.groupList;D(u,i)}function q(){c.setExercisesListVisible(),a.groupListWrapper.classList.add("is-hidden"),a.exercisesWrapper.classList.remove("is-hidden"),a.exercisesListPagination.classList.remove("is-hidden"),a.search.style.display="block"}function j(){c.setExercisesListHidden(),a.groupListWrapper.classList.remove("is-hidden"),a.exercisesWrapper.classList.add("is-hidden"),a.exercisesListPagination.classList.add("is-hidden"),a.search.style.display="none"}const fe=document.querySelector(".exercises_nav"),ye=async e=>{try{let t=e.target,r=document.querySelector(".exercises__nav-item-current");((o,n)=>{o.classList.remove("exercises__nav-item-current"),n.classList.add("exercises__nav-item-current")})(r,t),a.searchField.style.display="none",a.exrciseSlash.style.display="none",he();const s=e.target.textContent.trim();a.groupList.innerHTML="",j(),c.setFilterCategory(s),c.setGroupPage(1),c.setExercisesPage(1),c.setExercisesKeyword(""),a.groupListPagination.style.display="none",H({page:1,filter:s})}catch(t){console.error(t)}},he=()=>{a.searchInput.value="",a.clearSearchButton.style.display="none"};fe.addEventListener("click",ye);const p="/energy-project-team/assets/icons-75427e98.svg",{BASE_URL:xe,EXERCISES:W}=L;g.defaults.baseURL=xe;const K=async(e,t,r="",i=1,s=10)=>{const o=new URLSearchParams({[e]:t,keyword:r,limit:s,page:i}),n=await g.get(`${W}?${o}`);console.log("API response:",n.data),a.searchField.style.display="block";const l=document.querySelector(".exercises_search-input").value.toLowerCase(),u=n.data.results.filter(d=>d.name.toLowerCase().includes(l));return{...n.data,results:u}},ve=async e=>(await g.get(`${W}/${e}`)).data;let f=!1,Le;const b=document.querySelector(".modal-exercises"),x=document.querySelector(".overlay");document.querySelector(".exercise-card-header-btn");function be(){const e=window.innerWidth-document.body.offsetWidth+"px";b.classList.remove("hidden"),x.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Se(e){b.innerHTML=e,Pe()}function Ee(e){const t="#EEA10C",r="#F4F4F4";let s="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,S=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:r,opacity:"0.20"}],E=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${S.map(m=>`<stop offset="${m.offset}" style="stop-color:${m.color};stop-opacity:${m.opacity}" />`).join("")}
        </linearGradient>
      `,$=`url(#${u})`;s+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${E}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${$}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${s}`}function $e({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:s,target:o,description:n,rating:l,burnedCalories:u,time:d,popularity:S}){const E=$(i);function $(P){return P===null||!P?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${P}"`}const m=Ee(l);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${p}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${E}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${s}</h2>
      <div class="modal-exercises-rating">${m}</div>

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
              <p class="modal-exercises-text">${S}</p>
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
`}function R(){b.classList.add("hidden"),x.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}x.addEventListener("click",function(e){e.target===x&&R()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!b.classList.contains("hidden")&&R()});function Pe(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises-btn-favorites");e!=null&&e.some(r=>r._id===Le)?(f=!0,t.innerHTML=V()):(f=!1,t.innerHTML=Q())}function we(){f=!f;const e=document.querySelector(".modal-exercises-btn-favorites"),t=document.querySelector(".favorites-list");f?(e.innerHTML=V(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=Q(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function Q(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${p}#heart"></use>
    </svg>`}function V(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${p}#trash"></use>
  </svg>`}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ce(e){return e.map(({_id:t,bodyPart:r,target:i,rating:s,burnedCalories:o,time:n,name:l})=>`<li id="${t}" class="exercise-card">
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
              <div class="exercise-card-title-name">${C(l)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${o} / ${n} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${C(r)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${C(i)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function X(e,t){if(e.innerHTML="",!t||t.length===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}async function r(i){try{const s=await ve(i);console.log("Exercise Data:",s);const o=$e(s);Se(o),be(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",we),document.querySelector(".modal-exercises-btn-close").addEventListener("click",R)}catch(s){console.error("ERROR:",s)}}e.addEventListener("click",function(i){const s=i.target.closest(".exercise-card-header-btn");if(s){const o=s.getAttribute("data-button-id");console.log(`Button with id ${o} was clicked.`),r(o)}}),e.insertAdjacentHTML("beforeend",Ce(t))}const z={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};function Ie({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.exercisesListPagination;i>1&&c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new N("js-exercises-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}const Y=document.querySelector(".exercises_search-input");async function qe(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===z.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesPage(),s=c.getExercisesKeyword(),o=await K(e,r,s,i);Y.value=s??"",X(a.exercisesWrapper,o.results)}async function _(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===z.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesKeyword(),s=await K(e,r,i);Y.value=i??"",X(a.exercisesWrapper,s.results);const o=s.totalPages*s.perPage;Ie({currentPage:s.page,perPage:s.perPage,totalItems:o,totalPages:s.totalPages,visiblePages:s.totalPages,onChange:n=>{c.setExercisesPage(n),qe()}})}const Re=document.querySelector(".exercises_search-img"),v=document.querySelector(".exercises_criss-cross-img"),y=document.querySelector(".exercises_search-input"),T=async()=>{const e=y.value.trim();c.setExercisesKeyword(e),_(),q()};Re.addEventListener("click",T);v.addEventListener("click",()=>{y.value="",v.style.display="none",T()});y.addEventListener("input",()=>{y.value.length>0?v.style.display="block":v.style.display="none"});y.addEventListener("keypress",e=>{e.key==="Enter"&&T()});const _e=c.getGroupPage(),J=c.getFilterCategory();a.groupListPagination.style.display="none";H({page:_e,filter:J});c.isExercisesListVisible()?(_(),q()):j();a.exercisesNavList.forEach(e=>{e.textContent.trim()===J&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),r=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team.git/")&&(r.classList.remove("current-page"),t.classList.add("current-page")),e.href===r.href&&(t.classList.remove("current-page"),r.classList.add("current-page"))});function Te(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile"),r=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),r.classList.toggle("overlow")})}Te();a.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,r=e.target.dataset.group;r=r==null?void 0:r.toLowerCase(),t&&r&&(c.setGroup(r),c.setFilterCategory(t),_(),q())});const{BASE_URL:Fe,SUBSCRIPTION:Me}=L;g.defaults.baseURL=Fe;const Be=async e=>(await g.post(`${Me}`,{email:e})).data,h={form:document.querySelector(".subscribe__form"),emailInput:document.querySelector('[name="email"]')};async function Ae(e){if(e.preventDefault(),!!h.emailInput.value)try{const t=h.emailInput.value,r=await Be(t);F.success({title:"Success",message:r.message,position:"topRight"}),h.form.reset()}catch(t){F.error({title:"Error",message:t.response.data.message||t.message,position:"topRight"})}}h.form.addEventListener("submit",Ae);
//# sourceMappingURL=main-bbabe00e.js.map
