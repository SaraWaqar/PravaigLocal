import axios from "axios";

const Instance = axios.create({
  baseURL: "http://192.168.0.179:3700",

  headers: {
    "Content-Type": "application/json",
  },
});

export default Instance;
