// import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  // const button = document.querySelector("#id")
  const ul = document.querySelector("ul");
  
  return (
    <header className="sticky z-10 p-1 mb-12 bg-headerBG text-white flex justify-between items-center w-[92%] mx-auto p-2">
      <h1 className="text-4xl hover:text-black ">
        <Link to={"/"}>
        Iron Rental</Link> </h1>
      <nav >
        <ul className="flex justify-end gap-4">
          <li className="transition duration-3000 ease-in-out">
            <Link to={"/"} className="text-white text-xl hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"aboutus"}
              className="text-white text-xl hover:text-black"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/rooms/addnew"}
              className="text-white text-xl hover:text-black"
            >
              Add New Page
            </Link>
          </li>
          <li>
            <Link
              to={"/favourites"}
              className="text-white text-xl hover:text-black"
            >
              Favourites
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div   >
        <button className="sm:block  lg:hidden md:hidden xl:hidden 2xl:hidden" onClick={(e)=>{
          e.preventDefault()
          if(e.currentTarget.name === 'menu'){
            e.currentTarget.name = 'close'
            ul.classList.add('left-0')
            // ul.classList.add('w-[100%]')
            ul.classList.remove('left-[100%]')
            console.log('hello')

          }else if(e.currentTarget.name === 'close'){
            e.currentTarget.name = 'menu'
            ul.classList.add('left-[100%]')
            ul.classList.remove('left-0')
            // ul.classList.remove('w-[100%]')
          }
        }} name="menu">
        <FontAwesomeIcon
          icon={faBars}
        
          size="2x"
          
        />
        </button>
        
        {/* <FontAwesomeIcon
          icon={faClose}
          size="2x"
          name="close"
          className="hidden"
        /> */}
      {/*</div> */}
    </header>
  );
}

export default Navbar;
