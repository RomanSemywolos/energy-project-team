import { getExercises } from './api-service/exercices-api';
import { renderExercisesList } from './render-exercises-list';
import { elements } from './elements';

const exerciseSearchBtn = document.querySelector('.exercises_search-img');
const clearButton = document.querySelector('.exercises_criss-cross-img');
const inputField = document.querySelector('.exercises_search-input');

const onSearchClick = async () => {
  const response = await getExercises(
    document.querySelector('.exercises_name').textContent,
    document.querySelector('.exercises_search-input').value
  );
  console.log('Full response:', response);
  console.log('NAME: ' + document.querySelector('.exercises_name').textContent);
  console.log('SEARCH: ' + document.querySelector('.exercises_search-input').value);

  if (response && response.results) {

    console.log('Exercises data:', response.results);
    renderExercisesList(elements.exercisesWrapper, response.results);

  } else {
    console.error('Invalid response structure:', response);
  }
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

inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onSearchClick();
  }
})

export { onSearchClick };
