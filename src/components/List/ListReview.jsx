import React from 'react'

function ListReview({review}) {
  return (
    <div>
        {review>= 5 ? (
                <p>⭐⭐⭐⭐⭐</p>
              ) : review >= 4 ? (
                <p>⭐⭐⭐⭐</p>
              ) : review>= 3 ? (
                <p>⭐⭐⭐</p>
              ) : review>= 2 ? (
                <p>⭐⭐</p>
              ) :review>= 1 ? (
                <p>⭐</p>
              ) : (
                <p>No rating</p>
              )}
    </div>
  )
}

export default ListReview