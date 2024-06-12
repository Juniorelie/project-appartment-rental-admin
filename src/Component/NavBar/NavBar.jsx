// import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <header className="sticky p-6 flex justify-between top-0 w-[92%] mx-auto bg-headerBG text-white">
      <h1 className="text-4xl hover:text-black">Iron Rental</h1>
      <nav>
        <ul className="flex gap-4 list-none">
          <li className="transition duration-3000 ease-in-out">
            <Link to={"/"} className="text-white text-xl hover:text-black">Home</Link>
          </li>
          <li>
            <Link to={"aboutus"} className="text-white text-xl hover:text-black">About Us</Link>
          </li>
          <li>
            <Link to={"/rooms/addnew"} className="text-white text-xl hover:text-black">Add New Page</Link>
          </li>
          <li>
            <Link to={"/favourites"} className="text-white text-xl hover:text-black">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
