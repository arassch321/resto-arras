class FooterWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer id = "footer">
                <p>Submission Menjadi Front-End Web Developer Expert &#169; 2022, Dicoding Academy</p>
            </footer>
                `;
    }
}
customElements.define("foot-web", FooterWeb);
