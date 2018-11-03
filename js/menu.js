let menuShow = document.getElementById('menuShow')
  document.getElementById('toggleMenu').addEventListener('click', toggleMenu);
  let isMenuOpen = false;
  function toggleMenu() {
    if (isMenuOpen === false) {
      menuShow.style.display = 'block';
      console.log(menuShow.parentElement);
      
      isMenuOpen = true;
    } else {
      menuShow.style.display = 'none';
      isMenuOpen = false;
    }
    
    // menuShow.parentElement.style.overflowY = 'hidden';
    // menuShow.style.WebkitAnimation = "fadeInDown 1s ease-in-out"; 
    // menuShow.style.animation = "fadeInDown 1s ease-in-out";
    // menuShow.parentElement.style.position = 'fixed';
  }