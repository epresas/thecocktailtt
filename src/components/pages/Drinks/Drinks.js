import React, { useState, useEffect } from 'react';
import DrinksTemplate from '../../templates/DrinksTemplate/DrinksTemplate';
import useFetch from '../../../hooks/useFetch';

const Drinks = (props) => {
  const API_BASE_URL = 'https://api.punkapi.com/v2/';
  const [drinks, setDrinks] = useState(null);
  const drinksData = useFetch(`${API_BASE_URL}beers`, {});
  const { response, isLoading } = drinksData;

  useEffect(() => {
    if (response) {
      setDrinks(response);
    }
  }, [response]);
  
  if (drinks) {
    return <DrinksTemplate drinks={drinks}></DrinksTemplate>
  }
  return null;
}

export default Drinks;
