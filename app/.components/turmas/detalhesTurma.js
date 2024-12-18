const DetalhesTurma = ({ turma, voltar, setInfoAluno }) => {

  return (
    <>
      <h4 className="TituloTurma">
        Turma: {turma.turma}
      </h4>
      <ul className="listaAlunos">
        {
        turma.alunos.map((aluno) => (
          <li onClick={() => setInfoAluno(aluno)} className="" key={aluno.id}>
            {aluno.nome}
          </li>
        ))}
      </ul>
      <button onClick={() => voltar("ListaTurmas")}>voltar</button>
    </>
  );
};

export default DetalhesTurma;
