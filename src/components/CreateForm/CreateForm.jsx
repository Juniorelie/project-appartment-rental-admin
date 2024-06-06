import React, { useState } from "react";

function CreateForm({ handleSubmit }) {
  const [host_location, setCity] = useState("");
  const [picture_url, setImageURL] = useState("");
  const [price, setPrice] = useState("");

  function createList(event) {
    const newList = {
      id: crypto.randomUUID(),
      host_location,
      picture_url,
      price,
    };
    handleSubmit(event, newList);
    setCity("");
    setImageURL("");
    setPrice("");
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

  return (
    <form onSubmit={createList}>
      <div>
        <label htmlFor="city">Enter the city and Country:</label>
        <input
          type="text"
          id="city"
          value={host_location}
          onChange={handleCityChange}
        />
      </div>

      <div>
        <label htmlFor="image">ImageURL: </label>
        <input
          type="url"
          id="image"
          value={picture_url}
          onChange={handlePictureChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlepriceChange}
        />
      </div>

      <button>Create Iron dom</button>
    </form>
  );
}

export default CreateForm;
