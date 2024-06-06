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
      {displayForm && <CreateForm handleSubmit={handleSubmit} />}
      <CreateList ironRental={rooms} />
      
    </section>
  );
}

export default Main;
