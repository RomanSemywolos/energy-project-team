import { exercisesAPI } from './api/exercises-api.js';
import { elements } from './elements.js';
import { filtersStorageInstance } from './filters-state-storage.js';
import renderGroupsList from './render-groups-list.js';
import { initializePagination } from './get-group-list-pagination.js';

// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

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

  // const options = {
  //   page: Number(currentPage),
  //   itemsPerPage: perPage,
  //   totalItems: totalPages * perPage,
  //   centerAlign: true,
  //   firstItemClassName: 'pagination-item',
  //   lastItemClassName: 'pagination-item',
  //   template: {
  //     page: '<a href="#" class="pagination-page">{{page}}</a>',
  //     currentPage:
  //       '<div class="pagination-current-page-container">' +
  //       '<a href="#" class="pagination-page pagination-current-page">{{page}}</a>' +
  //       '</div>',
  //     moveButton: '<a href="#" class="visually-hidden"></a>',
  //     disabledMoveButton: '<a href="#" class="visually-hidden"></a>',
  //     moreButton: '<a href="#" class="visually-hidden"></a>',
  //   },
  // };

  // const pagination = new Pagination('js-group-list-pagination', options);

  // pagination.on('beforeMove', event => {
  //   const newPage = event.page;
  //   filtersStorageInstance.setGroupPage(newPage);
  //   getGroupListForNewPage(newPage);
  // });

  // нужно прятать пагинацию - добавить
  const totalItems = totalPages * perPage;
  initializePagination({
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
