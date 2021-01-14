
class PetsCard {
  constructor(picture, name, breed, age, description) {
    this.picture = picture;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.description = description;

    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.closeModalWindowByEscape = this.closeModalWindowByEscape.bind(this);
    this.closeModalWindowByClick = this.closeModalWindowByClick.bind(this);

    this.modalWindowContent = document.querySelector('.modal-content');
    this.textModalWindow = document.querySelector('.modal-box');
    this.closeIcon = document.querySelector('.icon-close');
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
    this.textModalWindow.innerHTML = `
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
    this.modalWindowContent.classList.add('show');
    
    this.closeIcon.addEventListener('click', this.closeModalWindow);
    document.addEventListener('keydown', this.closeModalWindowByEscape);
    this.modalWindowContent.addEventListener('click', this.closeModalWindowByClick);
  }

  closeModalWindow() {
    this.modalWindowContent.classList.remove('show');
  }

  closeModalWindowByEscape(e) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      this.closeModalWindow();

    }
  }
  closeModalWindowByClick(e) {
    if (e.target === this.modalWindowContent) {
      this.closeModalWindow();
    } 
  }
}

export default PetsCard;
