import activeLink from '../modules/active-link';
import expandMenu from '../modules/expand-menu';
import slider from '../modules/slider';


window.addEventListener('load', () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('nav');
  
 



  slider();
  activeLink();
  burger.addEventListener('click', () => expandMenu(navMenu));
  // rightButton.addEventListener('click', moveButtonRight);
  // leftButton.addEventListener('click', moveButtonLeft);
});
