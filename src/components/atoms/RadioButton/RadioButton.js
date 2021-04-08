import React from 'react'
import './RadioButton.scss'

const RadioButton = ({name, id, label, selected, clicked}) => {
  const classesArray = ['radio-button'];

  if (selected) {
    classesArray.push('radio-button--active');
  }
  
  return (
    <label className={classesArray.join(' ')} htmlFor={id}>
      <input
        className='radio-button__control'
        type='radio'
        name={name}
        id={id}
        checked={selected}
        onClick={clicked}
        />
      <span className='radio-button__check'></span>
      <span className='radio-button__label'> {label}</span>
    </label>
  );
}

export default RadioButton;
