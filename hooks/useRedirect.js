"use client";

import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/app/.context/DataContext";
import { useRouter } from 'next/navigation';

export const useRedirect = () => {
  const { userData } = useContext(DataContext);
  const router = useRouter();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (userData.logado === false && !redirected) {
      Swal.fire({
        title: "Redirecionando...",
        text: "Você precisa estar logado para acessar esta página.",
        icon: "info",
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        router.push("/login");
        setRedirected(true); // Atualiza o estado para evitar o loop infinito
      });
    } else if (userData.logado === true) {
      setRedirected(false); // Reinicia o estado se o usuário se logar novamente
    }
  }, [userData.logado, router, redirected]);
};
