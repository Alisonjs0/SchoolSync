/// INSTALAR PARA O CALENDARIO FUNCIONAR
// npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
// npm install bootstrap
// npm install uuid
// npm install moment

'use client'

import dynamic from "next/dynamic";
import EsqueletoPrincipal from "../esqueletoPrincipal/page.jsx";

import "./calendario.css"

const CalendarComponent = dynamic(() => import("./components/calendar.jsx"), {
  ssr: true, // Desativa SSR para esse componente
});

export default function Page() {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="conteiner conteudoMenus">
          <h3 className="titulo">Calendario Escolar</h3>
          <div className="conteudo">
            <CalendarComponent></CalendarComponent>
          </div>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
}
