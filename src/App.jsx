// import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import HomePage from "./components/Pages/HomePage.jsx";
import AboutPage from "./components/Pages/AboutPage.jsx";
import AddNewPage from "./components/Pages/AddNewPage.jsx";
import FavouritesPage from "./components/Pages/FavouritesPage.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/addnewroom" element={<AddNewPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
