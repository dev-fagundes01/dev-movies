import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "83f9bc68df195b61c06b93f3ab88a5ca",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
