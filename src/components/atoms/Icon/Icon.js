import React from 'react'
import './Icon.scss';

const Icon = ({iconType}) => {
  const classesArray = ['icon'];
  
  if (iconType) {
    classesArray.push(`icon--${iconType}`);
  }
  return <span className={classesArray.join(' ')} />
}

export default Icon;
