import React from 'react'
import { NavLink } from 'react-router-dom';

  
const NavBar = (props) => {
  const linkList = [
    {
      id: 0,
      text: 'hotel',
      to: '/hotel'
    },
    {
      id: 1,
      text: 'bebidas',
      to: '/drinks'
    }
  ];
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        {linkList.map(link => <li 
          className='navbar__tab'
          key={link.id}
        >
          <NavLink
            activeClassName='navlink--active'
            className='navbar__link'
            to={link.to}
            exact={link.exact}
          >
            {link.text}
          </NavLink>
        </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar;
