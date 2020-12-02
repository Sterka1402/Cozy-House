import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';

const petsContent = document.querySelector('.ourpets-content');


window.addEventListener('load', () => {renderPets(pets, petsContent)});

