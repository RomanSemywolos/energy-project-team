function createGroupsMarkup(data) {
  return data
    .map(({ filter, name, imgURL }) => {
      const dataFilter = `data-filter="${filter}"`;
      const dataGroupName = `data-group="${name}"`;
      return `
        <li class="filters__item" ${dataFilter} ${dataGroupName}>
          <img class="filters__img-first" src="${imgURL}" alt="${filter} - ${name}"  ${dataFilter} ${dataGroupName}></img>
          <div class="filters__wrapper-first" ${dataFilter}${dataGroupName}>
          <h2 class="filters__title-first" ${dataFilter} ${dataGroupName}>${name}</h2>
          <p class="filters__text-first" ${dataFilter} ${dataGroupName}>${filter}</p>
          </div>
        </li>
      `;
    })
    .join('');
}

export default function renderGroupsList(container, groupsList) {
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', createGroupsMarkup(groupsList));
}
