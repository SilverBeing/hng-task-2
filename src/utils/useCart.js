import { cartContext } from "@/providers/cartProvider";
import { useContext } from "react";

export default function useCart() {
  return useContext(cartContext);
}
