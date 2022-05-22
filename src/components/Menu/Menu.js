import React from "react";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Link to="/" className="navbar-brand">Translator</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;


