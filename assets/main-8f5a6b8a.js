import{a as g,b as ee,P as U,i as T}from"./vendor-c952f842.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const L=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),te=document.querySelector(".daily-quote"),{BASE_URL:se,QUOTE:re}=L;g.defaults.baseURL=se;const D=new Date().toISOString().split("T")[0],oe=async()=>{const e=await g.get(re);return{quote:e.data.quote,author:e.data.author,date:D}},F=({author:e,quote:t})=>{te.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},ie=async()=>{const e=localStorage.getItem("quote");if(e){const r=JSON.parse(e);if(r.date===D){F(r);return}}const t=await oe();localStorage.setItem("quote",JSON.stringify(t)),F(t)};ie();const{BASE_URL:ae,FILTERS:ne}=L;g.defaults.baseURL=ae;const I=async(e,t=1,r=12)=>{const i=new URLSearchParams({filter:e,limit:r,page:t});return(await g.get(`${ne}?${i}`)).data};document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");try{const r=await I(t)}catch(r){console.error("Error fetching categories:",r)}})});const a={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper"),exercisesListPagination:document.getElementById("js-exercises-list-pagination"),search:document.querySelector(".exercises_search"),searchField:document.querySelector(".exercises_search"),searchInput:document.querySelector(".exercises_search-input"),clearSearchButton:document.querySelector(".exercises_criss-cross-img"),exrciseSlash:document.querySelector(".slash")},M="selected-category",B="selected-group",w="is-exercises-list-visible",A="group-page",k="exercises-page",G="exercises-keyword",ce="Muscles";class le{setExercisesListVisible(){sessionStorage.setItem(w,"true")}setExercisesListHidden(){sessionStorage.setItem(w,"false")}isExercisesListVisible(){return sessionStorage.getItem(w)==="true"}setFilterCategory(t){sessionStorage.setItem(M,t)}getFilterCategory(){return sessionStorage.getItem(M)??ce}setGroup(t){sessionStorage.setItem(B,t)}getGroup(){return sessionStorage.getItem(B)??""}setGroupPage(t){sessionStorage.setItem(A,t.toString())}getGroupPage(){const t=sessionStorage.getItem(A);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(k);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(k,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(G,t)}getExercisesKeyword(){return sessionStorage.getItem(G)??""}}const c=new le;function de(e){return e.map(({filter:t,name:r,imgURL:i})=>{const s=`data-filter="${t}"`,o=`data-group="${r}"`;return`
        <li class="group-list-card" ${s} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${r}" ${s} ${o}></img>
          <div class="group-list-card-info" ${s} ${o}>
          <h2 class="group-list-card-title" ${s} ${o}>${r}</h2>
          <p class="group-list-card-text" ${s} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function ue(){const e=a.groupList;e.style.opacity="0",ee({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{a.groupListPagination.style.display="flex"}})}function H(e,t){if(!e)return;e.innerHTML="",ue(),e.insertAdjacentHTML("beforeend",de(t)),pe(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-group");ge(s)})})}function ge(e){const t=document.querySelector(".exercises_name");a.exrciseSlash.style.display="inline",t.textContent=`${e}`,t.style.display="block",t.style.textTransform="capitalize"}function pe(){const e=document.querySelector(".exercises_name");e.style.display="none"}function me({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.groupListPagination;if(!o)return;i>1&&!c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new U("js-group-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}async function fe(e){const t=c.getFilterCategory(),r=await I(t,e),{results:i}=r,s=a.groupList;H(s,i)}async function j({page:e,filter:t}){const r=await I(t,e),{results:i,page:s,perPage:o,totalPages:n}=r,l=n*o;me({currentPage:s,perPage:o,totalItems:l,totalPages:n,onChange:d=>{c.setGroupPage(d),fe(d)}});const u=a.groupList;H(u,i)}function W(){c.setExercisesListVisible(),a.groupListWrapper.classList.add("is-hidden"),a.exercisesWrapper.classList.remove("is-hidden"),a.exercisesListPagination.classList.remove("is-hidden"),a.search.style.display="block"}function ye(){c.setExercisesListHidden(),a.groupListWrapper.classList.remove("is-hidden"),a.exercisesWrapper.classList.add("is-hidden"),a.exercisesListPagination.classList.add("is-hidden"),a.search.style.display="none"}const O=document.querySelector(".exercises_nav"),he=async e=>{try{let t=e.target.closest("a");if(!t)return;let r=document.querySelector(".exercises__nav-item-current");((o,n)=>{o.classList.remove("exercises__nav-item-current"),n.classList.add("exercises__nav-item-current")})(r,t),a.searchField.style.display="none",a.exrciseSlash.style.display="none",xe();const s=e.target.textContent.trim();a.groupList.innerHTML="",ye(),c.setFilterCategory(s),c.setGroupPage(1),c.setExercisesPage(1),c.setExercisesKeyword(""),a.groupListPagination&&(a.groupListPagination.style.display="none"),j({page:1,filter:s})}catch(t){console.error(t)}},xe=()=>{a.searchInput.value="",a.clearSearchButton.style.display="none"};O&&O.addEventListener("click",he);const p="/energy-project-team/assets/icons-75427e98.svg",{BASE_URL:ve,EXERCISES:K}=L;g.defaults.baseURL=ve;const Q=async(e,t,r="",i=1,s=10)=>{const o=new URLSearchParams({[e]:t,keyword:r,limit:s,page:i}),n=await g.get(`${K}?${o}`);a.searchField.style.display="block";const l=document.querySelector(".exercises_search-input").value.toLowerCase(),u=n.data.results.filter(d=>d.name.toLowerCase().includes(l));return{...n.data,results:u}},Le=async e=>(await g.get(`${K}/${e}`)).data;let y=!1,be;const b=document.querySelector(".modal-exercises"),h=document.querySelector(".overlay");document.querySelector(".exercise-card-header-btn");function Se(){const e=window.innerWidth-document.body.offsetWidth+"px";b.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Ee(e){b.innerHTML=e,we()}function $e(e){const t="#EEA10C",r="#F4F4F4";let s="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,S=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:r,opacity:"0.20"}],E=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${S.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,$=`url(#${u})`;s+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${E}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${$}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${s}`}function Pe({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:s,target:o,description:n,rating:l,burnedCalories:u,time:d,popularity:S}){const E=$(i);function $(P){return P===null||!P?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${P}"`}const f=$e(l);return`
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
`}function q(){b.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h&&h.addEventListener("click",function(e){e.target===h&&q()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!b.classList.contains("hidden")&&q()});function we(){const e=JSON.parse(localStorage.getItem("exerciseData")),t=document.querySelector(".modal-exercises-btn-favorites");e!=null&&e.some(r=>r._id===be)?(y=!0,t.innerHTML=X()):(y=!1,t.innerHTML=V())}function Ce(){y=!y;const e=document.querySelector(".modal-exercises-btn-favorites"),t=document.querySelector(".favorites-list");y?(e.innerHTML=X(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=V(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function V(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${p}#heart"></use>
    </svg>`}function X(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${p}#trash"></use>
  </svg>`}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ie(e){return e.map(({_id:t,bodyPart:r,target:i,rating:s,burnedCalories:o,time:n,name:l})=>`<li id="${t}" class="exercise-card">
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
        </li>`).join("")}function z(e,t){if(e.innerHTML="",(t==null?void 0:t.length)===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}async function r(i){try{const s=await Le(i);console.log("Exercise Data:",s);const o=Pe(s);Ee(o),Se(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",Ce),document.querySelector(".modal-exercises-btn-close").addEventListener("click",q)}catch(s){console.error("ERROR:",s)}}e.addEventListener("click",function(i){const s=i.target.closest(".exercise-card-header-btn");if(s){const o=s.getAttribute("data-button-id");console.log(`Button with id ${o} was clicked.`),r(o)}}),e.insertAdjacentHTML("beforeend",Ie(t))}const Y={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};function qe({currentPage:e,perPage:t,totalItems:r,totalPages:i,onChange:s}){const o=a.exercisesListPagination;if(!o)return;i>1&&c.isExercisesListVisible()?o.classList.remove("is-hidden"):o.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:r,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new U("js-exercises-list-pagination",n).on("beforeMove",u=>{const d=u.page;s(d)})}const J=document.querySelector(".exercises_search-input");async function Re(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===Y.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesPage(),s=c.getExercisesKeyword(),o=await Q(e,r,s,i);J.value=s??"",z(a.exercisesWrapper,o.results)}async function Z(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===Y.BODY_PARTS&&(e=e.slice(0,-1));const r=t==null?void 0:t.toLowerCase(),i=c.getExercisesKeyword(),s=await Q(e,r,i);J.value=i??"",z(a.exercisesWrapper,s.results);const o=s.totalPages*s.perPage;qe({currentPage:s.page,perPage:s.perPage,totalItems:o,totalPages:s.totalPages,visiblePages:s.totalPages,onChange:n=>{c.setExercisesPage(n),Re()}})}const N=document.querySelector(".exercises_search-img"),x=document.querySelector(".exercises_criss-cross-img"),m=document.querySelector(".exercises_search-input"),R=async()=>{const e=m.value.trim();c.setExercisesKeyword(e),Z(),W()};N&&N.addEventListener("click",R);x&&x.addEventListener("click",()=>{m.value="",x.style.display="none",R()});m&&(m.addEventListener("input",()=>{m.value.length>0?x.style.display="block":x.style.display="none"}),m.addEventListener("keypress",e=>{e.key==="Enter"&&R()}));const _="Muscles";c.setGroupPage(1);c.setFilterCategory(_);a.groupListPagination&&(a.groupListPagination.style.display="none");j({page:1,filter:_});a.exercisesNavList.forEach(e=>{e.textContent.trim()===_&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),r=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team.git/")&&(r.classList.remove("current-page"),t.classList.add("current-page")),e.href===r.href&&(t.classList.remove("current-page"),r.classList.add("current-page"))});function _e(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile"),r=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),r.classList.toggle("overlow")})}_e();a.groupList&&a.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,r=e.target.dataset.group;r=r==null?void 0:r.toLowerCase(),t&&r&&(c.setGroup(r),c.setFilterCategory(t),Z(),W())});const{BASE_URL:Te,SUBSCRIPTION:Fe}=L;g.defaults.baseURL=Te;const Me=async e=>(await g.post(`${Fe}`,{email:e})).data,v={form:document.querySelector(".subscribe__form"),emailInput:document.querySelector('[name="email"]')};async function Be(e){if(e.preventDefault(),!!v.emailInput.value)try{const t=v.emailInput.value,r=await Me(t);T.success({title:"Success",message:r.message,position:"topRight"}),v.form.reset()}catch(t){T.error({title:"Error",message:t.response.data.message||t.message,position:"topRight"})}}v.form&&v.form.addEventListener("submit",Be);
//# sourceMappingURL=main-8f5a6b8a.js.map
