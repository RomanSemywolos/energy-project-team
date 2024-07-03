import { elements } from '../elements';

import { filtersStorageInstance } from '../filters-state-storage';

document.addEventListener('DOMContentLoaded', () => {
  const currentKeyword = filtersStorageInstance.getExercisesKeyword();

  elements.searchInputElement.value = currentKeyword ?? '';
});
