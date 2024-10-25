import EsqueletoPrincipal from "../esqueletoPrincipal/page.js";

import "./boletim.css";

const BoletimEscolar = () => {
  const user = {
    nome: "Alison Jose Serafim de Lima",
    dataNasc: "22/02/2006",
    turma: "2°B",
    matricula: "01704127",
    notas: [8, 6, 7, 9],
    media: 7.5,
    tipo: "professor",
  };

  const materias = [
    "Matematica",
    "Portugues",
    "Geografia",
    "Ciencias",
    "Filosofia",
    "Artes",
    "Historia",
    "Ingles",
    "Ed. Fisica"
  ];
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="container conteudoMenus">
          <h3>Boletim Escolar</h3>
          <div className="conteudo">
            <header className="cabecalho">
              <section>
                <div className="div1">
                  <p>Aluno:</p>
                  <p>Data de Nascimento:</p>
                  <p>Turma:</p>
                </div>
                <span className="line"></span>
                <div className="div2">
                  <p>{user.nome}</p>
                  <p>{user.dataNasc}</p>
                  <p>{user.turma}</p>
                </div>
              </section>

              <section>
                <div>
                  <p>Matricula:</p>
                  <p>Instituicao:</p>
                  <p>Ano:</p>
                </div>
                <div className="line2"></div>
                <div>
                  <p>{user.matricula}</p>
                  <p>EREM Jose Leite Barros</p>
                  <p>2024</p>
                </div>
              </section>
            </header>

            <table className="forms">
              <thead>
                <tr>
                  <th></th>
                  <th>1º Bim</th>
                  <th>Faltas</th>
                  <th>2º Bim</th>
                  <th>Faltas</th>
                  <th>3º Bim</th>
                  <th>Faltas</th>
                  <th>4º Bim</th>
                  <th>Faltas</th>
                  <th>Final</th>
                  <th>Média</th>
                </tr>
              </thead>
              <tbody className="corpo">
                {materias.map((materia, index) => (
                  <tr key={index}>
                    <td className="materia">{materia}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default BoletimEscolar;
