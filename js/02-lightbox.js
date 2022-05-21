import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });
function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}" "onclick = event.preventDefaunt()">
    <img 
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
  </a>
  </div>`;
    })
        .join("");
}


console.log(galleryItems);
