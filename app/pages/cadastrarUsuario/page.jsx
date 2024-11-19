"use client";

// Componentes
import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import FormAluno from "./components/formAluno.js";
import FormProfessor from "./components/formProfessor.js";
import FormAdmin from "./components/formAdmin.js";
import FormGeral from "./components/formGeral.js";

// Dados Usuario
import { user as initialUserData } from "../data/infos.js";

// CSS
import "./cadastrarUsuario.css";

// HOOKS
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

// Icons
import { IoIosReturnLeft } from "react-icons/io";

// Database
const url = "http://localhost:3000/Alunos"

const CadastrarUsuario = () => {
  const [user, setUser] = useState(initialUserData);
  const [stage, setStage] = useState("Geral");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();
  const [sexo, setSexo] = useState();
  const [alunos, setAlunos] = useState([]);
  const [turma, setTurma] = useState();
  const [data, setData] = useState();
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [obs, setObs] = useState();

  const { data: fetchedAlunos } = useFetch(url)

  useEffect(() => {
    if (fetchedAlunos) {
      setAlunos(fetchedAlunos)
    }
  }, [fetchedAlunos])

  const addAluno = async (e) => {
    e.preventDefault()
    if (turma === "" || nomeResponsavel === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const aluno = {
      turma,
      nomeResponsavel,
      obs
    }
    

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aluno),
    })

    const addedAluno = await res.json()
    setAlunos((prevAlunos) => [...prevAlunos, addedAluno])
    
    setTurma("");
    setData("");
    setNomeResponsavel("");
    setSexo("selecionar");
    setObs("");
  }

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
                <FormGeral
                  nextPage={nextPage}
                  cpf={cpf}
                  email={email}
                  senha={senha}
                  confirmSenha={confirmSenha}
                  cargo={cargo}
                  sexo={sexo}
                  nome={nome}
                  tel={tel}
                  setNome={setNome}
                  setEmail={setEmail}
                  setTel={setTel}
                  setCpf={setCpf}
                  setSenha={setSenha}
                  setConfirmSenha={setConfirmSenha}
                  setCargo={setCargo}
                  setSexo={setSexo}
                  handleTelefoneChange={handleTelefoneChange}
                />
              )}
              {stage === "Aluno" && (
                <>
                  <span className="position-absolute" onClick={retornar}>
                    <IoIosReturnLeft
                      style={{ cursor: "pointer" }}
                      className="m-3 fs-4"
                    />
                  </span>
                  <FormAluno
                    aluno={alunos}
                    turma={turma}
                    obs={obs}
                    setObs={setObs}
                    setAlunos={setAlunos}
                    setTurma={setTurma}
                    setNomeResponsavel={setNomeResponsavel}
                    addAluno={addAluno}
                  />
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
