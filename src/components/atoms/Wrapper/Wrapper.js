import React from 'react'

const Wrapper = ({children, bordered}) => {
  const classesArray = ['wrapper'];

  if (bordered) {
    classesArray.push('wrapper--bordered')
  }
  return <section className={classesArray.join(' ')}>
    {children}
  </section>  
}

export default Wrapper;
