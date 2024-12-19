const up = document.querySelector('#up');
const down = document.querySelector('#next');

const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

up.addEventListener('click', () => {
    slides[currentIndex].classList.remove('current');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('current');
});

down.addEventListener('click', () => {
    slides[currentIndex].classList.remove('current');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('current');
});
setInterval(() => {
    slides[currentIndex].classList.remove('current');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('current');
}, 5000);

