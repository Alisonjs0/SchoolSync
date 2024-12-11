import "./style/dashboardTemplate.css"


import { DataContext } from "../.context/DataContext";


import { useState, useContext } from 'react'

import Link from 'next/link'

import { MdDashboard } from "react-icons/md";
import { IoCalendar, IoPeople } from "react-icons/io5";
import { FaComments, FaClock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus, FaBookOpen } from "react-icons/fa6";

const ConteudoMenuLateral = () => {

    const { userData } = useContext(DataContext);
    
  return (
    <div>
        <div id="menuLateral" className="menuLateral">
            <nav>
                <ul className="listaLateral container">
                    {userData.cargo === "Professor" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/dashboard/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></Link></li>
                            <li><Link href=""><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/configuracoes"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : userData.cargo === "Admin" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/dashboard/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href="/cadastrar"><FaUserPlus className="iconMenuLateral"/> <p>Cadastrar Usuario</p></Link></li>
                            <li><Link href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></Link></li>
                            <li><Link href=""><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/configuracoes"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : userData.cargo === "Aluno" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/dashboard/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href="/dashboard/horarios"><FaClock className="iconMenuLateral"/> <p>Horarios</p></Link></li>
                            <li><Link href="/dashboard/boletimEscolar"><FaBookOpen className="iconMenuLateral" /> <p>Boletim escolar</p></Link></li>
                            <li><Link href=""><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/configuracoes"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : null}

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ConteudoMenuLateral
