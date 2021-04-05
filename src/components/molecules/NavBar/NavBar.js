import React from 'react'
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <Link to='/hotel' activeClassName='navlink--active'>Hotel prices</Link>
        <Link to='/drinks' activeClassName='navlink--active'>Drinks</Link>
      </ul>
    </nav>
  )
}

export default NavBar;
