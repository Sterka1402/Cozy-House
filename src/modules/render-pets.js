import PetsCard from './pets-card';
import ModalWindow from './modal-window';

const renderPets = (pets, container) => {
  if (!container) return;
  container.innerHTML = '';
  const modal = new ModalWindow();
  modal.init();

  pets.forEach((pet) => {
    // const {
    //   picture, name, breed, age, description,
    // } = pet;
    const petsCard = new PetsCard(pet, modal);
    petsCard.init(container);
  });
};

export default renderPets;
