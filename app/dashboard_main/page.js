"use client"; // Para fazer o site rodar no cliente e manipular o DOM

import "./dashboardTemplate.css" // Importação do CSS
import PageMenus from "./conteudoMenus.js"
import ConteudoMenuLateral from "./conteudoMenuLateral";

import { useState } from "react"; // useState para atualização dos dados em tempo real na tela

// Importação dos icons
import { HiMenuAlt2 } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiBellOff } from "react-icons/ci";



const dashboard_main = ({ isAluno }) => {

    const user = {
        nome: 'Alison Jose Serafim de Lima',
        notas: [8,6,7,9],
        media: 7.5,
        tipo: 'admin'
    }


    // Função abrir e fechar o menu
    function toggle() {
        const burguer = document.getElementById("toggle")
        const menu = document.getElementsByClassName("menuLateral")[0];
        const menuSuperior = document.getElementsByClassName("menuSuperior")[0];
        const conteudoInteiro = document.getElementsByClassName("conteudo")[0]
        const notificacao = document.getElementById("notificacao")

        if (menu) {
            menu.classList.toggle('menuLateralInvisivel')
            menuSuperior.classList.toggle('menuSuperiorInteiro')
            conteudoInteiro.classList.toggle('conteudoInteiro')
            burguer.classList.toggle("menuInteiro")
            burguer.classList.toggle("burguerInteiro")
        }

    }

    // useState para alterar o icone de notificação em tempo real
    const [notificacaoAtiva, setNotificacaoAtiva] = useState(true);

    // Função de ligar e desligar as notificações
    //! Ainda faltam ajustes
    function OnOff() {
        setNotificacaoAtiva((prev) => !prev);
        console.log('Notificação alternada!');
    }

    // Conteudo principal da pagina
    return (
        <div className="page">

            <div className="menuSuperior"> {/* Menu Superior */}
                <HiMenuAlt2 id="toggle" className="icon  burguer" onClick={toggle}/> {/* Icone do Menu */}
                <div className="menuUsuario"> {/*  */}
                    <div id="notificacao" className={`notificacao ${notificacaoAtiva ? 'notificacaoOn' : ''}`} onClick={OnOff}>
                        {notificacaoAtiva ? (
                            <CiBellOn className="icon sino on" /> 
                        ) : (
                            <CiBellOff className="icon sino off" />
                        )}
                    </div>
                    <FaUserCircle className="icon" />
                </div>
            </div>
            <div id="menuLateral" className="menuLateral">
                <img src="/assets/logo.png" alt="" />
                    <ConteudoMenuLateral/>
            </div>

            <div className="conteudo">
                <h3>Dashboard</h3>
                <PageMenus/>
            </div>
        </div>
    )
}

export default dashboard_main