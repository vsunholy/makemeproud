let slideIndex = 0;

const slides = document.querySelectorAll('.card'); // Select all testimonial cards
const dots = document.querySelectorAll('.dot'); // Select all navigation dots
const prev = document.querySelector('.prev'); // Select the previous button
const next = document.querySelector('.next'); // Select the next button

function updateSlides() {
    // Reset all slides and dots
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        dots[i].style.opacity = '0.3'; // Dim all dots
    });

    // Activate current slide and dot
    slides[slideIndex].classList.add('active'); // Add active class to current slide
    dots[slideIndex].style.opacity = '1'; // Highlight current dot
}

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length; // Ensure index wraps around
    updateSlides(); // Update the displayed slide and dot
}

// Initialize the first slide and dot if slides exist
if (slides.length > 0) {
    updateSlides();
}

// Automatic slideshow
let autoSlideInterval = setInterval(() => {
    showSlide(slideIndex + 1); // Increment index for next slide
}, 3000);

function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Stop auto-sliding on manual interaction
    autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1); // Restart auto-sliding
    }, 3000);
}

// Add event listeners to dots for manual navigation
if (dots.length > 0) {
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlideInterval); // Clear interval before interaction
            showSlide(i); // Show the clicked dot's slide
            resetAutoSlide(); // Restart auto-sliding after interaction
        });
    });
}

// Add event listeners to arrows for manual navigation
if (prev && next) {
    prev.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        clearInterval(autoSlideInterval); // Clear interval before interaction
        showSlide(slideIndex - 1); // Decrement index for previous slide
        resetAutoSlide(); // Restart auto-sliding after interaction
    });

    next.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        clearInterval(autoSlideInterval); // Clear interval before interaction
        showSlide(slideIndex + 1); // Increment index for next slide
        resetAutoSlide(); // Restart auto-sliding after interaction
    });
}
