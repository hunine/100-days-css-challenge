
const searchElement = document.querySelector('.search__icon');

searchElement.addEventListener('click', function () {
  const inputElement = document.querySelector('.search__input');
  inputElement.classList.toggle('search__input--active');
});

const headerMenuElement = document.querySelector('.header__menu');

headerMenuElement.addEventListener('click', function () {
  headerMenuElement.classList.toggle('header__menu--active');

  const panelElement = document.querySelector('.panel');
  panelElement.classList.toggle('panel--active');

  const menuElement = document.querySelector('.menu');
  menuElement.classList.toggle('menu--active');
});