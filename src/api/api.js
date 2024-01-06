import axios from "axios";

const baseURL = "http://www.themealdb.com/api/json/v1/1";

const headers = {
  "Content-Type": "application/json",
};

const api = axios.create({ baseURL, headers });

export default api;
