function slider() {
  const nextButton = document.querySelector('.right-button');
  const prevButton = document.querySelector('.left-button');
  if (!document.querySelector('.pets-card')) return;
  const width = 280;

  const list = document.querySelectorAll('.pets-card');
  const visibleList = document.querySelector('.pets-grid');
  let step = 0;
  const count = 1;

  function moveButtonNext() {
    step -= width * count;
    step = Math.max(step, -width * (list.length - count - (3 - count)));
    visibleList.style.left = `${step}px`;
  }

  function moveButtonPrev() {
    step += width * count;
    step = Math.min(step, 0);
    visibleList.style.left = `${step}px`;
  }

  nextButton.addEventListener('click', moveButtonNext);
  prevButton.addEventListener('click', moveButtonPrev);
}

export default slider;
