import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Main.css";
function Main() {
  const [rooms, setRooms] = useState(AppartmentalJson);

  function handleDeleteCard(roomId) {
    const filteredRoom = rooms.filter((room) => room.id !== roomId);
    setRooms(filteredRoom);
  }

  function handleSortByPrice() {
    const sortedRooms = rooms.toSorted((roomA, roomB) => {
      return roomB.price - roomA.price;
    });
    setRooms(sortedRooms);
  }
  return (
    <section>
      <button onClick={() => handleSortByPrice(rooms.price)}>
        Sort By Price
      </button>
      <div className="cardItem">
        {rooms.map((room) => {
          return (
            <article key={room.id}>
              <h1>
                {room.city}, {room.country}
              </h1>
              <p>{room.price}</p>
              {room.review_scores_rating > 85 ? <p>🏆</p> : <p>😶‍🌫️</p>}
              <button onClick={() => handleDeleteCard(room.id)}>Delete</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
