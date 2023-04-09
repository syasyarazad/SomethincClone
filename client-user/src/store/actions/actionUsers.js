import { baseUrl } from "./actionType";
import Swal from "sweetalert2";

export const register = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });

      const result = await response.json();

      if (!result.id) {
        throw result.msg;
      }
      console.log(result);
      Swal.fire({
        title: "Congrats...",
        text: result.msg,
        imageUrl: "https://i.pinimg.com/originals/39/b0/38/39b0387991f713f5154683ab4c277bb7.jpg",
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

export const login = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const result = await response.json();

      if (!result.access_token) {
        throw result.msg;
      }

      localStorage.setItem("access_token", result.access_token);
      Swal.fire({
        title: "Congrats...",
        text: result.msg,
        imageUrl: "https://i.pinimg.com/originals/39/b0/38/39b0387991f713f5154683ab4c277bb7.jpg",
        imageHeight: 200,
      });
      return { msg: "Success" };
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
