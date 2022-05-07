import axios from "axios";

export const createBaseApi = () =>
  axios.create({
    baseURL: "https://localhost:44315/api",
    headers: { "Content-Type": "application/json" },
  });
