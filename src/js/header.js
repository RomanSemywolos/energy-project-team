document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = new URL(window.location.href);
  
    const homePage = document.querySelector('#home');
    const favouritesPage = document.querySelector('#favorites');
  
    if (
      currentUrl.href === homePage.href ||
      currentUrl.pathname === '/' ||
      currentUrl.pathname === '/energy-project-team/'
    ) {
      favouritesPage.classList.remove('current-page');
      homePage.classList.add('current-page');
    }
  
    if (currentUrl.href === favouritesPage.href) {
      homePage.classList.remove('current-page');
      favouritesPage.classList.add('current-page');
    }
  });