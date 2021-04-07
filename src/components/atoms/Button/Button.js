import React from 'react'
import './Button.scss';

const Button = ({children, clicked }) => {
  return (
    <button onClick={clicked} >{children}</button>
  );
}

export default Button;
