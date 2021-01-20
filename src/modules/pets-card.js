class PetsCard {
  constructor({
    picture, name, breed, age, description,
  }, modal) {
    this.picture = picture;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.description = description;
    this.modal = modal;

    this.showModalWindow = this.showModalWindow.bind(this);
  }

  init(container) {
    const petCard = document.createElement('div');
    petCard.innerHTML = `
      <div>  
      <img src='./img/${this.picture}'>
      </div>
      <h4>${this.name}</h4>
      `;
    const btn = document.createElement('button');
    btn.innerHTML = 'Learn more';
    btn.className = 'ourpets-buttons hover';
    petCard.append(btn);

    btn.addEventListener('click', this.showModalWindow);

    petCard.classList.add('ourpets-card');
    container.append(petCard);
  }

  showModalWindow() {
    const modalCard = `
      <div>
          <img src='./img/${this.picture}'>
        </div>
        <div class = "modal-text">
          <h4>${this.name}</h4>
          <p>${this.age}</p>
          <p>${this.breed}</p>
          <p>${this.description}</p>
      </div>      
    `;
    this.modal.showModalWindow(modalCard);
  }
}

export default PetsCard;
