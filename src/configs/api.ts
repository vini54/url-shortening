import axios from "axios";

export const shortenApi = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});
