document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('nav');

  if (!hamburger || !nav) {
    console.error('Hamburger or nav not found!');
    return;
  }

  hamburger.addEventListener('click', function() {
    console.log('Hamburger clicked');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});
