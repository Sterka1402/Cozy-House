import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';


window.addEventListener('load', () => {
  const petsContent = document.querySelector('.ourpets-content');
  renderPets(pets, petsContent);
});

