import React from "react";
import { useState } from "react";

import List from "./../List/List";
function CreateList({ ironRental }) {
  console.log(ironRental)
  const [rooms, setRooms] = useState(ironRental);
  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }
  function handleSortByPrice() {
    const sortedRooms = ironRental.toSorted((roomA, roomB) => {
      return roomA.review_scores_rating - roomB.review_scores_rating;
    });
    console.log(sortedRooms)
    setRooms(sortedRooms);
  }
  return (
    <>
      <button onClick={ handleSortByPrice}>
        Sort By Review
      </button>

      <div className="cardItem">
        {rooms.map((room) => {
          return (
            
            <article key={room.id}>
              <List items={room} remove={handleDeleteCard} />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default CreateList;
