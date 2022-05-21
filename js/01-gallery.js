import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.addEventListener("click", onGalleryListclick);
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
function onGalleryListclick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    } else {
        const instance = basicLightbox.create(`<img src= "${e.target.dataset.source}" alt="desc"/>`);
        instance.show()

        if (instance.visible()) {
    window.addEventListener('keydown', (e) => { 
       if (e.key === "Escape") {
    instance.close();
  }
    });
  }
    }
    console.log(e.target);
    
}




console.log(galleryItems);
