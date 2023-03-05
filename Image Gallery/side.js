const images = document.querySelectorAll('.image-container img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
    modalImage.alt = image.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
