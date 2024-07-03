import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { exercisesAPI } from './api/exercises-api.js';
import renderExercisesList from './render-exercises-list.js';
import { filterCategories } from './constants.js';

export async function getExercisesList() {
  let filterCategory = filtersStorageInstance.getFilterCategory();
  let group = filtersStorageInstance.getGroup();

  filterCategory = filterCategory.toLowerCase().split(' ').join('');
  if (filterCategory === filterCategories.BODY_PARTS) {
    filterCategory = filterCategory.slice(0, -1);
  }
  group = group?.toLowerCase();

  const currentPage = filtersStorageInstance.getExercisesPage();
  const currentKeyword = filtersStorageInstance.getExercisesKeyword();

  const responseData = await exercisesAPI.getExercises({
    filterCategory,
    group,
    page: currentPage,
    keyword: currentKeyword,
  });
  elements.searchInputElement.value = currentKeyword ?? '';
  renderExercisesList(elements.exercisesWrapper, responseData.results);
}
