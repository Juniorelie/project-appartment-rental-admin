// import React from "react";
import "./Header.css"
function Header() {
  return (
    <header className="header" id="header">
      <h1>Ironhack Rental</h1>
      <nav className="Navbar">
        <ul>
          <li>
            <a href="#Stays">Stays</a>
          </li>
          <li>
            <a href="#Experiences">Experiences</a>
          </li>
          <li>
            <a href="#OnlineExperiences">Online Experiences</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
