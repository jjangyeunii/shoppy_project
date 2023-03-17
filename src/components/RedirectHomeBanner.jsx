import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

export default function RedirectHomeBanner() {
  const navigate = useNavigate();
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-redirectHome opacity-80" />
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-3xl font-bold mb-10">결제가 완료되었습니다</h2>
        <Button text="홈으로 돌아가기" onClick={() => navigate("/")} />
      </div>
    </section>
  );
}
