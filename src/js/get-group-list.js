import { elements } from './elements.js';
import { filtersStorageInstance } from './filters-state-storage.js';
import { renderGroupsList } from './render-groups-list.js';
import { pagination } from './group-list-pagination.js';
import { getCategories } from './api-service/categories-api';

async function getGroupListForNewPage(page) {
  const filter = filtersStorageInstance.getFilterCategory();
  const responseData = await getCategories(filter, page);
  const { results } = responseData;
  const container = elements.groupList;
  renderGroupsList(container, results);
}

export async function getGroupList({ page, filter }) {
  const responseData = await getCategories(filter, page);
  const { results, page: currentPage, perPage, totalPages } = responseData;

  const totalItems = totalPages * perPage;
  pagination({
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
