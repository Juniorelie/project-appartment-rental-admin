import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./ListItemCity.jsx";

function List() {
  const [rooms, setRooms] = useState(AppartmentalJson);
  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }
  return (
    <div className="cardItem">
      {rooms.map((room) => {
        return (
          <article key={room.id}>
            <h1>
              {room.city}, {room.country}
            </h1>

            <p>{room.price}</p>
            {room.review_scores_rating >= 75 ? (
              <p>great 75</p>
            ) : room.review_scores_rating >= 50 ? (
              <p>great 50</p>
            ) : (
              <p> less than 50</p>
            )}
            <button onClick={() => handleDeleteCard(room.id)}>Delete</button>
          </article>
        );
      })}
    </div>
  );
}

export default List;
