import { useState } from "react";

const FormAluno = () => {
  const [turma, setTurma] = useState();
  const [data, setData] = useState();
  const [nomeResponsavel, setNomeResponsavel] = useState();
  const [sexo, setSexo] = useState();
  const [obs, setObs] = useState(false);

  const textArea = {
    height: "100px",
    padding: "8px",
    paddingLeft: "20px",
    resize: "none",
    outline: "none"
  }

  const Cadastrar = (e) => {
    e.preventDefault()
    console.log(turma, data, nomeResponsavel, sexo, obs)
  }

  const handleDataChange = (e) => {
    let valor = e.target.value;
    setData(e.target.value)

    // Remove caracteres não numéricos
    valor = valor.replace(/\D/g, "");

    // Adiciona a máscara
    if (valor.length <= 2) {
      valor = valor.replace(/(\d{2})/, "$1");
    } else if (valor.length <= 4) {
      valor = valor.replace(/(\d{2})(\d{2})/, "$1/$2");
    } else if (valor.length <= 8) {
      valor = valor.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    }

    setData(valor);
  };

  return (
    <div>
      <form action="" id="forms">
        <select name="" id="" onChange={(e) => setTurma(e.target.value)}>
          <option value="">Selecione a Turma</option>
          <option value="1°A">Turma 1°A</option>
          <option value="1°B">Turma 1°B</option>
          <option value="2°A">Turma 2°A</option>
          <option value="2°B">Turma 2°B</option>
          <option value="3°A">Turma 3°A</option>
          <option value="3°B">Turma 3°B</option>
        </select>
        <input
          type="text"
          onChange={handleDataChange}
          value={data}
          maxLength={10}
          placeholder="Data de Nascimento"/>

        <input type="text" placeholder="Nome do responsavel" onChange={(e) => setNomeResponsavel(e.target.value)}/>
        <select name="" id="" onChange={(e) => setSexo(e.target.value)}>
          <option value="mac">Masculino</option>
          <option value="fem">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <textarea
          autoComplete="off"
          id="textArea"
          placeholder="Observacoes"
          style={textArea}
          onChange={(e) => setObs(e.target.value)}
        ></textarea>
        <button className="button" onClick={Cadastrar}>Cadastrar Aluno</button>
      </form>
    </div>
  );
};

export default FormAluno;
