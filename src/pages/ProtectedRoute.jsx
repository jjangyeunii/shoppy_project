import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { loading, user } = useAuthContext();

  if (loading) {
    return null;
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;

  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우 로그인과 함께 어드민 권한도 가져야 함
  // 조건에 맞지 않으면 상위 경로로 이동
  // 조건에 맞는 경우에만 전달된 children을 보여줌
}
