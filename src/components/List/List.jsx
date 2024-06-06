import React from "react";
import ListItemCity from "./ListItemCity";
import ListItemImage from "./ListItemImage";
import ListPrice from "./ListPrice";
import ListReview from "./ListReview";


function List({ items, remove }) {
 

  return <>
    <ListItemCity host_location={items.host_location}/>
    <ListItemImage picture_url={items.picture_url}/>
    <ListPrice price ={items.price}/>
    <ListReview review={items.review_scores_rating}/>
    <button onClick={() => remove(items.id)}>Delete</button>
  </>;
}

export default List;
