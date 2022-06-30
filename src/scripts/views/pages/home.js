import RestaurantResource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/creator-template";

const Home = {
    async render() {
        return `
    <div class="container">
      <h2 class="content-title">Berikut Restaurant yang tersedia!!!</h2>
      <div id="loading">
      
      </div>
      <section id="card-list" class="card-list">

      </section>
    </div>
    `;
    },

    async afterRender() {
        const loading = document.querySelector("#loading");
        loading.innerHTML = '<div class="loader"></div>';

        try {
            const restaurants = await RestaurantResource.listRestaurants();
            const restaurantsContainer = document.querySelector("#card-list");

            restaurants.forEach((Restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(Restaurant);
            });

            loading.style.display = "none";
        } catch (err) {
            loading.style.display = "none";
            restaurantsContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
        }
    },
};

export default Home;
