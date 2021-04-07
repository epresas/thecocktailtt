import React from 'react'
import { NavLink } from 'react-router-dom';

const Link = ({children, ...props}) => {
  const Anchor = <a {...props}>{children}</a>;
  const RouterLink = <NavLink {...props}/>
  const {to} = props;

  return to ? RouterLink : Anchor;
}

export default Link;
