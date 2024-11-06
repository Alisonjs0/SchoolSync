"use client";


import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import FormGeral from './components/formGeral.js'
import FormAluno from './components/formAluno.js'
import FormProfessor from './components/formProfessor.js'
import "./cadastrarUsuario.css";
import { useState } from "react";

const stages = [
  {id: 0, name: "Geral"},
  {id: 1, name: "Aluno"},
  {id: 2, name: "Professor"}
]


const CadastrarUsuario = () => {
  const [stage, setStage] = useState(stages[0].name);
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="conteiner conteudoMenus">
          <h3>Cadastrar Alunos</h3>
          <div className="conteudo">
            {stage === "Geral" && <FormGeral />}
            {stage === "Aluno" && <FormAluno />}  
            {stage === "Professor" && <FormProfessor />}
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default CadastrarUsuario;
