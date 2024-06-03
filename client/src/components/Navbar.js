import React from "react";
import "./Navbar.css";

function Navbar({ onCreateNote }) {
  return (
    <div className="navbar">
      <div className="logo">SOUL JOURNAL</div>
      <button className="create-note-button" onClick={onCreateNote}>
        Vytvořit poznámku
      </button>
      <div className="user-icon">👤</div>
    </div>
  );
}

export default Navbar;
