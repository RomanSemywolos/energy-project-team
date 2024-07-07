import icons from './../img/icons.svg';
import { getExerciseById } from './api-service/exercices-api';
import {
  createMarkup,
  updateModal,
  openModalExercises,
  toggleBtn,
  closeModalExercises,
} from './modal-exercises';

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function createExercisesMarkup(data) {
  return data
    .map(
      ({ _id, bodyPart, target, rating, burnedCalories, time, name }) =>
        `<li id="${_id}" class="exercise-card">
          <div class="exercise-card-header-holder">
            <span class="exercise-card-tag">Workout</span>
            <span class="exercise-card-rating">
              <span>${rating.toFixed(1)}</span>
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
                <svg width="20" height="20">
                  <use href="${icons}#running-stick-figure"></use>
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

  if (exercisesList?.length === 0) {
    container.insertAdjacentHTML(
      'beforeend',
      `<li class="error-card">
        There are no exercises matching your search. Please try another term.
      </li>`
    );
    return;
  }

  async function openExerciseModal(exerciseId) {
    try {
      const exerciseData = await getExerciseById(exerciseId);
      console.log('Exercise Data:', exerciseData);

      const markup = createMarkup(exerciseData);
      updateModal(markup);
      openModalExercises();

      const btnModalFavorites = document.querySelector(
        '.modal-exercises-btn-favorites'
      );
      btnModalFavorites.addEventListener('click', toggleBtn);
      const btnModalClose = document.querySelector(
        '.modal-exercises-btn-close'
      );
      btnModalClose.addEventListener('click', closeModalExercises);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  container.addEventListener('click', function (event) {
    const button = event.target.closest('.exercise-card-header-btn');
    if (button) {
      const buttonId = button.getAttribute('data-button-id');
      // console.log(`Button with id ${buttonId} was clicked.`);
      openExerciseModal(buttonId);
    }
  });

  container.insertAdjacentHTML(
    'beforeend',
    createExercisesMarkup(exercisesList)
  );
}
