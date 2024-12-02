document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.slide-dot');
    var watchBtns = document.querySelectorAll('.watch-btn');
    var listenBtns = document.querySelectorAll('.listen-btn'); // Add this line for "Listen Now" buttons
    var currentSlide = 0;

    // Function to change the slide
    function showSlide(index) {
        index = (index + slides.length) % slides.length;  // Ensure index wraps around
        slides.forEach(function(slide, i) {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Add event listeners to dots for navigation
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Function to change slide by direction (next/prev)
    window.changeSlide = function(direction) {
        showSlide(currentSlide + direction);
    };

    // Initialize the first slide as active
    showSlide(currentSlide);

    // Add event listeners for "Watch Video" buttons
    watchBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            var videoOverlay = slides[index].querySelector('.video-overlay');
            videoOverlay.classList.toggle('active');
        });
    });

    // Add event listeners for "Listen Now" buttons
    listenBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var link = btn.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');  // Open the link in a new tab
            }
        });
    });
});
