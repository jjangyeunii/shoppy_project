import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
      className="rounded-md shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105 dark:bg-gray-600"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between items-center dark:text-gray-100">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600 dark:text-gray-300">{category}</p>
    </li>
  );
}
