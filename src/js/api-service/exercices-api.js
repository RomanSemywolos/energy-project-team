import { API_PROPERTIES } from '../api/api-properties';
import { elements } from '../elements';
import axios from 'axios';

const { BASE_URL, EXERCISES } = API_PROPERTIES;
axios.defaults.baseURL = BASE_URL;

const getExercises = async (
  category,
  bodyPart,
  currentKeyword = '',
  page = 1,
  limit = 10
) => {
  const params = new URLSearchParams({
    [category]: bodyPart,
    keyword: currentKeyword,
    limit,
    page,
  });
  const response = await axios.get(`${EXERCISES}?${params}`);

  elements.searchField.style.display = 'block';

  const searchTerm = document
    .querySelector('.exercises_search-input')
    .value.toLowerCase();
  const filteredResults = response.data.results.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm)
  );

  return { ...response.data, results: filteredResults };
};

const getExerciseById = async id => {
  const response = await axios.get(`${EXERCISES}/${id}`);
  return response.data;
};

const updateExerciseRating = async (id, rating) => {
  const response = axios.patch(`${EXERCISES}/${id}/${rating}`);
};

export { getExercises, getExerciseById, updateExerciseRating };
