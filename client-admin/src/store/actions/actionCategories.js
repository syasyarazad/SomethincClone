import { baseUrl, FETCH_CATEGORIES } from "./actionType";
import Swal from "sweetalert2";

export const fetchSuccessCategories = (data) => {
  return {
    type: FETCH_CATEGORIES,
    data,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
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
      dispatch(fetchSuccessCategories(result));
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

export const fetchOneCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
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

export const addCategory = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
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
        text: "Success Add Category",
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

export const editCategory = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
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

      dispatch(fetchCategories());

      Swal.fire({
        title: "Congrats...",
        text: "Success Edit Category",
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

export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      if (!response.ok) {
        throw new Error("There is an error!");
      }

      dispatch(fetchCategories());
      Swal.fire({
        title: "Congrats...",
        text: "Success Delete Category",
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
