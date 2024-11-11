import { useEffect, useState } from "react";

const formProfessor = () => {
  const [inputValue, setInputValue] = useState("");
  const [materias, setMaterias] = useState([]);

  // Opções de exemplo
  const opcoes = ["Matemática", "Português", "História", "Ciências"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (opcoes.includes(inputValue) && !materias.includes(inputValue)) {
      setMaterias((prevMaterias) => [...prevMaterias, inputValue]);
    } else {
      alert("Disciplina invalida ou ja inserida");
    }
    setInputValue("");
  };

  useEffect(() => {
    console.log(materias);
  }, [materias]);

  return (
    <form id="forms" onSubmit={handleSubmit}>
      <div className="materias">
        <div className="inserir">
          <input
            list="disciplinas"
            id="disciplinas-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite ou selecione"
          />
          <button type="submit">Enviar</button>
          <datalist id="disciplinas">
            {opcoes.map((opcao, index) => (
              <option key={index} value={opcao} />
            ))}
          </datalist>
        </div>
        <ul>
          {materias.map((materia, index) => (
            <li key={index}>{materia}</li>
          ))}
        </ul>
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
