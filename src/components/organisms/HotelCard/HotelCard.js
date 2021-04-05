import React from 'react'
import List from '../../atoms/List/List';
import RadioButton from '../../atoms/RadioButton/RadioButton';

const HotelCard = ({id, label, features, name, title}) => {
  return (
    <article className='card'>
      <h2 className='card__title'>{title}</h2>
      <List items={features} />
      <RadioButton 
        id={id}
        name={name}
        label={label}
      />
    </article>
  )
}

export default HotelCard;
