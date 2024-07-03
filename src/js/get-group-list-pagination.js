import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export function initializePagination({
  currentPage,
  perPage,
  totalItems,
  onPageChange,
}) {
  const options = {
    page: Number(currentPage),
    itemsPerPage: perPage,
    totalItems: totalItems,
    centerAlign: true,
    firstItemClassName: 'pagination-item',
    lastItemClassName: 'pagination-item',
    template: {
      page: '<a href="#" class="pagination-page">{{page}}</a>',
      currentPage:
        '<div class="pagination-current-page-container">' +
        '<a href="#" class="pagination-page pagination-current-page">{{page}}</a>' +
        '</div>',
      moveButton: '<a href="#" class="visually-hidden"></a>',
      disabledMoveButton: '<a href="#" class="visually-hidden"></a>',
      moreButton: '<a href="#" class="visually-hidden"></a>',
    },
  };

  const pagination = new Pagination('js-group-list-pagination', options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    onPageChange(newPage);
  });
}
