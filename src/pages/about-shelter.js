const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

function expandMenu () {
  console.log('hello');
  navMenu.classList.toggle('open');
};

burger.addEventListener('click', expandMenu);

