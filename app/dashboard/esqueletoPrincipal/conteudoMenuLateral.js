import "./dashboardTemplate.css"

import { user as initialUserData } from '@/data/infos';

import { useState } from 'react'

import Link from 'next/link'

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
                <ul className="listaLateral container">
                    {user.tipo === "professor" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></Link></li>
                            <li><Link href="/dashboard/contatosuporte"><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/dashboard/configuracoesGeral"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : user.tipo === "admin" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/dashboard/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href="/cadastrar"><FaUserPlus className="iconMenuLateral"/> <p>Cadastrar Usuario</p></Link></li>
                            <li><Link href=""><IoPeople className="iconMenuLateral" /> <p>Gestão de turmas</p></Link></li>
                            <li><Link href="/dashboard/contatosuporte"><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/dashboard/configuracoesGeral"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : user.tipo === "aluno" ? (
                        <div>
                            <li><Link href="/dashboard"><MdDashboard className="iconMenuLateral" /> <p>Dashboard</p></Link></li>
                            <li><Link href="/calendario"><IoCalendar className="iconMenuLateral" /> <p>Calendario Escolar</p></Link></li>
                            <li><Link href="/horarios"><FaClock className="iconMenuLateral"/> <p>Horarios</p></Link></li>
                            <li><Link href="/boletimEscolar"><FaBookOpen className="iconMenuLateral" /> <p>Boletim escolar</p></Link></li>
                            <li><Link href="/dashboard/contatosuporte"><FaComments className="iconMenuLateral" /> <p>Contato e suporte</p></Link></li>
                            <li><Link href="/dashboard/configuracoesGeral"><IoMdSettings className="iconMenuLateral" /> <p>Configurações</p></Link></li>
                        </div>
                    ) : null}

                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ConteudoMenuLateral
