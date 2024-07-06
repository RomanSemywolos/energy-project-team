import axios from 'axios';
import { API_PROPERTIES } from '../api/api-properties';

const { BASE_URL, FILTERS } = API_PROPERTIES;
axios.defaults.baseURL = BASE_URL;

const getCategories = async (category, page = 1, limit = 12) => {
  //need to implement less limit in case of smaller screens

  const params = new URLSearchParams({ filter: category, limit, page });

  const response = await axios.get(`${FILTERS}?${params}`);
  return response.data;
};

document.querySelectorAll('.exercises__nav-item').forEach(item => {
  item.addEventListener('click', async () => {
    const category = item.getAttribute('data-category');
    try {
      const data = await getCategories(category);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  });
});

export { getCategories };
