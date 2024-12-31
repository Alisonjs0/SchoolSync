import FormCep from "../../.components/cadastrar/formCep";

const formGeral = ({
  nome,
  cpf,
  data,
  sexo,
  email,
  tel,
  senha,
  endereco,
  confirmSenha,
  setNome,
  setCpf,
  setData,
  setSexo,
  setEmail,
  setSenha,
  setEndereco,
  setConfirmSenha,
  setCargo,
  nextPage,
  handleTelefoneChange,
  cargo,
  cep,
  setCep,
  cidade,
  setCidade,
  estado,
  setEstado,
  erro,
  setErro,
  classAtiva,
  setClassAtiva,
  classeErrorAtiva,
  setClasseErrorAtiva,
  classePAtiva,
  setClassePAtiva
}) => {
  return (
    <form id="forms" action="" onSubmit={nextPage}>
      <input
        type="text"
        placeholder="Nome:"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        required
      />
      <input
        type="number"
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
        required
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Data de Nascimento"
        required
      />
      <select
        name=""
        id=""
        onChange={(e) => setSexo(e.target.value)}
        value={sexo}
      >
        <option value="genero">Selecionar genero</option>
        <option value="Maculino">Maculino</option>
        <option value="Feminino">Feminino</option>
      </select>
      <input
        type="email"
        placeholder="Email:"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="tel"
        placeholder="Telefone:"
        value={tel}
        onChange={handleTelefoneChange}
        required
      />
      <FormCep
        cep={cep}
        setCep={setCep}
        cidade={cidade}
        setCidade={setCidade}
        estado={estado}
        setEstado={setEstado}
        erro={erro}
        setErro={setErro}
        classAtiva={classAtiva}
        setClassAtiva={setClassAtiva}
        classeErrorAtiva={classeErrorAtiva}
        setClasseErrorAtiva={setClasseErrorAtiva}
        classePAtiva={classePAtiva}
        setClassePAtiva={setClassePAtiva}
        endereco={endereco}
        setEndereco={setEndereco}
      />
      <input
        type="password"
        placeholder="Senha:"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirmar Senha:"
        value={confirmSenha}
        onChange={(e) => setConfirmSenha(e.target.value)}
        required
      />
      <select
        name=""
        id=""
        onChange={(e) => setCargo(e.target.value)}
        value={cargo}
        required
      >
        <option value="selecione">Selecionar Cargo</option>
        <option value="Professor">Professor</option>
        <option value="Aluno">Aluno</option>
        <option value="Admin">Admin</option>
      </select>
      <button className="button" type="submit">
        Cadastrar Usuario
      </button>
    </form>
  );
};

export default formGeral;
