import React, { useState } from "react";
import Note from "./Note";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const title = prompt("Enter note title:");
    if (title) {
      const newNote = {
        id: Date.now(),
        title,
        date: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
    }
  };

  const editNote = (id, title) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="dashboard">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      ))}
      <Navbar onCreateNote={addNote} />
    </div>
  );
}

export default Dashboard;
