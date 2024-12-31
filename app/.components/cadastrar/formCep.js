import { useState } from "react";

import "../style/cadastrarCep.css";

const FormCep = ({
  cep,
  setCep,
  cidade,
  setCidade,
  estado,
  setEstado,
  erro,
  setErro,
  classeErrorAtiva,
  setEndereco
}) => {
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const buscarCEP = async () => {
    if (!cep) {
      setErro("Digite um CEP válido.");
      return;
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
        setCidade("");
        setEstado("");
        setBairro("");
        setRua("");
        if (erro) {
          alert(erro)
        }
      } else {
        setCidade(data.localidade);
        setEstado(data.uf);
        setBairro(data.bairro);
        setRua(data.logradouro);
        setErro("");
        console.log(data);
      }
    } catch (error) {
      setErro("Erro ao buscar o CEP.");
    }
    setEndereco(`UF: ${estado}, Cidade: ${cidade}, Bairro: ${bairro}, Rua: ${rua}`)
  };
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))} // Apenas números
          maxLength={8}
        />
        <button onClick={buscarCEP}>Buscar</button>
      </div>
      <div className="cepSection">
        <input type="text" value={cidade} placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
        <input type="text" value={estado} placeholder="Estado" onChange={(e) => setEstado(e.target.value)}/>
        <input type="text" value={bairro} placeholder="Bairro" onChange={(e) => setBairro(e.target.value)}/>
        <input type="number" value={rua} placeholder="Rua" onChange={(e) => setRua(e.target.value)}/>
      </div>
      {classeErrorAtiva && <p style={{ color: "red" }}>{erro}</p>}
    </>
  );
};

export default FormCep;
