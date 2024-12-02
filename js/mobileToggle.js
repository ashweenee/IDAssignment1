document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('nav');
    var menu = document.querySelector('.menu');

    if (!hamburger || !nav || !menu) {
        console.error('Navigation elements not found!');
        return;
    }

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Optional: Close menu when clicking menu items on mobile
    menu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth <= 768) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});