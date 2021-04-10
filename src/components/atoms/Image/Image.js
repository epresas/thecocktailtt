import React from 'react'

const Image = ({src, alt}) => {
  return <figure className='image-wrapper'>
    <img className='image' src={src} alt={alt} />
  </figure>
}

export default Image;
