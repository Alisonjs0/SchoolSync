"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useFetch } from "@/app/hooks/useFetch";
const url = "http://localhost:3000/Usuarios"

import { IoMdHome } from "react-icons/io";
import "./login-page.css";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const {data} = useFetch(url)
  console.log(data);

  function Login() {
    if (data.find((usuario) => usuario.id === user && usuario.senha === senha)) {
      router.push("/pages/dashboard");
    } else {
      alert("Senha incorreta");
    }
  }
  return (
    <div className="Login">
      <div className="BlueBox">
        <div className="home">
          <a href="../">
            <IoMdHome className="icon"/><p>Home</p>
          </a>
        </div>
      </div>
      <div className="conteudo">
        <h1>Login</h1>
        <div className="data">
          <label htmlFor="">
            <p>
              Matricula/CPF<span>*</span>
            </p>
            <input
              id="Usuario"
              type="number"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <p>
              Senha<span>*</span>
            </p>
            <input
              id="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
        </div>
        <div className="rememberPassword">
          <input id="lembrarSenha" type="checkbox" />
          <p>Lembrar Senha</p>
        </div>
        <div className="loginButton">
          <button onClick={Login} id="loginButton">
            Login
          </button>
          <a href="">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
