import React from 'react';
import './List.scss';

const List = ({ items, ...props }) => {
  
  return (
    <ul className='list' {...props}>
      {items && items.length && items.map( item => <li className='list__item'><span class='list__bullet'>&#8226;</span><p className='list__description'>{item}</p></li>)}
    </ul>
  );
}

export default List;
