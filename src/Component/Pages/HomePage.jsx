import React from 'react'
import Main from '../Main/Main'
function HomePage({rooms, addFavourites}) {
    console.log(rooms)
  return (
    <div>
        <Main ironRentals = {rooms} addFavourites={addFavourites}/>
    </div>
  )
}

export default HomePage