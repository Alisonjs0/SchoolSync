import EsqueletoPrincipal from '../esqueletoPrincipal/page'
import './cadastrarAlunos.css'

const CadastroAluno = () => {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className='container conteudoMenus'>
        <h3>Cadastro de Usuario / Aluno</h3>
        <div className='conteudo'>
        <form action="">
                <select name="" id=""></select>
                <input type="date" name="" id="" />
                <input type="text" />
                <select name="" id=""></select>
                <textarea name="" id=""></textarea>
            </form>
            <input type="submit" value="Cadastrar Usuario" />
        </div>
        </div>
      </EsqueletoPrincipal>
        
    </div>
  )
}

export default CadastroAluno