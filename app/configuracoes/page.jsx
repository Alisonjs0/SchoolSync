"use client";

import EsqueletoPrincipal from "@/app/.components/esqueleto";
import "./geral.css";
import Link from "next/link";

const Geral = () => {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className={"conteiner conteudoMenus"}>
          <h3>Configurações</h3>
          <div className="configuracoes">
            <nav>
                <Link href="">Geral</Link>
                <Link href="">Alterar Senha</Link>
                <Link href="">Notificacoes</Link>
            </nav>
            <span className="linha"></span>
            <div className="conteudo">
                <header>
                    <img src="/assets/usuario.png" alt="" />
                    <button>Trocar Imagem</button>
                    <button>Resetar</button>
                </header>
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
                        <p>Seu e-mail não foi confirmado. Por favor, verifique sua caixa de entrada.</p>
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
                <footer>
                    <button className="salvar">Salvar</button>
                    <button className="cancel">Cancelar</button>
                </footer>
            </div>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default Geral;
