function burgerButton() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.nav-bar-mobile-container');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', function changeBurger() {
      burger.classList.toggle('change');
      mobileMenu.classList.toggle('is-hidden');
      body.classList.toggle('overlow');
      mobileMenu.classList.toggle('nav-bar-mobile-overlay');
      mobileMenu.classList.toggle('is-visible');
    });
  }
  
  burgerButton();