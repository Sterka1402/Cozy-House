import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';

const petsContent = document.querySelector('.ourpets-content');

// console.log(petsContent);

renderPets(pets, petsContent);

