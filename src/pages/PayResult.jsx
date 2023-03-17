import axios from "axios";
import React, { useEffect } from "react";
import RedirectHomeBanner from "../components/RedirectHomeBanner";

export default function PayResult() {
  const pg_token = window.location.search.split("=")[1];

  const payParams = {
    cid: "TC0ONETIME",
    tid: localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: pg_token,
  };

  useEffect(() => {
    axios
      .post("/v1/payment/approve", payParams, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_ADMIN_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <RedirectHomeBanner />
    </>
  );
}
