const slides = document.querySelectorAll('.slide');
const progressBars = document.querySelectorAll('.progress-bar');
const slideshow = document.querySelector('.slideshow');
let currentIndex = 0;
const duration = 5000; // 5 seconds per slide

// Function to extract and apply color scheme
function applyColorsFromImage(imageElement) {
  Vibrant.from(imageElement).getPalette().then((palette) => {
    // Extract dominant colors
    const primaryColor = palette.Vibrant.hex;
    const secondaryColor = palette.Muted.hex;

    // Apply colors to slideshow and progress bar
    slideshow.style.backgroundColor = primaryColor;
    slides[currentIndex].style.color = secondaryColor;
    progressBars[currentIndex].style.backgroundColor = secondaryColor;
  });
}

// Show Slide with Dynamic Colors
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    progressBars[i].style.width = '0%';
    if (i === index) {
      slide.classList.add('active');
      const img = slide.querySelector('.album-cover img');
      applyColorsFromImage(img); // Apply colors dynamically
      setTimeout(() => {
        progressBars[i].style.width = '100%';
      }, 50);
    }
  });
}

// Slide Controls
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-transition slides
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, duration);

// Initialize first slide
showSlide(currentIndex);