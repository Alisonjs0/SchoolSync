const turmas = ({turmas, setTurmaClicada}) => {

  return (
    <nav>
      <ul className="tumasHeader">
        <li>
          <span>Turma</span>
          <span>Turno</span>
          <span>Quant. alunos</span>
        </li>
      </ul>
      <ul className="turmas">
        {turmas.map((turma) => (
          <li onClick={() => setTurmaClicada(turma)} key={turma.id}>
            <span>{turma.turma}</span>
            <span>{turma.turno}</span>
            <span>{turma.alunos.length}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default turmas;
