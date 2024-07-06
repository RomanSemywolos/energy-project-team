import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { renderExercisesList } from './render-exercises-list.js';
import { filterCategories } from './constants.js';
import { getExercises } from './api-service/exercices-api.js';

export async function getExercisesList() {
  let filterCategory = filtersStorageInstance.getFilterCategory();
  let group = filtersStorageInstance.getGroup();

  filterCategory = filterCategory.toLowerCase().split(' ').join('');
  if (filterCategory === filterCategories.BODY_PARTS) {
    filterCategory = filterCategory.slice(0, -1);
  }
  group = group?.toLowerCase();

  const currentPage = filtersStorageInstance.getExercisesPage();

  const responseData = await getExercises(filterCategory, group, currentPage);

  renderExercisesList(elements.exercisesWrapper, responseData.results);
}
