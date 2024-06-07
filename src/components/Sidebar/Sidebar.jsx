import React, { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Sidebar.css";
function Sidebar() {
  const[rooms,setRooms] = useState(AppartmentalJson)
  function handleSortByPrice(event) {
    event.preventDefault();
    const sortedRooms = rooms.toSorted((roomA, roomB) => {
      return roomA.review_scores_rating - roomB.review_scores_rating;
    });
    setRooms(sortedRooms);
    console.log(sortedRooms);
  }
  return (
    <div className="sidebar">
      <h1>Side Bar</h1>
      <button onClick={handleSortByPrice}>Sort By Review</button>
    </div>
  );
}

export default Sidebar;
