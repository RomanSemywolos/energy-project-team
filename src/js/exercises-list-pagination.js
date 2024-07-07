import Pagination from 'tui-pagination';
import { elements } from './elements';
import { filtersStorageInstance } from './filters-state-storage';

export function pagination({
  currentPage,
  perPage,
  totalItems,
  totalPages,
  onChange,
}) {
  const paginationContainer = elements.exercisesListPagination;

  if (!paginationContainer) return;

  if (totalPages > 1 && filtersStorageInstance.isExercisesListVisible()) {
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
      page: '<button href="#">{{page}}</button>',
      currentPage: '<button href="#" class="is-active">{{page}}</button>',
      moveButton: '<button href="#" class="is-hidden"></button>',
      disabledMoveButton: '<button href="#" class="is-hidden"></button>',
      moreButton: '<button href="#" class="is-hidden"></button>',
    },
  };

  const pagination = new Pagination('js-exercises-list-pagination', options);

  pagination.on('beforeMove', event => {
    const newPage = event.page;
    onChange(newPage);
  });
}
