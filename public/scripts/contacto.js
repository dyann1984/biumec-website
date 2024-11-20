let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
