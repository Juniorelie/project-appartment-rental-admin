import React from "react";
import { useState } from "react";
import CreateForm from "../CreateForm/CreateForm";
import List from "./../List/List";


function CreateList({ ironRental }) {
  const [rooms, setRooms] = useState(ironRental);
  const [displayForm, setDisplayForm] = useState(false);

  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }

  function handleSortByPrice(event) {
    event.preventDefault();
    const sortedRooms = ironRental.toSorted((roomA, roomB) => {
      return roomA.review_scores_rating - roomB.review_scores_rating;
    });
    setRooms(sortedRooms);
  }

  function handleSubmit(event, listToCreate) {
    event.preventDefault();

    setRooms([...rooms, listToCreate]);
    setDisplayForm(false);
  }

  return (
    <>
      <button onClick={() => setDisplayForm(!displayForm)}>
        Add New Iron Dom
      </button>
      {displayForm && <CreateForm handleSubmit={handleSubmit} />}
      <button onClick={handleSortByPrice}>Sort By Review</button>

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
