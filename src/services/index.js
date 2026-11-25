import axios from "axios";

// consome da Fake Store
export const API = axios.create({
    baseURL: "https://fakestoreapi.com"
});

// consome da api local
export const localAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/v1",
    headers: {
        "Content-Type": "application/json",
    },
});