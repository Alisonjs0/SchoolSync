"use client";

import EsqueletoPrincipal from "@/app/.components/esqueleto";
import NavConfiguracoes from "../.components/navConfiguracoes";
import ConfiguracoesConteudoGeral from "../.components/configuracoesConteudoGeral";
import ConfiguracoesAlterarSenha from "../.components/configuracoesAlterarSenha";
import ConfiguracoesNotificacao from "../.components/configuracoesNotificacao"
import "./geral.css";
import { useState } from "react";

const Geral = () => {

  const [stage, setStage] = useState("Notificacoes");

  return (
    <div>
      <EsqueletoPrincipal>
        <div className={"conteiner conteudoMenus"}>
          <h3>Configurações</h3>
          <div className="configuracoes">
            <NavConfiguracoes stage={stage} setStage={setStage}/>
            <span className="linha"></span>
            {stage === "Geral" && <ConfiguracoesConteudoGeral/>}
            {stage === "Senha" && <ConfiguracoesAlterarSenha/>}
            {stage === "Notificacoes" && <ConfiguracoesNotificacao/>}
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default Geral;
