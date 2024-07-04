import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { elements } from './elements';

export function initializePagination({
  currentPage,
  perPage,
  totalItems,
  totalPages,
  onChange,
}) {
  const container = 'js-group-list-pagination';
  const paginationContainer = elements.groupListPagination;

  if (totalPages > 1) {
    paginationContainer.classList.remove('is-hidden');
  } else {
    paginationContainer.classList.add('is-hidden');
  }

  const options = {
    page: Number(currentPage),
    itemsPerPage: perPage,
    totalItems: totalItems,
    centerAlign: true,
    firstItemClassName: 'pagination-item',
    lastItemClassName: 'pagination-item',
    template: {
      page: '<a href="#" class="pagination-page">{{page}}</a>',
      currentPage: '<a href="#" class="pagination-page is-active">{{page}}</a>',
      moveButton: '<a href="#" class="is-hidden"></a>',
      disabledMoveButton: '<a href="#" class="is-hidden"></a>',
      moreButton: '<a href="#" class="is-hidden"></a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    onChange(newPage);
  });
}
