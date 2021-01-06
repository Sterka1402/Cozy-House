import PetsCard from '../modules/pets-card';


const renderPets = (pets, container) => {
  if (!container) return;
  container.innerHTML = '';
  pets.forEach((pet) => {
    const petsCard = new PetsCard(pet.picture, pet.name, pet.breed, pet.age, pet.description);
    petsCard.init(container);

  });

};

export default renderPets;
