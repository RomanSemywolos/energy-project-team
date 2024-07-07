import anime from 'animejs';
import { elements } from './elements.js';

function createGroupsMarkup(data) {
  return data
    .map(({ filter, name, imgURL }) => {
      const dataFilterName = `data-filter="${filter}"`;
      const dataGroupName = `data-group="${name}"`;
      return `
        <li class="group-list-card" ${dataFilterName} ${dataGroupName}>
          <img class="group-list-card-img" src="${imgURL}" alt="${filter} - ${name}" ${dataFilterName} ${dataGroupName}></img>
          <div class="group-list-card-info" ${dataFilterName} ${dataGroupName}>
          <h2 class="group-list-card-title" ${dataFilterName} ${dataGroupName}>${name}</h2>
          <p class="group-list-card-text" ${dataFilterName} ${dataGroupName}>${filter}</p>
          </div>
        </li>
      `;
    })
    .join('');
}

function addAnimation() {
  const block = elements.groupList;
  block.style.opacity = '0';

  anime({
    targets: block,
    opacity: [0, 1],
    duration: 300,
    easing: 'easeOutQuad',
    complete: () => {
      elements.groupListPagination.style.display = 'flex';
    },
  });
}

export function renderGroupsList(container, groupsList) {
  if (!container) return;
  container.innerHTML = '';
  addAnimation();
  container.insertAdjacentHTML('beforeend', createGroupsMarkup(groupsList));

  hideExerciseName();

  const groupCards = container.querySelectorAll('.group-list-card');
  groupCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-group');
      updateExerciseName(name);
    });
  });
}

function updateExerciseName(name) {
  const exerciseNameElement = document.querySelector('.exercises_name');
  elements.exrciseSlash.style.display = 'inline';
  exerciseNameElement.textContent = `${name}`;

  exerciseNameElement.style.display = 'block';
  exerciseNameElement.style.textTransform = 'capitalize';
}

function hideExerciseName() {
  const exerciseNameElement = document.querySelector('.exercises_name');
  exerciseNameElement.style.display = 'none';
}
