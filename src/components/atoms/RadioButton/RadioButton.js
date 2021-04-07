import React from 'react'

const RadioButton = ({name, id, label}) => {
  return (
    <label>
      <input 
        type='radio'
        name={name}
        id={id}
      />
      <span>{label}</span>
    </label>
  );
}

export default RadioButton;
