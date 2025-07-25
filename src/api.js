import axios from "axios";

const instance = axios.create({
  baseURL: "https://dsa-problems-tracker.onrender.com/api",
});

export default instance;
