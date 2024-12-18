const DetalhesTurma = ({ turma, voltar }) => {
  return (
    <div>
      <ul className="listaAlunos">
        {
        turma.alunos.map((aluno) => (
          <li className="" key={aluno.id}>
            {aluno.nome}
          </li>
        ))}
      </ul>
      <button onClick={() => voltar("ListaTurmas")}>voltar</button>
    </div>
  );
};

export default DetalhesTurma;
