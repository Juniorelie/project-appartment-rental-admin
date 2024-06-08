import React from "react";
import { useState } from "react";
import CreateForm from "../CreateForm/CreateForm";
import List from "./../List/List";

function CreateList({ ironRental }) {
  const [rooms, setRooms] = useState(ironRental);
  const [displayForm, setDisplayForm] = useState(false);
  const [searchRooms, setSearchRooms] = useState("City or Country")
  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }

  function handleSortByPrice(event) {
    event.preventDefault();
    const sortedRooms = rooms.toSorted((roomA, roomB) => {
      return roomA.review_scores_rating - roomB.review_scores_rating;
    });
    setRooms(sortedRooms);
    console.log(sortedRooms);
  }

  function handleSubmit(event, listToCreate) {
    event.preventDefault();

    setRooms([...rooms, listToCreate]);
    setDisplayForm(false);
  }

  function handleSearchCity(event){
    const value = event.currentTarget.value
    setSearchRooms(value)
    
	
  }
  let displayRooms
 
  if (searchRooms === "" || searchRooms === 'City or Country' ) {
		displayRooms = rooms
	} else {
		displayRooms = rooms.filter((room) =>

			room?.host_location?.toLowerCase().includes(searchRooms.toLowerCase())
		)
	}
  return (
    <>
      <div className="inputSection">
        <input type="search" value={searchRooms} onfocus="this.placeholder = ''" onChange={handleSearchCity}/>
      </div>
      {/* <button onClick={() => setDisplayForm(!displayForm)}>
        Add New Iron Dom
      </button> */}
      {displayForm && <CreateForm handleSubmit={handleSubmit} />}
      <button onClick={handleSortByPrice}>Sort By Review</button>

      <div className="cardItem">
        {displayRooms.map((room) => {
          return (
            <article key={room.id} style={{backgroundImage:`url("${room.picture_url}")`}}>
              <List items={room} remove={handleDeleteCard} />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default CreateList;
