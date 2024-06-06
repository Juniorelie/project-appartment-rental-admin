// import React from 'react'

import "./Sidebar.css";
function Sidebar() {
<<<<<<< HEAD
  
=======
  const [rooms, setRooms] = useState(AppartmentalJson);
  const [displayForm, setDisplayForm] = useState(false);
  function handleSubmit(event, roomToCreate) {
    event.preventDefault();
    // const clone = [...bands]
    // clone.push(bandToCreate)
    // setBands(clone)
    setRooms([...rooms, roomToCreate]);
    setDisplayForm(false);
  }
>>>>>>> 955a54538da112d82ebc0f6afe4f5298f00787e3
  return (
    <div className="sidebar">
      <h1>Side Bar</h1>
      
    </div>
  );
}

export default Sidebar;
