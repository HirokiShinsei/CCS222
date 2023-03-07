const images = document.querySelectorAll('.image-container img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    updateModal();
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

prevBtn.addEventListener('click', () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateModal();
});

nextBtn.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateModal();
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  } else if (event.keyCode === 37) {
    // Left arrow key
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    updateModal();
  } else if (event.keyCode === 39) {
    // Right arrow key
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    updateModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    closeModal();
  }
});

function updateModal() {
  const currentImage = images[currentImageIndex];
  modalImage.src = currentImage.src;
  modalImage.alt = currentImage.alt;

  if (modalImage.naturalWidth > modalImage.naturalHeight) {
    modalImage.style.height = 'auto'; // Landscape image
    modalImage.style.width = '100%';
  } else {
    modalImage.style.height = '100%'; // Portrait image
    modalImage.style.width = 'auto';
  }

  const smallImages = document.querySelectorAll('.small-image');
  smallImages.forEach((smallImage, index) => {
    if (index === currentImageIndex) {
      smallImage.classList.add('active');
    } else {
      smallImage.classList.remove('active');
    }
  });
}
