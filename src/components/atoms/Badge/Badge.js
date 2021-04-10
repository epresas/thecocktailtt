import React from 'react'

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

export default Badge;
