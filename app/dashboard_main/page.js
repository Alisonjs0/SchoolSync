"use client";

import "./dashboardTemplate.css"
import { HiMenuAlt2 } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const dashboard_main = () => {

    function toggle() {
        const menu = document.getElementsByClassName("menuLateral")[0];
        const menuSuperior = document.getElementsByClassName("menuSuperior")[0];
        const conteudoInteiro = document.getElementsByClassName("conteudo")[0]
        if (menu) {
            menu.classList.toggle('menuLateralInvisivel')
            menuSuperior.classList.toggle('menuSuperiorInteiro')
            conteudoInteiro.classList.toggle('conteudoInteiro')

        }

    }
    return (
        <div className="page">
            <div className="menuSuperior">
                <HiMenuAlt2 id="toggle" className="icon" onClick={toggle}/>
                <div className="menuUsuario">
                    <CiBellOn className="icon"/>
                    <FaUserCircle className="icon" />
                </div>
            </div>
            <div id="menuLateral" className="menuLateral">
                <img src="/assets/logo.png" alt="" />
            </div>

            <div className="conteudo">
                <h3>Dashboard</h3>
                <div className={`${"container"} ${"conteudoMenus"}`}>
                    <div>.</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default dashboard_main