import apiService from "./apiService";
import { API } from "./const";

const fetchProducts = async () => {
  const data = await apiService.get(API.GET_PRODUCTS);

  return { data };
};

export default fetchProducts;
