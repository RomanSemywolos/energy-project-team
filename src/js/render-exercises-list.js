function createExercisesMarkup(data) {
  return data
    .map(
      (exercise) =>
        `<li class="exercise-item">
          <p class="rating">
            <span class="workout-tag">WORKOUT</span> ${exercise.rating}<span>⭐️</span>
            <button class="start-button">Start</button>
          </p>
          <h3>${exercise.name}</h3>
          <p class="details">Burned calories: ${exercise.burnedCalories} / 3 min</p>
          <p class="details">Body part: ${exercise.bodyPart}</p>
          <p class="details">Target: ${exercise.target}</p>
        </li>`
    )
    .join('');
}

export function renderExercisesList(container, exercisesList) {
  container.innerHTML = '';

  if (!exercisesList || exercisesList.length === 0) {
    container.insertAdjacentHTML(
      'beforeend',
      `<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`
    );
    return;
  }

  container.insertAdjacentHTML('beforeend', createExercisesMarkup(exercisesList));
}