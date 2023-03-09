import React from "react";
import DeleteProducts from "../components/DeleteProducts";

export default function DeleteProduct() {
  return (
    <section className="p-4 flex flex-col">
      <h2 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        기존 제품 삭제
      </h2>
      <DeleteProducts />
    </section>
  );
}
