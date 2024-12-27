let slideIndex = 0;

const slides = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

if (slides.length > 0) {
    slides[slideIndex].classList.add('active');

    slideIndex++;
}

function showSlides(slideIndex) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[slideIndex].classList.add('active');
}
setInterval(function () {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
    slideIndex++;

}, 3000);