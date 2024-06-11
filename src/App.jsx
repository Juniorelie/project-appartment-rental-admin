import { useState } from "react";
import Navbar from "./Component/NavBar/NavBar.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import "./App.css";
import AppartmentalJson from "./assets/AppartmentalJson.json";

import EachRoomPage from "./Component/Pages/EachRoomPage.jsx";
import HomePage from "./Component/Pages/HomePage.jsx";
import AddNewPage from "./Component/Pages/AddNewPage.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Favourites from "./Component/Pages/Favourites.jsx";

function App() {
  const [rooms, setRooms] = useState(AppartmentalJson);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  function addRooms(room) {
    setRooms((prev) => [room, ...prev]);
    navigate(`/`);
  }

  function addFavourites(room) {
    console.log(room);
    const findFavourite = favourites.find((each) => each.id === room.id);
    console.log(findFavourite);
    if (findFavourite) return;
    setFavourites([room, ...favourites]);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage rooms={rooms} addFavourites={addFavourites} />}
        />

        <Route path="/rooms">
          <Route path=":roomId" element={<EachRoomPage rooms={rooms} />} />
          <Route
            path="addnew"
            element={<AddNewPage rooms={rooms} addRooms={addRooms} />}
          />
        </Route>
        <Route
          path="/favourites"
          element={<Favourites favourites={favourites} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
