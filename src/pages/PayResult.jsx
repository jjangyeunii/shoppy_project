import axios from "axios";
import React, { useEffect } from "react";
import RedirectHomeBanner from "../components/RedirectHomeBanner";
import useCart from "../hooks/useCart";

export default function PayResult() {
  const {
    removeItem,
    cartQuery: { isLoading, data: products },
  } = useCart();

  const pg_token = window.location.search.split("=")[1];

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const payParams = {
    cid: "TC0ONETIME",
    tid: localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: pg_token,
  };

  useEffect(() => {
    const productsId = products && products.map((product) => product.id);

    axios
      .post(`${PROXY}/v1/payment/approve`, payParams, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_ADMIN_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        // console.log(res.data);
        productsId && productsId.map((id) => removeItem.mutate(id));
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <RedirectHomeBanner />
    </>
  );
}
