import axios from "axios";

const API = axios.create({
  baseURL: "https://kishanjee-shukla-portfolio.onrender.com/api"
});

export default API;