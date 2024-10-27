import EsqueletoPrincipal from "../esqueletoPrincipal/page.js";
import "./cadastrarUsuario.css";

const CadastrarUsuario = ( {children} ) => {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="container conteudoMenus">
          <h3>Cadastrar Alunos</h3>
          <div className="conteudo">
            <form id="forms" action="">
              <input type="text" placeholder="Nome:" />
              <input type="email" placeholder="Email:" />
              <input type="tel" placeholder="Telefone:" />
              <input type="number" placeholder="Matricula / CPF" />
              <input type="password" placeholder="Senha:" />
              <input type="password" placeholder="Confirmar Senha:" />
              {/* Select dentro de um contêiner para personalização da seta */}
              <div className="select-container">
                <select name="" id="">
                  <option value="selecione">Selecione</option>
                  <option value="professor">Professor</option>
                  <option value="aluno">Aluno</option>
                  <option value="ADM">ADM</option>
                </select>
              </div>
              <a href="">
                <button className="button">Cadastrar Usuario</button>
              </a>
            </form>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default CadastrarUsuario;
