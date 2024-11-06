import EsqueletoPrincipal from '../esqueletoPrincipal/page.jsx'
import "./configuracoesGeral.css"

const ConfiguracoesGeral = () => {
    return (
        <EsqueletoPrincipal>
            <h3>Configurações</h3>
            <div className="container conteudoMenus">

                <div className='ctn-sub-menus'>
                    <a href="" id='geral'>Geral</a>
                    <a href="" id='senha'>Alterar senha</a>
                    <a href="" id='not'>Notificações</a>
                </div>

                {/* <div class="linha-vertical"></div>                     */}

                <div className='ctn-form'>
                    <div className="Button-cd">
                        <div className='icon-id'><img src='/assets/user.png'/></div>
                        <button id="ChangeButton">Trocar Imagem</button>
                        <button id="ResetButton">Reset</button>
                    </div>
                    <label>Nome de Usuário:</label>
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
