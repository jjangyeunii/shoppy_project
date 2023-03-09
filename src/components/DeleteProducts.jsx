import React from "react";
import useProducts from "../hooks/useProducts";
import DeleteProductCard from "./DeleteProductCard";

export default function DeleteProducts() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <DeleteProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
