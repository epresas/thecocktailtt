import React from 'react'
import List from '../../atoms/List/List';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import PropTypes from 'prop-types';

const HotelCard = ({id, label, features, name, title, selected, cardClicked}) => {
  const classesArray = ['card'];
  
  if(selected) {
    classesArray.push('card--selected');
  }

  return (
    <article 
      className={classesArray.join(' ')}
      onClick={ev => cardClicked(ev)}
      id={id}
    > 
      <header className='card__header'>
        <h2 className='card__title'>{title}</h2>
      </header>
      <List items={features} />
      <RadioButton 
        id={id}
        name={name}
        label={label}
        selected={selected}
      />
    </article>
  )
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  features: PropTypes.array.isRequired,
  cardClicked: PropTypes.func,
}

export default HotelCard;
