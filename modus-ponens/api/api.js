const axios = require("axios").default;

const URL =
  "https://modusponens-11bff-default-rtdb.asia-southeast1.firebasedatabase.app/data.json";

const api = axios.create({
  baseURL: URL,
});

export default api;
