import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import NoteModal from "./components/NoteModal";
import ViewNoteModal from "./components/ViewNoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isViewNoteModalOpen, setIsViewNoteModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addNote = (note) => {
    const newNote = { id: Date.now(), ...note };
    setNotes([...notes, newNote]);
    setIsNoteModalOpen(false);
  };

  const editNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const viewNote = (note, edit = false) => {
    setSelectedNote(note);
    setIsEditing(edit);
    setIsViewNoteModalOpen(true);
  };

  return (
    <div className="App">
      <Navbar onCreateNote={() => setIsNoteModalOpen(true)} />
      <div className="dashboard-container">
        <Dashboard
          notes={notes}
          editNote={editNote}
          deleteNote={deleteNote}
          viewNote={viewNote}
        />
      </div>
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        onSave={addNote}
      />
      <ViewNoteModal
        isOpen={isViewNoteModalOpen}
        onClose={() => setIsViewNoteModalOpen(false)}
        note={selectedNote}
        onSave={editNote}
        isEditing={isEditing}
      />
    </div>
  );
}

export default App;
