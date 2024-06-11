import { useState } from "react";
import List from "../List/List";
import "./Main.css";
import { Link } from "react-router-dom";
function Main({ ironRentals, addFavourites }) {
  const [rooms, setRooms] = useState(ironRentals);
  const [searchRooms, setSearchRooms] = useState("City or Country");
  const [numPeople, setNumPeople] = useState();
  // const [favourites, setFavourites] = useState([]);

  // function addFavourites(room, addFavourites) {
  //   const findFavourite = favourites.find((each) => each.id === room.id);
  //   console.log(findFavourite);
  //   if (findFavourite) return;
  //   setFavourites([room, ...favourites]);
  //   console.log(favourites)
  // }

  function handleSearchCity(event) {
    const value = event.currentTarget.value;
    setSearchRooms(value);
  }

  function handleSortByReview(event) {
    event.preventDefault();
    const sortedRooms = rooms.toSorted((roomA, roomB) => {
      return roomA.review_scores_rating - roomB.review_scores_rating;
    });
    setRooms(sortedRooms);
    console.log(sortedRooms);
  }

  function handleNumPeople(event) {
    const value = event.currentTarget.valueAsNumber;
    setNumPeople(value);
  }

  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }

  let displayRooms;

  if (
    searchRooms === "" ||
    searchRooms === "City or Country" ||
    numPeople === 0
  ) {
    displayRooms = rooms;
  } else {
    displayRooms = rooms.filter((room) =>
      room?.host_location?.toLowerCase().includes(searchRooms.toLowerCase())
    );
  }
  if (numPeople > 0 || numPeople < 11) {
    displayRooms = rooms.filter((room) => room.accommodates === numPeople);
    console.log(displayRooms);
  }

  return (
    <main className="main">
      <div>
        <div className="inputSection">
          <input
            type="search"
            value={searchRooms}
            onChange={handleSearchCity}
          />
        </div>
        <button onClick={handleSortByReview}>Sort By Review</button>
        <div className="accomadates">
          <input
            type="range"
            id="numPeople"
            name="numPeople"
            min="1"
            max="10"
            value={numPeople}
            onChange={handleNumPeople}
          />
          <label htmlFor="numPeople">Accomadates</label>
        </div>
      </div>
      <div>
        
        <List
          rentalRooms={displayRooms}
          remove={handleDeleteCard}
          addFavourites={addFavourites}
        />
      </div>
    </main>
  );
}

export default Main;
