import React from 'react'
import Drink from '../../molecules/Drink/Drink';
import PropTypes from 'prop-types';

const DrinksList = ({drinksList}) => {
  return (
    <ul className='drinks-list'>
      {drinksList.map(drink => <Drink 
        key={drink.id}
        id={drink.id}
        name={drink.name}
        description={drink.description}
        abv={drink.abv}
        foodPairing={drink.food_pairing}
        img={drink.image_url}
      />)}
    </ul>
  )
}

DrinksList.propTypes = {
  drinksList: PropTypes.array.isRequired,
}

export default DrinksList;

