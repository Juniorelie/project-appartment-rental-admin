import React from "react";
import Main from "../Main/Main";
import City from "../List/City";
import Name from "../List/Name";
import Price from "../List/Price";
function Favourites({ favourites }) {
  console.log(favourites);
  return (
    <div>
      {favourites.map((room) => {
        return (
          <article
            key={room.id}
            style={{ backgroundImage: `url("${room.picture_url}")` }}
          >
            <City host_location={room.host_location} />
            <Name name={room.name} />
            <Price price={room.price} />
          </article>
        );
      })}
    </div>
  );
}

export default Favourites;
