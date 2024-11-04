import EsqueletoPrincipal from '../esqueletoPrincipal/page.jsx'
import "./alterarsenhapt2.css"

const AlterarSenhaPt2 = () => {
    return (
        <EsqueletoPrincipal>
            <h3>Configurações</h3>
            <div className="container conteudoMenus">
                <div className='ctn-sub-menus'>
                        <a href="">Geral</a>
                        <a href="">Alterar senha</a>
                        <a href="">Notificações</a>
                </div>

                <div className='ctn-form'>
                    <h4>Atividade:</h4>
                    <label>
                    <input 
                    type='checkbox'
                    />
                    Envie-me um e-mail quando houver atualização nas notas
                    </label>
                    <label>
                    <input 
                    type='checkbox'
                    />
                    Envie-me um e-mail próximo a alguma data importante
                    </label>
                    <label>
                    <input 
                    type='checkbox'
                    />
                    Envie-me um e-mail 
                    </label>
                    <div className="Button">
                    <button id="SaveButton">Salvar</button>
                    <button id="CancelButton">Cancelar</button>
                    </div>
                </div>
            </div>
        </EsqueletoPrincipal>
    )
}

export default AlterarSenhaPt2
