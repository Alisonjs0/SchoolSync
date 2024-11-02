"use client";

import { useState } from "react";

const FormGeral = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [matricula, setMatricula] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cargo, setCargo] = useState();

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
  return (
    <div>
      <form id="forms" action="">
        <input
          type="text"
          placeholder="Nome:"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone:"
          value={tel}
          onChange={handleTelefoneChange}
        />
        <input
          type="number"
          placeholder="Matricula"
          onChange={(e) => setMatricula(e.target.value)}
        />
        <input
          type="number"
          placeholder="CPF"
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha:"
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Senha:"
          onChange={(e) => setConfirmSenha(e.target.value)}
        />
        {/* Select dentro de um contêiner para personalização da seta */}
        <div className="select-container">
          <select name="" id="">
            <option value="selecione">Selecione</option>
            <option value="professor">Professor</option>
            <option value="aluno">Aluno</option>
            <option value="ADM">ADM</option>
          </select>
        </div>
        <a href="">
          <button className="button">Cadastrar Usuario</button>
        </a>
      </form>
    </div>
  );
};

export default FormGeral;