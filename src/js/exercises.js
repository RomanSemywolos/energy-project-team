import { getExercises } from './api-service/exercices-api';
import { renderExercisesList } from './render-exercises-list';
import { elements } from './elements';

const exerciseSearchBtn = document.querySelector('.exercises_search-img');
const clearButton = document.querySelector('.exercises_criss-cross-img');
const inputField = document.querySelector('.exercises_search-input');

let limit = window.innerWidth < 768 ? 8 : 10;

const onSearchClick = async () => {
  const category = document.querySelector('.exercises_name').textContent;
  const searchTerm = inputField.value;

  const response = await getExercises(category, searchTerm, 1, limit);


  if (response && response.results) {
    renderExercisesList(elements.exercisesWrapper, response.results);
  } else {
    console.error('Invalid response structure:', response);
  }
};

exerciseSearchBtn.addEventListener('click', onSearchClick);

clearButton.addEventListener('click', () => {
  inputField.value = '';
  clearButton.style.display = 'none';
  onSearchClick();
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
});

document.querySelectorAll('.exercises__nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.exercises__nav-item').forEach(el => {
      el.classList.remove('active');
    });
    item.classList.add('active');
    
    const category = item.textContent.trim();
    document.querySelector('.exercises_name').textContent = category;
    
    onSearchClick();
  });
});

window.addEventListener('resize', () => {
  const newLimit = window.innerWidth < 768 ? 8 : 10;
  if (newLimit !== limit) {
    limit = newLimit;
    onSearchClick();
  }
});

export { onSearchClick };