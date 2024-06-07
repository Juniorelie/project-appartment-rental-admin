import React from "react";

function ListItemImage({ picture_url }) {
  return (
    <div
      className="imageSection"
      style={{
        backgroundImage: `url(${picture_url})`,
      }}
    >
      {/* <img src={picture_url} alt="" /> */}
    </div>
  );
}

export default ListItemImage;
