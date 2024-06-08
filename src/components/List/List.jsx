import React from "react";
import ListItemCity from "./ListItemCity";
import ListItemImage from "./ListItemImage";
import ListPrice from "./ListPrice";
import ListReview from "./ListReview";
import "./List.css";
function List({ items, remove }) {
  return (
    <>
      {/* <ListItemImage picture_url={items.picture_url} /> */}
      <div>
        <ListItemCity host_location={items.host_location} />

        <ListPrice price={items.price} />
        <ListReview review={items.review_scores_rating} />
      </div>
      <div className="btn listButton">
        <button className="danger" onClick={() => remove(items.id)}>
          Delete
        </button>
        <button className="primary">Favourites</button>
      </div>
    </>
  );
}

export default List;
