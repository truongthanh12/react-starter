import apiService from "./apiService";
import { API } from "./const";

const useProductsFetch = async () => {
  const data = await apiService.get(API.GET_PRODUCTS);

  return { data };
};

export default useProductsFetch;
