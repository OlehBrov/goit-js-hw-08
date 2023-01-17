import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" 
src="${preview}" 
alt="${description}" />
</a>`)  
.join("");


galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener('click', gallerySlider);

function gallerySlider (event){
    event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', 
    {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });

}