import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl dark:text-gray-100 dark:bg-gray-600">
      <p>{text}</p>
      <p className="font-bold text-brand text-xl md:text-2xl dark:text-purple-300">
        ₩{price}
      </p>
    </div>
  );
}
