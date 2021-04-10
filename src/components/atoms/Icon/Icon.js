import React from 'react'

const Icon = ({iconType}) => {
  const classesArray = ['icon'];
  
  if (iconType) {
    classesArray.push(`icon--${iconType}`);
  }
  return <span className={classesArray.join(' ')} />
}

export default Icon;
