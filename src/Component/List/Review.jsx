import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
function Review({ review }) {
  console.log(review);
  const stars = Array(Math.floor(review.review_scores_rating)).fill(0);
  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };
  return (
    <div >
      {stars.map((_, index) => {
        return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              size={24}
              color={
                review.review_scores_rating > index
                  ? colors.orange
                  : colors.grey
              }
            />
            
          </>
        );
      })}
    </div>
  );
}

export default Review;
