import React from "react";

function ListItemImage({ picture_url }) {

  return (
    <div className="listImage" style={{backgroundImage:`url("${picture_url}")`, color:"red"}}>
      {/* <img src={picture_url} alt="" /> */}
    </div>
  );
}

export default ListItemImage;
