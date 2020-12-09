function activeLink() {
  const allUrls = document.querySelector('.nav-menu').getElementsByTagName('a');
  const currentUrl = document.location.href;
  console.log(currentUrl);
  for (let i = 0; i < allUrls.length; i++) {
    console.log(allUrls[i]);
    if (currentUrl == allUrls[i].href) {
      allUrls[i].classList.add('active');
      
    }
  }  
}
export default activeLink;
