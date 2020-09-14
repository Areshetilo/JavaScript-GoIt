import galleryItems from "./gallery-items.js";

const refs = {
    gallery: document.querySelector('.js-gallery'),
    originalImg: document.querySelector('.lightbox__image'),
    modal: document.querySelector('.js-lightbox'),
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    overlay: document.querySelector('.lightbox__content'),
}
let currentIndex = 0;
createGallery();
refs.gallery.addEventListener('click', onClickGalleryImg);

function createGallery() {
    let index = 0;
    const galleryUlTags = galleryItems.map ((galleryItems) => {

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
        index += 1;

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
    currentIndex = +event.target.dataset.index;
    console.log(currentIndex, "cjplfkn")
    setOriginalImgUrl(originalImgURL);
    setOriginalImgAlt(originalImgALT);
    setOriginalImgIndex(currentIndex);
    refs.closeModal.addEventListener('click', closeModal);
    refs.overlay.addEventListener('click', closeOverlay);
    window.addEventListener('keydown', onKeyPress);
}

function openModal() {
    refs.modal.classList.toggle("is-open");
}

function closeModal() {
    refs.modal.classList.toggle("is-open");
    deleteOriginalImgUrl();
    refs.closeModal.removeEventListener('click', closeModal);
    refs.overlay.removeEventListener('click', closeOverlay);
    window.removeEventListener('keydown', onKeyPress);
}

function closeOverlay(event) {
    if(event.target.className === 'lightbox__content') {
        refs.modal.classList.toggle("is-open");
        deleteOriginalImgUrl();
    }
}

function onKeyPress(event) {
    if(event.code === "Escape") {
        closeModal();
    } else if(event.code === "ArrowLeft") {
        leftKeyPress();
    } else if(event.code === "ArrowRight") {
        rightKeyPress();
    }
}

function rightKeyPress() {
    if((currentIndex + 1) > galleryItems.length - 1) {
        currentIndex = 0;
        refs.originalImg.src = galleryItems[currentIndex].original;
    } else {
    currentIndex += 1;
    refs.originalImg.src = galleryItems[currentIndex].original;
    }
    console.log(currentIndex);
}

function leftKeyPress() {
    if(currentIndex === 0) {
        currentIndex = galleryItems.length - 1;
        refs.originalImg.src = galleryItems[currentIndex].original;
    } else {
        currentIndex -= 1;
        refs.originalImg.src = galleryItems[currentIndex].original;
    }
    console.log(currentIndex);
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

function setOriginalImgIndex(index) {
    refs.originalImg.setAttribute("data-index", index)
}

