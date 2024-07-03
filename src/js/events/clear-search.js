import { refs } from '../refs';

import { filtersStorageInstance } from '../filters-state-storage';
import initialExerciseList from './initial-exercise-list';

export default refs.searchClearButton.addEventListener('click', e => {
  refs.searchInputElement.value = '';

  filtersStorageInstance.setExercisesKeyword('');
  filtersStorageInstance.setExercisesPage(1);

  initialExerciseList();
});
