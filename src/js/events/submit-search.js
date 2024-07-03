import { elements } from '../elements';

import handleSearchSubmit from '../dom/handle-search';

export default elements.searchFormElement.addEventListener('submit', e => {
  handleSearchSubmit(e);
});
