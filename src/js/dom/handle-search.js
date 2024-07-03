import { filtersStorageInstance } from '../filters-state-storage';
import getExercisesList from '../events/initial-exercise-list';
import { filterCategories } from '../constants';

export default async function handleSearchSubmit(element) {
  element.preventDefault();

  let filter = filtersStorageInstance.getFilterCategory().toLowerCase();
  let group = filtersStorageInstance.getGroup().toLowerCase();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === filterCategories.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group?.toLowerCase();

  // Clear spaces and capital letters from user input
  const keyword =
    element.currentTarget.elements.search.value.trim().toLowerCase() ?? '';

  filtersStorageInstance.setExercisesKeyword(keyword);
  filtersStorageInstance.setExercisesPage(1);

  getExercisesList();
}
