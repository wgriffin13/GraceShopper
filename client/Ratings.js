import React, { Fragment } from "react";

const Ratings = rating => {
  const generateStars = () => {
    const stars = [];
    const star = 1;
    let count = 0;
    while (count < rating) {
      stars.push(star);
    }
    return stars;
  };
  return (
    <Fragment>
      {generateStars().map(str => (
        <i className="fas fa-star" />
      ))}
    </Fragment>
  );
};

export default Ratings;
