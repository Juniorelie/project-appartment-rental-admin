// import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
