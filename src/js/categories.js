import { getCategories } from './api-service/categories-api';

const exerciseCategoryList = document.querySelector('.exercises_nav');
const search = document.querySelector('.exercises_search');

const onCategoryClick = async event => {
  try {
    let target = event.target;
    let contentTarget = target.textContent.trim();
    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
    };

    const res = await getCategories(contentTarget);
    console.log(res);

    toogleClass(curentCategory, target);
  } catch (error) {
    console.error(error);
  }
};

exerciseCategoryList.addEventListener('click', onCategoryClick);

export { onCategoryClick };
