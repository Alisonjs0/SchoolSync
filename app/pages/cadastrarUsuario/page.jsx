"use client";

import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import { IoIosReturnLeft } from "react-icons/io";
import FormAluno from "./components/formAluno.js";
import FormProfessor from "./components/formProfessor.js";
import FormAdmin from "./components/formAdmin.js";
import { user as initialUserData } from "../data/infos.js";
import "./cadastrarUsuario.css";
import { useState } from "react";

const CadastrarUsuario = () => {
  const [user, setUser] = useState(initialUserData);
  const [stage, setStage] = useState("Geral");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [data, setData] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();
  const [sexo, setSexo] = useState();

  const formatarTelefone = (telefone) => {
    // Remove todos os caracteres que não sejam números
    telefone = telefone.replace(/\D/g, "");

    // Aplica a formatação com parênteses, espaço e hífen
    if (telefone.length > 10) {
      telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Formato (XX) XXXXX-XXXX
    } else if (telefone.length > 5) {
      telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3"); // Formato (XX) XXXX-XXXX
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d{2})(\d{0,5})/, "($1) $2"); // Formato parcial com DDD
    }

    return telefone;
  };

  const handleTelefoneChange = (event) => {
    const valor = event.target.value;
    const telefoneFormatado = formatarTelefone(valor);
    setTel(telefoneFormatado);
  };

  const nextPage = (event) => {
    event.preventDefault();
    console.log(cargo);
    console.log(sexo);
    if (
      cargo !== "selecione" &&
      cargo &&
      stage == "Geral" &&
      sexo !== "genero" &&
      sexo
    ) {
      setStage(cargo);
      console.log(cargo);
    } else if (cargo == "selecione") {
      alert("Selecione o cargo");
    } else if (!sexo || sexo === "genero") {
      alert("Selecione o sexo");
    }
  };

  const retornar = () => {
    setStage("Geral");
  };

  return (
    <div>
      {user.tipo === "admin" && (
        <EsqueletoPrincipal>
          <div className="conteiner conteudoMenus">
            <h3>Cadastrar {stage}</h3>
            <div className="conteudo position-relative">
              {stage === "Geral" && (
                <form id="forms" action="" onSubmit={nextPage}>
                  <input
                    type="text"
                    placeholder="Nome:"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                  />
                  <input
                    type="number"
                    placeholder="CPF"
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                  />
                  <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Data de Nascimento"
                  />
                  <select
                    name=""
                    id=""
                    onChange={(e) => setSexo(e.target.value)}
                    value={sexo}
                  >
                    <option value="genero">Selecionar genero</option>
                    <option value="Maculino">Maculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Email:"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone:"
                    value={tel}
                    onChange={handleTelefoneChange}
                  />
                  <input
                    type="password"
                    placeholder="Senha:"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirmar Senha:"
                    value={confirmSenha}
                    onChange={(e) => setConfirmSenha(e.target.value)}
                  />

                  <select
                    name=""
                    id=""
                    onChange={(e) => setCargo(e.target.value)}
                    value={cargo}
                  >
                    <option value="selecione">Selecionar Cargo</option>
                    <option value="Professor">Professor</option>
                    <option value="Aluno">Aluno</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <button className="button" type="submit">
                    Cadastrar Usuario
                  </button>
                </form>
              )}
              {stage === "Aluno" && (
                <>
                  <span className="position-absolute" onClick={retornar}>
                    <IoIosReturnLeft
                      style={{ cursor: "pointer" }}
                      className="m-3 fs-4"
                    />
                  </span>
                  <FormAluno />
                </>
              )}
              {stage === "Professor" && (
                <>
                  <span className="position-absolute" onClick={retornar}>
                    <IoIosReturnLeft
                      style={{ cursor: "pointer" }}
                      className="m-3 fs-4"
                    />
                  </span>
                  <FormProfessor />
                </>
              )}
              {stage === "Admin" && (
                <>
                  <span className="position-absolute" onClick={retornar}>
                    <IoIosReturnLeft
                      style={{ cursor: "pointer" }}
                      className="m-3 fs-4"
                    />
                  </span>
                  <FormAdmin />
                </>
              )}
            </div>
          </div>
        </EsqueletoPrincipal>
      )}
      {user.tipo !== "admin" && (
        <div className="alert alert-danger" role="alert">
          Acesso negado!
        </div>
      )}
    </div>
  );
};

export default CadastrarUsuario;
