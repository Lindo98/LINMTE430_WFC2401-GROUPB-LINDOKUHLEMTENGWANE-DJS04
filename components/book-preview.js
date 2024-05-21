class bookPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Using shadow DOM to encapsulate structure and style
  }

  set book({ book, author }) {
    this._book = book;
    this._author = author;
    this.render();
  }

  get book() {
    return this._book;
  }

  connectedCallback() {
    this.render();
  }

  render(array, authors, BOOKS_PER_PAGE) {
    const pageLoadFrag = document.createDocumentFragment();

    for (const { author, id, image, title } of array.slice(0, BOOKS_PER_PAGE)) {
      const bookPreviewBtn = document.createElement("button");
      bookPreviewBtn.classList.add("preview");
      bookPreviewBtn.setAttribute("data-preview", id); // Creates new custom attribute called "data-preview" and sets the value to be the book's id

      bookPreviewBtn.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `;

      pageLoadFrag.appendChild(bookPreviewBtn);
    }

    this.shadowRoot.innerHTML = `
    <div class="book-preview-overlay" data-book-preview-overlay>
    <div class="book-preview-content">
        <div class="preview-container">
            <img class="preview-image" src="${this._book.image}" alt="${this._book.title}">
            <div class="preview-details">
                <div class="preview-title">${this._book.title}</div>
                <div class="preview-author">${authorName}</div>
                <div class="preview-description">${finalDescription}</div>
                <button data-close-button class="close-button">Close</button>
            </div>
        </div>
    </div>
</div>
    `;

    const style = document.createElement("style");
    style.textContent = `
      .preview {
        border-width: 0;
        width: 100%;
        font-family: Roboto, sans-serif;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-align: left;
        border-radius: 8px;
        border: 1px solid rgba(var(--color-dark), 0.15);
        background: rgba(var(--color-light), 1);
      }

      @media (min-width: 60rem) {
        .preview {
          padding: 1rem;
        }
      }

      .preview_hidden {
        display: none;
      }

      .preview:hover {
        background: rgba(var(--color-blue), 0.05);
      }

      .preview__image {
        width: 48px;
        height: 70px;
        object-fit: cover;
        background: grey;
        border-radius: 2px;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
      }

      .preview__info {
        padding: 1rem;
      }

      .preview__title {
        margin: 0 0 0.5rem;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: rgba(var(--color-dark), 0.8);
      }

      .preview__author {
        color: rgba(var(--color-dark), 0.4);
      }
    `;

    // Clear previous contents and append new elements to shadow DOM

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
    this.shadowRoot.appendChild(pageLoadFrag);
  }
}

customElements.define("book-previews", DisplayBooksPreview);
