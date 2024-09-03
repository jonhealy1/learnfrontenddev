import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;
  const priorityCLass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityCLass[ticket.priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}