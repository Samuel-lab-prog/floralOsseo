const menuButton = document.querySelector('.menuButton');
const menuCloseButton = document.querySelector('.menuCloseButton');
const menuDiv = document.querySelector('.menuDiv');
const body = document.querySelector('body');
const main = document.querySelector('main');

menuButton.addEventListener('click', () => {
  menuDiv.classList.add('open');
  body.classList.add('blockScroll');
  main.classList.add('blockEvents');
});

menuCloseButton.addEventListener('click', () => {
    menuDiv.classList.remove('open');
    body.classList.remove('blockScroll');
    main.classList.remove('blockEvents');
});
