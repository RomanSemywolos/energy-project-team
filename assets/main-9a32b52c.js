import{a as g,b as ce,P as W,i as A}from"./vendor-c952f842.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const L=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),le=document.querySelector(".daily-quote"),{BASE_URL:de,QUOTE:ue}=L;g.defaults.baseURL=de;const K=new Date().toISOString().split("T")[0],ge=async()=>{const e=await g.get(ue);return{quote:e.data.quote,author:e.data.author,date:K}},B=({author:e,quote:t})=>{le.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},pe=async()=>{const e=localStorage.getItem("quote");if(e){const s=JSON.parse(e);if(s.date===K){B(s);return}}const t=await ge();localStorage.setItem("quote",JSON.stringify(t)),B(t)};pe();const{BASE_URL:me,FILTERS:fe}=L;g.defaults.baseURL=me;const q=async(e,t=1,s=12)=>{const o=new URLSearchParams({filter:e,limit:s,page:t});return(await g.get(`${fe}?${o}`)).data};document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");try{const s=await q(t)}catch(s){console.error("Error fetching categories:",s)}})});const a={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper"),exercisesListPagination:document.getElementById("js-exercises-list-pagination"),search:document.querySelector(".exercises_search"),searchField:document.querySelector(".exercises_search"),searchInput:document.querySelector(".exercises_search-input"),clearSearchButton:document.querySelector(".exercises_criss-cross-img"),exrciseSlash:document.querySelector(".slash")},k="selected-category",O="selected-group",P="is-exercises-list-visible",N="group-page",D="exercises-page",G="exercises-keyword",ye="Muscles";class he{setExercisesListVisible(){sessionStorage.setItem(P,"true")}setExercisesListHidden(){sessionStorage.setItem(P,"false")}isExercisesListVisible(){return sessionStorage.getItem(P)==="true"}setFilterCategory(t){sessionStorage.setItem(k,t)}getFilterCategory(){return sessionStorage.getItem(k)??ye}setGroup(t){sessionStorage.setItem(O,t)}getGroup(){return sessionStorage.getItem(O)??""}setGroupPage(t){sessionStorage.setItem(N,t.toString())}getGroupPage(){const t=sessionStorage.getItem(N);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(D);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(D,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(G,t)}getExercisesKeyword(){return sessionStorage.getItem(G)??""}}const c=new he;function ve(e){return e.map(({filter:t,name:s,imgURL:o})=>{const r=`data-filter="${t}"`,i=`data-group="${s}"`;return`
        <li class="group-list-card" ${r} ${i}>
          <img class="group-list-card-img" src="${o}" alt="${t} - ${s}" ${r} ${i}></img>
          <div class="group-list-card-info" ${r} ${i}>
          <h2 class="group-list-card-title" ${r} ${i}>${s}</h2>
          <p class="group-list-card-text" ${r} ${i}>${t}</p>
          </div>
        </li>
      `}).join("")}function xe(){const e=a.groupList;e.style.opacity="0",ce({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{a.groupListPagination.style.display="flex"}})}function Q(e,t){if(!e)return;e.innerHTML="",xe(),e.insertAdjacentHTML("beforeend",ve(t)),be(),e.querySelectorAll(".group-list-card").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-group");Le(r)})})}function Le(e){const t=document.querySelector(".exercises_name");a.exrciseSlash.style.display="inline",t.textContent=`${e}`,t.style.display="block",t.style.textTransform="capitalize"}function be(){const e=document.querySelector(".exercises_name");e.style.display="none"}function Se({currentPage:e,perPage:t,totalItems:s,totalPages:o,onChange:r}){const i=a.groupListPagination;if(!i)return;o>1&&!c.isExercisesListVisible()?i.classList.remove("is-hidden"):i.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:s,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new W("js-group-list-pagination",n).on("beforeMove",u=>{const d=u.page;r(d)})}async function Ee(e){const t=c.getFilterCategory(),s=await q(t,e),{results:o}=s,r=a.groupList;Q(r,o)}async function J({page:e,filter:t}){const s=await q(t,e),{results:o,page:r,perPage:i,totalPages:n}=s,l=n*i;Se({currentPage:r,perPage:i,totalItems:l,totalPages:n,onChange:d=>{c.setGroupPage(d),Ee(d)}});const u=a.groupList;Q(u,o)}function V(){c.setExercisesListVisible(),a.groupListWrapper.classList.add("is-hidden"),a.exercisesWrapper.classList.remove("is-hidden"),a.exercisesListPagination.classList.remove("is-hidden"),a.search.style.display="block"}function we(){c.setExercisesListHidden(),a.groupListWrapper.classList.remove("is-hidden"),a.exercisesWrapper.classList.add("is-hidden"),a.exercisesListPagination.classList.add("is-hidden"),a.search.style.display="none"}const U=document.querySelector(".exercises_nav"),$e=async e=>{try{let t=e.target.closest("a");if(!t)return;let s=document.querySelector(".exercises__nav-item-current");((i,n)=>{i.classList.remove("exercises__nav-item-current"),n.classList.add("exercises__nav-item-current")})(s,t),a.searchField.style.display="none",a.exrciseSlash.style.display="none",Pe();const r=e.target.textContent.trim();a.groupList.innerHTML="",we(),c.setFilterCategory(r),c.setGroupPage(1),c.setExercisesPage(1),c.setExercisesKeyword(""),a.groupListPagination&&(a.groupListPagination.style.display="none"),J({page:1,filter:r})}catch(t){console.error(t)}},Pe=()=>{a.searchInput.value="",a.clearSearchButton.style.display="none"};U&&U.addEventListener("click",$e);const p="/energy-project-team/assets/icons-e87e2418.svg",{BASE_URL:Ie,EXERCISES:X}=L;g.defaults.baseURL=Ie;const Y=async(e,t,s="",o=1,r=10)=>{const i=new URLSearchParams({[e]:t,keyword:s,limit:r,page:o}),n=await g.get(`${X}?${i}`);a.searchField.style.display="block";const l=document.querySelector(".exercises_search-input").value.toLowerCase(),u=n.data.results.filter(d=>d.name.toLowerCase().includes(l));return{...n.data,results:u}},Ce=async e=>(await g.get(`${X}/${e}`)).data,b=document.querySelector(".modal-exercises"),h=document.querySelector(".overlay");document.querySelector(".exercise-card-header-btn");function _e(){const e=window.innerWidth-document.body.offsetWidth+"px";b.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function qe(e){b.innerHTML=e;const t=document.querySelector(".modal-exercises-btn-favorites").getAttribute("data-id"),o=(JSON.parse(localStorage.getItem("favorites"))||[]).some(i=>i._id===t),r=document.querySelector(".modal-exercises-btn-favorites");o?r.innerHTML=ee():r.innerHTML=Z(),r.addEventListener("click",z)}function Re(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let l=0;l<5;l++){const u=`starGradient${l}`,d=l+1<=e?100:l<e?e%1*100:0,S=[{offset:"0%",color:t,opacity:"1"},{offset:`${d}%`,color:t,opacity:"1"},{offset:`${d+1}%`,color:s,opacity:"0.20"}],E=`
        <linearGradient id="${u}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${S.map(y=>`<stop offset="${y.offset}" style="stop-color:${y.color};stop-opacity:${y.opacity}" />`).join("")}
        </linearGradient>
      `,w=`url(#${u})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${E}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${w}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function Te({_id:e,bodyPart:t,equipment:s,gifUrl:o,name:r,target:i,description:n,rating:l,burnedCalories:u,time:d,popularity:S}){const E=w(o);function w($){return $===null||!$?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${$}"`}const y=Re(l);return`
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
      <h2 class="modal-exercises-name">${r}</h2>
      <div class="modal-exercises-rating">${y}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${i}</p>
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
`}function R(){b.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h&&h.addEventListener("click",function(e){e.target===h&&R()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!b.classList.contains("hidden")&&R()});function z(){const e=document.querySelector(".modal-exercises-btn-favorites");if(!e){console.error("Element not found.");return}if(!e.getAttribute("data-id")){console.error("Element does not have a data-id attribute.");return}const s=window.currentExerciseData;if(!s){console.error("Exercise data is not available.");return}let o=JSON.parse(localStorage.getItem("favorites"))||[];if(o.some(i=>i._id===s._id)){const i=o.findIndex(n=>n._id===s._id);i!==-1&&(o.splice(i,1),console.log(`Removed exercise with ID ${s._id} from favorites.`),localStorage.setItem("favorites",JSON.stringify(o)),e.innerHTML=Z())}else o.push(s),console.log(`Added exercise with ID ${s._id} to favorites.`),localStorage.setItem("favorites",JSON.stringify(o)),e.innerHTML=ee()}function Z(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${p}#heart"></use>
    </svg>`}function ee(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${p}#trash"></use>
  </svg>`}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}function te(e,t=!1){return e.map(({_id:s,bodyPart:o,target:r,rating:i,burnedCalories:n,time:l,name:u})=>{const d=t?`<button class="exercise-card-btn exercise-remove-btn" data-exercise-id="${s}" type="button">
             <svg class="exercise-card-icon-garbage" width="16" height="16">
               <use href="${p}#trash">
              </use>
             </svg>
          </button>`:`<span class="exercise-card-rating">
        <span>${i.toFixed(1)}</span>
        <svg width="34" height="32">
          <use href="${p}#star"></use>
        </svg>
      </span>`;return`<li id="${s}" class="exercise-card">
          <div class="exercise-card-header-holder">
          <div class="exercise-card-header-left">
            <span class="exercise-card-tag">Workout</span>
            ${d}
            </div>
            <button class="exercise-card-header-btn" data-button-id="${s}">
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
              <div class="exercise-card-title-name">${I(u)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${n} / ${l} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${I(o)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${I(r)}</span>
              </div>
            </div>
          </div>
        </li>`}).join("")}function se(e,t){if(e.innerHTML="",(t==null?void 0:t.length)===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}e.addEventListener("click",re),e.insertAdjacentHTML("beforeend",te(t))}async function Fe(e){try{const t=await Ce(e);window.currentExerciseData=t;const s=Te(t);qe(s),_e();const o=document.querySelector(".modal-exercises-btn-favorites");o.setAttribute("data-id",t.id),o.addEventListener("click",z),document.querySelector(".modal-exercises-btn-close").addEventListener("click",R)}catch(t){console.error("ERROR:",t)}}function re(e){const t=e.target.closest(".exercise-card-header-btn");if(t){const s=t.getAttribute("data-button-id");Fe(s)}}const ie={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};function Me({currentPage:e,perPage:t,totalItems:s,totalPages:o,onChange:r}){const i=a.exercisesListPagination;if(!i)return;o>1&&c.isExercisesListVisible()?i.classList.remove("is-hidden"):i.classList.add("is-hidden");const n={page:Number(e),itemsPerPage:t,totalItems:s,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new W("js-exercises-list-pagination",n).on("beforeMove",u=>{const d=u.page;r(d)})}const oe=document.querySelector(".exercises_search-input");async function Ae(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===ie.BODY_PARTS&&(e=e.slice(0,-1));const s=t==null?void 0:t.toLowerCase(),o=c.getExercisesPage(),r=c.getExercisesKeyword(),i=await Y(e,s,r,o);oe.value=r??"",se(a.exercisesWrapper,i.results)}async function ae(){let e=c.getFilterCategory(),t=c.getGroup();e=e.toLowerCase().split(" ").join(""),e===ie.BODY_PARTS&&(e=e.slice(0,-1));const s=t==null?void 0:t.toLowerCase(),o=c.getExercisesKeyword(),r=await Y(e,s,o);oe.value=o??"",se(a.exercisesWrapper,r.results);const i=r.totalPages*r.perPage;Me({currentPage:r.page,perPage:r.perPage,totalItems:i,totalPages:r.totalPages,visiblePages:r.totalPages,onChange:n=>{c.setExercisesPage(n),Ae()}})}const H=document.querySelector(".exercises_search-img"),v=document.querySelector(".exercises_criss-cross-img"),f=document.querySelector(".exercises_search-input"),T=async()=>{const e=f.value.trim();c.setExercisesKeyword(e),ae(),V()};H&&H.addEventListener("click",T);v&&v.addEventListener("click",()=>{f.value="",v.style.display="none",T()});f&&(f.addEventListener("input",()=>{f.value.length>0?v.style.display="block":v.style.display="none"}),f.addEventListener("keypress",e=>{e.key==="Enter"&&T()}));const F="Muscles";c.setGroupPage(1);c.setFilterCategory(F);a.groupListPagination&&(a.groupListPagination.style.display="none");J({page:1,filter:F});a.exercisesNavList.forEach(e=>{e.textContent.trim()===F&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),s=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team/")&&(s.classList.remove("current-page"),t.classList.add("current-page")),e.href===s.href&&(t.classList.remove("current-page"),s.classList.add("current-page"))});function Be(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile-container"),s=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),s.classList.toggle("overlow"),t.classList.toggle("nav-bar-mobile-overlay"),t.classList.toggle("is-visible")})}Be();a.groupList&&a.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,s=e.target.dataset.group;s=s==null?void 0:s.toLowerCase(),t&&s&&(c.setGroup(s),c.setFilterCategory(t),ae(),V())});const C=document.querySelector(".scrollup-btn"),ke=function(){window.scrollY<300?C.classList.add("visually-hidden"):C.classList.remove("visually-hidden")};window.addEventListener("scroll",ke);C.addEventListener("click",Oe);function Oe(){window.scrollTo({top:0,behavior:"smooth"})}function Ne(e){let t=M();if(!t.find(r=>r._id===e))return!1;const o=t.filter(r=>r._id!==e);return localStorage.setItem("favorites",JSON.stringify(o)),!0}function M(){const e=localStorage.getItem("favorites");return JSON.parse(e)||[]}let _=[];const j=document.querySelector(".favorite-text"),m=document.querySelector(".favourites_list");function De(e){const t=e.target.closest(".exercise-remove-btn");if(!t)return;const s=t.getAttribute("data-exercise-id");s&&Ne(s)&&ne(M())}function Ge(e){m.innerHTML=te(e,!0)}function ne(e=_){if(e.length)j.classList.add("visually-hidden"),m.classList.remove("hidden");else{j.classList.remove("visually-hidden"),m.innerHTML="",m.classList.add("hidden");return}Ge(e)}document.addEventListener("DOMContentLoaded",()=>{window.location.pathname.includes("favorites.html")&&(_=M(),ne(_),m.addEventListener("click",De))});m&&m.addEventListener("click",re);const{BASE_URL:Ue,SUBSCRIPTION:He}=L;g.defaults.baseURL=Ue;const je=async e=>(await g.post(`${He}`,{email:e})).data,x={form:document.querySelector(".subscribe__form"),emailInput:document.querySelector('[name="email"]')};async function We(e){if(e.preventDefault(),!!x.emailInput.value)try{const t=x.emailInput.value,s=await je(t);A.success({title:"Success",message:s.message,position:"topRight"}),x.form.reset()}catch(t){A.error({title:"Error",message:t.response.data.message||t.message,position:"topRight"})}}x.form&&x.form.addEventListener("submit",We);
//# sourceMappingURL=main-9a32b52c.js.map
