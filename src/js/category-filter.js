document.addEventListener('DOMContentLoaded', () => {
  const selectedCategory = document.getElementById('selected-category');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clearButton = document.getElementById('clear-button');
  const exerciseList = document.getElementById('exercise-list');
  const noResultsMessage = document.getElementById('no-results-message');
  const baseUrl = 'https://your-energy.b.goit.study/api/exercises';

  let category = 'chest'; // Приклад обраної категорії
  let keyword = ''; // Ключове слово для пошуку
  let page = 1;
  let limit = window.innerWidth < 768 ? 8 : 10; // Змінюємо кількість вправ залежно від ширини вікна

  selectedCategory.textContent = category;

  const fetchExercises = async () => {
    const url = `${baseUrl}?bodypart=${category}&keyword=${keyword}&page=${page}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    renderExercises(data.results);
    noResultsMessage.style.display = data.results.length === 0 ? 'block' : 'none';
  };

  const renderExercises = (exercises) => {
    exerciseList.innerHTML = '';
    exercises.forEach(exercise => {
      const exerciseItem = document.createElement('li');
      exerciseItem.classList.add('exercise-item');
      exerciseItem.innerHTML = `
        <p class="rating"><span class="workout-tag">WORKOUT</span> ${exercise.rating}<span>⭐️</span>
        <button class="start-button">Start</button>
        </p>
        <h3>${exercise.name}</h3>
        <p class="details">Burned calories: ${exercise.burnedCalories} / 3 min</p>
        <p class="details">Body part: ${exercise.bodyPart}</p>
        <p class="details">Target: ${exercise.target}</p>        
      `;
      exerciseList.appendChild(exerciseItem);
    });
  };

  searchInput.addEventListener('input', (event) => {
    keyword = event.target.value;
    clearButton.style.display = keyword ? 'inline' : 'none';
  });

  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      fetchExercises();
    }
  });

  searchButton.addEventListener('click', () => {
    fetchExercises();
  });

  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    keyword = '';
    clearButton.style.display = 'none';
    fetchExercises();
  });

  window.addEventListener('resize', () => {
    limit = window.innerWidth < 768 ? 8 : 10;
    fetchExercises();
  });

  fetchExercises();
});
