import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../CreateForm/CreateForm.css";

function AddNewPage({ rooms, addRooms }) {
  const [host_location, setCity] = useState("");
  const [picture_url, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  // const [review_scores_rating, setReviewScoresRating] = useState();
  //

  function createList(event) {
    event.preventDefault();
    const newList = {
      id: Math.floor(100000 + Math.random() * 900000),
      host_location,
      picture_url,
      price,
      // review_scores_rating,
    };
    addRooms(newList);
    console.log(newList.id);
  }

  function handleCityChange(event) {
    setCity(event.currentTarget.value);
  }
  function handlePictureChange(event) {
    setImageURL(event.currentTarget.value);
  }
  function handlepriceChange(event) {
    setPrice(event.currentTarget.value);
  }
  // function handleReviewChange(event) {
  //   setReviewScoresRating(event.currentTarget.value);
  // }
  return (
    <form onSubmit={createList}>
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
          type="number"
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
  );
}

export default AddNewPage;
