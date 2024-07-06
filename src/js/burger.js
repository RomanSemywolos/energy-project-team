function burgerButton() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.nav-bar-mobile');
    const body = document.querySelector('body');
  
    burger.addEventListener('click', function changeBurger() {
      burger.classList.toggle('change');
      mobileMenu.classList.toggle('is-hidden');
      body.classList.toggle('overlow');
    });
  }
  
  burgerButton();