import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

const getExercisesByCategory = (page = 1, limit = 12, filter = 'Muscles') => {
  const params = { filter, page, limit };
  const fullUrl = buildUrl('/filters', getParams(params));

  return getRequest(fullUrl);
};

const getExercisesByKeyword = (
  page = 1,
  limit = 10,
  category,
  categoryName,
  keyword
) => {
  const params = {
    page,
    limit,
  };
  params[category] = categoryName;
  if (keyword) {
    params['keyword'] = keyword;
  }
  const fullUrl = buildUrl('/exercises', getParams(params));

  return getRequest(fullUrl);
};

const getExerciseById = id => {
  const fullUrl = buildUrl(`/exercises/${id}`);

  return getRequest(fullUrl);
};

const getDailyQuote = () => {
  return getRequest(buildUrl('/quote'));
};

const getRequest = async url => {
  return axios
    .get(url)
    .then(result => result.data)
    .catch(err => err.response);
};

const postRequest = async (url, body) => {
  return axios
    .post(url, body)
    .then(result => result)
    .catch(err => err.response);
};

const patchRequest = async (url, body) => {
  return axios
    .patch(url, body)
    .then(result => result)
    .catch(err => err.response);
};

const getParams = parameters => {
  const params = new URLSearchParams(parameters);
  return params;
};

const buildUrl = (endpoint, params) => {
  return endpoint + (params ? `?${params}` : '');
};

export {
  getExercisesByCategory,
  getExercisesByKeyword,
  getExerciseById,
  getDailyQuote,
};
