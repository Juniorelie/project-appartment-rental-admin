import City from "./City";
import Name from "./Name";
import Price from "./Price";
import { Link } from "react-router-dom";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function List({ rentalRooms, remove, addFavourites }) {
  console.log(rentalRooms);

  return (
    <>
      <div className="cardItem">
        {rentalRooms.map((room) => {
          return (
            <article
              key={room.id}
              style={{ backgroundImage: `url("${room.picture_url}")` }}
            >
              <Link to={`/rooms/${room.id}`}>
              <City host_location={room.host_location} />
              <Name name={room.name} />
              <Price price={room.price} />
              </Link>
              <div className="btn listButton">
                <button className="danger" onClick={() => remove(room.id)}>
                  <FontAwesomeIcon icon={faTrash} size="1x" />
                </button>
                <button className="primary" onClick={() => addFavourites(room)}>
                  <FontAwesomeIcon icon={faHeart} size="1x" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default List;
