"use client";

import EsqueletoPrincipal from "@/app/.components/esqueleto";
import PageTurmas from "@/app/.components/turmas/turmas";
import DetalhesTurmas from "@/app/.components/turmas/detalhesTurma";
import CadastrarTurma from "@/app/.components/turmas/cadastrarTurma";
import InfoAluno from "@/app/.components/turmas/infoAluno";

import "./turmas.css";
import { useEffect, useState } from "react";

const Turmas = () => {
  const [stage, setStage] = useState("ListaTurmas");
  const [turmaClicada, setTurmaClicada] = useState();
  const [infoAluno, setInfoAluno] = useState();

  const turmas = [
    {
      id: 1,
      turma: "1°B",
      nomeResponsavel: "Alison",
      turno: "Matutino",
      alunos: [
        {
          id: 1,
          nome: "Matheus Soares de Oliveira",
          matricula: "202401",
          telefone: "11987654321",
          dataNascimento: "2008-03-15",
          notas: [
            { disciplina: "Matemática", nota: 8.5 },
            { disciplina: "Português", nota: 9.0 },
            { disciplina: "História", nota: 7.8 },
          ],
        },
        {
          id: 2,
          nome: "Lucas Ferreira da Silva",
          matricula: "202402",
          telefone: "11991234567",
          dataNascimento: "2008-07-22",
          notas: [
            { disciplina: "Matemática", nota: 7.0 },
            { disciplina: "Português", nota: 8.5 },
            { disciplina: "História", nota: 8.2 },
          ],
        },
        {
          id: 3,
          nome: "Ana Carolina dos Santos",
          matricula: "202403",
          telefone: "11987659876",
          dataNascimento: "2008-01-10",
          notas: [
            { disciplina: "Matemática", nota: 9.2 },
            { disciplina: "Português", nota: 9.8 },
            { disciplina: "História", nota: 9.5 },
          ],
        },
        {
          id: 4,
          nome: "João Pedro Almeida Costa",
          matricula: "202404",
          telefone: "11995432123",
          dataNascimento: "2008-05-30",
          notas: [
            { disciplina: "Matemática", nota: 6.8 },
            { disciplina: "Português", nota: 7.5 },
            { disciplina: "História", nota: 7.0 },
          ],
        },
        {
          id: 5,
          nome: "Isabela Martins de Souza",
          matricula: "202405",
          telefone: "11998765432",
          dataNascimento: "2008-12-18",
          notas: [
            { disciplina: "Matemática", nota: 8.0 },
            { disciplina: "Português", nota: 9.3 },
            { disciplina: "História", nota: 8.7 },
          ],
        },
      ],
    },
    {
      id: 2,
      turma: "2°B",
      nomeResponsavel: "Alison",
      turno: "Vespertino",
      alunos: [
        {
          id: 1,
          nome: "Gabriel Henrique Lopes Dias",
          matricula: "202406",
          telefone: "11996443210",
          dataNascimento: "2007-09-14",
          notas: [
            { disciplina: "Matemática", nota: 8.5 },
            { disciplina: "Português", nota: 8.0 },
            { disciplina: "História", nota: 7.5 },
          ],
        },
        {
          id: 2,
          nome: "Mariana Santos Pereira",
          matricula: "202407",
          telefone: "11999321546",
          dataNascimento: "2007-06-19",
          notas: [
            { disciplina: "Matemática", nota: 9.1 },
            { disciplina: "Português", nota: 9.4 },
            { disciplina: "História", nota: 8.9 },
          ],
        },
        {
          id: 3,
          nome: "Beatriz Oliveira Monteiro",
          matricula: "202408",
          telefone: "11998127345",
          dataNascimento: "2007-03-28",
          notas: [
            { disciplina: "Matemática", nota: 8.8 },
            { disciplina: "Português", nota: 9.5 },
            { disciplina: "História", nota: 8.6 },
          ],
        },
        {
          id: 4,
          nome: "Rafael Augusto Nogueira",
          matricula: "202409",
          telefone: "11997086754",
          dataNascimento: "2007-11-02",
          notas: [
            { disciplina: "Matemática", nota: 7.5 },
            { disciplina: "Português", nota: 8.2 },
            { disciplina: "História", nota: 7.8 },
          ],
        },
        {
          id: 5,
          nome: "Sofia Almeida Fernandes",
          matricula: "202410",
          telefone: "11995346781",
          dataNascimento: "2007-08-14",
          notas: [
            { disciplina: "Matemática", nota: 9.0 },
            { disciplina: "Português", nota: 9.7 },
            { disciplina: "História", nota: 9.2 },
          ],
        },
      ],
    },
    {
      id: 3,
      turma: "3°B",
      nomeResponsavel: "Alison",
      turno: "Noturno",
      alunos: [
        {
          id: 1,
          nome: "Matheus Soares Libra Neto",
          matricula: "202411",
          telefone: "11997654321",
          dataNascimento: "2006-10-15",
          notas: [
            { disciplina: "Matemática", nota: 8.0 },
            { disciplina: "Português", nota: 7.9 },
            { disciplina: "História", nota: 8.2 },
          ],
        },
        {
          id: 2,
          nome: "Lucas Oliveira da Costa",
          matricula: "202412",
          telefone: "11995432178",
          dataNascimento: "2006-12-03",
          notas: [
            { disciplina: "Matemática", nota: 7.8 },
            { disciplina: "Português", nota: 8.5 },
            { disciplina: "História", nota: 7.6 },
          ],
        },
        {
          id: 3,
          nome: "Eduarda Lima Batista",
          matricula: "202413",
          telefone: "11995329874",
          dataNascimento: "2006-05-29",
          notas: [
            { disciplina: "Matemática", nota: 9.3 },
            { disciplina: "Português", nota: 9.5 },
            { disciplina: "História", nota: 9.1 },
          ],
        },
        {
          id: 4,
          nome: "Fernando Rodrigues Barbosa",
          matricula: "202414",
          telefone: "11994876321",
          dataNascimento: "2006-04-10",
          notas: [
            { disciplina: "Matemática", nota: 8.6 },
            { disciplina: "Português", nota: 8.8 },
            { disciplina: "História", nota: 8.5 },
          ],
        },
        {
          id: 5,
          nome: "Camila Antunes de Morais",
          matricula: "202415",
          telefone: "11995346798",
          dataNascimento: "2006-07-18",
          notas: [
            { disciplina: "Matemática", nota: 9.1 },
            { disciplina: "Português", nota: 9.6 },
            { disciplina: "História", nota: 9.3 },
          ],
        },
      ],
    },
    {
      id: 5,
      turma: "1°A",
      nomeResponsavel: "Alison",
      turno: "Vespertino",
      alunos: [
        {
          id: 1,
          nome: "Matheus Albuquerque Medeiros",
          matricula: "202416",
          telefone: "11998324765",
          dataNascimento: "2008-04-25",
          notas: [
            { disciplina: "Matemática", nota: 8.3 },
            { disciplina: "Português", nota: 9.0 },
            { disciplina: "História", nota: 8.7 },
          ],
        },
        {
          id: 2,
          nome: "Lucas Moreira dos Anjos",
          matricula: "202417",
          telefone: "11997328645",
          dataNascimento: "2008-10-08",
          notas: [
            { disciplina: "Matemática", nota: 7.9 },
            { disciplina: "Português", nota: 8.7 },
            { disciplina: "História", nota: 7.6 },
          ],
        },
        {
          id: 3,
          nome: "Amanda Silva dos Reis",
          matricula: "202418",
          telefone: "11995643782",
          dataNascimento: "2008-06-11",
          notas: [
            { disciplina: "Matemática", nota: 9.4 },
            { disciplina: "Português", nota: 9.8 },
            { disciplina: "História", nota: 9.2 },
          ],
        },
        {
          id: 4,
          nome: "Gustavo Henrique Braga",
          matricula: "202419",
          telefone: "11995873461",
          dataNascimento: "2008-01-30",
          notas: [
            { disciplina: "Matemática", nota: 8.0 },
            { disciplina: "Português", nota: 8.5 },
            { disciplina: "História", nota: 8.3 },
          ],
        },
        {
          id: 5,
          nome: "Larissa Andrade Oliveira",
          matricula: "202420",
          telefone: "11994357812",
          dataNascimento: "2008-03-23",
          notas: [
            { disciplina: "Matemática", nota: 8.6 },
            { disciplina: "Português", nota: 9.0 },
            { disciplina: "História", nota: 8.8 },
          ],
        },
        {
          id: 6,
          nome: "Juliana Gomes Ferreira",
          matricula: "202421",
          telefone: "11998654312",
          dataNascimento: "2008-05-19",
          notas: [
            { disciplina: "Matemática", nota: 9.3 },
            { disciplina: "Português", nota: 9.6 },
            { disciplina: "História", nota: 9.4 },
          ],
        },
        {
          id: 7,
          nome: "Paulo César de Almeida",
          matricula: "202422",
          telefone: "11995437628",
          dataNascimento: "2008-09-07",
          notas: [
            { disciplina: "Matemática", nota: 7.7 },
            { disciplina: "Português", nota: 8.2 },
            { disciplina: "História", nota: 7.9 },
          ],
        },
      ],
    },
  ];
  
  
  useEffect(() => {
    if (turmaClicada) {
      setStage("DetalhesTurma");
    }
  }, [turmaClicada]);

  useEffect(() => {
    if (infoAluno) {
      setStage("InfoAluno");
    }
  }, [infoAluno]);

  return (
    <div>
      <div>
        <EsqueletoPrincipal>
          <div className="conteiner conteudoMenus">
            {stage === "ListaTurmas" && <h3>Turmas</h3>}
            {stage === "DetalhesTurma" && <h3>Lista de Alunos</h3>}
            {stage === "InfoAluno" && <h3>Detalhes de Aluno</h3>}
            {stage === "CadastrarTurma" && <h3>Cadastrar Turma</h3>}

            <div className="secaoTurmas">
              {stage === "ListaTurmas" && (
                <PageTurmas setTurmaClicada={setTurmaClicada} turmas={turmas} mudarPage={setStage}/>
              )}
              {stage === "DetalhesTurma" && (
                <DetalhesTurmas turma={turmaClicada} voltar={setStage} setInfoAluno={setInfoAluno}/>
              )}
              {stage === "InfoAluno" && <InfoAluno infoAluno={infoAluno} voltar={setStage} setInfoAluno={setInfoAluno}/>}
              {stage === "CadastrarTurma" && <CadastrarTurma voltar={setStage}/>}
            </div>
          </div>
        </EsqueletoPrincipal>
      </div>
    </div>
  );
};

export default Turmas;
