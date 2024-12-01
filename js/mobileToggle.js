document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (!hamburger || !nav) {
    console.error('Hamburger or nav not found!');
    return;
  }

  hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});