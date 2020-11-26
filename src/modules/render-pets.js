const renderPets = (pets,container) => {

  pets.forEach((pet) => {
    // console.log(pet.name,pet.age, pet.description);
    
    const petCard = document.createElement('div');
    petCard.innerHTML = `
    <img src='./img/${pet.picture}'>
    <h4>${pet.name}</h4>
    <button>Learn more</button>
    `;
     
     
    petCard.classList.add('ourpets-card');
    container.append(petCard);
  });

};
export default renderPets;


