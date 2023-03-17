import axios from "axios";
import React, { useEffect } from "react";
import Button from "../components/ui/Button";

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
    <section className="flex flex-col justify-center items-center">
      <h2>결제가 완료되었습니다</h2>
      <Button text="홈으로 돌아가기" />
    </section>
  );
}
