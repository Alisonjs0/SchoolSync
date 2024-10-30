import EsqueletoPrincipal from '../esqueletoPrincipal/page.js'
import "./configuracoesGeral.css"

const ConfiguracoesGeral = () => {
    return (
        <EsqueletoPrincipal>
            <div className="container conteudoMenus">
                <h3>Configurações</h3>

                <div className='ctn-sub-menus'>
                    <a href="">Geral</a>
                    <a href="">Alterar senha</a>
                    <a href="">Notificações</a>
                </div>

                <div className='ctn-form'>
                    <label>Nome completo:</label>
                    <input className='label-input'
                        id="Usuario" 
                        type="text"
                    />
                    <label>E-mail:</label>
                    <input className='label-input'
                        id="Usuario" 
                        type="email"
                    />
                    <div className='email-warning'>
                    Seu e-mail não foi confirmado. Por favor, verifique sua caixa de entrada.
                    <a href='' className='cfm'>Re-enviar confirmação</a>
                    </div>
                    
                    <label>Telefone:</label>
                    <input className='label-input'
                        id="Usuario" 
                        type="number"
                    />
                    <label>Aniversário:</label>
                    <input className='label-input'
                        id="Usuario" 
                        type="date"
                    />
                    <label>Biografia:</label>
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

export default ConfiguracoesGeral
