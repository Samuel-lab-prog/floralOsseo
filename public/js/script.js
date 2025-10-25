
const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  }
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});
