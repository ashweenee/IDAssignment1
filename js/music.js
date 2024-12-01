document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const watchBtns = document.querySelectorAll('.watch-btn');
    const listenBtns = document.querySelectorAll('.listen-btn'); // Add this line for "Listen Now" buttons
    let currentSlide = 0;

    // Function to change the slide
    function showSlide(index) {
        index = (index + slides.length) % slides.length;  // Ensure index wraps around
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Add event listeners to dots for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Function to change slide by direction (next/prev)
    window.changeSlide = function(direction) {
        showSlide(currentSlide + direction);
    }

    // Initialize the first slide as active
    showSlide(currentSlide);

    // Add event listeners for "Watch Video" buttons
    watchBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const videoOverlay = slides[index].querySelector('.video-overlay');
            videoOverlay.classList.toggle('active');
        });
    });

    // Add event listeners for "Listen Now" buttons
    listenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const link = btn.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');  // Open the link in a new tab
            }
        });
    });
});
