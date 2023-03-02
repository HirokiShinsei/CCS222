// Get the gallery container and create a popup container
const galleryContainer = document.querySelector('.gallery-container');
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');

// Add the popup container to the body
document.body.appendChild(popupContainer);

// Loop through each gallery item and add an event listener
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Get the image source, title, and description
    const imgSrc = item.querySelector('img').getAttribute('src');
    const title = item.querySelector('img').getAttribute('alt');
    const desc = item.querySelector('.desc').textContent;

    // Create the popup content
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.setAttribute('alt', title);

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = desc;

    const downloadBtn = document.createElement('a');
    downloadBtn.classList.add('download-btn');
    downloadBtn.textContent = 'Download';
    downloadBtn.setAttribute('href', imgSrc);
    downloadBtn.setAttribute('download', '');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    // Add the popup content to the popup container
    popupContent.appendChild(h2);
    popupContent.appendChild(p);
    popupContent.appendChild(downloadBtn);

    // Add the image and popup content to the popup container
    popup.appendChild(img);
    popup.appendChild(popupContent);
    popup.appendChild(closeBtn);
    popupContainer.appendChild(popup);

    // Show the popup container
    popupContainer.style.display = 'flex';

    // Add an event listener to the close button
    closeBtn.addEventListener('click', () => {
      popupContainer.style.display = 'none';
    });
  });
});

// Add an event listener to the popup container to close it when clicked outside of
popupContainer.addEventListener('click', (e) => {
  if (e.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});
