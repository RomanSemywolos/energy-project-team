const SELECTED_CATEGORY = 'selected-category';
const SELECTED_GROUP = 'selected-group';
const IS_EXERCISES_LIST_VISIBLE = 'is-exercises-list-visible';
const GROUP_PAGE = 'group-page';
const EXERCISES_PAGE = 'exercises-page';
const EXERCISES_KEYWORD = 'exercises-keyword';

const defaultCategory = 'Muscles';

class FiltersStateStorage {
  setExercisesListVisible() {
    sessionStorage.setItem(IS_EXERCISES_LIST_VISIBLE, 'true');
  }

  setExercisesListHidden() {
    sessionStorage.setItem(IS_EXERCISES_LIST_VISIBLE, 'false');
  }

  isExercisesListVisible() {
    return sessionStorage.getItem(IS_EXERCISES_LIST_VISIBLE) === 'true';
  }

  setFilterCategory(categoryName) {
    sessionStorage.setItem(SELECTED_CATEGORY, categoryName);
  }

  getFilterCategory() {
    return sessionStorage.getItem(SELECTED_CATEGORY) ?? defaultCategory;
  }

  setGroup(groupName) {
    sessionStorage.setItem(SELECTED_GROUP, groupName);
  }

  getGroup() {
    return sessionStorage.getItem(SELECTED_GROUP) ?? '';
  }

  setGroupPage(page) {
    sessionStorage.setItem(GROUP_PAGE, page.toString());
  }

  getGroupPage() {
    const value = sessionStorage.getItem(GROUP_PAGE);
    return value ? Number(value) : 1;
  }

  getExercisesPage() {
    const value = sessionStorage.getItem(EXERCISES_PAGE);
    return value ? Number(value) : 1;
  }

  setExercisesPage(page) {
    sessionStorage.setItem(EXERCISES_PAGE, page.toString());
  }

  setExercisesKeyword(keyword) {
    sessionStorage.setItem(EXERCISES_KEYWORD, keyword);
  }

  getExercisesKeyword() {
    return sessionStorage.getItem(EXERCISES_KEYWORD) ?? '';
  }
}

const filtersStorageInstance = new FiltersStateStorage();

export { filtersStorageInstance };
