import { filtersStorageInstance } from '../filters-state-storage';
import { elements } from '../elements';

export const openExercisesList = () => {
  filtersStorageInstance.setExercisesListVisible();
  elements.groupList.classList.add('is-hidden');
  // elements.exercisesFiltersPagination.classList.add('is-hidden');
  elements.searchFormElement.classList.remove('is-hidden');
  elements.exercisesContainer.classList.remove('is-hidden');
  // elements.mainExercisesPagination.classList.remove('is-hidden');
};

export const closeExercisesList = () => {
  filtersStorageInstance.setExercisesListHidden();
  elements.groupList.classList.remove('is-hidden');
  // elements.exercisesFiltersPagination.classList.remove('is-hidden');
  elements.searchFormElement.classList.add('is-hidden');
  elements.exercisesContainer.classList.add('is-hidden');
  // elements.mainExercisesPagination.classList.add('is-hidden');
};

// init list

if (filtersStorageInstance.isExercisesListVisible()) {
  openExercisesList();
} else {
  closeExercisesList();
}
