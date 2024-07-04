import { getExercises } from './api-service/exercices-api';

const exerciseSearchBtn = document.querySelector('.exercises_search-img');

const onSearchClick = async () => {
  const response = await getExercises('abs', 'heel');
  console.log(response.data);
};

exerciseSearchBtn.addEventListener('click', onSearchClick);

export { onSearchClick };
