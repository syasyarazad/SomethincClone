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
      const response = await fetch(`${baseUrl}/products`, {
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
      const response = await fetch(`${baseUrl}/products/${id}`, {
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

export const addProduct = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });

      const result = await response.json();

      if (!result.data) {
        throw result.msg;
      }

      Swal.fire({
        title: "Congrats...",
        text: "Success Add Product",
        imageUrl: "https://cataas.com/cat/cute/says/lest%20gooow!",
        imageHeight: 200,
      });
      return result;
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

export const editProduct = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });

      const result = await response.json();

      if (!result.data) {
        throw result.msg;
      }

      Swal.fire({
        title: "Congrats...",
        text: "Success Edit Products",
        imageUrl: "https://cataas.com/cat/cute/says/lest%20gooow!",
        imageHeight: 200,
      });
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        imageUrl: "https://i.imgflip.com/30nm2k.png",
        imageHeight: 200,
        text: err,
      });
      return err;
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error("There is an error!");
      }

      dispatch(fetchProducts());
      Swal.fire({
        title: "Congrats...",
        text: "Success Delete Products",
        imageUrl: "https://cataas.com/cat/cute/says/lest%20gooow!",
        imageHeight: 200,
      });
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
