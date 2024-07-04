function createExercisesMarkup(data) {
  return data
    .map(
      ({ name }) =>
        `<li class="exercise-card">
          <div>
            <div>Name - ${name}</div>
          </div>
        </li>`
    )
    .join('');
}

export default function renderExercisesList(container, exercisesList) {
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

  container.insertAdjacentHTML(
    'beforeend',
    createExercisesMarkup(exercisesList)
  );
}
