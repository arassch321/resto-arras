import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
    constructor({ hamberger, navMenu, navLink, content }) {
        this._hamberger = hamberger;
        this._navMenu = navMenu;
        this._navLink = navLink;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            hamberger: this._hamberger,
            navMenu: this._navMenu,
            navLink: this._navLink
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipToContent = document.querySelector(".skip-link");
        const mainContent = document.querySelector("#main-content");
        skipToContent.addEventListener("click", (event) => {
            event.preventDefault();
            mainContent.focus();
        });
    }
}

export default App;
