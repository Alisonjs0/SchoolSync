import EsqueletoPrincipal from "../esqueletoPrincipal/page.js";

import './cadastrarAlunos.css'

const CadastrarAlunos = () => {
  return (
    <div>
        <EsqueletoPrincipal>
            <div className="container conteudoMenus">
                <h3>Cadastrar Alunos</h3>
                <div>
                    <select id="opcoesTurmas"></select>
                </div>
            </div>
        </EsqueletoPrincipal>
    </div>
  )
}

export default CadastrarAlunos