import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faTrash} size="1x" />
        </button>
        <button className="primary">
          <FontAwesomeIcon icon={faHeart} size="1x" />
        </button>
      </div>
    </>
  );
}

export default List;
