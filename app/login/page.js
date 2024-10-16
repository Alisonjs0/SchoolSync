"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "./login-page.css"

const LoginPage = () => {

    const router = useRouter()
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarSenha, setLembrarSenha] = useState(false);

    function Login() {
        if (usuario === "01704127" && senha === "89627123") {
            alert('Senha correta')
            router.push('/dashboard_main')
        } else {
            alert('Senha incorreta')
        }
        
    }
    return (
        <div className="Login">
            <div className="BlueBox"></div>
            <div className="content">
            <h1>Login</h1>
            <div className="data">
                <p>Matricula/CPF<span>*</span></p>
                <input 
                    id="Usuario" 
                    type="number"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}/>
                <p>Senha<span>*</span></p>
                <input 
                    id="Senha" 
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div className="rememberPassword">
                <input id="lembrarSenha" type="checkbox"/>
                <p>Lembrar Senha</p>
            </div>
            <div className="loginButton">
                <button onClick={Login} id="loginButton">Login</button>
                <a href="">Esqueceu a senha?</a>
            </div>
            </div>
        </div>
    )
}

export default LoginPage