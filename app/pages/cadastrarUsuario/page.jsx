"use client";


import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import FormGeral from './components/formGeral.js'
import FormAluno from './components/formAluno.js'
import FormProfessor from './components/formProfessor.js'
import "./cadastrarUsuario.css";
import { useState } from "react";


const CadastrarUsuario = () => {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="conteiner conteudoMenus">
          <h3>Cadastrar Alunos</h3>
          <div className="conteudo">
            <FormProfessor></FormProfessor>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default CadastrarUsuario;
