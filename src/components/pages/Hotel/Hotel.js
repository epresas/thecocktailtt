import React, { useState, useEffect } from 'react';
import HotelTemplate from '../../templates/HotelTemplate/HotelTemplate';
import useFetch from '../../../hooks/useFetch';

const Hotel = (props) => {
  const data = useFetch('./data.json', {})
  const { response, isLoading, error } = data;
  return <HotelTemplate title={response && response.hotel.title}></HotelTemplate>
}

export default Hotel;
