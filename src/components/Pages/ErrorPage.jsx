import React from "react";
import { Link } from "react-router-dom";
import Image from "./../../assets/cantfind.webp"
function ErrorPage() {
  return (
    <main className="main errorPage">
      <div className="rightSection">
        <img src={Image} alt="" />
      </div>
      <div className="leftSection">
        <h1>
          We looked <br />
          everywhere.
        </h1>
        <p>Looks like we missed this page sorry</p>

        <Link className="linkButton" to={"/"}>Go to Homepage</Link>
      </div>
    </main>
  );
}

export default ErrorPage;
