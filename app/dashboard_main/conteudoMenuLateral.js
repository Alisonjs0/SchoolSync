import "./dashboardTemplate.css"

import { MdDashboard } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

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
                            <li><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></li>
                            <li><IoCalendar className="iconMenuLateral" /> <p>Calendario</p></li>
                            <li><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></li>
                            <li><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></li>
                            <li><FaTools className="iconMenuLateral" /> <p>Configurações</p></li>
                        </div>
                    ) : user.tipo === "admin" ? (
                        <div>
                            <li><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></li>
                            <li><IoCalendar className="iconMenuLateral" /> <p>Calendario</p></li>
                            <li><FaUserPlus className="iconMenuLateral"/> <p>Cadastrar Usuario</p></li>
                            <li><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></li>
                            <li><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></li>
                            <li><FaTools className="iconMenuLateral" /> <p>Configurações</p></li>
                        </div>
                    ) : null}

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ConteudoMenuLateral