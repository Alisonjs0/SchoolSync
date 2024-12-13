import EsqueletoPrincipal from "@/app/.components/esqueleto";
import "./contato-suporte.css";

const ContatoSuporte = () => {
  return (
    <div>
        <EsqueletoPrincipal>
            <div className={"conteiner conteudoMenus"}>
                <h3>Entre em contato</h3>
                <form className="contato">
                    <input type="text" placeholder="Nome Completo"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="CPF"/>
                    <input type="tel" placeholder="Telefone"/>
                    <textarea name="" id="" placeholder="Sua Mensagem"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </EsqueletoPrincipal>
    </div>
  );
};

export default ContatoSuporte;
