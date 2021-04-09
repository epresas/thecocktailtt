import React from 'react'
import Drink from '../../molecules/Drink/Drink';

import './DrinksList.scss';

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

export default DrinksList;

