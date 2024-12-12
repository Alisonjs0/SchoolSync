/// INSTALAR PARA O CALENDARIO FUNCIONAR
// npm install @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
// npm install bootstrap
// npm install uuid
// npm install moment

'use client'

import dynamic from "next/dynamic";
import EsqueletoPrincipal from "@/app/.components/esqueleto";

import "./calendario.css"

const CalendarComponent = dynamic(() => import("@/app/.components/calendario"), {
  ssr: true, // Desativa SSR para esse componente
});

export default function Page() {
  return (
    <div>
      <EsqueletoPrincipal>
        <div className="conteiner conteudoMenus">
          <h3 className="titulo">Calendario Escolar</h3>
            <CalendarComponent></CalendarComponent>
        </div>
      </EsqueletoPrincipal>
    </div>
  );
}
