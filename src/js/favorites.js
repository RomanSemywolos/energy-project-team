import { markupText } from './favorites-markup-text';
import { markupList } from './favorites-markup-list';
// import { listOfFavorites } from '../';

export function addContent() {
  //   listOfFavorites();

  const favorites = JSON.parse(localStorage.getItem('favorites'));

  if (!favorites?.length) {
    markupText();
    return;
  }
  markupList(favorites);
}
