import { useState } from "react";
import AppartmentalJson from "./../../assets/Appartmental.json";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import CreateForm from "../CreateForm/CreateForm";
import CreateList from "../CreateList/CreateList";

function Main() {
  const [rooms, setRooms] = useState(AppartmentalJson);

  return (
    <section>
      <CreateList ironRental={rooms} />
    </section>
  );
}

export default Main;
