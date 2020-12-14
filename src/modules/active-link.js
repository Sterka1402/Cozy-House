function activeLink() {
  const allUrls = document.querySelector('.nav-menu').getElementsByTagName('a');
  const currentUrl = document.location.href;
  for (let i = 0; i < allUrls.length; i++) {
    if (currentUrl == allUrls[i].href) {
      allUrls[i].classList.add('active');
    }
  }  
}
export default activeLink;
