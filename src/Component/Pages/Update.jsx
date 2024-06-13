import { useState } from "react";
import { useParams } from "react-router-dom";

function Update({ rooms, handleUpdate }) {
  const params = useParams();
  let value;
  const roomId = Number(params.roomId);
  const eachRoom = rooms.find((room) => room.id === roomId);

  const [host_location, setCity] = useState(eachRoom.host_location);
  const [picture_url, setImageURL] = useState(eachRoom.picture_url);
  const [price, setPrice] = useState(eachRoom.price);

  function handleSubmit(event) {
    event.preventDefault();
    const updateRoom = {
      id: roomId,
      host_location,
      picture_url,
      price,
    };

    handleUpdate(updateRoom);
  }
  function handleCityChange(event) {
    setCity(event.currentTarget.value);
  }
  function handlePictureChange(event) {
    setImageURL(event.currentTarget.value);
  }
  function handlepriceChange(event) {
    value =event.currentTarget.value
    setPrice(event.currentTarget.value);
    console.log(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="text"
            id="city"
            value={host_location}
            onChange={handleCityChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="city">Enter the city and Country:</label>
        </div>

        <div className="group">
          <input
            type="url"
            id="image"
            value={picture_url}
            onChange={handlePictureChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="image">ImageURL: </label>
        </div>

        <div className="group">
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlepriceChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="price">Price: </label>
        </div>

        {/* <div className="group">
          <input
            type="number"
            id="review"
            value={review_scores_rating}
            onChange={handleReviewChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="review">Review: </label>
        </div> */}

        <button className="linkButton" type="submit">
          Create Iron dom
        </button>
      </form>
    </div>
  );
}

export default Update;
