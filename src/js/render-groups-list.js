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

export function renderGroupsList(container, groupsList) {
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', createGroupsMarkup(groupsList));
}
