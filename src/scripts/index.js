import "regenerator-runtime";
import "./component/nav-web";
import "./component/hero-web";
import "./component/foot-web";
import '../styles/style.css';
import "../styles/responsive.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
    hamberger: document.querySelector(".hamberger"),
    navMenu: document.querySelector(".nav-menu"),
    navLink: document.querySelectorAll(".nav-link"),
    content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", () => {
    app.renderPage();
    swRegister();
});

window.onresize = () => {
    const navMenu = document.querySelector(".nav-menu");

    if (window.innerWidth < 769) {
        // Ketika layarnya lebih kecil dari 600px,
        // maka ambil elemen navbar dan set tabIndex = -1 (keluar dari tab order)
        Array.from(navMenu.children).forEach((item) => {
            item.children[0].tabIndex = -1;
        });
    } else {
        // Ketika layarnya lebih besar dari 600px,
        // maka ambil elemen navbar dan set tabIndex = 0 (masukkan kembali ke tab order)
        Array.from(navMenu.children).forEach((item) => {
            item.children[0].tabIndex = 0;
        });
    }
};