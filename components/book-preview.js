import { authors } from "./data.js";

// Function to create the shadow DOM and set attributes
export const createPreviewButton = (author, id, image, title) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("preview");
  buttonElement.setAttribute("data-preview", id);

  buttonElement.innerHTML = `
    <style>
      .preview {
        display: flex;
        align-items: center;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
      }
      .preview__image {
        width: 50px;
        height: 75px;
        margin-right: 10px;
      }
      .preview__info {
        display: flex;
        flex-direction: column;
      }
      .preview__title {
        font-size: 16px;
        margin: 0;
      }
      .preview__author {
        font-size: 14px;
        color: #555;
      }
    </style>
    <img class="preview__image" src="${image}" />
    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${authors[author]}</div>
    </div>
  `;

  return buttonElement;
};

export const PreviewButton = () => {
  customElements.define(
    "preview-button",
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }

      connectedCallback() {
        const author = this.getAttribute("author");
        const id = this.getAttribute("id");
        const image = this.getAttribute("image");
        const title = this.getAttribute("title");

        const buttonElement = createPreviewButton(author, id, image, title);
        this.shadowRoot.appendChild(buttonElement);
      }
    }
  );
};

PreviewButton(); // Call to define the custom element
