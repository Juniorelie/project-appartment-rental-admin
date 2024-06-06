import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Main.css";
import List from "../List/List";

function Main() {
  const [rooms, setRooms] = useState(AppartmentalJson);
  // const myJSON = JSON.stringify(rooms);
  // function handleDeleteCard(roomId) {
  //   const filteredRoom = rooms.filter((room) => room.id !== roomId);
  //   setRooms(filteredRoom);
  // }

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
      <List />
    </section>
  );
}

export default Main;
