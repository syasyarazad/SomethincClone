import { baseUrl, FETCH_PRODUCTS } from "./actionType";
import Swal from "sweetalert2";

export const fetchSuccessProducts = (data) => {
  return {
    type: FETCH_PRODUCTS,
    data,
  };
};

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error("There is an error!");
      }

      const result = await response.json();
      dispatch(fetchSuccessProducts(result));
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        imageUrl: "https://i.imgflip.com/30nm2k.png",
        imageHeight: 200,
        text: err,
      });
    }
  };
};

export const fetchOneProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error("There is an error!");
      }

      const result = await response.json();
      return result.data;
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        imageUrl: "https://i.imgflip.com/30nm2k.png",
        imageHeight: 200,
        text: err,
      });
    }
  };
};

export const fetchQuote = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=famous`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1vK5cK4t5IPQWf0IM2d2yw==R4fRFzlZWh7DyYlT",
          },
        }
      );

      if (!response.ok) {
        throw new Error("There is an error!");
      }

      const result = await response.json();
      return result[0];
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        imageUrl: "https://i.imgflip.com/30nm2k.png",
        imageHeight: 200,
        text: err,
      });
    }
  };
};
