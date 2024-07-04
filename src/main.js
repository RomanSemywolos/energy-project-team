import * as api from './js/api.js';
import { getQuote } from './js/daily-quote.js';

const init = async () => {
  const categories = await api.getExercisesByCategory();
  return categories;
};

const exerciseCategoryList = document.querySelector('.exercises_nav');
const search = document.querySelector('.exercises_search');

init()
  .then(resp => console.log(resp))
  .catch(error => console.log(error));

getQuote();

exerciseCategoryList.addEventListener('click', onCategoryClick);

async function onCategoryClick(event) {
  try {
    let target = event.target;
    let contentTarget = target.textContent.trim();
    console.log(contentTarget);
    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
      search.style = 'display: block';
    };

    //undefined will be handled shortly
    const res = await api.getExercisesByCategory(
      undefined,
      undefined,
      contentTarget
    );
    console.log(res);

    toogleClass(curentCategory, target);
  } catch (error) {
    displayError(error.message);
  }
}
