function toggleMenu() {
  var sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('open'); // Toggle the 'open' class to slide the menu

  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('open'); // Toggle the 'open' class for menu icon animation
}

// Add event listener for menu icon click
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
