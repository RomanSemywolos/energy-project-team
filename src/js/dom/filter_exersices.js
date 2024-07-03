import { filtersStorageInstance } from '../filters-state-storage.js';
import { elements } from '../elements.js';
import { closeExercisesList } from './init-lists-view.js';
import { getGroupList } from '../get-group-list.js';

const initPage = filtersStorageInstance.getGroupPage();
const initFilter = filtersStorageInstance.getFilterCategory();

elements.exercisesFiltersTabsList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('active');
  }
});

getGroupList({ page: initPage, filter: initFilter });

// listener
elements.filtersTabs.addEventListener('click', event => {
  elements.exercisesFiltersTabsList.forEach(elem => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');

  const newFilter = event.target.textContent.trim();
  elements.groupList.innerHTML = '';
  closeExercisesList();

  filtersStorageInstance.setFilterCategory(newFilter);
  filtersStorageInstance.getGroupPage(1);
  filtersStorageInstance.setExercisesPage(1);
  filtersStorageInstance.setExercisesKeyword('');
  elements.searchInputElement.value = '';

  getGroupList({ page: 1, filter: newFilter });
});
