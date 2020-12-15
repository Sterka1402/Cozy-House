import pets from '../modules/pets-data';
import renderPets from '../modules/render-pets';

window.addEventListener('load', () => {
    const petsContent = document.querySelector('.ourpets-content');
    const sortLink = document.querySelector('.sort-pets');
  
    function sortPetsByName(pets,petsContent)  {
      for (let i = 0; i < pets.length;i++){
      // console.table(pets[i].name);
      }
       const sortPets = pets.sort(function(a,b) {
         const aName = a.name;
         const bName = b.name;
        return aName > bName ? 1: -1;
      });
      console.log(sortPets);
      renderPets([],petsContent);
      renderPets(sortPets, petsContent);
    }

  
    renderPets(pets, petsContent);
    sortLink.addEventListener('click',(e) => sortPetsByName(pets));
});
