import "../../configuracoes/geral.css";

export default function NavConfiguracoes({ stage, setStage }) {
  return (
    <nav>
      <div className={stage === "Geral" ? "active" : ""} onClick={(e) => setStage("Geral")}>Geral</div>
      <div className={stage === "Senha" ? "active" : ""} onClick={(e) => setStage("Senha")}>Alterar Senha</div>
      <div className={stage === "Notificacoes" ? "active" : ""} onClick={(e) => setStage("Notificacoes")}>Notificacoes</div>
    </nav>
  );
}
