import axios from "axios";

export const baseURL = "https://server.wcheroes.io/";
export const api = axios.create({
  baseURL,
});

export const getMarketplaceItens = async () => {
  const result = await api("marketplace/items");
  return result;
};
