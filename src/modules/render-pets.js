import PetsCard from './pets-card';

const renderPets = (pets, container) => {
  if (!container) return;
  container.innerHTML = '';
  pets.forEach((pet) => {
    const {
      picture, name, breed, age, description,
    } = pet;
    const petsCard = new PetsCard(picture, name, breed, age, description);
    petsCard.init(container);
  });
};

export default renderPets;
