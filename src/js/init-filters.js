import { filtersStorageInstance } from './filters-state-storage.js';
import { elements } from './elements.js';
import { getGroupList } from './get-group-list.js';

const initFilter = 'Muscles';

filtersStorageInstance.setGroupPage(1);
filtersStorageInstance.setFilterCategory(initFilter);

if (!!elements.groupListPagination) {
  elements.groupListPagination.style.display = 'none';
}
getGroupList({ page: 1, filter: initFilter });

elements.exercisesNavList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('exercises__nav-item-current');
  }
});
