const openMenu = document.querySelector('#open');
const closeMenu = document.querySelectorAll('.close');
const slideMenu = document.querySelector('#slidebar');

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('show')
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => slideMenu.classList.remove('show'));
});
