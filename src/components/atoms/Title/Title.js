import React from 'react'

import './Title.scss'

const Title = ({ children, primary }) => {
  const H1 = <h1 className='title title--primary'>{children}</h1>;
  const H2 = <h2 className='title title--secondary'>{children}</h2>;
  const titleElement = primary ? H1 : H2;

  return titleElement;
}

export default Title;
