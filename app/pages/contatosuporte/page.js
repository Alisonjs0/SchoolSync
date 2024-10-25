import EsqueletoPrincipal from '../esqueletoPrincipal/page.js'
import "./contato-suporte.css"

const ContatoSuporte = () => {
    return (
        <EsqueletoPrincipal>
            <h3 className='title'>Contato / Suporte</h3>
            <div className='container conteudoMenus'>
                <h3 className='subtitle'>Entre em contato</h3>
                <input className='label-input'
                    id="Usuario" 
                    type="text"
                    placeholder='Nome completo'
                />
                <input className='label-input-email'
                    id="email" 
                    type="email"
                    placeholder='E-mail'
                />
                <input className='label-input-tel'
                    id="Telefone" 
                    type="number"
                    placeholder='Telefone'
                />
                <input className='label-input-msg'
                    id="Mensagem" 
                    type="text"
                    placeholder='Sua mensagem'
                />
            <div className="loginButton">
                <button id="loginButton">Enviar</button>
            </div>
            </div>
        </EsqueletoPrincipal>
    )
}

export default ContatoSuporte
