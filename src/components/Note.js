import React, { useState } from "react";
import "./Note.css";

function Note({ note, editNote, deleteNote, viewNote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEdit = () => {
    viewNote(note, true);
  };

  const handleView = () => {
    viewNote(note, false);
  };

  const maxTitleLength = 30; // Limit the title to 30 characters
  const maxTextLength = 100; // Limit the text preview to 100 characters

  return (
    <div className="note">
      <div className="note-header">
        <span className="note-title">
          {note.title.length > maxTitleLength
            ? note.title.substring(0, maxTitleLength) + "..."
            : note.title}
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="note-menu-button"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="note-menu">
            <button onClick={handleView} className="note-menu-icon">
              👁️
            </button>
            <button onClick={handleEdit} className="note-menu-icon">
              ✏️
            </button>
            <button
              onClick={() => deleteNote(note.id)}
              className="note-menu-icon"
            >
              🗑️
            </button>
          </div>
        )}
      </div>
      <div className="note-body">
        {note.body.length > maxTextLength
          ? `${note.body.substring(0, maxTextLength)}...`
          : note.body}
      </div>
      <div className="note-footer">
        <div className="note-date">{note.date}</div>
      </div>
    </div>
  );
}

export default Note;
