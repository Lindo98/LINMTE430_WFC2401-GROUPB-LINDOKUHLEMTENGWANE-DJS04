class BooksPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback = () => {
    this.render();
  };

  static get observedAttributes() {
    return ["data-id", "data-author", "data-image", "data-title"];
  }

  attributeChangedCallback = () => {
    this.render();
  };

  render = () => {
    const id = this.getAttribute("data-id");
    const author = this.getAttribute("data-author");
    const image = this.getAttribute("data-image");
    const title = this.getAttribute("data-title");
  };
}
