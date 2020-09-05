import galleryItems from "./gallery-items.js";

const refs = {
    gallery: document.querySelector('.js-gallery'),
}

createGallery();

function createGallery() {
    let index = 0;
    const galleryUlTags = galleryItems.map ((galleryItems) => {
        index += 1;
        const li = document.createElement("li");
        const a = document.createElement("a");
        const img = document.createElement("img");
        img.setAttribute("src", galleryItems.preview);
        img.setAttribute("alt", galleryItems.description);
        img.setAttribute("class", "gallery__image");
        img.setAttribute("data-source", galleryItems.original);
        img.setAttribute("data-index", "index");

        a.setAttribute("class", "gallery__link");
        a.setAttribute("href", galleryItems.original);

        li.setAttribute("class", "gallery__item");

        a.appendChild(img);
        li.appendChild(a);

        return li
    })
    refs.gallery.append(...galleryUlTags);
}



