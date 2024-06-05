import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
function Main() {
  const [rooms, setRooms] = useState(AppartmentalJson);

  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }
  return (
    <section>
      {rooms.map((room) => {
        return (
          <article key={room.id}>
            {room.review_scores_rating >= 80 ? <p>⭐⭐⭐⭐</p> : <p>⭐⭐⭐</p>}
            <h1>
              {room.city}, {room.country}
            </h1>

            <button onClick={() => handleDeleteCard(room.id)}>Delete</button>
          </article>
        );
      })}
    </section>
  );
}

export default Main;
