
const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    nav.classList.add('navScroll');
  } else {
    nav.classList.remove('navScroll');
  }
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});