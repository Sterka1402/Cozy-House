import activeLink from '../modules/active-link';
import expandMenu from '../modules/expand-menu';
import slider from '../modules/slider';
import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';

window.addEventListener('load', () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('nav');
  const petsShelter = document.querySelector('.pets-grid');

  activeLink();
  renderPets(pets, petsShelter);
  slider(pets);
  burger.addEventListener('click', () => expandMenu(navMenu));
});
