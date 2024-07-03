import { filtersStorageInstance } from '../filters-state-storage';
import { getExercisesList } from '../get-exercises-list';
import { filterCategories } from '../constants';
import { elements } from '../elements';

async function handleSubmit(element) {
  element.preventDefault();

  let filter = filtersStorageInstance.getFilterCategory().toLowerCase();
  let group = filtersStorageInstance.getGroup().toLowerCase();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === filterCategories.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group?.toLowerCase();
  const keyword =
    element.currentTarget.elements.search.value.trim().toLowerCase() ?? '';

  filtersStorageInstance.setExercisesKeyword(keyword);
  filtersStorageInstance.setExercisesPage(1);

  getExercisesList();
}

elements.searchForm.addEventListener('submit', e => {
  handleSubmit(e);
});
