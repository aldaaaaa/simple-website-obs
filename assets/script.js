/* Icon Hamburger (3 garis vertikal) */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

/* Slide Ost (Original Soundtrack) */
const sliderSections = document.querySelectorAll('.slider-section');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
let currentSlideIndex = 0;

function showSlide(index) {
    sliderSections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
}

function goToSlide(index) {
    currentSlideIndex = (index + sliderSections.length) % sliderSections.length;
    showSlide(currentSlideIndex);
}

prevButton.addEventListener('click', () => {
    goToSlide(currentSlideIndex - 1);
});

nextButton.addEventListener('click', () => {
    goToSlide(currentSlideIndex + 1);
});

showSlide(currentSlideIndex);