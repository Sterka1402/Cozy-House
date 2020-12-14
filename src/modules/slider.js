function slider() {
  const rightButton = document.querySelector('.right-button');
  const leftButton = document.querySelector('.left-button');  
  const width = document.querySelector('.pets-card').clientWidth + 27;
  const list = document.querySelectorAll('.pets-card');
  const visibleList = document.querySelector('.pets-grid');
  let step = 0;
  const count = 1;

  function moveButtonRight() {
    step = step - width * count;
    step = Math.max(step, -width * (list.length - count));
    visibleList.style.left = step + 'px';
  }

  function moveButtonLeft() {
    step = step + width * count;
    step = Math.min(step, 0);
    visibleList.style.left = step + 'px';
  }

  rightButton.addEventListener('click', moveButtonRight);
  leftButton.addEventListener('click', moveButtonLeft);
}

export default slider;
