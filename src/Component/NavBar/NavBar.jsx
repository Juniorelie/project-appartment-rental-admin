// import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  // const button = document.querySelector("#id")
  const ul = document.querySelector("section");
  const header = document.querySelector("header");
  return (
    <header className="sticky z-10  mb-8 bg-headerBG text-white flex justify-between items-center w-[100%] mx-auto p-2 px-8 ">
      <h1 className="text-4xl hover:text-black ">
        <Link to={"/"}>Iron Rental</Link>{" "}
      </h1>
      <nav>
        <section className="sm:hidden  md:block">
          <ul className="sm:flex sm:flex-col sm:absolute sm:top-[100%] sm:bg-headerBG sm:left-[0%] sm:items-center sm:p-10 sm:w-[100%] md:flex-row md:relative md:p-0 md:gap-4">
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
        </section>

        <div>
          <button
            className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
            onClick={(e) => {
              e.preventDefault();
              if (e.currentTarget.name === "menu") {
                e.currentTarget.name = "close";
                ul.classList.add("sm:block");
              
                ul.classList.remove("sm:hidden");
                header.classList.add("mb-[45%]")
                console.log("hello");
              } else if (e.currentTarget.name === "close") {
                e.currentTarget.name = "menu";
                ul.classList.add("sm:hidden");
                ul.classList.remove("sm:flex");
    
                header.classList.remove("mb-[45%]")
              }
            }}
            name="menu"
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

          {/* <FontAwesomeIcon
          icon={faClose}
          size="2x"
          name="close"
          className="hidden"
        />  */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
