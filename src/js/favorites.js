import { createExercisesMarkup } from './render-exercises-list.js';
import { openModal } from './render-exercises-list.js';

import {
  getFavoritesData,
  removeExerciseFromFavorites,
} from './favorites-storage-handler.js';

let localData = [];
const blankPageTextRef = document.querySelector('.favorite-text');
const favoritesListRef = document.querySelector('.favourites_list');

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
  }
});

if (favoritesListRef) {
  favoritesListRef.addEventListener('click', openModal);
}
