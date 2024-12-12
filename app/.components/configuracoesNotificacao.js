import ButtonsFooter from "./buttonsFooter";

const ConfiguracoesNotificacao = () => {
  return (
    <div className="conteudo conteudoCheck">
      <div className="check">
        <input className="form-check-input" type="checkbox" />
        <span>Envie-me um e-mail quando houver atualização nas notas</span>
      </div>
      <div className="check">
        <input className="form-check-input" type="checkbox" />
        <span>Envie-me um e-mail proximo a alguma data importante</span>
      </div>
      <div className="check">
        <input className="form-check-input" type="checkbox" />
        <span>Envie-me um e-mail quando houver atualização nas notas</span>
      </div>
        <ButtonsFooter/>
    </div>
  );
};

export default ConfiguracoesNotificacao;
