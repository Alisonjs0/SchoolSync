import EsqueletoPrincipal from "../esqueletoPrincipal/page.js";
import "./horario.css";

const Horarios = () => {
  const horarioDeAula = [
    "7:30", "8:20", "8:20", "8:20", "8:20", "8:20", "8:20", "8:20"
  ];
  return (
    <div>
      <EsqueletoPrincipal>
        <div className={`${"container"} ${"conteudoMenus"}`}>
          <h3>Horarios:</h3>
          <div className="horarios">
            <table className="horariosTabela">
              <thead>
                <tr className="ok">
                  <th></th>
                  <th>Segunda</th>
                  <th>Terça</th>
                  <th>Quarta</th>
                  <th>Quinta</th>
                  <th>Sexta</th>
                </tr>
              </thead>
              <tbody>
                {horarioDeAula.map((horario, index) => (
                  <tr key={index}>
                    <th className="primeiroElemento">{horario}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
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

export default Horarios;
