import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="w-[92%]   bottom-0 fixed left-[4%] mt-10 ">
      <Link to={"https://github.com/Juniorelie/project-appartment-rental-admin.git"}>
        <FontAwesomeIcon icon={faGithub} /> GitHUb
      </Link>
    </footer>
  );
}

export default Footer;
