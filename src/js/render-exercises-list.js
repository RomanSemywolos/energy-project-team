import icons from './../img/icons.svg';

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function createExercisesMarkup(data) {
  return data
    .map(
      ({ _id, bodyPart, target, rating, burnedCalories, time, name }) =>
        `<li id="${_id}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${rating}</span>
              <svg width="34" height="32">
                <use href="${icons}#star"></use>
              </svg>
            </span>
            <button class="exercise-card-header-btn" data-button-id="${_id}">
              Start
              <svg class="exercise-card-header-btn-icon" width="32" height="32">
               <use href="${icons}#arrow"></use>
              </svg>
              </svg>
            </button>
          </div>
          <div class="exercise-card-content-holder">
            <div class="exercise-card-title-holder">
              <span class="exercise-card-title-icon" >
                <svg width="24" height="24">
                  <use href="${icons}#running-stick-figure-boder"></use>
                </svg>
              </span>
              <div class="exercise-card-title-name">${capitalizeFirstLetter(
                name
              )}</div>
            </div>
            <div class="exercise-card-info-holder">
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Burned calories:</span>
                <span class="exercise-card-info-text">${burnedCalories} / ${time} min</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Body part:</span>
                <span class="exercise-card-info-text">${capitalizeFirstLetter(
                  bodyPart
                )}</span>
              </div>
              <div class="exercise-card-info">
                <span class="exercise-card-info-title">Target:</span>
                <span class="exercise-card-info-text">${capitalizeFirstLetter(
                  target
                )}</span>
              </div>
            </div>
          </div>
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

  container.insertAdjacentHTML(
    'beforeend',
    createExercisesMarkup(exercisesList)
  );
}
