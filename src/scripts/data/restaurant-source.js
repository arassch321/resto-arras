/* eslint-disable new-cap */
import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurant(dataInput) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInput),
    });
    const rawResponseJson = await rawResponse.json();
    return rawResponseJson.customersReviews;
  }
}

export default RestaurantSource;
