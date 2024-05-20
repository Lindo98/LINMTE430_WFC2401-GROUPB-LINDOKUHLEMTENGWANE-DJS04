class BookDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback = () => {
    this.render();
  };

  static get observedAttributes() {
    return [
      "data-title",
      "data-author",
      "data-image",
      "data-year",
      "data-description",
    ];
  }

  attributeChangedCallback = () => {
    this.render();
  };

  render = () => {
    const title = this.getAttribute("data-title");
    const author = this.getAttribute("data-author");
    const image = this.getAttribute("data-image");
    const year = this.getAttribute("data-year");
    const description = this.getAttribute("data-description");

    this.shadowRoot.innerHTML = `
        <style>
          /* Add your styles here */
        </style>
        <div>
          <img src="${image}" alt="${title}" />
          <h1>${title}</h1>
          <h2>${author}</h2>
          <p>${year}</p>
          <p>${description}</p>
        </div>
      `;
  };
}

customElements.define("book-details", BookDetails);
