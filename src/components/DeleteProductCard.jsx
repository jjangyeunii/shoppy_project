import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function DeleteProductCard({
  product,
  product: { id, image, title, category, price, description },
}) {
  const { deleteProduct } = useProducts();
  const handleDelete = () => {
    if (window.confirm("상품을 삭제하시겠습니까?")) {
      deleteProduct.mutate(id);
    } else {
      alert("상품 삭제가 취소되었습니다.");
    }
  };
  const navigate = useNavigate();
  return (
    <li className="flex justify-between my-2 items-center">
      <img
        className="w-24 md:w-48 lg:w-56 rounded-lg hover:scale-105"
        src={image}
        alt={title}
        onClick={() => navigate(`/products/${id}`, { state: { product } })}
      />
      <div className="flex-1 flex justify-between items-center ml-4">
        <div className="basis-3/5">
          <h3 className="text-xl md:text-2xl mb-1">{title}</h3>
          <p className="text-lg md:text-xl my-1">{`₩${price}`}</p>
          <p className="line-clamp-1 text-sm">{description}</p>
        </div>
        <p className="font-bold md:text-lg">{category}</p>
        <RiDeleteBin5Fill
          className="transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1 text-2xl md:text-3xl"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}
