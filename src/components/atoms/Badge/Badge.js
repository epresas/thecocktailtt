import React from 'react'
import PropTypes from 'prop-types'

/**
 * ### Description
 * Badge component that shows the abv levels on a drink.
 * 
 * It has three states:
 * 
 * + Red for drinks with abv over 10.0
 * + Orange for drinks with abv over 5.0
 * + Yellow for drinks with abv below 5.0
 */
const Badge = ({ abv }) => {
  const classesArray = ['badge'];
  // Define the limits of abv for scalability
  const lowAbvLimit = 5.0;
  const medAbvLimit = 10.0;


  /**
 * Get the badge clases for styling.
 * Depending on the abv level, adds a modifier to the array
 *
 * @returns {String} - The classes that the badge will have.
 */
  const getClasses = () => {
    if (abv > medAbvLimit) {
      return classesArray.push('badge--red');
    }

    if (abv > lowAbvLimit) {
      return classesArray.push('badge--orange');
    }

    return classesArray.push('badge--yellow');
  }

  getClasses();

  return (
    <span className={ classesArray.join(' ')}>{abv}</span>
  );
}

Badge.propTypes = {
  /** Abv level of the drink */
  abv: PropTypes.number.isRequired,
}

Badge.defaultProps = {
  abv: 1.0,
}

export default Badge;
