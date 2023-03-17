import React from "react";
import { Link } from "react-router-dom";
import { FcInTransit } from "react-icons/fc";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./ui/CartStatus";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand font-bold">
        <FcInTransit className="mr-1" />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <>
            <Link to="products/new" className="text-2xl">
              <FaPencilAlt />
            </Link>
            <Link to="products/delete" className="text-2xl">
              <FaRegTrashAlt />
            </Link>
          </>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
