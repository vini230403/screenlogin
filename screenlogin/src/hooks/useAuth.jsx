// hooks/useAuth.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
  const [checkingStatus, setCheckingStatus] = useState(true); // Estado para indicar se está verificando

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // Usuário está logado
      } else {
        setIsLoggedIn(false); // Usuário não está logado
      }
      setCheckingStatus(false); // Finaliza a verificação
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar
  }, []);

  return { isLoggedIn, checkingStatus };
};