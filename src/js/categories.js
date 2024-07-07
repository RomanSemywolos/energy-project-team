import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';
import { getGroupList } from './get-group-list';
import { setExercisesListHidden } from './set-exercises-list-visibility';

const exerciseCategoryList = document.querySelector('.exercises_nav');

const onCategoryClick = async event => {
  try {
    let target = event.target.closest('a');

    if (!target) {
      return;
    }

    let curentCategory = document.querySelector('.exercises__nav-item-current');

    const toogleClass = (curentCategory, target) => {
      curentCategory.classList.remove('exercises__nav-item-current');
      target.classList.add('exercises__nav-item-current');
    };

    toogleClass(curentCategory, target);

    elements.searchField.style.display = 'none';
    elements.exrciseSlash.style.display = 'none';
    clearSearchField();

    const newFilter = event.target.textContent.trim();
    elements.groupList.innerHTML = '';
    setExercisesListHidden();

    filtersStorageInstance.setFilterCategory(newFilter);
    filtersStorageInstance.setGroupPage(1);
    filtersStorageInstance.setExercisesPage(1);
    filtersStorageInstance.setExercisesKeyword('');
    if (!!elements.groupListPagination) {
      elements.groupListPagination.style.display = 'none';
    }

    getGroupList({ page: 1, filter: newFilter });
  } catch (error) {
    console.error(error);
  }
};

const clearSearchField = () => {
  elements.searchInput.value = '';
  elements.clearSearchButton.style.display = 'none';
};

if (exerciseCategoryList) {
  exerciseCategoryList.addEventListener('click', onCategoryClick);
}
export { onCategoryClick, clearSearchField };
