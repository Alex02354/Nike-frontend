import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProduct = async ({ queryKey }) => {
  const [, id] = queryKey;
  const { data } = await axios.get(`http://192.168.1.30:3000/products/${id}`);
  /*   console.log(data); */
  return data;
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
  });
};
