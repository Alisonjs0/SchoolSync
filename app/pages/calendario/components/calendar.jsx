"use client";

import { user as initialUserData } from "../../data/infos.js";
import React, { useEffect, useState } from "react";
import "./css/style.css";
import { Calendar } from "@fullcalendar/core";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

moment.locale("pt-br");

const CalendarComponent = () => {
  const [user, setUser] = useState(initialUserData);
  const [calendar, setCalendar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [dangerAlertVisible, setDangerAlertVisible] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [
      {
        id: uuidv4(),
        title: "Edit Me",
        start: "2023-04-11",
        backgroundColor: "red",
        allDay: false,
      },
      {
        id: uuidv4(),
        title: "Delete Me",
        start: "2023-04-17",
        end: "2023-04-21",
        allDay: false,
      },
    ];
    setEvents(savedEvents);
  }, []); // Executa apenas uma vez, ao montar o componente

  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    start: "",
    end: "",
    color: "",
  });

  useEffect(() => {
    const calendarEl = document.getElementById("calendar");

    const newCalendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      locale: "pt-br", // Corrigido para minúsculas
      locales: [ptBrLocale],
      customButtons: {
        addEventButton: {
          text: "Add Evento",
          click: () => {
            setShowModal(true);
            setEventData({
              id: "",
              title: "",
              start: "",
              end: "",
              color: "#3788d8",
            });
          },
        },
        todayButton: {
          text: "Hoje",
          click: () => {
            newCalendar.gotoDate(new Date());
          },
        },
      },
      headerToolbar:
        user.tipo === "admin"
          ? { center: "addEventButton", right: "todayButton,prev,next" }
          : { right: "todayButton,prev,next" },
      events: events,
      eventClick: (info) => {
        handleEventClick(info);
      },
      eventDrop: (info) => {
        handleEventDrop(info);
      },
      select: (info) => {
        setEventData({ ...eventData, start: info.startStr, end: info.endStr });
      },
    });

    newCalendar.render();
    setCalendar(newCalendar);

    const handleResize = () => {
      setTimeout(() => {
        if (newCalendar) {
          newCalendar.updateSize();
        }
      }, 100); // Ajuste o delay se necessário
    };

    // Adiciona o listener para redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
      newCalendar.destroy(); // Destrói o calendário ao desmontar
    };
  }, [events]);

  const handleEventClick = (info) => {
    const clickedEvent = events.find((event) => event.id === info.event.id);
    if (clickedEvent) {
      setEventData({
        id: clickedEvent.id || "",
        title: clickedEvent.title || "",
        start: clickedEvent.start || "",
        end: clickedEvent.end || "",
        color: clickedEvent.backgroundColor || "#000",
      });
      setShowModal(true);
      setShowDeleteModal(true);
    }
  };

  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) => {
      if (event.id === info.event.id) {
        return { ...event, start: info.event.startStr, end: info.event.endStr };
      }
      return event;
    });
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (eventData.end && eventData.end <= eventData.start) {
      setDangerAlertVisible(true);
      return;
    }

    if (eventData.id) {
      const updatedEvents = events.map((event) => {
        if (event.id === eventData.id) {
          return {
            ...event,
            title: eventData.title,
            start: eventData.start,
            end: eventData.end || null,
            backgroundColor: eventData.color,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    } else {
      const newEvent = {
        id: uuidv4(),
        title: eventData.title,
        start: eventData.start,
        end: eventData.end,
        backgroundColor: eventData.color,
      };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }

    setShowModal(false);
    setEventData({ id: "", title: "", start: "", end: "", color: "#3788d8" });
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setShowDeleteModal(false);
    setShowModal(false);
  };

  return (
    <>
      <header className="cd__intro">
        <div className="cd__action"></div>
      </header>
      <main className="cd__main">
        <div id="calendar"></div>

        {/* Add Event Modal */}
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          id="form"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!showModal}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="modal-title">
                  {eventData.id ? "Editar Evento" : "Add Evento"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  {dangerAlertVisible && (
                    <div className="alert alert-danger" role="alert">
                      A data final deve ser posterior à data inicial.
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="event-title">
                      Nome do Evento <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="event-title"
                      value={eventData.title}
                      onChange={(e) =>
                        setEventData({ ...eventData, title: e.target.value })
                      }
                      placeholder="Digite o nome do evento"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-date">
                      Data de Inicio <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="start-date"
                      value={eventData.start}
                      onChange={(e) =>
                        setEventData({ ...eventData, start: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="end-date">
                      Data de Termino -{" "}
                      <small className="text-muted">Opcional</small>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="end-date"
                      value={eventData.end}
                      onChange={(e) =>
                        setEventData({ ...eventData, end: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-color">Cor</label>
                    <input
                      type="color"
                      className="form-control"
                      id="event-color"
                      value={eventData.color}
                      onChange={(e) =>
                        setEventData({ ...eventData, color: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Delete Modal */}
        <div
          className={`modal fade ${showDeleteModal ? "show" : ""}`}
          style={{ display: showDeleteModal ? "block" : "none" }}
          id="delete-modal"
          tabIndex="-1"
          aria-labelledby="delete-modal-title"
          aria-hidden={!showDeleteModal}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="delete-modal-title">
                  Confirmar exclusão
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center" id="delete-modal-body">
                Tem certeza de que deseja excluir o evento: {eventData.title}?
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteEvent(eventData.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CalendarComponent;
