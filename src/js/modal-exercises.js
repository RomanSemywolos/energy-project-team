import icons from '../img/icons.svg';

let isFavorite = false;
let idFavorite;

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.exercise-card-header-btn');

export function openModalExercises() {
  const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';

  modalExercises.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.paddingRight = lockPaddingValue;
  document.body.style.overflow = 'hidden';
}

export function updateModal(markup) {
  modalExercises.innerHTML = markup;

  const exerciseId = document
    .querySelector('.modal-exercises-btn-favorites')
    .getAttribute('data-id');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isExerciseInFavorites = favorites.some(item => item._id === exerciseId);

  const btnModalFavorites = document.querySelector(
    '.modal-exercises-btn-favorites'
  );
  if (isExerciseInFavorites) {
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    isFavorite = true;
  } else {
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
    isFavorite = false;
  }

  btnModalFavorites.addEventListener('click', toggleBtn);
}

export function createRating(rating) {
  const starColor = '#EEA10C';
  const emptyStarColor = '#F4F4F4';
  const totalStars = 5;

  let stars = '';
  for (let i = 0; i < totalStars; i++) {
    const gradientId = `starGradient${i}`;
    const fillPercentage =
      i + 1 <= rating ? 100 : i < rating ? (rating % 1) * 100 : 0;

    const gradientStops = [
      { offset: '0%', color: starColor, opacity: '1' },
      { offset: `${fillPercentage}%`, color: starColor, opacity: '1' },
      {
        offset: `${fillPercentage + 1}%`,
        color: emptyStarColor,
        opacity: '0.20',
      },
    ];

    const linearGradient = `
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${gradientStops
            .map(
              stop =>
                `<stop offset="${stop.offset}" style="stop-color:${stop.color};stop-opacity:${stop.opacity}" />`
            )
            .join('')}
        </linearGradient>
      `;

    const fill = `url(#${gradientId})`;

    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">${linearGradient}<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="${fill}" fill-opacity="1"/></svg>`;
  }

  const ratingText = Number.isInteger(rating)
    ? `${rating}.0`
    : rating.toFixed(1);

  const ratingWithStars = `${ratingText} ${stars}`;

  return ratingWithStars;
}
export function createMarkup({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  const getExerciseGif = getGif(gifUrl);
  function getGif(gifUrl) {
    if (gifUrl === null || !gifUrl) {
      return `src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"`;
    }
    return `src="${gifUrl}"`;
  }

  const ratingStarsHTML = createRating(rating);

  return `
  <div class="modal-exercises-container" data-id="${_id}">
    <button class="modal-exercises-btn-close">
      <svg width="24" height="24">
        <use href="${icons}#menu-mobile-close"></use>
      </svg>
    </button>

    <img
    class="modal-exercises-img"
    ${getExerciseGif}
    alt="Exercise image"
    loading="lazy"
    />

    <div class="modal-exercises-card">
      <h2 class="modal-exercises-name">${name}</h2>
      <div class="modal-exercises-rating">${ratingStarsHTML}</div>

        <div class="modal-exercises-block">
          <ul class="modal-exercises-list">
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Target</h3>
              <p class="modal-exercises-text">${target}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Body Part</h3>
              <p class="modal-exercises-text">${bodyPart}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Equipment</h3>
              <p class="modal-exercises-text">${equipment}</p>
            </li>

            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Popular</h3>
              <p class="modal-exercises-text">${popularity}</p>
            </li>
            
            <li class="modal-exercises-item">
              <h3 class="modal-exercises-subtitle">Burned Calories</h3>
              <p class="modal-exercises-text">${burnedCalories}/${time}</p>
            </li>
          </ul>
          <p class="modal-exercises-description">${description}</p>
        </div>
    </div>
  </div>
  <div class="modal-exercises-btn-container">
  <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${_id}">
      Add to favorites
      <svg class="btn-favorites-icon">
        <use href="${icons}#heart"></use>
      </svg>
    </button>
 
</div>
`;
}

export function closeModalExercises() {
  modalExercises.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.paddingRight = '0px';
  document.body.style.overflow = 'auto';
}

if (!!overlay) {
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeModalExercises();
    }
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalExercises.classList.contains('hidden')) {
    closeModalExercises();
  }
});

export function toggleFavorites() {
  const local = JSON.parse(localStorage.getItem('exerciseData'));

  const btnModalFavorites = document.querySelector(
    '.modal-exercises-btn-favorites'
  );

  if (local?.some(item => item._id === idFavorite)) {
    isFavorite = true;
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
  } else {
    isFavorite = false;
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
  }
}

export function toggleBtn() {
  const btnModalFavorites = document.querySelector(
    '.modal-exercises-btn-favorites'
  );

  if (!btnModalFavorites) {
    console.error('Element not found.');
    return;
  }

  const exerciseId = btnModalFavorites.getAttribute('data-id');

  if (!exerciseId) {
    console.error('Element does not have a data-id attribute.');
    return;
  }

  const exerciseData = window.currentExerciseData;

  if (!exerciseData) {
    console.error('Exercise data is not available.');
    return;
  }

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isExerciseInFavorites = favorites.some(
    item => item._id === exerciseData._id
  );

  if (isExerciseInFavorites) {
    const indexToRemove = favorites.findIndex(
      item => item._id === exerciseData._id
    );
    if (indexToRemove !== -1) {
      favorites.splice(indexToRemove, 1);
      console.log(
        `Removed exercise with ID ${exerciseData._id} from favorites.`
      );
      localStorage.setItem('favorites', JSON.stringify(favorites));
      btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
      isFavorite = false;
    }
  } else {
    favorites.push(exerciseData);
    console.log(`Added exercise with ID ${exerciseData._id} to favorites.`);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    isFavorite = true;
  }
}

function createAddToFavoritesMarkup() {
  return `
  Add to favorites
    <svg class="btn-favorites-icon">
    <use href="${icons}#heart"></use>
    </svg>`;
}

function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
  <svg class="btn-favorites-icon">
    <use href="${icons}#trash"></use>
  </svg>`;
}
