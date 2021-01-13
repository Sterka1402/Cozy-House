// import { container } from 'webpack';

class PetsCard {
  constructor(picture, name, breed, age, description) {
    this.picture = picture;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.description = description;

    this.modalWindow = this.modalWindow.bind(this);
    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
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

    btn.addEventListener('click', this.modalWindow);
    btn.addEventListener('click', this.showModalWindow);

    petCard.classList.add('ourpets-card');
    container.append(petCard);
  }

  modalWindow() {
    const petModalWindow = document.querySelector('.modal-box');
    petModalWindow.innerHTML = `
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
    const closeIcon = document.querySelector('.icon-close');
    closeIcon.addEventListener('click', this.closeModalWindow);

  }
  showModalWindow(){
    const showModalWindow = document.querySelector('.modal-content');
    showModalWindow.classList.add('show');
    
  }
  closeModalWindow() {
    const showModalWindow = document.querySelector('.modal-content');
    showModalWindow.classList.remove('show');
    
  }
}

export default PetsCard;
