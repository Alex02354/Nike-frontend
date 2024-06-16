// src/hooks/useNewOrder.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createOrder = async (orderData) => {
  const { data } = await axios.post(
    "http://192.168.1.30:3000/orders",
    orderData
  );
  return data;
};

export const useNewOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};
