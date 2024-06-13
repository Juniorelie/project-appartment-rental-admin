import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <div className="w-[92%] mx-auto flex sm:flex-col">
      <div className="w-[50%] p-10 sm:w-[100%]">
        <h2 className="text-2xl font-bold">About us</h2>
        <p>
          This is an apartment rental web page project is designed to provide
          users with an easy and efficient way to find and rent apartments. The
          platform showcases available apartments with detailed descriptions,
          images, and pricing information. Users can browse through listings,
          view specific details about each apartment and filter through certain
          conditions. We have used React frame for functionality and Tailwind
          CSS for styling the web
        </p>
      </div>
      <div className="w-[50%] p-10 sm:w-[100%] sm:mb-[20%]">
        <h2 className="text-2xl font-bold">
          This project's authors are Keerthy and Elie
        </h2>
        <div className="flex justify-center items-center h-[100%]">
          <section className="">
            <h3 className="text-xl font-semibold p-5">Elie's social</h3>
            <ul>
              <li>
                <Link to={"https://www.linkedin.com/in/junior-mbakop/"}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="px-4"/>LinkedIn
                </Link>
              </li>
              <li>
                <Link to={"https://github.com/Juniorelie"}><FontAwesomeIcon icon={faGithub} size="2x" className="px-4"/>GitHub</Link>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold p-5">Keerthy's social</h3>
            <ul>
              <li>
                <Link
                  to={
                    "https://www.linkedin.com/in/kirthigasan-ravichandran-abb663166/"
                  }
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" className="px-4"/> LinkedIn
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} size="2x" className="px-4"/><Link to={"https://github.com/ravichak1"}>GitHub</Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
