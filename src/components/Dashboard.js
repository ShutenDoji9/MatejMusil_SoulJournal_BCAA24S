import React from "react";
import Note from "./Note";
import "./Dashboard.css";

function Dashboard({ notes, editNote, deleteNote, viewNote }) {
  return (
    <div className="dashboard">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
          viewNote={viewNote}
        />
      ))}
    </div>
  );
}

export default Dashboard;
