import "./dashboardTemplate.css"

import { user as initialUserData } from '../data/infos';

import { useState } from 'react'

import { MdDashboard } from "react-icons/md";
import { IoCalendar, IoPeople } from "react-icons/io5";
import { FaComments, FaClock } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus, FaBookOpen } from "react-icons/fa6";

const ConteudoMenuLateral = () => {

    const [user, setUser] = useState(initialUserData)
    
  return (
    <div>
        <div id="menuLateral" className="menuLateral">
            <nav>
                <ul className="listaLateral">
                    {user.tipo === "professor" ? (
                        <div>
                            <li><a href=""><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></a></li>
                            <li><a href=""><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></a></li>
                            <li><a href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></a></li>
                            <li><a href=""><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></a></li>
                            <li><a href=""><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></a></li>
                        </div>
                    ) : user.tipo === "admin" ? (
                        <div>
                            <li><a href=""><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></a></li>
                            <li><a href=""><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></a></li>
                            <li><a href=""><FaUserPlus className="iconMenuLateral"/> <p>Cadastrar Usuario</p></a></li>
                            <li><a href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></a></li>
                            <li><a href=""><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></a></li>
                        </div>
                    ) : user.tipo === "aluno" ? (
                        <div>
                            <li><a href=""><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></a></li>
                            <li><a href=""><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></a></li>
                            <li><a href=""><FaClock className="iconMenuLateral"/> <p>Horarios</p></a></li>
                            <li><a href=""><FaBookOpen className="iconMenuLateral" /> <p>Boletim escolar</p></a></li>
                            <li><a href=""><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></a></li>
                            <li><a href=""><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></a></li>
                        </div>
                    ) : null}

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ConteudoMenuLateral
