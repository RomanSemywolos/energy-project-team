import { exercisesAPI } from '../api/exercises-api.js';
import { filtersStorageInstance } from '../filters-state-storage.js';
import { elements } from '../elements.js';
//
import { closeExercisesList } from './init-lists-view.js';
import renderGroupsList from '../render-groups-list.js';

// import { addPagination } from '../helper/add-pagination.js';

const initPage = filtersStorageInstance.getGroupPage();
const initFilter = filtersStorageInstance.getFilterCategory();

getFiltersExercises({ page: initPage, filter: initFilter });

elements.exercisesFiltersTabsList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('active');
  }
});

function getFiltersExercises({ page, filter }) {
  exercisesAPI.getExercisesFilter({ page, filter }).then(data => {
    const container = elements.exercisesFiltersList;
    renderGroupsList(container, data.results);
  });
}

elements.exercisesFiltersTabs.addEventListener('click', event => {
  elements.exercisesFiltersTabsList.forEach(elem => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');

  const newFilter = event.target.textContent.trim();
  elements.exercisesFiltersList.innerHTML = '';
  closeExercisesList();

  filtersStorageInstance.setFilterCategory(newFilter);
  filtersStorageInstance.getGroupPage(1);
  filtersStorageInstance.setExercisesPage(1);
  filtersStorageInstance.setExercisesKeyword('');
  elements.searchInputElement.value = '';

  getFiltersExercises({ page: 1, filter: newFilter });
});
