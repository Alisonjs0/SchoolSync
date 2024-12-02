"use client";

import { useState } from "react";
import "./preMatricula-page.css";
import emailjs from "emailjs-com";

import { IoMdHome } from "react-icons/io";

const PreMatricula = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState("");
  const [mensagem, setMensagem] = useState(""); // Para mensagens de feedback

  const handleChange = (event) => {
    setOpcaoSelecionada(event.target.value);
    console.log("Opção selecionada:", event.target.value);
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const formatarCpf = (cpf) => {
    // Remove todos os caracteres que não sejam números
    cpf = cpf.replace(/\D/g, "");

    // Aplica a formatação com pontos e hífen
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpf;
  };

  const handleCpfChange = (event) => {
    const valor = event.target.value;
    const cpfFormatado = formatarCpf(valor);
    setCpf(cpfFormatado);
  };

  const formatarTelefone = (telefone) => {
    // Remove todos os caracteres que não sejam números
    telefone = telefone.replace(/\D/g, "");

    // Aplica a formatação com parênteses, espaço e hífen
    if (telefone.length > 10) {
      telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // Formato (XX) XXXXX-XXXX
    } else if (telefone.length > 5) {
      telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3"); // Formato (XX) XXXX-XXXX
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d{2})(\d{0,5})/, "($1) $2"); // Formato parcial com DDD
    }

    return telefone;
  };

  const handleTelefoneChange = (event) => {
    const valor = event.target.value;
    const telefoneFormatado = formatarTelefone(valor);
    setTel(telefoneFormatado);
  };

  const Enviar = () => {
    // Validações simples
    if (!nome || !cpf || !opcaoSelecionada || !tel || !email) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: nome,
      from_email: email,
      cpf: cpf,
      telefone: tel,
      turma: opcaoSelecionada,
    };

    emailjs
      .send(
        "service_91hpezo",
        "template_knim0rq",
        templateParams,
        "NX3bdjLFJnQWd8UNG"
      )
      .then((response) => {
        console.log(
          "E-mail enviado com sucesso!",
          response.status,
          response.text
        );
        setMensagem("Formulário enviado com sucesso!"); // Mensagem de sucesso
        // Limpar os campos após o envio
        setNome("");
        setCpf("");
        setOpcaoSelecionada("");
        setTel("");
        setEmail("");
      })
      .catch((err) => {
        console.error("Erro ao enviar o e-mail:", err);
        setMensagem("Ocorreu um erro ao enviar o e-mail.");
      });
  };

  return (
    <div className="preMatricula">
      <div className="BlueBox">
        <div className="home">
          <a href="../">
            <IoMdHome className="icon" />
            <p>Home</p>
          </a>
        </div>
        <h1>
          Ao realizar sua pré-matricula, um de nossos consultores vai entrar em
          contato com mais informações, obrigado pela atenção!
        </h1>
      </div>
      <div className="Content">
        <h1>Pré-Matricula</h1>
        <div className="data">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleInputChange(setNome)}
          />

          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            maxLength="14"
            onChange={handleCpfChange}
          />

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
          <input
            type="tel"
            id="telefone"
            value={tel}
            onChange={handleTelefoneChange}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
        </div>
        <button className="sendButton" onClick={Enviar}>
          Enviar
        </button>

        {/* Mensagem de feedback */}
        {mensagem && <p className="feedback">{mensagem}</p>}
      </div>
    </div>
  );
};

export default PreMatricula;
