const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (!hamburger || !nav) {
  console.error('Hamburger or nav not found!');
}

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked'); // Debugging log
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});
