import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, checkingStatus } = useAuth();

  // Enquanto está verificando o status, exibe nada ou um loader
  if (checkingStatus) {
    return <p>Carregando...</p>;
  }

  // Redireciona para a página de login se o usuário não estiver logado
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Renderiza a página protegida se o usuário estiver logado
  return children;
};

export default ProtectedRoute;