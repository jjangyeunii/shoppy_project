import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useProducts from "../hooks/useProducts";

export default function DeleteProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const { deleteProduct } = useProducts();
  const handleDelete = () => {
    if (window.confirm("상품을 삭제하시겠습니까?")) {
      deleteProduct.mutate(id);
    } else {
      alert("상품 삭제가 취소되었습니다.");
    }
  };
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
      <RiDeleteBin5Fill onClick={handleDelete} />
    </li>
  );
}
