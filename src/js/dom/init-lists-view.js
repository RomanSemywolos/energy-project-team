import { filtersStorageInstance } from '../filters-state-storage';

import { refs } from '../refs';

export const openExercisesList = () => {
  filtersStorageInstance.openExercisesList();
  refs.exercisesFiltersList.classList.add('is-hidden');
  refs.exercisesFiltersPagination.classList.add('is-hidden');

  refs.searchFormElement.classList.remove('is-hidden');
  refs.exercisesContainer.classList.remove('is-hidden');
  refs.mainExercisesPagination.classList.remove('is-hidden');
};

export const closeExercisesList = () => {
  filtersStorageInstance.closeExercisesList();
  refs.exercisesFiltersList.classList.remove('is-hidden');
  refs.exercisesFiltersPagination.classList.remove('is-hidden');

  refs.searchFormElement.classList.add('is-hidden');
  refs.exercisesContainer.classList.add('is-hidden');
  refs.mainExercisesPagination.classList.add('is-hidden');
};

// init list

if (filtersStorageInstance.isExercisesListVisible()) {
  openExercisesList();
} else {
  closeExercisesList();
}
