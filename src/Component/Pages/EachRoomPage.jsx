import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function EachRoomPage({ rooms }) {
  const params = useParams();
  const id = Number(params.roomId);
//   console.log(rooms);
//   console.log(id)
    const room = rooms.find((room)=> room.id === id)
    console.log(room)
  return <div>
        <h2>{room.host_location}</h2>
        {/* <p>{room.description}</p> */}
        <img src={`${room.picture_url}`} alt="" />
  </div>;
}

export default EachRoomPage;
