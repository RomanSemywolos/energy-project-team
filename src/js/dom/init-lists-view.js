import { filtersStorageInstance } from '../filters-state-storage';
import { getExercisesList } from '../get-exercises-list';
import {
  setExercisesListVisible,
  setExercisesListHidden,
} from '../set-exercises-list-visibility';

// init list

if (filtersStorageInstance.isExercisesListVisible()) {
  getExercisesList();
  setExercisesListVisible();
} else {
  setExercisesListHidden();
}
