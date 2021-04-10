import React from 'react';
import PropTypes from 'prop-types'

/**
 * ### Description
 * 
 * Icon component 
 * 
 */
const Icon = ({iconType}) => {
  const classesArray = ['icon'];
  
  if (iconType) {
    classesArray.push(`icon--${iconType}`);
  }
  return <span className={classesArray.join(' ')} />
}

Icon.propTypes = {
  /** Icon to display*/
  iconType: PropTypes.string.isRequired,
}


export default Icon;
