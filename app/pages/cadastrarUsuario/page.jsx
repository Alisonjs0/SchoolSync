"use client";

import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import { IoIosReturnLeft } from "react-icons/io";
import FormAluno from "./components/formAluno.js";
import FormProfessor from "./components/formProfessor.js";
import "./cadastrarUsuario.css";
import { useState } from "react";

const stages = [
  { id: 0, name: "Geral" },
  { id: 1, name: "Aluno" },
  { id: 2, name: "Professor" },
];

const CadastrarUsuario = () => {
  const [stage, setStage] = useState(stages[0].name);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();
  

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

  const nextPage = () => {
    if (stage !== "selecione") {
    console.log(stage);
    setStage(cargo);
  }
}
  return (
    <div>
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
                  required
                />
                <input
                  type="email"
                  placeholder="Email:"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Telefone:"
                  value={tel}
                  onChange={handleTelefoneChange}
                  required
                />
                <input
                  type="number"
                  placeholder="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Senha:"
                  onChange={(e) => setSenha(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirmar Senha:"
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  required
                />
                {/* Select dentro de um contêiner para personalização da seta */}

                <select
                  name=""
                  id=""
                  onChange={(e) => setCargo(e.target.value)}
                >
                  <option value="selecione">Selecione</option>
                  <option value="Professor">Professor</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Admin">ADM</option>
                </select>

                <button className="button" type="submit">
                  Cadastrar Usuario
                </button>
              </form>
            )}
            {stage === "Aluno" && (
              <>
                <span
                  className="position-absolute"
                  onClick={() => setStage("Geral")}
                >
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
                <span
                  className="position-absolute"
                  onClick={() => setStage("Geral")}
                >
                  <IoIosReturnLeft
                    style={{ cursor: "pointer" }}
                    className="m-3 fs-4"
                  />
                </span>
                <FormProfessor />
              </>
            )}
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default CadastrarUsuario;
