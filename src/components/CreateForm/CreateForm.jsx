import React, { useState } from "react";
import "./CreateForm.css";
import { Link } from "react-router-dom";
function CreateForm({ handleSubmit }) {
  const [host_location, setCity] = useState("");
  const [picture_url, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [review_scores_rating, setReviewScoresRating] = useState();
  function createList(event) {
    const newList = {
      id: crypto.randomUUID(),
      host_location,
      picture_url,
      price,
      review_scores_rating,
    };
    handleSubmit(event, newList);
    setCity("");
    setImageURL("");
    setPrice("");
    setReviewScoresRating(0);
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
  function handleReviewChange(event) {
    setReviewScoresRating(event.currentTarget.value);
  }
  return (
    <form onSubmit={createList}>
      <div className="group">
        <input
          type="text"
          id="city"
          value={host_location}
          onChange={handleCityChange}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="city">Enter the city and Country:</label>
      </div>

      <div className="group">
        <input
          type="url"
          id="image"
          value={picture_url}
          onChange={handlePictureChange}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="image">ImageURL: </label>
      </div>

      <div className="group">
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlepriceChange}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="price">Price: </label>
      </div>

      <div className="group">
        <input
          type="number"
          id="review"
          value={review_scores_rating}
          onChange={handleReviewChange}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="review">Review: </label>
      </div>

      <Link className="linkButton" to={"/"}>
        Create Iron dom
      </Link>
    </form>
  );
}

export default CreateForm;
