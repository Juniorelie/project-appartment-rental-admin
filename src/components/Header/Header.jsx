// import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header" id="header">
      <Link to={"/"}>
        <h1>Ironhack Rental</h1>
      </Link>
      <nav className="Navbar">
        <ul>
          <li>
            <Link className="linkClass" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="linkClass" to={"/about"}>
              About US
            </Link>
          </li>
          <li>
            <Link className="linkClass" to={"/addnewroom"}>
              Add New IronDom
            </Link>
          </li>
          <li>
            <Link className="linkClass" to={"/favourites"}>
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
