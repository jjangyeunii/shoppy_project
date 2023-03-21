import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import axios from "axios";

const SHIPPING = 3000;

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const APPROVAL_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/pay/result"
    : "https://marvelous-klepon-7c123d.netlify.app/pay/result";
const FAIL_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://marvelous-klepon-7c123d.netlify.app";
const CANCEL_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/carts"
    : "https://marvelous-klepon-7c123d.netlify.app/carts";

export default function MyCart() {
  const {
    removeItem,
    cartQuery: { isLoading, data: products },
  } = useCart();

  const {
    productsQuery: { data: productsData },
  } = useProducts();

  const productsId = products && products.map((product) => product.id);

  useEffect(() => {
    const productsIdList =
      productsData && productsData.map((product) => product.id);
    const cartIdList = products && products.map((product) => product.id);
    const deletedItems =
      cartIdList && cartIdList.filter((id) => !productsIdList?.includes(id));
    if (deletedItems && deletedItems.length > 0) {
      deletedItems.map((id) => removeItem.mutate(id));
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, cur) => prev + parseInt(cur.price) * cur.quantity,
      0
    );

  const payParams = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "장바구니 상품",
    quantity: 1,
    total_amount: totalPrice,
    vat_amount: parseInt(totalPrice / 11),
    tax_free_amount: 0,
    approval_url: APPROVAL_URL,
    fail_url: FAIL_URL,
    cancel_url: CANCEL_URL,
  };

  const handleOrder = () => {
    axios
      .post(`${PROXY}/v1/payment/ready`, payParams, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_ADMIN_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        localStorage.setItem("tid", res.data.tid);
        window.location.href = res.data.next_redirect_pc_url;
        productsId && productsId.map((id) => removeItem.mutate(id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요!</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" onClick={handleOrder} />
        </>
      )}
    </section>
  );
}
