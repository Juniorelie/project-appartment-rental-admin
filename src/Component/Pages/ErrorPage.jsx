import React from "react";
import { Link } from "react-router-dom";
import Image from "./../../assets/cantFind.png"
function ErrorPage() {
  return (
    <main className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-10 p-20 rounded-lg">
      <div >
        <img src={Image} alt=""  />
      </div>
      <div >
        <h1 className="text-2xl font-extrabold mb-2">
          We looked <br />
          everywhere.
        </h1>
        <p className="mb-6">Looks like we missed this page sorry</p>

        <Link className="mt-8 bg-headerBG p-2 rounded-lg" to={"/"}>Go to Homepage</Link>
      </div>
    </main>
  );
}
export default ErrorPage;
