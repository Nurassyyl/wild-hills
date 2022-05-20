const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const body = document.body;
const menuClose = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active');
  body.classList.add('no-scroll');
  menuClose.classList.add('is-active');
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuClose.classList.remove('is-active');
  body.classList.remove('no-scroll');
})
