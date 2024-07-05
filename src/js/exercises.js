import { getExercises } from './api-service/exercices-api';

const exerciseSearchBtn = document.querySelector('.exercises_search-img');
const clearButton = document.querySelector('.exercises_criss-cross-img');
const inputField = document.querySelector('.exercises_search-input');

const onSearchClick = async () => {
  const response = await getExercises('abs', 'heel');
  console.log(response.data);
};

exerciseSearchBtn.addEventListener('click', onSearchClick);

clearButton.addEventListener('click', () => {
  inputField.value = '';
  clearButton.style.display = 'none';
});

inputField.addEventListener('input', () => {
  if (inputField.value.length > 0) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
});

export { onSearchClick };
