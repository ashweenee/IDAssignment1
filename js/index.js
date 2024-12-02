document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    // Function to go to the next slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;  // Loop back to the first slide after the last one
        slides[currentSlide].classList.add('active');
    }

    // Set interval to switch slides every 3.5 seconds
    setInterval(nextSlide, 3500);
});
