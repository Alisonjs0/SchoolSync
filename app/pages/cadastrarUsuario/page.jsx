"use client";


import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";
import FormGeral from './components/formGeral.js'
import FormAluno from './components/formAluno.js'
import "./cadastrarUsuario.css";
import { useState } from "react";

const CadastrarUsuario = () => {

  const nextPage = () => {

  }

  return (
    <div>
      <EsqueletoPrincipal>
        <div className="conteiner conteudoMenus">
          <h3>Cadastrar Alunos</h3>
          <div className="conteudo">
            <FormAluno></FormAluno>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default CadastrarUsuario;
