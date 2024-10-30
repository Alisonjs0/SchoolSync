'use client'

import "../esqueletoPrincipal/dashboardTemplate.css";
import "./menus.css";

import { user as initialUserData } from '../data/infos';

import { useState } from 'react'

import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";

import { IoAnalytics } from "react-icons/io5";

const ConteudoMenus = () => {
  const [user, setUser] = useState(initialUserData);

  return (
    <div>
      <EsqueletoPrincipal>
        <div className={`${"container"} ${"conteudoMenus"}`}>
          <h3>Dashboard</h3>
          {user.tipo === "aluno" ? (
            <div>
              <a href="" className="menus">
                <h2>Seja bem vindo, {user.nome.split(" ")[0]} </h2>
                <p>SchoolSync Dashboard.</p>
              </a>
              <a href="" className="menus">
                <h2>Calendario Escolar</h2>
                <p>Calendario da Instituição escolar.</p>
              </a>
              <a href="" className="menus">
                <h2>Horarios</h2>
                <p>Seus horários escolares semanais.</p>
              </a>
              <a href="" className="menus">
                <h2>Boletim</h2>
                <p>Vizualize suas notas.</p>
              </a>
            </div>
          ) : user.tipo === "admin" ? (
            <div>
              <a href="" className="menus">
                <h2>Seja bem vindo, {user.nome.split(" ")[0]} </h2>
                <p>SchoolSync Dashboard.</p>
              </a>
              <a href="" className="menus  menuComicon">
                <h2>8.3</h2>
                <p>Média Escolar</p>
                <IoAnalytics className="menuIcon" />
              </a>
              <a href="" className="menus">
                <h2>Horarios</h2>
                <p>Seus horários escolares semanais.</p>
              </a>
            </div>
          ) : user.tipo === "professor" ? (
            <div>
              <a href="" className="menus">
                <h2>Seja bem vindo, {user.nome.split(" ")[0]} </h2>
                <p>SchoolSync Dashboard.</p>
              </a>
              <a href="" className="menus  menuComicon">
                <h2>
                  8.3<span>^13,3%</span>
                </h2>
                <p>Média por turma.</p>
                <IoAnalytics className="menuIcon" />
              </a>
              <a href="" className="menus">
                <h2>Minhas Turmas</h2>
                <p>Ranking e edição.</p>
              </a>
            </div>
          ) : null}
        </div>
      </EsqueletoPrincipal>
    </div>
  );
};

export default ConteudoMenus;
