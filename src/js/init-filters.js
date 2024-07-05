import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { getGroupList } from './get-group-list.js';
import { getExercisesList } from './get-exercises-list.js';
import {
  setExercisesListVisible,
  setExercisesListHidden,
} from './set-exercises-list-visibility.js';

const initPage = filtersStorageInstance.getGroupPage();
const initFilter = filtersStorageInstance.getFilterCategory();

elements.groupListPagination.style.display = 'none';
getGroupList({ page: initPage, filter: initFilter });

if (filtersStorageInstance.isExercisesListVisible()) {
  getExercisesList();
  setExercisesListVisible();
} else {
  setExercisesListHidden();
}

elements.exercisesNavList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('exercises__nav-item-current');
  }
});
