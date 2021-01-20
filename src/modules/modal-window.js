class ModalWindow {
  constructor() {
    this.bindMethods();
  }

  init() {
    this.modalWindowContent = document.querySelector('.modal-content');
    this.textModalWindow = document.querySelector('.modal-box');

    this.closeIcon = document.querySelector('.icon-close');
    this.closeIcon.addEventListener('click', this.closeModalWindow);
    document.addEventListener('keydown', this.closeModalWindowByEscape);
    this.modalWindowContent.addEventListener('click', this.closeModalWindowByClick);
  }

  bindMethods() {
    this.closeModalWindow = this.closeModalWindow.bind(this);
    this.closeModalWindowByEscape = this.closeModalWindowByEscape.bind(this);
    this.closeModalWindowByClick = this.closeModalWindowByClick.bind(this);
  }

  showModalWindow(modalCard) {
    this.textModalWindow.innerHTML = modalCard;
    this.modalWindowContent.classList.add('show');
  }

  closeModalWindow() {
    this.modalWindowContent.classList.remove('show');
  }

  closeModalWindowByEscape(e) {
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

export default ModalWindow;
