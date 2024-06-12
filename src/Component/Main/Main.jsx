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
    <main className="flex flex-col w-11/12 mx-auto mt-2 gap-4">
      <div className="flex gap-8 ">
        <div className="flex-1 bg-white m-4 p-2 self-center w-4/12 rounded-lg" >
          <input className="mx-auto"
            type="search"
            value={searchRooms}
            onChange={handleSearchCity}
          />
        </div>
        <div className="flex-1 bg-white m-4 p-2 self-center w-4/12 rounded-lg" >
          <button onClick={handleSortByReview} className="mx-auto ">Sort By Review</button>
        </div>

        <div className="flex-1 bg-white m-4 p-2 self-center w-4/12 rounded-lg" >
          <input className="mx-auto "
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
