// import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
function Navbar() {
  return (
    <header>
        <h1>Iron Rental</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'aboutus'}>About Us</Link></li>
                <li><Link to={"/rooms/addnew"}>Add New Page</Link></li>
                <li><Link to={"/favourites"}>Favourites</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar