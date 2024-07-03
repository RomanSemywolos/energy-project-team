import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

class ExercisesAPI {
  #BASE_URL = 'https://your-energy.b.goit.study/api';

  async fetchData(path, method = 'GET', body) {
    const headers = { 'Content-Type': 'application/json' };
    const init = { headers, method, body: body ? JSON.stringify(body) : null };

    try {
      const response = await fetch(`${this.#BASE_URL}${path}`, init);
      if (!response.ok) {
        throw new Error(
          `Error: status: ${response.status}, ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `Fetch error: ${error.message}`,
        position: 'topRight',
      });
      throw new Error(`Fetch error: ${error.message}`);
    }
  }

  async getExercisesFilter(filterParams) {
    const params = new URLSearchParams(filterParams);
    const path = `/filters?${params}`;
    return await this.fetchData(path);
  }

  async getExercises({ filterCategory, group, keyword = '', page = 1 }) {
    const params = new URLSearchParams({
      [filterCategory]: group,
      keyword,
      page,
      limit: 10,
    });
    const path = `/exercises?${params}`;
    return await this.fetchData(path);
  }
}

const exercisesAPI = new ExercisesAPI();

export { exercisesAPI };
