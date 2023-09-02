import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className='button text-center md rounded-full'>{props.name}</button>
  )
}

export default Button;