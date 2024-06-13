import React, { useState } from "react";
import Main from "../Main/Main";
import City from "../List/City";
import Name from "../List/Name";
import Price from "../List/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Favourites({ favourites }) {
  const [rooms, setRooms] = useState(favourites);
  function handleDeleteCard(roomId) {

    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }
  console.log(favourites);
  return (
    <div className="flex gap-2 w-[92%] mx-auto">
      {rooms.map((room) => {
        return (
          <article
            className="relative w-[100%] h-[15rem] bg-center bg-no-repeat bg-cover text-black rounded-xl p-3"
            key={room.id}
            style={{ backgroundImage: `url("${room.picture_url}")` }}
          >
            <City host_location={room.host_location} />
            <Name name={room.name} />
            <Price price={room.price} />
            <button 
              className="m-2 hover:text-red-500 absolute bottom-0 text-white"
              onClick={() => handleDeleteCard(room.id)}
            >
              <FontAwesomeIcon icon={faTrash} size="2x" />
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default Favourites;
