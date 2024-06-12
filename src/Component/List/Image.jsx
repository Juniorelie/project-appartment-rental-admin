import React from 'react'

function Image({image}) {
    console.log(image)
  return (
    <>
    <img src= {image} alt="" className='w-[100%] h-[15rem] rounded-lg hover:bg-cover hover:bg-5-5'/>
    </>
  )
}

export default Image