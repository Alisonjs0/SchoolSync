import "./login-page.css"

const Login = () => {
    return (
        <div className="Login">
            <div className="BlueBox"></div>
            <div className="content">
            <h1>Login</h1>
            <div className="data">
                <p>Matricula/CPF<span>*</span></p>
                <input type="text"/>
                <p>Senha<span>*</span></p>
                <input type="text"/>
            </div>
            <div className="rememberPassword">
                <input type="checkbox"/>
                <p>Lembrar Senha</p>
            </div>
            <div className="loginButton">
                <button>Login</button>
                <a href="">Esqueceu a senha?</a>
            </div>
            </div>
        </div>
    )
}

export default Login