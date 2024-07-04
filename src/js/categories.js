import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';
import { getGroupList } from './get-group-list';
import { setExercisesListHidden } from './set-exercises-list-visibility';

const exerciseCategoryList = document.querySelector('.exercises_nav');

const onCategoryClick = async event => {
  try {
    let target = event.target;
    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
    };

    toogleClass(curentCategory, target);

    const newFilter = event.target.textContent.trim();
    elements.groupList.innerHTML = '';
    setExercisesListHidden();

    filtersStorageInstance.setFilterCategory(newFilter);
    filtersStorageInstance.setGroupPage(1);
    filtersStorageInstance.setExercisesPage(1);
    filtersStorageInstance.setExercisesKeyword('');
    elements.searchInputElement.value = '';
    elements.groupListPagination.style.display = 'none';

    getGroupList({ page: 1, filter: newFilter });
  } catch (error) {
    console.error(error);
  }
};

exerciseCategoryList.addEventListener('click', onCategoryClick);

export { onCategoryClick };
