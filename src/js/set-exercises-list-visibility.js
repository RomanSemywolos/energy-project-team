import { filtersStorageInstance } from './filters-state-storage';
import { elements } from './elements';

export function setExercisesListVisible() {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupList.classList.add('is-hidden');
  // elements.exercisesFiltersPagination.classList.add('is-hidden');
  elements.searchForm.classList.remove('is-hidden');
  elements.exercisesContainer.classList.remove('is-hidden');
  // elements.mainExercisesPagination.classList.remove('is-hidden');
}

export function setExercisesListHidden() {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupList.classList.remove('is-hidden');
  // elements.exercisesFiltersPagination.classList.remove('is-hidden');
  elements.searchForm.classList.add('is-hidden');
  elements.exercisesContainer.classList.add('is-hidden');
  // elements.mainExercisesPagination.classList.add('is-hidden');
}
