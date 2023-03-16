import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../api/firebase";

export default function useAllCart() {
  const AllCartQuery = useQuery(["carts"], getAllCart, {
    staleTime: 1000 * 60,
  });

  return { AllCartQuery };
}
