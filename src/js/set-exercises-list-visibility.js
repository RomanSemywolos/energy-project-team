import { filtersStorageInstance } from './filters-state-storage';
import { elements } from './elements';

export function setExercisesListVisible() {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupListWrapper.classList.add('is-hidden');
  elements.searchForm.classList.remove('is-hidden');
  elements.exercisesWrapper.classList.remove('is-hidden');
}

export function setExercisesListHidden() {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupListWrapper.classList.remove('is-hidden');
  elements.searchForm.classList.add('is-hidden');
  elements.exercisesWrapper.classList.add('is-hidden');
}
