import "./dashboardTemplate.css"

import { MdDashboard } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const ConteudoMenuLateral = () => {

    const user = {
        nome: 'Alison Jose Serafim de Lima',
        notas: [8,6,7,9],
        media: 7.5,
        tipo: 'admin'
    }

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