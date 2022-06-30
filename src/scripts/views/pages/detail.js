/* eslint-disable new-cap */
import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantDetailTemplate } from "../templates/creator-template";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import PostReview from "../../utils/post-review";

const Detail = {
  async render() {
    return `
    <div class="container">
    <div id="loading"></div>
    <div class="main">
    <div id="restaurant" class="restaurant container"></div>
      <section id="detail-rest"></section>
      <div class="like" id="likeButtonContainer"></div>
    </div>
  </div>
  `;
  },

  async afterRender() {
    const loading = document.querySelector("#loading");
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    loading.innerHTML = '<div class="loader"></div>';

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector("#detail-rest");

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
          address: restaurant.address,
          description: restaurant.description,
          menus: restaurant.menus,
        },
      });
      loading.style.display = "none";
    } catch (err) {
      loading.style.display = "none";
      restaurantsContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
    const btnSubmit = document.querySelector("#submit-review");
    const nameInput = document.querySelector("#inputName");
    const reviewInput = document.querySelector("#inputReview");

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (nameInput.value === "" || reviewInput.value === "") {
        // eslint-disable-next-line no-alert
        alert("Inputan tidak boleh ada yang kosong");
        nameInput.value = "";
        reviewInput.value = "";
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = "";
        reviewInput.value = "";
      }
    });
  },
};

export default Detail;
