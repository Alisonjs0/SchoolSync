"use client";

import EsqueletoPrincipal from "@/app/.components/esqueleto";
import PageTurmas from "@/app/.components/turmas/turmas";
import DetalhesTurmas from "@/app/.components/turmas/detalhesTurma";

import "./turmas.css";
import { useEffect, useState } from "react";

const Turmas = () => {
  const [stage, setStage] = useState("ListaTurmas");
  const [turmaClicada, setTurmaClicada] = useState();

  const turmas = [
    {
      id: 1,
      turma: "1°B",
      nomeResponsavel: "Alison",
      turno: "Matutino",
      alunos: [
        { id: 1, nome: "Matheus Soares de Oliveira" },
        { id: 2, nome: "Lucas Ferreira da Silva" },
        { id: 3, nome: "Ana Carolina dos Santos" },
        { id: 4, nome: "João Pedro Almeida Costa" },
        { id: 5, nome: "Isabela Martins de Souza" },
      ],
    },
    {
      id: 2,
      turma: "2°B",
      nomeResponsavel: "Alison",
      turno: "Vespertino",
      alunos: [
        { id: 1, nome: "Gabriel Henrique Lopes Dias" },
        { id: 2, nome: "Mariana Santos Pereira" },
        { id: 3, nome: "Beatriz Oliveira Monteiro" },
        { id: 4, nome: "Rafael Augusto Nogueira" },
        { id: 5, nome: "Sofia Almeida Fernandes" },
      ],
    },
    {
      id: 3,
      turma: "3°B",
      nomeResponsavel: "Alison",
      turno: "Noturno",
      alunos: [
        { id: 1, nome: "Matheus Soares Libra Neto" },
        { id: 2, nome: "Lucas Oliveira da Costa" },
        { id: 3, nome: "Eduarda Lima Batista" },
        { id: 4, nome: "Fernando Rodrigues Barbosa" },
        { id: 5, nome: "Camila Antunes de Morais" },
      ],
    },
    {
      id: 5,
      turma: "1°A",
      nomeResponsavel: "Alison",
      turno: "Vespertino",
      alunos: [
        { id: 1, nome: "Matheus Albuquerque Medeiros" },
        { id: 2, nome: "Lucas Moreira dos Anjos" },
        { id: 3, nome: "Amanda Silva dos Reis" },
        { id: 4, nome: "Gustavo Henrique Braga" },
        { id: 5, nome: "Larissa Andrade Oliveira" },
        { id: 6, nome: "Juliana Gomes Ferreira" },
        { id: 7, nome: "Paulo César de Almeida" },
      ],
    },
  ];
  

  useEffect(() => {
    if (turmaClicada) {
      setStage("DetalhesTurma");
    }
  }, [turmaClicada]);

  return (
    <div>
      <div>
        <EsqueletoPrincipal>
          <div className="conteiner conteudoMenus">
            {stage === "ListaTurmas" && <h3>Turmas</h3>}
            {stage === "DetalhesTurma" && <h3>Lista de Alunos</h3>}

            <div className="conteudo">
              {stage === "ListaTurmas" && (
                <PageTurmas setTurmaClicada={setTurmaClicada} turmas={turmas} />
              )}
              {stage === "DetalhesTurma" && (
                <DetalhesTurmas turma={turmaClicada} voltar={setStage} />
              )}
            </div>
          </div>
        </EsqueletoPrincipal>
      </div>
    </div>
  );
};

export default Turmas;
