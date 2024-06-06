import { useState } from "react";
import "./CreateForm.css";
const originalName = "";
const originalYear = new Date();
const originalMembers = 1;
function CreateForm({ handleSubmit }) {
  const [image, setImage] = useState(originalName);

  function handleButton(event) {
    const newIronDom = {
      image,
    };
    handleSubmit(event, newIronDom);
    setImage(originalName);
  }
  function handleImageChange(event) {
    setImage(event.currentTarget.value);
  }
  return (
    <form onSubmit={handleButton}>
      <div>
        <label htmlFor="image">Name of the band</label>
        <input
          type="url"
          id="imageURL"
          value={image}
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Add New Iron Dom</button>
    </form>
  );
}

export default CreateForm;
