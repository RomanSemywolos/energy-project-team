import { exercisesAPI } from './api/exercises-api.js';
import { elements } from './elements.js';
import renderGroupsList from './render-groups-list.js';

export async function getGroupList({ page, filter }) {
  const responseData = await exercisesAPI.getExercisesFilter({ page, filter });
  const container = elements.groupList;
  renderGroupsList(container, responseData.results);
}
