function slider() {
  const nextButton = document.querySelector('.right-button');
  const prevButton = document.querySelector('.left-button');
  if (!document.querySelector('.pets-card')) return;
  const width = 280;

  const list = document.querySelectorAll('.pets-card');
  const visibleList = document.querySelector('.pets-grid');
  let visibleListWidth = visibleList.clientWidth;
  let step = 0;
  const count = 1;

  window.addEventListener('resize', () => {
    visibleListWidth = visibleList.clientWidth;
    step = Math.max(step, -(width * list.length) + visibleListWidth);
    visibleList.style.left = `${step}px`;

  })
  function moveButtonNext() {
    step -= width * count;
    step = Math.max(step, -(width * list.length) + visibleListWidth);
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
