import ButtonsFooter from "./buttonsFooter";

const configuracoesAlterarSenha = () => {
  return (
    <div className="conteudo">
      <label>
        <span>Senha Atual</span>
        <input type="text" />
      </label>
      <label>
        <span>Nova Senha</span>
        <input type="text" />
      </label>
      <label>
        <span>Confirmar nova senha</span>
        <input type="text" />
      </label>
      <ButtonsFooter/>
    </div>
  );
};

export default configuracoesAlterarSenha;
