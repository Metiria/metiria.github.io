// Useful DOM elements
const images = document.querySelectorAll('.gallery-clickable-img');
const modal = document.querySelector('#photoModal');
const modalImg = document.querySelector('#modalImage');
const arrowLeft = document.querySelector('#modalArrowLeft');
const arrowRight = document.querySelector('#modalArrowRight');

let currentIndex = 0;

// function to open the modal view
function modalView(event) {
    currentIndex = Array.from(images).indexOf(event.currentTarget);
    modalImg.src = images[currentIndex].src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

// function to close the modal view
function closeModalView(event) {
    if (event.target === arrowLeft || event.target === arrowRight) {
        return;
    }
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// function to scroll the gallery foreward (circular queue)
function goForward(event) {
    event.stopPropagation(); 
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    modalImg.classList.remove('slide-next', 'slide-prev');
    void modalImg.offsetWidth; 
    modalImg.classList.add('slide-next');
    modalImg.src = images[currentIndex].src;
}

// function to scroll the gallery backward (circular queue)
function goBackward(event) {
    event.stopPropagation(); 
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    modalImg.classList.remove('slide-next', 'slide-prev');
    void modalImg.offsetWidth; 
    modalImg.classList.add('slide-prev');
    modalImg.src = images[currentIndex].src;
}

// optional function to support the keyboard arrows
function handleKeyboard(event) {
    if (!modal.classList.contains('hidden')) {
        if (event.key === 'ArrowRight') goForward(event);
        if (event.key === 'ArrowLeft') goBackward(event);
        if (event.key === 'Escape') closeModalView(event);
    }
}

// Event Listeners
if (modal && modalImg) {
    images.forEach(img => {
        img.addEventListener('click', modalView);
    });
    modal.addEventListener('click', closeModalView);
    arrowLeft.addEventListener('click', goBackward);
    arrowRight.addEventListener('click', goForward);
    document.addEventListener('keydown', handleKeyboard);
}