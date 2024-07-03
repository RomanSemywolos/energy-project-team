import { elements } from '../elements';

import { filtersStorageInstance } from '../filters-state-storage';
import initialExerciseList from './initial-exercise-list';
import { filterCategories } from '../constants';
import handleGroupClick from '../dom/handle-group-click';
import { openExercisesList } from '../dom/init-lists-view';

elements.exercisesFiltersList.addEventListener('click', e => {
  let filter = e.target.dataset.filter;
  let group = e.target.dataset.group;
  filter = filter.toLowerCase().split(' ').join('');
  if (filter === filterCategories.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();
  if (filter && group) {
    openExercisesList();
    filtersStorageInstance.setGroup(group);
    handleGroupClick(elements.exercisesContainer, filter, group);
    initialExerciseList();
  }
});
