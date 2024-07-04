import anime from 'animejs';
import { elements } from './elements.js';

function createGroupsMarkup(data) {
  return data
    .map(({ filter, name, imgURL }) => {
      const dataFilterName = `data-filter="${filter}"`;
      const dataGroupName = `data-group="${name}"`;
      return `
        <li class="filters__item" ${dataFilterName} ${dataGroupName}>
          <img class="filters__img-first" src="${imgURL}" alt="${filter} - ${name}" ${dataFilterName} ${dataGroupName}></img>
          <div class="filters__wrapper-first" ${dataFilterName} ${dataGroupName}>
          <h2 class="filters__title-first" ${dataFilterName} ${dataGroupName}>${name}</h2>
          <p class="filters__text-first" ${dataFilterName} ${dataGroupName}>${filter}</p>
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
  container.innerHTML = '';
  addAnimation();
  container.insertAdjacentHTML('beforeend', createGroupsMarkup(groupsList));
}
