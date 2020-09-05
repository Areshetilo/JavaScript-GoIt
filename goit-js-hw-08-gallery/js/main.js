import galleryItems from "./gallery-items.js";

const refs = {
    gallery: document.querySelector('.js-gallery'),
    originalImg: document.querySelector('.lightbox__image'),
    modal: document.querySelector('.js-lightbox'),
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    overlay: document.queryCommandEnabled('.lightbox__content'),
}

createGallery();
refs.gallery.addEventListener('click', onClickGalleryImg);
refs.closeModal.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', onClickOverlay);
document.addEventListener('keyup', closeModalEscape);

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
        img.setAttribute("data-index", index);

        a.setAttribute("class", "gallery__link");
        a.setAttribute("href", galleryItems.original);

        li.setAttribute("class", "gallery__item");

        a.appendChild(img);
        li.appendChild(a);

        return li
    })
    refs.gallery.append(...galleryUlTags);
}

function onClickGalleryImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openModal();
    let originalImgURL = event.target.dataset.source;
    let originalImgALT = event.target.alt;

    setOriginalImgUrl(originalImgURL);
    setOriginalImgAlt(originalImgALT);
}

function openModal() {
    refs.modal.classList.add("is-open");
}

function closeModal() {
    refs.modal.classList.remove("is-open");
    deleteOriginalImgUrl();
}

function closeModalEscape(event) {
    if(event.code === "Escape") {
        closeModal();
    }
}

function setOriginalImgUrl(url) {
    refs.originalImg.setAttribute("src", url)
}

function deleteOriginalImgUrl() {
    refs.originalImg.src = "";
    refs.originalImg.alt = "";
}

function setOriginalImgAlt(alt) {
    refs.originalImg.setAttribute("alt", alt)
}