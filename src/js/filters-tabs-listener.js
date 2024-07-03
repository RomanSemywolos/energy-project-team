import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { getGroupList } from './get-group-list.js';
import { setExercisesListHidden } from './set-exercises-list-visibility';

elements.filtersTabs.addEventListener('click', event => {
  elements.exercisesFiltersTabsList.forEach(e => {
    e.classList.remove('active');
  });

  event.target.classList.add('active');

  const newFilter = event.target.textContent.trim();
  elements.groupList.innerHTML = '';
  setExercisesListHidden();

  filtersStorageInstance.setFilterCategory(newFilter);
  filtersStorageInstance.getGroupPage(1);
  filtersStorageInstance.setExercisesPage(1);
  filtersStorageInstance.setExercisesKeyword('');
  elements.searchInputElement.value = '';

  getGroupList({ page: 1, filter: newFilter });
});
