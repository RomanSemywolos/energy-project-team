import { getExercisesList } from './get-exercises-list';
import { setExercisesListVisible } from './set-exercises-list-visibility';
import { filtersStorageInstance } from './filters-state-storage';

let limit = window.innerWidth < 768 ? 8 : 10;

const exerciseSearchBtn = document.querySelector('.exercises_search-img');
const clearButton = document.querySelector('.exercises_criss-cross-img');
const inputField = document.querySelector('.exercises_search-input');

const onSearchClick = async () => {
  const searchTerm = inputField.value.trim();
  filtersStorageInstance.setExercisesKeyword(searchTerm);
  getExercisesList();
  setExercisesListVisible();
};

if (!!exerciseSearchBtn) {
  exerciseSearchBtn.addEventListener('click', onSearchClick);
}

if (!!clearButton) {
  clearButton.addEventListener('click', () => {
    inputField.value = '';
    clearButton.style.display = 'none';
    onSearchClick();
  });
}

if (!!inputField) {
  inputField.addEventListener('input', () => {
    if (inputField.value.length > 0) {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  });

  inputField.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      onSearchClick();
    }
  });
}

// document.querySelectorAll('.exercises__nav-item').forEach(item => {
//   item.addEventListener('click', () => {
//     document.querySelectorAll('.exercises__nav-item').forEach(el => {
//       el.classList.remove('active');
//     });
//     item.classList.add('active');

//     const category = item.textContent.trim();
//     document.querySelector('.exercises_name').textContent = category;

//     onSearchClick();
//   });
// });

// window.addEventListener('resize', () => {
//   const newLimit = window.innerWidth < 768 ? 8 : 10;
//   if (newLimit !== limit) {
//     limit = newLimit;
//     onSearchClick();
//   }
// });

export { onSearchClick };
