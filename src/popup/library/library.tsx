import React, { useState } from 'react';
import './library.css';
import Button from '../buttons/Button';
import Books from '../book/Books';



const Library = () => {

  const [ category, setCategory ] = useState('mathematics');
  const onSetCategory = (e) => {
    setCategory(e.target.value);

  }

  const science = [{
    title: 'Physics For Dummies',
    author: 'Alicia Newton',
    publisher: 'Packt'
  },
  {
    title: 'Biology for Working Moms',
    author: 'A working mom',
    publisher: 'Packt'
  },
  {
    title: 'twenty reasons to play with aliens',
    author: 'Julio Martian',
    publisher: 'Jupiter Readings'
  }]

  const mathematics = [{
    title: 'Physics For Dummies',
    author: 'Alicia Newton',
    publisher: 'Packt'
  },
  {
    title: 'Biology for Working Moms',
    author: 'A working mom',
    publisher: 'Packt'
  },
  {
    title: 'twenty reasons to play with aliens',
    author: 'Julio Martian',
    publisher: 'Jupiter Readings'
  }]

  const languages = [
    {
      title: 'The Legend of the Lisp',
      author: 'Mike Tyson',
      publisher: 'Meathead Books'
    },
    {
      title: 'Golden Grammar',
      author: 'Boksham Twins',
      publisher: 'Annoying Bee and Co.'
    },
    {
      title: 'Antics and Theatrics',
      author: 'Feldman Withering',
      publisher: 'Annoying Bee and Co.'
    },
  ]




  return (
    <div className='card'>
      <Button handleClick={onSetCategory} name='science' value='science' className='button-1'></Button>
      <Button handleClick={onSetCategory} name='mathematics' value='mathematics' className='button-2'></Button>
      <Button handleClick={onSetCategory} name='languages' value='languages' className='button-3'></Button>
      <Books books={category === 'science' ? science : category === 'mathematics' ? mathematics : languages}></Books>

    </div>
  )
}

export default Library;