import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';
import { getExercisesList } from './get-exercises-list';

export default elements.searchClearButton.addEventListener('click', e => {
  elements.searchInputElement.value = '';
  filtersStorageInstance.setExercisesKeyword('');
  filtersStorageInstance.setExercisesPage(1);
  getExercisesList();
});
