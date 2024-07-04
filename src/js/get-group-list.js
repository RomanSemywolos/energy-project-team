import { exercisesAPI } from './api/exercises-api.js';
import { elements } from './elements.js';
import { filtersStorageInstance } from './filters-state-storage.js';
import renderGroupsList from './render-groups-list.js';
import { groupListPagination } from './get-group-list-pagination.js';

async function getGroupListForNewPage(page) {
  const filter = filtersStorageInstance.getFilterCategory();
  const responseData = await exercisesAPI.getExercisesFilter({ page, filter });
  const { results } = responseData;
  const container = elements.groupList;
  renderGroupsList(container, results);
}

export async function getGroupList({ page, filter }) {
  const responseData = await exercisesAPI.getExercisesFilter({ page, filter });
  const { results, page: currentPage, perPage, totalPages } = responseData;

  const totalItems = totalPages * perPage;
  groupListPagination({
    currentPage,
    perPage,
    totalItems,
    totalPages,
    onChange: newPage => {
      filtersStorageInstance.setGroupPage(newPage);
      getGroupListForNewPage(newPage);
    },
  });

  const container = elements.groupList;
  renderGroupsList(container, results);
}
