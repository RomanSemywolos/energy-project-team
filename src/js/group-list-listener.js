import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';
import { getExercisesList } from './get-exercises-list';
import { openExercisesList } from './dom/init-lists-view';

elements.groupList.addEventListener('click', e => {
  let filter = e.target.dataset.filter;
  let group = e.target.dataset.group;
  group = group?.toLowerCase();
  if (filter && group) {
    filtersStorageInstance.setGroup(group);
    filtersStorageInstance.setFilterCategory(filter);
    getExercisesList();
    openExercisesList();
  }
});
