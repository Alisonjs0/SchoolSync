"use client"

const FormAluno = ({turma, nomeResponsavel, obs, setObs, setTurma, setNomeResponsavel, addAluno}) => {

  const textArea = {
    height: "100px",
    padding: "8px",
    paddingLeft: "20px",
    resize: "none",
    outline: "none"
  }

  return (
    <div>
      <form action="" id="forms" onSubmit={addAluno}>
        <select name="" id="" value={turma} onChange={(e) => setTurma(e.target.value)}>
          <option value="selecione">Selecione a Turma</option>
          <option value="1°A">Turma 1°A</option>
          <option value="1°B">Turma 1°B</option>
          <option value="2°A">Turma 2°A</option>
          <option value="2°B">Turma 2°B</option>
          <option value="3°A">Turma 3°A</option>
          <option value="3°B">Turma 3°B</option>
        </select>

        <input type="text" placeholder="Nome do responsavel" value={nomeResponsavel} onChange={(e) => setNomeResponsavel(e.target.value)}/>
        <textarea
          autoComplete="off"
          id="textArea"
          placeholder="Observacoes"
          style={textArea}
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        ></textarea>
        <button className="button" type="submit">Cadastrar Aluno</button>
      </form>
    </div>
  );
};

export default FormAluno;
