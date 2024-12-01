document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    const watchBtns = document.querySelectorAll('.watch-btn');
    const listenBtns = document.querySelectorAll('.listen-btn');
    let currentSlide = 0;

    function showSlide(index) {
        // Ensure index wraps around
        index = (index + slides.length) % slides.length;

        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.querySelector('.video-overlay').classList.remove('active');
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    window.changeSlide = function(direction) {
        showSlide(currentSlide + direction);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    // Add event listeners for "Watch" buttons
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
                window.open(link, '_blank');
            }
        });
    });
});