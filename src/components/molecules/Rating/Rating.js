import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon/Icon';

const Rating = ({ rating }) => {
  const getStars = () => {
    // No decimals in stars, round down
    const length = Math.floor(+rating);
    const starsArray = [...Array(length)].map((_star, index) => <Icon iconType='star' small key={index}/>);

    return starsArray;
  }

  const stars = <div className="rating-container" data-test-id='t-rating'>
    {getStars()}
  </div>

  return stars;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}


Rating.defaultProps = {
  rating: 1,
}

export default Rating;
