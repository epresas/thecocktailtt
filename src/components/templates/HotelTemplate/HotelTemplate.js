import React from 'react'
import Header from '../../organisms/Header/Header';

const HotelTemplate = (props) => {
  return (
    <>
      <Header></Header>
      <p>{props.title}</p>
    </>
  )
}

export default HotelTemplate;
