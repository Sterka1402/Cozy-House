class PetsCard {
  constructor(picture, name, breed, age, description) {
    this.picture = picture;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.description = description;
    
    this.modalWindow = this.modalWindow.bind(this);
  }

  init (container) {
    const petCard = document.createElement('div');
    petCard.innerHTML = `
      <div>  
      <img src='../img/${this.picture}'>
      </div>
      <h4>${this.name}</h4>
      `;
    const btn = document.createElement('button');
    btn.innerHTML = 'Learn more';
    btn.className = 'ourpets-buttons hover';
    petCard.append(btn);
  
    btn.addEventListener('click', this.modalWindow);
    //  console.log({this:name})  this.modalWindow(this)
    petCard.classList.add('ourpets-card');
    container.append(petCard);
  }
  modalWindow() {
    const petModalWindow = document.querySelector('.modal-content');
    const closebtn = document.createElement('button');
    closebtn.innerHTML = 'X';
    closebtn.className = 'close-modal';
    petModalWindow.append(closebtn);
    
    // petModalWindow.style.display = 'block';
    petModalWindow.innerHTML = `
      <div>
        <img src='../img/${this.picture}'>
      </div>
      <div class = "modal-text">
        <h4>${this.name}</h4>
        <p>${this.age}</p>
        <p>${this.breed}</p>
        <p>${this.description}</p>
      </div>
    `;
    closebtn.addEventListener('click', this.render);
  }
};

export default PetsCard;
