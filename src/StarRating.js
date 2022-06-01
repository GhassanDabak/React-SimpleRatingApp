import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];

  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i+1)}
          />
        );
      })}
      <p>{selectedStars} stars selected.</p>
    </>
  );
};

export default StarRating;
