import City from "./City";
import Name from "./Name";
import Price from "./Price";
import { Link } from "react-router-dom";
import "./List.css";
import Image from "./Image";
import Review from "./Review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function List({ rentalRooms, remove, addFavourites }) {
  console.log(rentalRooms);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center ">
        {rentalRooms.map((room) => {
          return (
            <div id="card"
              key={room.id}
              className="relative w-[30%] flex flex-col justify-between rounded bg-headerBG bg-opacity-20 rounded-lg"
            >
              <Link to={`/rooms/${room.id}`}>
                <article
                  className="w-[100%] bg-center bg-no-repeat bg-cover text-black rounded-xl p-3 "

                  // style={{ backgroundImage: `url("${room.}")` }}
                >
                  <Image image={room.picture_url} />
                  <City host_location={room.host_location} />
                  <Name name={room.name} />
                  <Price price={room.price} />
                  <Review review={room}/>
                </article>
              </Link>
              <div className="absolute top-0 w-[100%] flex justify-between text-white p-6">
                <button
                  className="m-2 hover:text-green-500"
                  onClick={() => addFavourites(room)}
                >
                  <FontAwesomeIcon icon={faHeart} size="2x" />
                </button>
                <button
                  className="m-2 hover:text-red-500"
                  onClick={() => remove(room.id)}
                >
                  <FontAwesomeIcon icon={faTrash} size="2x" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
