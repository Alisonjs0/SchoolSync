import EsqueletoPrincipal from '../esqueletoPrincipal/page'
import './cadastrarAlunos.css'

const CadastroAluno = () => {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className='container conteudoMenus'>
        <h3>Cadastro de Usuario / Aluno</h3>
        <div className='conteudo'>
            <input type="submit" value="Cadastrar Usuario" />
        </div>
        </div>
      </EsqueletoPrincipal>
        
    </div>
  )
}

export default CadastroAluno