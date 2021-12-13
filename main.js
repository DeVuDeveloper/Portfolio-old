const openMenu = document.querySelector('#open');
const closeMenu = document.querySelectorAll('.close');
const slideMenu =document.querySelector('#slidebar');

openMenu.addEventListener('click', function() {
    slideMenu.classList.add('show');
});

// closeMenu.addEventListener('click', function() {
//   slideMenu.classList.remove('show');
// });
closeMenu.forEach(element => {
  element (slideMenu.classList.remove('show'));
});
