import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { renderExercisesList } from './render-exercises-list.js';
import { filterCategories } from './constants.js';
import { getExercises } from './api-service/exercices-api.js';
import { pagination } from './exercises-list-pagination.js';

const inputField = document.querySelector('.exercises_search-input');

async function getExercisesListForNewPage() {
  let filterCategory = filtersStorageInstance.getFilterCategory();
  let group = filtersStorageInstance.getGroup();

  filterCategory = filterCategory.toLowerCase().split(' ').join('');
  if (filterCategory === filterCategories.BODY_PARTS) {
    filterCategory = filterCategory.slice(0, -1);
  }
  const bodyPart = group?.toLowerCase();

  const currentPage = filtersStorageInstance.getExercisesPage();
  const currentKeyword = filtersStorageInstance.getExercisesKeyword();
  const responseData = await getExercises(
    filterCategory,
    bodyPart,
    currentKeyword,
    currentPage
  );
  inputField.value = currentKeyword ?? '';

  renderExercisesList(elements.exercisesWrapper, responseData.results);
}

export async function getExercisesList() {
  let filterCategory = filtersStorageInstance.getFilterCategory();
  let group = filtersStorageInstance.getGroup();

  filterCategory = filterCategory.toLowerCase().split(' ').join('');
  if (filterCategory === filterCategories.BODY_PARTS) {
    filterCategory = filterCategory.slice(0, -1);
  }
  const bodyPart = group?.toLowerCase();

  const currentKeyword = filtersStorageInstance.getExercisesKeyword();
  const responseData = await getExercises(
    filterCategory,
    bodyPart,
    currentKeyword
  );
  inputField.value = currentKeyword ?? '';

  renderExercisesList(elements.exercisesWrapper, responseData.results);
  const totalItems = responseData.totalPages * responseData.perPage;
  pagination({
    currentPage: responseData.page,
    perPage: responseData.perPage,
    totalItems,
    totalPages: responseData.totalPages,
    visiblePages: responseData.totalPages,
    onChange: newPage => {
      filtersStorageInstance.setExercisesPage(newPage);
      getExercisesListForNewPage();
    },
  });
}
