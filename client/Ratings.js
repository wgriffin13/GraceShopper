import React, { Fragment } from 'react';

const Ratings = ({ rating }) => {
  const generateStars = () => {
    const generatedStars = [];
    let count = 0;
    while (count < rating) {
      generatedStars.push('s');
      count++;
    }
    return generatedStars;
  };

  // const numberOfStars = generateStars();
  // console.log('rating', numberOfStars);
  return (
    <Fragment>
      {/* <hr /> */}

      {generateStars().map(str => (
        <i
          key={str.idx}
          className="fas fa-star fa-3x"
          style={{ color: 'yellow' }}
        />
      ))}
    </Fragment>
  );
};

export default Ratings;
