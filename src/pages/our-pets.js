import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';
import sortPetsByName from '../modules/sort-pets';

window.addEventListener('load', () => {
    const petsContent = document.querySelector('.ourpets-content');
    const sortForm = document.querySelector('.petsForm');

    renderPets(pets, petsContent);
    sortForm.addEventListener('change',(e) => sortPetsByName(e, pets, petsContent));
});
