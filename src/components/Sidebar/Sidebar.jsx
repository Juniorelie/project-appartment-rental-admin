// import React from 'react'
import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Sidebar.css";
function Sidebar() {
  const [rooms, setRooms] = useState(AppartmentalJson);
  const [displayForm, setDisplayForm] = useState(false)
  function handleSubmit(event, roomToCreate) {
		event.preventDefault()
		// const clone = [...bands]
		// clone.push(bandToCreate)
		// setBands(clone)
		setRooms([...rooms, roomToCreate])
		setDisplayForm(true)
	}
  return (
    <div className="sidebar">
      <h1>Side Bar</h1>
      <button onClick={() => setDisplayForm(!displayForm)}>
        Add New Iron Rental
      </button>
      {displayForm && <CreateForm handleSubmit={handleSubmit} />}
      {/* < rooms={rooms} /> */}
    </div>
  );
}

export default Sidebar;
