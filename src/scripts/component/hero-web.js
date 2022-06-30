class HeroWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero">
      <picture>
        <source media="(max-width: 650px)" srcset="../images/hero/hero-image-small.jpg" type="image/jpeg">
        <source media="(min-width: 650px)" srcset="../images/hero/hero-image-medium.jpg" type="image/jpeg">
        <source media="(min-width: 1200px)" srcset="../images/hero/hero-image-large.jpg" type="image/jpeg">
        <img
            width="100%" height="360px" 
            src="../images/hero-image.jpg" 
            alt="hero website"
        />
      </picture>
      <div class="hero-text">
        <h1>Restaurant Arras</h1>
        <p>Temukan berbagai restaurant dengan makanan yang lezat!</p>
      </div>
    </div>
           `;
    }
}
customElements.define("hero-web", HeroWeb);