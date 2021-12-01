const openMenu = document.querySelector('#open');
const hideMenu = document.querySelector('#close');
const sideMenu = document.querySelector('#sidebar');

openMenu.addEventListener('click', function() {
  sideMenu.classList.add('active')
});


hideMenu.addEventListener('click', function() {
    sideMenu.classList.remove('active')
});
