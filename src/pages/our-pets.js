import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';

const petsContent = document.querySelector('.ourpets-content');

const btn = document.createElement('button');
btn.innerHTML = `Learn more`;
btn.classList.add('ourpets-buttons');


// console.log(petsContent);

renderPets(pets, petsContent);

