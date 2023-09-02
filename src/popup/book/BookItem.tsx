import React from 'react';
import Card from '../card/Card';
import './BookItem.css';

const BookItem = (props) => {
  
  
  return (
  <div className='book-item'>
    <h1>{props.item.title}</h1>
    <h2>{ props.item.author}</h2>
    <h2>{ props.item.publisher }</h2>
  </div>
  )
}

export default BookItem;