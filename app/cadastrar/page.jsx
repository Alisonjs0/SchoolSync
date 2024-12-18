"use client";

// Componentes
import EsqueletoPrincipal from "../.components/esqueleto";
import FormAluno from "@/app/.components/cadastrar/formAluno";
import FormProfessor from "@/app/.components/cadastrar/formProfessor";
import FormAdmin from "@/app/.components/cadastrar/formAdmin";
import FormGeral from "@/app/.components/cadastrar/formGeral";

// Dados Usuario
import { user as initialUserData } from "@/data/infos";

import Swal from 'sweetalert2';

// Gerar id unico
import { v4 as uuidv4 } from "uuid";

// CSS
import "./cadastrarUsuario.css";

// HOOKS
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";

// Icons
import { IoIosReturnLeft } from "react-icons/io";

// Database
const url = "http://localhost:3000/Usuarios";

const CadastrarUsuario = () => {
  const [user, setUser] = useState(initialUserData);

  // Estagio do cadastro
  const [stage, setStage] = useState("Geral");

  // Criando id unico
  const uuid = uuidv4();
  const numericId = uuid.replace(/\D/g, "").substring(0, 5); 
  const timestamp = Date.now().toString().substring(0, 4);
  const uniqueNumericId = `${timestamp}${numericId}`;

  // Informacoes geral
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();
  const [sexo, setSexo] = useState();
  const [data, setData] = useState("");
  const [endereco, setEndereco] = useState("");

  const [usuarios, setUsuarios] = useState([]);

  // Informacoes Aluno
  const [turma, setTurma] = useState("");
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [obs, setObs] = useState("");

  // Informacoes Professor
  const [disciplinas, setDisciplinas] = useState("");
  const [Tipocontrato, setTipoContrato] = useState("");

  const { data: fetchedUsuarios, httpConfig } = useFetch(url);

  useEffect(() => {
    if (fetchedUsuarios) {
      setUsuarios(fetchedUsuarios);
    }
  }, [fetchedUsuarios]);

  const addUsuario = async (e) => {
    e.preventDefault();
    if (turma === "" || nomeResponsavel === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    } else {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Novo usuario cadastrado!',
        icon: 'success',
        timer: 1500, // 1,5 segundos
        timerProgressBar: true,
      });
    }
    let dataToSend = {
      nome,
      email,
      tel,
      cpf,
      senha,
      cargo,
      sexo,
      data,
    };

    // gera id unico
    dataToSend.id = uniqueNumericId;

    // Adiciona campos específicos com base no cargo
    switch (cargo) {
      case "Aluno":
        dataToSend = {
          ...dataToSend, // Inclui os campos gerais
          turma,
          nomeResponsavel,
          obs,
        };
        break;
      case "Professor":
        dataToSend = {
          ...dataToSend, // Inclui os campos gerais
          disciplinas,
          Tipocontrato,
        };
        break;
    }

    // Executa a função com os dados consolidados
    httpConfig(dataToSend, "POST");

    setNome("");
    setEmail("");
    setTel("");
    setCpf("");
    setSenha("");
    setConfirmSenha("");
    setCargo("selecione");
    setTurma("");
    setData("");
    setNomeResponsavel("");
    setSexo("selecionar");
    setObs("");
    setStage("Geral");
    setDisciplinas([]);
  };

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
    console.log(data);

    if (cargo == "selecione") {
      alert("Selecione o cargo");
    } else if (!sexo || sexo === "genero") {
      alert("Selecione o sexo");
    }
    if (
      cargo !== "selecione" &&
      cargo &&
      stage == "Geral" &&
      sexo !== "genero" &&
      sexo
    ) {
      if (senha === confirmSenha) {
        setStage(cargo);
        console.log(cargo);
      } else {
        alert("Senhas não coincidem");
      }
    }
  };

  const retornar = () => {
    setStage("Geral");
  };

  return (
    <div>
      {user.cargo === "Admin" && (
        <EsqueletoPrincipal>
          <div className="conteiner conteudoMenus">
            <h3 style={{ paddingTop: stage !== "Geral" ? "20px" : "0px" }}>
              Cadastrar {stage}
            </h3>
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
                  endereco={endereco}
                  setEndereco={setEndereco}
                  setNome={setNome}
                  setEmail={setEmail}
                  setTel={setTel}
                  setCpf={setCpf}
                  setSenha={setSenha}
                  setConfirmSenha={setConfirmSenha}
                  setCargo={setCargo}
                  setSexo={setSexo}
                  setData={setData}
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
                    usuarios={usuarios}
                    turma={turma}
                    obs={obs}
                    setObs={setObs}
                    setUsuarios={setUsuarios}
                    setTurma={setTurma}
                    setNomeResponsavel={setNomeResponsavel}
                    addUsuario={addUsuario}
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
                  <FormProfessor disciplinas={disciplinas} setDisciplinas={setDisciplinas}  />
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
      {user.cargo !== "Admin" && (
        <div className="alert alert-danger" role="alert">
          Acesso negado!
        </div>
      )}
    </div>
  );
};

export default CadastrarUsuario;
