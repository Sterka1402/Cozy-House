const renderPets = (pets,container) => {

  pets.forEach((pet) => {
    // console.log(pet.name,pet.age, pet.description);
    const petCard = document.createElement('div');
    petCard.innerHTML = `
   
    <h4>${pet.name}</h4>
    <a href ='#' title='Learn more'>Learn more</a>
    `;
     // <img scr='${picture}'>
     
    petCard.classList.add('ourpets-card');
    container.append(petCard);
  });

};
export default renderPets;


