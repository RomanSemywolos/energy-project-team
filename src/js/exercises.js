import { getExercises } from './api-service/exercices-api';
import { renderExercisesList } from './render-exercises-list';
import { elements } from './elements';

const exerciseSearchBtn = document.querySelector('.exercises_search-img');
const clearButton = document.querySelector('.exercises_criss-cross-img');
const inputField = document.querySelector('.exercises_search-input');


const onSearchClick = async () => {
  const category = document.querySelector('.exercises_name').textContent;
  const searchTerm = inputField.value;

  console.log(`Searching exercises - Category: ${category}, Search term: ${searchTerm}`);

  const response = await getExercises(category, searchTerm);
  
  console.log('Full response:', response);

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
  onSearchClick(); // Trigger search with empty input
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

// Додаємо обробник подій для елементів навігації
document.querySelectorAll('.exercises__nav-item').forEach(item => {
  item.addEventListener('click', () => {
    // Видаляємо клас 'active' з усіх елементів
    document.querySelectorAll('.exercises__nav-item').forEach(el => {
      el.classList.remove('active');
    });
    // Додаємо клас 'active' до натиснутого елемента
    item.classList.add('active');
    
    // Оновлюємо текст категорії
    const category = item.textContent.trim();
    document.querySelector('.exercises_name').textContent = category;
    
    // Викликаємо пошук з новою категорією
    onSearchClick();
  });
});

export { onSearchClick };

