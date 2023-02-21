import React from "react";
import { Link } from "react-router-dom";
import { FcInTransit } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { login } from "../api/firebase";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FcInTransit />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="products/new" className="text-2xl">
          <FaPencilAlt />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
