/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
    init({ hamberger, navMenu, navLink }) {
        hamberger.addEventListener("click", () => {
            hamberger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLink.forEach((n) => n.addEventListener("click", () => {
            hamberger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    },
};

export default DrawerInitiator;
