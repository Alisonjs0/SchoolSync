import EsqueletoPrincipal from '../esqueletoPrincipal/page.jsx'
import "./alterarsenhapt1.css"

const AlterarSenhaPt1 = () => {
    return (
        <EsqueletoPrincipal>
            <h3>Configurações</h3>
            <div className="container conteudoMenus">
                <div className='ctn-sub-menus'>
                        <a href="" id='geral'>Geral</a>
                        <a href="" id='senha'>Alterar senha</a>
                        <a href="" id='not'>Notificações</a>
                </div>

                <div className='ctn-form'>
                    <label>Senha atual:</label>
                        <input className='label-input'
                            id="Usuario" 
                            type="text"
                        />
                    <label>Nova senha:</label>
                        <input className='label-input'
                            id="Usuario" 
                            type="text"
                        />
                    <label>Confirmar senha:</label>
                        <input className='label-input'
                            id="Usuario" 
                            type="text"
                        />
                </div>

                <div className="Button">
                    <button id="SaveButton">Salvar</button>
                    <button id="CancelButton">Cancelar</button>
                </div>
            </div>
        </EsqueletoPrincipal>

    )
}

export default AlterarSenhaPt1
