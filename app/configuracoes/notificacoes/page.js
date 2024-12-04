import EsqueletoPrincipal from '@/app/.components/esqueleto'
import "./notificacoes.css"

const Notificações = () => {
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
                </div>

                <div className="Button">
                    <button id="SaveButton">Salvar</button>
                    <button id="CancelButton">Cancelar</button>
                </div>
            </div>
        </EsqueletoPrincipal>
    )
}

export default Notificações
