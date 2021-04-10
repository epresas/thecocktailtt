import React from 'react'

const Title = ({ children, primary }) => {
  const H1 = <h1 className='title-wrapper title--primary'>{children}</h1>;
  const H2 = <h2 className='title-wrapper title--secondary'>{children}</h2>;
  const titleElement = primary ? H1 : H2;

  return titleElement;
}

export default Title;
