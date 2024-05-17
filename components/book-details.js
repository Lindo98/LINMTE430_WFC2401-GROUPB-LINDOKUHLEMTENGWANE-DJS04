class BookDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectCallback() {
    this.render();
  }

  render() {
    const author = this.getAttribute("data-author");
    const image = this.getAttribute("data-image");
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");
    const rating = this.getAttribute("data-rating");
    const id = this.getAttribute("data-id");
  }
}

customElements.define("book-details", BookDetails);
