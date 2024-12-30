let slideIndex = 0;

const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Initialize the first slide and dot
if (slides.length > 0) {
    slides[slideIndex].classList.add('active');
    dots[slideIndex].style.opacity = '1';
}

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].style.opacity = '0.3'; // Reset all dots opacity
    });
    slides[index].classList.add('active');
    dots[index].style.opacity = '1'; // Highlight active dot
    
}

// Automatic slideshow
setInterval(function () {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
    slideIndex++;
}, 3000);

// Add event listeners to dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlides(i);
        slideIndex = i; // Update the global index
    });
});

//add event listeners to arrows


prev.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides(slideIndex);
});

next.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;             
    }
    showSlides(slideIndex);
   
});     

