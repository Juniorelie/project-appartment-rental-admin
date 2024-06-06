import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Main.css";

import CreateForm from "../CreateForm/CreateForm";
import CreateList from "../CreateList/CreateList";

function Main() {
  const [rooms, setRooms] = useState(AppartmentalJson);
  const [displayForm, setDisplayForm] = useState(false);

  function handleSubmit(event, listToCreate) {
    event.preventDefault();

    setRooms([...rooms, listToCreate]);
    setDisplayForm(false);
  }

  
  

  return (
    <section>
      <button onClick={() => setDisplayForm(!displayForm)}>
        Add New Iron Dom
      </button>
<<<<<<< HEAD
      {displayForm && <CreateForm handleSubmit={handleSubmit} />}
      <CreateList ironRental={rooms} />
      
=======

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
              <p>Price: {room.price}</p>
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
                <p>No ratings</p>
              )}
              <p>{room.number_of_reviews} reviews</p>
              <button onClick={() => handleDeleteCard(room.id)}>Delete</button>
            </article>
          );
        })}
      </div>
>>>>>>> 955a54538da112d82ebc0f6afe4f5298f00787e3
    </section>
  );
}

export default Main;
