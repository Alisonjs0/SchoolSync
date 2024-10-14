import "./preMatricula-page.css"

const preMatricula = () => {

    return (
        <div className="preMatricula">
            <div className="BlueBox">
                <h1>Ao realizar sua  pré-matricula, um de nossos consultores vai entrar em contato com mais informações, obrigado pela atenção!</h1>
            </div>
            <div className="Content">
                <h1>Pré-Matricula</h1>
                <div className="data">
                    <p>Nome:</p>
                    <input type="text" name="" id="" />
                    <p>CPF:</p>
                    <input  type="text"/>
                    <p>Turma:</p>
                    <input type="text"/>
                    <p>Telefone:</p>
                    <input type="tel"/>
                    <p>E-mail:</p>
                    <input type="email"/>
                </div>
                <button className="sendButton">Enviar</button>
            </div>
        </div>
    )
}

export default preMatricula
