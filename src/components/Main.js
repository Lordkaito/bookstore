import React from 'react';
import Books from '../redux/books/Books';
import AddBook from '../redux/books/AddBook';

function Main() {
  return (
    <>
      <Books />
      <AddBook />
    </>
  );
};

export default Main;