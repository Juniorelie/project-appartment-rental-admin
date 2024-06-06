import React from "react";
import ListItemCity from "./ListItemCity";

function List({ items }) {
 console.log(items)

  return <>
    <ListItemCity host_location={items.host_location}/>
  </>;
}

export default List;
