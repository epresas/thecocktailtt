import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <Link to='/hotel' activeClassName='navlink--active'>Hotel prices</Link>
        <Link to='/drinks' activeClassName='navlink--active'>Drinks</Link>
        <Link></Link>

      </ul>
    </nav>
  )
}

export default NavBar;
