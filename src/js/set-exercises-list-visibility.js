import { filtersStorageInstance } from './filters-state-storage';
import { elements } from './elements';

export function setExercisesListVisible() {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupListWrapper.classList.add('is-hidden');
  elements.exercisesWrapper.classList.remove('is-hidden');
  elements.exercisesListPagination.classList.remove('is-hidden');
  elements.search.style.display = 'block';
}

export function setExercisesListHidden() {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupListWrapper.classList.remove('is-hidden');
  elements.exercisesWrapper.classList.add('is-hidden');
  elements.exercisesListPagination.classList.add('is-hidden');
  elements.search.style.display = 'none';
}
