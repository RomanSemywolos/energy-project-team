import { filtersStorageInstance } from './filters-state-storage';
import { elements } from './elements';

export function setExercisesListVisible() {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupList.classList.add('is-hidden');
  elements.searchForm.classList.remove('is-hidden');
  elements.exercisesWrapper.classList.remove('is-hidden');
}

export function setExercisesListHidden() {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupList.classList.remove('is-hidden');
  elements.searchForm.classList.add('is-hidden');
  elements.exercisesWrapper.classList.add('is-hidden');
}
