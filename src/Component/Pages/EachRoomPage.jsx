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
  return <div className="w-[92%] mx-auto flex ">
      <div className="w-[50%]">
      <h2 className="text-4xl font-extrabold mt-4 ">{room.name}</h2>
        {/* <p>{room.description}</p> */}
        <img src={`${room.picture_url}`} alt=""  className="w-[100%] mt-8 rounded-lg"/>
      </div>
      <div>
  <h1>hello</h1>
      </div>
  </div>;
}

export default EachRoomPage;
