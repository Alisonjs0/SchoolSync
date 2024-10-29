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
    {
      nome: "Matematica",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 7,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    {
      nome: "Portugues",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    {
      nome: "Geografia",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    {
      nome: "Ciencias",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    {
      nome: "Filosofia",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    { nome: "Artes", n1: 8, n2: 7, n3: 8, n4: 5, f1: 3, f2: 6, f3: 12, f4: 7 },
    {
      nome: "Historia",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
    { nome: "Ingles", n1: 8, n2: 7, n3: 8, n4: 5, f1: 3, f2: 6, f3: 12, f4: 7 },
    {
      nome: "EdFisica",
      n1: 8,
      n2: 7,
      n3: 8,
      n4: 5,
      f1: 3,
      f2: 6,
      f3: 12,
      f4: 7,
    },
  ];

  materias.forEach((materia) => {
    materia.med = (materia.n1 + materia.n2 + materia.n3 + materia.n4) / 4;
  });

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
                  <th>Matéria</th>
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
                    <td className="materia">{materia.nome}</td>
                    <td>{materia.n1}</td>
                    <td>{materia.f1}</td>
                    <td>{materia.n2}</td>
                    <td>{materia.f2}</td>
                    <td>{materia.n3}</td>
                    <td>{materia.f3}</td>
                    <td>{materia.n4}</td>
                    <td>{materia.f4}</td>
                    <td>{materia.final}</td>
                    <td>{materia.med}</td> {/* Exibe a média */}
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
