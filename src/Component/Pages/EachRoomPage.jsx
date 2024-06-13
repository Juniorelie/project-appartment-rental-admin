import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleRight, faCircleLeft,faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

import { useParams } from "react-router-dom";
function EachRoomPage({ rooms }) {
  const params = useParams();
  const id = Number(params.roomId);
  //   console.log(rooms);
  //   console.log(id)
  const room = rooms.find((room) => room.id === id);
  const stars = Array(Math.ceil(room.review_scores_rating)).fill(0);
  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };
  const indexRoom = rooms.length - 1
  return (<>  
  <div className="flex gap-12 my-12 w-[50%] mx-auto justify-center py-8">
            {/* <Link to={`/rooms/${room[indexRoom]}`} className="text-headerBG  hover:text-blue-500"><FontAwesomeIcon icon={faCircleLeft} size="3x"/></Link> */}
            <Link to={"/"} className="text-headerBG  hover:text-blue-500"><FontAwesomeIcon icon={faHome} size="3x"/></Link>
            <Link to={`/rooms/update/${room.id}`} className="text-headerBG hover:text-blue-500"><FontAwesomeIcon icon={faGear} size="3x"/></Link>
            {/* <Link to={"/"} className="text-headerBG  hover:text-blue-500"><FontAwesomeIcon icon={faCircleRight} size="3x"/></Link> */}
          </div>  
  <div className="md:w-[92%] md:mx-auto flex md:flex-row sm:flex-col mb-[20%]">
      <div className="md:w-[50%] sm:w-[100%] md:m-8">
        <h2 className="text-4xl font-extrabold mt-4 ">{room.name}</h2>
        {/* <p>{room.description}</p> */}
        <img
          src={`${room.picture_url}`}
          alt=""
          className="w-[100%] h-[50%] mt-8 rounded-lg"
        />
        <div className="mt-4 mbg-opacity-10 bg-black bg-opacity-10 max-w-max p-4 rounded-xl sm:mx-auto">
          <h3 className="font-semibold ">Room : {room.host_location}</h3>
          <p className="mt-2">
            <FontAwesomeIcon icon={faPeopleRoof} /> {room.bedrooms} bed,{" "}
            <FontAwesomeIcon icon={faShower} /> {room.bathrooms_text}{" "}
          </p>
          <p className="mt-2">
            Number of People can Accommodates: {room.accommodates}
          </p>
          <div className="mt-2 flex ">
            {stars.map((_, index) => {
              return (
                
                <>
                <div>
                  
                  <FontAwesomeIcon
                    icon={faStar}
                    key={room.id}
                    size="2x"
                    color={
                      room.review_scores_rating > index
                        ? colors.orange
                        : null
                    }
                  />
                
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:w-[50%] md:m-8 sm:w-[100%] sm:m-0 sm:mt-4">
        <p>{room.description}</p>

        <div className="mt-4">
          <h3 className="font-semibold">What this place offers?</h3>
          <div className="mt-8 flex flex-wrap gap-2">
            {room.amenities.map((element) => {
              return <p className="bg-blue-300 p-1 rounded-lg">{element}</p>;
            })}
          </div>
          <div className="mt-4 bg-black bg-opacity-10 p-4 rounded-2xl">
            <h2 className="font-bold">About Owner</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="relative w-[30%] flex justify-center">
                <img
                  src={`${room.host_picture_url}`}
                  alt="Host Picture"
                  className="rounded-full w-[70%] "
                />
                <p>
                  {room.host_identity_verified >= true ? (
                   
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="2x"
                        className="text-green-500 absolute bottom-[1%] right-[20%] sm:text-[100%] md:text-[200%]"
                      />
                   
                  ) : (
                    
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="2x"
                        className="text-red-500 absolute bottom-[1%] right-[20%] sm:text-[100%] md:text-[200%]"
                      />
                
                  )}
                </p>
              </div>

              <div className="w-[50%] flex flex-col items-center">
                <h3 className="text-xl font-bold">{room.host_name}</h3>
                <p>{room.host_location}</p>
                <p>{room.host_since}</p>
              </div>
              <div className="w-[30%] flex justify-center">
                <a href={room.host_url}>
                  <FontAwesomeIcon icon={faAirbnb} size="3x" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
    </>

  );
}

export default EachRoomPage;
