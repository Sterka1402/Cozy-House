import activeLink from '../modules/active-link';
import expandMenu from '../modules/expand-menu';

window.addEventListener('load', () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('nav');

  activeLink();
  burger.addEventListener('click', () => expandMenu(navMenu));

});