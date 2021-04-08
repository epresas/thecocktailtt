import React from 'react';
import './Rating.scss';

import Icon from '../../atoms/Icon/Icon';

const Rating = ({ rating }) => {
  const getStars = () => {
    // No decimals in stars, round down
    const length = Math.floor(+rating);
    const starsArray = [...Array(length)].map((_star, index) => <Icon iconType='star' small key={index}/>);

    return starsArray;
  }

  const stars = <div className="rating-container">
    {getStars()}
  </div>

  return stars;
}

export default Rating;
