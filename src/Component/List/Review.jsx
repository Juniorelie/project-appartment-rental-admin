import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";
function Review({ review }) {
  console.log(review);
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#F2C265",
    grey: "a9a9a9",
  };
  return (
    <div>
      {stars.map((_, index) => {
        <div key={review.id}>
          return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              size="2x"
              color={
                review.review_scores_rating > index
                  ? colors.orange
                  : colors.grey
              }
            />
          </>
          );
        </div>;
      })}
    </div>
  );
}

export default Review;
