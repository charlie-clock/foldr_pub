import React from 'react';
import BookItem from './BookItem';

const BooksList = (props) => {
  return  props.items.map( (book) =>  (<BookItem item={book}></BookItem>)) 
}

export default BooksList;