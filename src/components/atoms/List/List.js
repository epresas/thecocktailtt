import React from 'react';

const List = ({ items, ...props }) => {
  return (
    <ul className='list' {...props}>
      {items && items.length && items.map( (item, index) => <li 
        className='list__item'
        key={index}
      >
        <span className='list__bullet'>&#8226;</span>
        <p className='list__description'>{item}</p>
      </li>)}
    </ul>
  );
}

export default List;
