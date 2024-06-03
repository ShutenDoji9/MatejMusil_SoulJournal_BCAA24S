import React, { useState, useEffect } from "react";
import "./ViewNoteModal.css";

function ViewNoteModal({ isOpen, onClose, note, onSave, isEditing }) {
  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [note]);

  const handleSave = () => {
    onSave({ ...note, title, body });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <h2>Edit Note</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="modal-input"
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="modal-textarea"
            ></textarea>
            <div className="modal-buttons">
              <button onClick={onClose}>Close</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </>
        ) : (
          <>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <div className="modal-buttons">
              <button onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewNoteModal;
