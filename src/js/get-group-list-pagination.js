import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';

export function groupListPagination({
  currentPage,
  perPage,
  totalItems,
  totalPages,
  onChange,
}) {
  const container = 'js-group-list-pagination';
  const paginationContainer = elements.groupListPagination;

  if (totalPages > 1 && !filtersStorageInstance.isExercisesListVisible()) {
    paginationContainer.classList.remove('is-hidden');
  } else {
    paginationContainer.classList.add('is-hidden');
  }

  const options = {
    page: Number(currentPage),
    itemsPerPage: perPage,
    totalItems: totalItems,
    centerAlign: true,
    template: {
      page: '<button href="#" class="test">{{page}}</button>',
      currentPage: '<button href="#" class="test is-active">{{page}}</button>',
      moveButton: '<button href="#" class="is-hidden"></button>',
      disabledMoveButton: '<button href="#" class="is-hidden"></button>',
      moreButton: '<button href="#" class="is-hidden"></button>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    onChange(newPage);
  });
}
