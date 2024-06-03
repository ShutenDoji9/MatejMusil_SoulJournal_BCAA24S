import React, { useState } from "react";
import "./NoteModal.css";

function NoteModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSave = () => {
    if (title && body) {
      onSave({ title, body, date: new Date().toLocaleString() });
      setTitle("");
      setBody("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Create a New Note</h2>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-input"
        />
        <textarea
          placeholder="Note Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="modal-textarea"
        ></textarea>
        <div className="modal-buttons">
          <button className="modal-button cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
