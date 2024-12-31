import React from "react";

const cadastrarTurma = () => {
  const materias = ["Matematica", "Portugues", "Historia", "Geografia"];
  const professores = [
    "professor 1",
    "professor 2",
    "professor 3",
    "professor 4",
  ];
  let i = 0;
  return (
    <>
      <form className="formCadastroTurma">
        <input type="text" placeholder="Nome da Turma" />
        <input type="text" placeholder="Periodo Letivo" />
        <input type="text" placeholder="Ex: 1º Ano" />
        <select>
          <option value="">Selecione o Turno</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
          <option value="integral">Integral</option>
        </select>

        <div className="tabela">
          {materias.map((materia, index) => (
            <div>
              <p>{materia}:</p>
              <select
                style={
                  index === 0
                    ? { borderRadius: "0 8px 0 0" }
                    : index === materia.length - 1
                    ? { borderRadius: "0 0 0px 0" }
                    : {}
                }
              >
                {professores.map((professor, profIndex) => (
                  <option key={profIndex} value={professor}>
                    {professor}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default cadastrarTurma;
