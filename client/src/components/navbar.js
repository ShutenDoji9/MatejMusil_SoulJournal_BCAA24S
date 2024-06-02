import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">SOUL JOURNAL</div>
      <button className="create-note-button">Vytvořit poznámku</button>
      <div className="user-icon">👤</div>
    </div>
  );
}

export default Navbar;
