import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Main.css";
import List from "../List/List";

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
              <div className="imageSection">
                <img src={room.picture_url} alt="" />
              </div>

              {/* <h1>
                {room.city}, {room.country}
              </h1> */}
              <List items={room} />
              <p>Price{room.price}</p>
              {room.review_scores_rating >= 5 ? (
                <p>⭐⭐⭐⭐⭐</p>
              ) : room.review_scores_rating >= 4 ? (
                <p>⭐⭐⭐⭐</p>
              ) : room.review_scores_rating >= 3 ? (
                <p>⭐⭐⭐</p>
              ) : room.review_scores_rating >= 2 ? (
                <p>⭐⭐</p>
              ) : room.review_scores_rating >= 1 ? (
                <p>⭐</p>
              ) : (
                <p>No rating</p>
              )}
              <button onClick={() => handleDeleteCard(room.id)}>Delete</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
