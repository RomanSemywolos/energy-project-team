import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { renderExercisesList } from './render-exercises-list.js';
import { filterCategories } from './constants.js';
import { getExercises } from './api-service/exercices-api.js';

// let limit = window.innerWidth < 768 ? 8 : 10;
const inputField = document.querySelector('.exercises_search-input');

export async function getExercisesList() {
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
