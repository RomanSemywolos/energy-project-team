import { exercisesAPI } from '../api/exercises-api';
import renderExercisesList from '../render-exercises-list';

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

  // addText(elements.breadcrumbsText, group, elements.breadcrumbsDivider);
  // Render exercises list
  renderExercisesList(container, responseData.results);
}
