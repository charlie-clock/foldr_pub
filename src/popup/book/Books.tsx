import React from 'react';
import './Books';
import BooksList from './BooksList';

const Books = (props) => {
  return (
    <BooksList items={props.books}></BooksList>
  )
}

export default Books;