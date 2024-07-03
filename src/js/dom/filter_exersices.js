import { exercisesAPI } from '../api/exercises-api.js';
import { filtersStorageInstance } from '../filters-state-storage.js';
import { refs } from '../refs';
import { closeExercisesList } from './init-lists-view.js';

// import { addPagination } from '../helper/add-pagination.js';

const initPage = filtersStorageInstance.getGroupPage();
const initFilter = filtersStorageInstance.getFilterCategory();

getInitFiltersExercises({ page: initPage, filter: initFilter });

refs.exercisesFiltersTabsList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('active');
  }
});

function getInitFiltersExercises({ page, filter }) {
  exercisesAPI.getExercisesFilter({ page, filter }).then(data => {
    displayExercises(data.results);
  });
}

function getFiltersExercisesForNewPage(filter, page) {
  exercisesAPI.getExercisesFilter({ page, filter }).then(({ data }) => {
    displayExercises(data.results);
  });
}

function displayExercises(results) {
  refs.exercisesFiltersList.innerHTML = '';

  const markup = results
    .map(({ filter, name, imgURL }) => {
      const dataFilter = `data-filter="${filter}"`;
      const dataGroupName = `data-group="${name}"`;

      return `
  <li class="filters__item" ${dataFilter} ${dataGroupName}>
    <img class="filters__img-first" src="${imgURL}" alt="${filter} - ${name}"  ${dataFilter} ${dataGroupName}></img>
    <div class="filters__wrapper-first" ${dataFilter}${dataGroupName}>
    <h2 class="filters__title-first" ${dataFilter} ${dataGroupName}>${name}</h2>
    <p class="filters__text-first" ${dataFilter} ${dataGroupName}>${filter}</p>
    </div>
  </li>
    `;
    })
    .join('');

  refs.exercisesFiltersList.insertAdjacentHTML('beforeend', markup);
}

// filter tabs logic

refs.exercisesFiltersTabs.addEventListener('click', event => {
  refs.exercisesFiltersTabsList.forEach(elem => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');

  const newFilter = event.target.textContent.trim();
  refs.exercisesFiltersList.innerHTML = '';
  closeExercisesList();

  filtersStorageInstance.setFilterCategory(newFilter);
  filtersStorageInstance.getGroupPage(1);
  filtersStorageInstance.setExercisesPage(1);
  filtersStorageInstance.setExercisesKeyword('');
  refs.searchInputElement.value = '';

  getInitFiltersExercises({ page: 1, filter: newFilter });
});
