import { elements } from '../elements';

import { filtersStorageInstance } from '../filters-state-storage';
import initialExerciseList from './initial-exercise-list';

export default elements.searchClearButton.addEventListener('click', e => {
  elements.searchInputElement.value = '';

  filtersStorageInstance.setExercisesKeyword('');
  filtersStorageInstance.setExercisesPage(1);

  initialExerciseList();
});
