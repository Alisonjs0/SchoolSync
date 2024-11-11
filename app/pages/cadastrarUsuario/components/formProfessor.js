import { useEffect, useState } from "react";

const formProfessor = () => {
  const [inputValue, setInputValue] = useState("");
  const [materias, setMaterias] = useState([]);

  // Opções de exemplo
  const opcoes = ["Matemática", "Português", "História", "Ciências", "Geografia", "Física", "Biologia", "Química"];

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    console.log(materias);
  }, [materias]);

  return (
    <form id="forms" onSubmit={handleSubmit}>
      <div className="materias">
        {opcoes.map((opcao, index) => (
          <div className="inputContainer" key={index}>
            <input type="checkbox" className="checkbox" name={opcao} id={opcao} value={opcao}/> <label id="labelContainer" htmlFor="">{opcao}</label>
          </div>
        ))}
      </div>

      <select name="cargo" id="" defaultValue="">
        <option value="" disabled>
          Selecione Cargo
        </option>
        <option value="Titular" id="">
          Titular
        </option>
        <option value="Substituto" id="">
          Substituto
        </option>
      </select>
      <input type="text" placeholder="CEP" />
    </form>
  );
};

export default formProfessor;
