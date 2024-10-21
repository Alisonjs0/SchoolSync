'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com'
import './preMatricula-page.css';

const PreMatricula = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState(''); // Para mensagens de feedback

    const handleChange = (event) => {
        setOpcaoSelecionada(event.target.value);
        console.log('Opção selecionada:', event.target.value);
    };

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const Enviar = () => {
        // Validações simples
        if (!nome || !cpf || !opcaoSelecionada || !tel || !email) {
            setMensagem('Por favor, preencha todos os campos.');
            return;
        }

        const templateParams = {
            from_name: nome,
            from_email: email,
            cpf: cpf,
            telefone: tel,
            turma: opcaoSelecionada,
        };

        emailjs.send('service_91hpezo', 'template_knim0rq', templateParams, 'NX3bdjLFJnQWd8UNG')
        .then((response) => {
            console.log('E-mail enviado com sucesso!', response.status, response.text);
            setMensagem('Formulário enviado com sucesso!'); // Mensagem de sucesso
            // Limpar os campos após o envio
            setNome('');
            setCpf('');
            setOpcaoSelecionada('');
            setTel('');
            setEmail('');
        })
        .catch((err) => {
            console.error('Erro ao enviar o e-mail:', err);
            setMensagem('Ocorreu um erro ao enviar o e-mail.');
        });

    };

    

    return (
        <div className="preMatricula">
            <div className="BlueBox">
                <h1>Ao realizar sua pré-matricula, um de nossos consultores vai entrar em contato com mais informações, obrigado pela atenção!</h1>
            </div>
            <div className="Content">
                <h1>Pré-Matricula</h1>
                <div className="data">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" value={nome} onChange={handleInputChange(setNome)} />
                    
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" value={cpf} maxLength="14" onChange={handleInputChange(setCpf)} />
                    
                    <label htmlFor="turma">Turma:</label>
                    <select id="turma" value={opcaoSelecionada} onChange={handleChange}>
                        <option value="">Selecione</option>
                        <option value="1°A">Turma 1°A</option>
                        <option value="1°B">Turma 1°B</option>
                        <option value="2°A">Turma 2°A</option>
                        <option value="2°B">Turma 2°B</option>
                        <option value="3°A">Turma 3°A</option>
                        <option value="3°B">Turma 3°B</option>
                    </select>
                    
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" value={tel} onChange={handleInputChange(setTel)} />
                    
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={email} onChange={handleInputChange(setEmail)} />
                </div>
                <button className="sendButton" onClick={Enviar}>Enviar</button>
                
                {/* Mensagem de feedback */}
                {mensagem && <p className="feedback">{mensagem}</p>}
            </div>
        </div>
    );
};

export default PreMatricula;

