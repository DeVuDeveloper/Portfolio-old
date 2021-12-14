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

const myProjects = [
{
  project: 1,
  title: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 2,
  title: 'Multi Post Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 3,
  title: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 4,
  title: 'Website Portfolio',
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 5,
  title: 'Professional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 6,
  title: 'Data Dashboard Healthcare',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
{
  project: 7,
  title: 'Website Portfolio',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'img/img/section2.png',
  technologies: ['css', 'html', 'bootstrap', 'ruby'],
  live: 'url(https://vudej.github.io/Responsive-Web-Design/)',
  source: 'url(https://github.com/)',

},
];