"use client";

import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import { DataContext } from "../.context/DataContext";
import { useRouter } from 'next/navigation'

const url = "http://localhost:3000/Usuarios";
import { IoMdHome } from "react-icons/io";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import "./login-page.css";


const LoginPage = () => {

  const router = useRouter();

  const { userData, setUserData } = useContext(DataContext);

  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const { data } = useFetch(url);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  function Login() {
    const usuario = data.find((usuario) => usuario.id === user);

    if (!usuario) {
      alert("Usuário não encontrado");
      return;
    }
  
    if (usuario.senha !== senha) {
      alert("Senha incorreta");
      return;
    }
  
    setUserData({ ...usuario, logado: true });
  }
  
  // Monitora mudanças no estado userData
  useEffect(() => {
    if (userData?.logado) {
      console.log("Usuário autenticado:", userData);
      location.href = "/dashboard";
    }
  }, [userData]);



  return (
    <div className="Login">
      <div className="BlueBox">
        <div className="home">
          <a href="../">
            <IoMdHome className="icon" />
            <p>Home</p>
          </a>
        </div>
      </div>
      <div className="conteudo">
        <h1>Login</h1>
        <div className="data">
          <label htmlFor="Usuario">
            <p>
              Matricula/CPF<span>*</span>
            </p>
            <input
              id="Usuario"
              className="form-control bg-transparent"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label htmlFor="Senha">
            <p>
              Senha<span>*</span>
            </p>
            <div className="senhaInput">
              <input
                className="form-control bg-transparent" 
                id="Senha"
                type={mostrarSenha ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span onClick={toggleMostrarSenha} style={{ cursor: "pointer" }}>
                {mostrarSenha ? <IoEyeOffSharp /> : <IoEyeSharp />}{" "}
              </span>
            </div>
          </label>
        </div>
        <div className="rememberPassword">
          <input
            id="lembrarSenha"
            type="checkbox"
            checked={lembrarSenha}
            onChange={() => setLembrarSenha(!lembrarSenha)}
          />
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
