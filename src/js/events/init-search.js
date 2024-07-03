import { refs } from '../refs';

import { filtersStorageInstance } from '../filters-state-storage';

document.addEventListener('DOMContentLoaded', () => {
  const currentKeyword = filtersStorageInstance.getExercisesKeyword();

  refs.searchInputElement.value = currentKeyword ?? '';
});
