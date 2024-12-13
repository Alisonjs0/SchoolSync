import ButtonsFooter from "./buttonsFooter";

const ConfiguracoesConteudoGeral = () => {
  return (
    <div className="config">
      <div className="header">
        <img src="/assets/usuario.png" alt="" />
        <button>Trocar Imagem</button>
        <button>Resetar</button>
      </div>
      <main>
        <label>
          <span>Nome de Usuario</span>
          <input type="text" />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" />
        </label>
        <div className="recuperar">
          <p>
            Seu e-mail não foi confirmado. Por favor, verifique sua caixa de
            entrada.
          </p>
          <a href="">Reenviar confirmacao.</a>
        </div>
        <label>
          <span>Telefone</span>
          <input type="tel" />
        </label>
        <label>
          <span>Data de Nascimento</span>
          <input type="date" />
        </label>
        <label>
          <span>Biografia</span>
          <textarea></textarea>
        </label>
      </main>
      <ButtonsFooter />
    </div>
  );
};

export default ConfiguracoesConteudoGeral;
