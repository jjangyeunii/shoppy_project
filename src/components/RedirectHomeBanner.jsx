import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export default function RedirectHomeBanner() {
  const navigate = useNavigate();

  const pg_token = window.location.search.split("=")[1];

  const payParams = {
    cid: "TC0ONETIME",
    tid: localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: pg_token,
  };

  const handleTest = () => {
    axios
      .post(`${PROXY}/v1/payment/approve`, payParams, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_ADMIN_KEY}`,
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        // console.log(res.data);
        alert("결제가 완료되었습니다. 배송은 약 3-4일 소요됩니다.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-redirectHome opacity-80" />
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-3xl font-bold mb-10">결제가 완료되었습니다</h2>
        <Button text="결제 요청 확정하기" onClick={handleTest} />
      </div>
    </section>
  );
}
