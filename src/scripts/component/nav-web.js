class NavWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
    <div class = "navbar-top">
    <a href="/" class="nav-branding">RA</a>

    <a class="hamberger" href="#">☰</a>
    <ul class="nav-menu">
        <li class="nav-item"><a href="#/home" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#/favorite" class="nav-link">Favorite</a></li>
        <li class="nav-item"><a href="https://github.com/arassch321" class="nav-link">About Us</a></li>
    </ul>
    </div>
    `;
    }
}
customElements.define("nav-web", NavWeb);
