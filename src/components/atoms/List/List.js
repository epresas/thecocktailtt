import React from 'react';
import './List.scss';

const List = ({ items, ...props }) => {
  
  return (
    <ol className='list' {...props}>
      {items && items.length && items.map( item => <li className='list__item'>{item}</li>)}
    </ol>
  );
}

export default List;
