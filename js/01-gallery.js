import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
function createCardMarkup(array) {
  return array
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`
    )
    .join("");
}

const CardMarkup = createCardMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", CardMarkup);
galleryEl.addEventListener("click", OnClick);

function OnClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const originalPicture = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${originalPicture}"width="900" height="600" >`
  );
  instance.show();
}