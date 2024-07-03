import { filtersStorageInstance } from '../filters-state-storage.js';
import { elements } from '../elements.js';
import { exercisesAPI } from '../api/exercises-api.js';
import renderExercisesList from '../render-exercises-list';

import { filterCategories } from '../constants';

export default async function initialExercisesList() {
  console.log('HERE');
  let filterCategory = filtersStorageInstance.getFilterCategory();
  let group = filtersStorageInstance.getGroup();

  filterCategory = filterCategory.toLowerCase().split(' ').join('');
  if (filterCategory === filterCategories.BODY_PARTS) {
    filterCategory = filterCategory.slice(0, -1);
  }
  group = group.toLowerCase();

  const currentPage = filtersStorageInstance.getExercisesPage();
  const currentKeyword = filtersStorageInstance.getExercisesKeyword();

  const responseData = await exercisesAPI.getExercises({
    filterCategory,
    group,
    page: currentPage,
    keyword: currentKeyword,
  });

  // addText(elements.breadcrumbsText, group, elements.breadcrumbsDivider);
  // Render exercises list

  renderExercisesList(elements.exercisesContainer, responseData.results);

  // addPagination(
  //   'main-exercises-pagination',
  //   {
  //     page: Number(page),
  //     perPage,
  //     totalPages,
  //   },
  //   newPage => {
  //     filtersStorageInstance.setExercisesPage(newPage);
  //     initialExercisesList();
  //   }
  // );
}

initialExercisesList();
