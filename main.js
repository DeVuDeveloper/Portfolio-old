const openMenu = document.querySelector('#open');
const closeMenu = document.querySelectorAll('.close');
const slideMenu = document.querySelector('#slidebar');

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('show');
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => slideMenu.classList.remove('show'));
});



const openPop = document.querySelectorAll('.open-pop');
const closePop = document.querySelector('.pop-x');
const popUp = document.querySelector('.pop-up');

openPop.forEach((element) => {
  element.addEventListener('click', () => popUp.classList.add('pop'));
});

closePop.addEventListener('click', () => {
  popUp.classList.remove('pop');
});

