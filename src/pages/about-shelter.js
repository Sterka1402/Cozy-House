const burger = document.querySelector('.burger');
const navMenu = document.querySelector('nav');

function expandMenu () {
  console.log(navMenu);
  navMenu.classList.toggle('open');
};

burger.addEventListener('click', expandMenu);

