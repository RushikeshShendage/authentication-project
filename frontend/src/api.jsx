import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://authentication-backend-rqov.onrender.com/api/"
});

export default API;