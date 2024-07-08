import { createExercisesMarkup } from './render-exercises-list.js';
import { getExerciseById } from './api-service/exercices-api';
import {
  createMarkup,
  updateModal,
  openModalExercises,
  toggleBtn,
  closeModalExercises,
} from './modal-exercises';

import {
  getFavoritesData,
  removeExerciseFromFavorites,
} from './favorites-storage-handler.js';

let localData = [];
const blankPageTextRef = document.querySelector('.favorite-text');
const favoritesListRef = document.querySelector('.favourites_list');
const startFavouritesExercise = document.querySelector('.exercise-card-header-btn');

async function openExerciseModal(exerciseId) {
  try {
    const exerciseData = await getExerciseById(exerciseId);
    window.currentExerciseData = exerciseData;

    const markup = createMarkup(exerciseData);
    updateModal(markup);
    openModalExercises();

    const btnModalFavorites = document.querySelector(
      '.modal-exercises-btn-favorites'
    );
    btnModalFavorites.setAttribute('data-id', exerciseData._id);
    btnModalFavorites.addEventListener('click', toggleBtn);
    const btnModalClose = document.querySelector(
      '.modal-exercises-btn-close'
    );
    btnModalClose.addEventListener('click', closeModalExercises);
  } catch (error) {
    console.error('ERROR:', error);
  }
}

function onExerciseRemoveClick(e) {
  const target = e.target.closest('.exercise-remove-btn');
  if (!target) return;
  const exerciseID = target.getAttribute('data-exercise-id');
  if (exerciseID) {
    if (removeExerciseFromFavorites(exerciseID)) {
      handleFavoriteItems(getFavoritesData(), true);
    }
  }
}

function itemHandler(arr) {
  favoritesListRef.innerHTML = createExercisesMarkup(arr, true);
}

export function handleFavoriteItems(data = localData) {
  if (!data.length) {
    blankPageTextRef.classList.remove('visually-hidden');
    favoritesListRef.innerHTML = '';
    favoritesListRef.classList.add('hidden');
    return;
  } else {
    blankPageTextRef.classList.add('visually-hidden');
    favoritesListRef.classList.remove('hidden');
  }
  itemHandler(data);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('favorites.html')) {
    localData = getFavoritesData();
    // Initial run
    handleFavoriteItems(localData);
    favoritesListRef.addEventListener('click', onExerciseRemoveClick);

    // Add event listener for startFavouritesExercise
    favoritesListRef.addEventListener('click', (event) => {
      const startButton = event.target.closest('.exercise-card-header-btn');
      if (startButton) {
        const exerciseId = startButton.getAttribute('data-button-id');
        openExerciseModal(exerciseId);
      }
    });
  }
});


