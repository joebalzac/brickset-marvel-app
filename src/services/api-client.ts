import axios from "axios";

const apiKey = "3-MO8j-fOIo-7cunS";

const apiClient = axios.create({
  baseURL: "/api",
  params: {
    apiKey: apiKey,
  },
});

export default apiClient;
