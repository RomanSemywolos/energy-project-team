import{a as g,b as Y,P as J,i as T}from"./vendor-b94ca55b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const S=Object.freeze({BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",RATING:"/rating",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription"}),Z=document.querySelector(".daily-quote"),{BASE_URL:ee,QUOTE:te}=S;g.defaults.baseURL=ee;const O=new Date().toISOString().split("T")[0],se=async()=>{const e=await g.get(te);return{quote:e.data.quote,author:e.data.author,date:O}},M=({author:e,quote:t})=>{Z.innerHTML=`<p class="daily-quote-text">${t}</p>
    <h4 class="daily-quote-author">${e}</h4>`},re=async()=>{const e=localStorage.getItem("quote");if(e){const s=JSON.parse(e);if(s.date===O){M(s);return}}const t=await se();localStorage.setItem("quote",JSON.stringify(t)),M(t)};re();const{BASE_URL:oe,FILTERS:ie}=S;g.defaults.baseURL=oe;const R=async(e,t=1,s=12)=>{const i=new URLSearchParams({filter:e,limit:s,page:t});return(await g.get(`${ie}?${i}`)).data};document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-category");try{const s=await R(t);console.log(s)}catch(s){console.error("Error fetching categories:",s)}})});const l={body:document.querySelector("body"),groupListWrapper:document.querySelector(".group-list-wrapper"),groupList:document.getElementById("js-group-list"),groupListPagination:document.getElementById("js-group-list-pagination"),exercisesNavList:document.querySelectorAll(".exercises__nav-item"),exercisesWrapper:document.querySelector(".exercises-list-wrapper")},F="selected-category",A="selected-group",I="is-exercises-list-visible",B="group-page",k="exercises-page",G="exercises-keyword",ae="Muscles";class ne{setExercisesListVisible(){sessionStorage.setItem(I,"true")}setExercisesListHidden(){sessionStorage.setItem(I,"false")}isExercisesListVisible(){return sessionStorage.getItem(I)==="true"}setFilterCategory(t){sessionStorage.setItem(F,t)}getFilterCategory(){return sessionStorage.getItem(F)??ae}setGroup(t){sessionStorage.setItem(A,t)}getGroup(){return sessionStorage.getItem(A)??""}setGroupPage(t){sessionStorage.setItem(B,t.toString())}getGroupPage(){const t=sessionStorage.getItem(B);return t?Number(t):1}getExercisesPage(){const t=sessionStorage.getItem(k);return t?Number(t):1}setExercisesPage(t){sessionStorage.setItem(k,t.toString())}setExercisesKeyword(t){sessionStorage.setItem(G,t)}getExercisesKeyword(){return sessionStorage.getItem(G)??""}}const n=new ne;function ce(e){return e.map(({filter:t,name:s,imgURL:i})=>{const r=`data-filter="${t}"`,o=`data-group="${s}"`;return`
        <li class="group-list-card" ${r} ${o}>
          <img class="group-list-card-img" src="${i}" alt="${t} - ${s}" ${r} ${o}></img>
          <div class="group-list-card-info" ${r} ${o}>
          <h2 class="group-list-card-title" ${r} ${o}>${s}</h2>
          <p class="group-list-card-text" ${r} ${o}>${t}</p>
          </div>
        </li>
      `}).join("")}function le(){const e=l.groupList;e.style.opacity="0",Y({targets:e,opacity:[0,1],duration:300,easing:"easeOutQuad",complete:()=>{l.groupListPagination.style.display="flex"}})}function N(e,t){e.innerHTML="",le(),e.insertAdjacentHTML("beforeend",ce(t)),ue(),e.querySelectorAll(".group-list-card").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-group");de(r)})})}function de(e){const t=document.querySelector(".exercises_name");t.textContent=`/ ${e}`,t.style.display="block",t.style.textTransform="capitalize"}function ue(){const e=document.querySelector(".exercises_name");e.style.display="none"}function ge({currentPage:e,perPage:t,totalItems:s,totalPages:i,onChange:r}){const o="js-group-list-pagination",a=l.groupListPagination;i>1&&!n.isExercisesListVisible()?a.classList.remove("is-hidden"):a.classList.add("is-hidden");const c={page:Number(e),itemsPerPage:t,totalItems:s,centerAlign:!0,template:{page:'<button href="#">{{page}}</button>',currentPage:'<button href="#" class="is-active">{{page}}</button>',moveButton:'<button href="#" class="is-hidden"></button>',disabledMoveButton:'<button href="#" class="is-hidden"></button>',moreButton:'<button href="#" class="is-hidden"></button>'}};new J(o,c).on("beforeMove",u=>{const m=u.page;r(m)})}async function pe(e){const t=n.getFilterCategory(),s=await R(t,e),{results:i}=s,r=l.groupList;N(r,i)}async function U({page:e,filter:t}){const s=await R(t,e),{results:i,page:r,perPage:o,totalPages:a}=s,c=a*o;ge({currentPage:r,perPage:o,totalItems:c,totalPages:a,onChange:u=>{n.setGroupPage(u),pe(u)}});const d=l.groupList;N(d,i)}function H(){n.setExercisesListVisible(),l.groupListWrapper.classList.add("is-hidden"),l.exercisesWrapper.classList.remove("is-hidden")}function D(){n.setExercisesListHidden(),l.groupListWrapper.classList.remove("is-hidden"),l.exercisesWrapper.classList.add("is-hidden")}const me=document.querySelector(".exercises_nav"),fe=async e=>{try{let t=e.target,s=document.querySelector(".exercises__nav-item-current");((o,a)=>{o.classList.remove("exercises__nav-item-current"),a.classList.add("exercises__nav-item-current")})(s,t);const r=e.target.textContent.trim();l.groupList.innerHTML="",D(),n.setFilterCategory(r),n.setGroupPage(1),n.setExercisesPage(1),n.setExercisesKeyword(""),l.groupListPagination.style.display="none",U({page:1,filter:r})}catch(t){console.error(t)}};me.addEventListener("click",fe);const{BASE_URL:ye,EXERCISES:j}=S;g.defaults.baseURL=ye;const W=async(e,t,s=1,i=10)=>{const r=new URLSearchParams({[e]:t,limit:i,page:s}),o=await g.get(`${j}?${r}`),a=document.querySelector(".exercises_search-input").value.toLowerCase(),c=o.data.results.filter(d=>d.name.toLowerCase().includes(a));return{...o.data,results:c}},xe=async e=>(await g.get(`${j}/${e}`)).data,p="/energy-project-team/assets/icons-6b93d54f.svg";let y=!1,ve;const b=document.querySelector(".modal-exercises"),L=document.querySelector(".overlay");document.querySelector(".js-list");function he(){const e=window.innerWidth-document.body.offsetWidth+"px";b.classList.remove("hidden"),L.classList.remove("hidden"),document.body.style.paddingRight=e,document.body.style.overflow="hidden"}function Le(e){b.innerHTML=e,be()}function Ee(e){const t="#EEA10C",s="#F4F4F4";let r="";for(let c=0;c<5;c++){const d=`starGradient${c}`,u=c+1<=e?100:c<e?e%1*100:0,m=[{offset:"0%",color:t,opacity:"1"},{offset:`${u}%`,color:t,opacity:"1"},{offset:`${u+1}%`,color:s,opacity:"0.20"}],$=`
        <linearGradient id="${d}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${m.map(f=>`<stop offset="${f.offset}" style="stop-color:${f.color};stop-opacity:${f.opacity}" />`).join("")}
        </linearGradient>
      `,C=`url(#${d})`;r+=`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${$}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${C}" fill-opacity="1"/></svg>`}return`${Number.isInteger(e)?`${e}.0`:e.toFixed(1)} ${r}`}function Se({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:o,description:a,rating:c,burnedCalories:d,time:u,popularity:m}){const $=C(i);function C(w){return w===null||!w?'src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"':`src="${w}"`}const f=Ee(c);return`
  <div class="modal-exercises-container" data-id="${e}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${p}#criss-cross"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${$}
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
        <use href="${p}#heart"></use>
      </svg>
    </button>

</div>
`}function _(){b.classList.add("hidden"),L.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}L.addEventListener("click",function(e){e.target===L&&_()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!b.classList.contains("hidden")&&_()});function be(){const e=JSON.parse(localStorage.getItem("favorites")),t=document.querySelector(".modal-exercises-btn-favorites");e!=null&&e.some(s=>s._id===ve)?(y=!0,t.innerHTML=V()):(y=!1,t.innerHTML=Q())}function $e(){y=!y;const e=document.querySelector(".modal-exercises-btn-favorites"),t=document.querySelector(".filter-list-js");y?(e.innerHTML=V(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(e.innerHTML=Q(),t==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function Q(){return`
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${p}#heart"></use>
    </svg>`}function V(){return`
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${p}#trash"></use>
  </svg>`}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ce(e){return e.map(({_id:t,bodyPart:s,target:i,rating:r,burnedCalories:o,time:a,name:c})=>`<li id="${t}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${r.toFixed(1)}</span>
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
              <div class="exercise-card-title-name">${P(c)}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${o} / ${a} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${P(s)}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${P(i)}</span>
              </div>
            </div>
          </div>
        </li>`).join("")}function z(e,t){if(e.innerHTML="",!t||t.length===0){e.insertAdjacentHTML("beforeend",`<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`);return}async function s(i){try{const r=await xe(i);console.log("Exercise Data:",r);const o=Se(r);Le(o),he(),document.querySelector(".modal-exercises-btn-favorites").addEventListener("click",$e),document.querySelector(".modal-exercises-btn-close").addEventListener("click",_)}catch(r){console.error("ERROR:",r)}}e.addEventListener("click",function(i){const r=i.target.closest(".exercise-card-header-btn");if(r){const o=r.getAttribute("data-button-id");console.log(`Button with id ${o} was clicked.`),s(o)}}),e.insertAdjacentHTML("beforeend",Ce(t))}const we=document.querySelector(".exercises_search-img"),E=document.querySelector(".exercises_criss-cross-img"),x=document.querySelector(".exercises_search-input");let q=window.innerWidth<768?8:10;const v=async()=>{const e=document.querySelector(".exercises_name").textContent,t=x.value,s=await W(e,t,1,q);s&&s.results?z(l.exercisesWrapper,s.results):console.error("Invalid response structure:",s)};we.addEventListener("click",v);E.addEventListener("click",()=>{x.value="",E.style.display="none",v()});x.addEventListener("input",()=>{x.value.length>0?E.style.display="block":E.style.display="none"});x.addEventListener("keypress",e=>{e.key==="Enter"&&v()});document.querySelectorAll(".exercises__nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".exercises__nav-item").forEach(s=>{s.classList.remove("active")}),e.classList.add("active");const t=e.textContent.trim();document.querySelector(".exercises_name").textContent=t,v()})});window.addEventListener("resize",()=>{const e=window.innerWidth<768?8:10;e!==q&&(q=e,v())});const Ie={MUSCLES:"muscles",BODY_PARTS:"bodyparts",EQUIPMENT:"equipment"};async function X(){let e=n.getFilterCategory(),t=n.getGroup();e=e.toLowerCase().split(" ").join(""),e===Ie.BODY_PARTS&&(e=e.slice(0,-1)),t=t==null?void 0:t.toLowerCase();const s=n.getExercisesPage(),i=await W(e,t,s);z(l.exercisesWrapper,i.results)}const Pe=n.getGroupPage(),K=n.getFilterCategory();l.groupListPagination.style.display="none";U({page:Pe,filter:K});n.isExercisesListVisible()?(X(),H()):D();l.exercisesNavList.forEach(e=>{e.textContent.trim()===K&&e.classList.add("exercises__nav-item-current")});document.addEventListener("DOMContentLoaded",()=>{const e=new URL(window.location.href),t=document.querySelector("#home"),s=document.querySelector("#favorites");(e.href===t.href||e.pathname==="/"||e.pathname==="/energy-project-team.git/")&&(s.classList.remove("current-page"),t.classList.add("current-page")),e.href===s.href&&(t.classList.remove("current-page"),s.classList.add("current-page"))});function qe(){const e=document.querySelector(".burger"),t=document.querySelector(".nav-bar-mobile"),s=document.querySelector("body");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("is-hidden"),s.classList.toggle("overlow")})}qe();l.groupList.addEventListener("click",e=>{let t=e.target.dataset.filter,s=e.target.dataset.group;s=s==null?void 0:s.toLowerCase(),t&&s&&(n.setGroup(s),n.setFilterCategory(t),X(),H())});const{BASE_URL:Re,SUBSCRIPTION:_e}=S;g.defaults.baseURL=Re;const Te=async e=>(await g.post(`${_e}`,{email:e})).data,h={form:document.querySelector(".subscribe__form"),emailInput:document.querySelector('[name="email"]')};async function Me(e){if(e.preventDefault(),!!h.emailInput.value)try{const t=h.emailInput.value,s=await Te(t);T.success({title:"Success",message:s.message,position:"topRight"}),h.form.reset()}catch(t){T.error({title:"Error",message:t.response.data.message||t.message,position:"topRight"})}}h.form.addEventListener("submit",Me);
//# sourceMappingURL=main-78f294be.js.map
