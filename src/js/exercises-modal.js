// breedSelect.addEventListener('change', onSelectBreed);

// function onSelectBreed(evt) {
//   showLoader();
//   breedSelect.classList.add('hidden');
//   catInfo.classList.add('hidden');
//   hideError();

//   const breedId = evt.currentTarget.value;
//   fetchCatByBreed(breedId)
//     .then(data => {
//       hideLoader();
//       breedSelect.classList.remove('hidden');
//       showCatInfo(data);
//       catInfo.classList.remove('hidden');
//     })
//     .catch(error => {
//       console.error('Error fetching cat:', error);
//       hideLoader();
//       breedSelect.classList.remove('hidden');
//       showError(`Failed to get the cat's details`);
//     });
// }

let isFavorite = false;
let idFavorite;

const modalExercises = document.querySelector('.modal-exercises');
const overlay = document.querySelector('.overlay');
const listItem = document.querySelector('.js-list');

listItem.addEventListener('click', onExercisesCardClick);

async function onExercisesCardClick(event) {
  if (!event.target.closest('.card__btn')) {
    return;
  }

  try {
    const exerciseID = event.target
      .closest('.card__btn')
      .getAttribute('data-id');

    const exerciseData = await apiService.getExercisesById(exerciseID);

    idFavorite = exerciseID;

    const markup = createMarkup(exerciseData);
    updateModal(markup);
    openModalExercises();

    const btnModalFavorites = document.querySelector(
      '.modal-exercises__btn-favorites'
    );
    btnModalFavorites.addEventListener('click', toggleBtn);
    const btnModalClose = document.querySelector('.modal-exercises__btn-close');
    btnModalClose.addEventListener('click', closeModalExercises);
  } catch (error) {
    console.log(error);
  }
}
