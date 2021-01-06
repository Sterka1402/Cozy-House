import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets-byclasses';
import sortPetsByName from '../modules/sort-pets';

window.addEventListener('load', () => {
  const petsContent = document.querySelector('.ourpets-content');
  const sortForm = document.querySelector('.petsForm');

  renderPets(pets, petsContent);
  if (sortForm) {
    sortForm.addEventListener('change', (e) => sortPetsByName(e, pets, petsContent));
  }
});
