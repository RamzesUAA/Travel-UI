import axios from "axios";

export const createBaseApi = () =>
  axios.create({
    baseURL: "https://localhost:44315/api",
    headers: { "Content-Type": "application/json" },
  });

export const createBaseApiAuth = () =>
  axios.create({
    baseURL: "https://localhost:44315/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
