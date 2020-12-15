const renderPets = (pets, container) => {
  console.log(pets);
  if (!container) return;
  pets.forEach((pet) => {
    const petCard = document.createElement('div');
    if (pets === []) {
      petCard.innerHTML = "";
      // container.value = 0;
      return;
    } else{
      petCard.innerHTML = `
      <img src='./img/${pet.picture}'>
      <h4>${pet.name}</h4>
      `;
      const btn = document.createElement('button');
      btn.innerHTML = 'Learn more';
      btn.className = 'ourpets-buttons hover';
      petCard.append(btn);
      petCard.classList.add('ourpets-card');
      container.append(petCard);
    }
  });
};
export default renderPets;
