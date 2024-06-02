import React, { useState } from "react";

function Note({ note, editNote, deleteNote }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);

  const handleEdit = () => {
    editNote(note.id, newTitle);
    setIsEditing(false);
    setMenuOpen(false);
  };

  return (
    <div className="note">
      <div className="note-header">
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <span>{note.title}</span>
        )}
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && (
          <div className="note-menu">
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => deleteNote(note.id)}>🗑️ Delete</button>
          </div>
        )}
      </div>
      <div className="note-date">{note.date}</div>
      {isEditing && <button onClick={handleEdit}>Save</button>}
    </div>
  );
}

export default Note;
