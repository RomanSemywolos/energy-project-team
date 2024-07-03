import { exercisesAPI } from '../api/exercises-api';
import renderExercisesList from './render-exercises-list';
// import { refs } from '../refs';
// Add text to element and show divider in breadcrumbs
// export function addText(element, text, divider) {
//     element.innerText = text;
//     if (!divider) {
//       return;
//     }
//     divider.style.visibility = 'visible';
//   }

export default async function handleGroupClick(container, filter, group) {
  const responseData = await exercisesAPI.getExercises({ filter, group });

  // addText(refs.breadcrumbsText, group, refs.breadcrumbsDivider);
  // Render exercises list
  renderExercisesList(container, responseData.results);
}
