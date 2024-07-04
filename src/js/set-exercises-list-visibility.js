import { filtersStorageInstance } from './filters-state-storage';
import { elements } from './elements';

export function setExercisesListVisible() {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupListWrapper.classList.add('is-hidden');
  elements.exercisesWrapper.classList.remove('is-hidden');
  // show search form
}

export function setExercisesListHidden() {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupListWrapper.classList.remove('is-hidden');
  elements.exercisesWrapper.classList.add('is-hidden');
  // hide seatch form
}
