"use client";

import "./dashboardTemplate.css"
import { HiMenuAlt2 } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { CiBellOff } from "react-icons/ci";

const dashboard_main = () => {

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
    return (
        <div className="page">
            <div className="menuSuperior">
                <HiMenuAlt2 id="toggle" className="icon  burguer" onClick={toggle}/>
                <div className="menuUsuario">
                    <CiBellOn id="notificacao" className="icon"/>
                    <FaUserCircle className="icon" />
                </div>
            </div>
            <div id="menuLateral" className="menuLateral">
                <img src="/assets/logo.png" alt="" />
            </div>

            <div className="conteudo">
                <h3>Dashboard</h3>
                <div className={`${"container"} ${"conteudoMenus"}`}>
                    
                </div>
            </div>
        </div>
    )
}

export default dashboard_main