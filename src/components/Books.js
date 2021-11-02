import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [
    {
      title: 'My first title',
      gender: 'My gender',
      author: 'My author',
      completed: '30%',
      pages: 100,
      currentChapter: 2,
      id: 1,
    },
    {
      title: 'My second title',
      gender: 'My second gender',
      author: 'My second author',
      completed: '40%',
      pages: 200,
      currentChapter: 1,
      id: 2,
    },
    {
      title: 'My third title',
      gender: 'My third gender',
      author: 'My thiird author',
      completed: '99%',
      pages: 300,
      currentChapter: 3,
      id: 3,
    },
  ];

  return (
    <div>
      <Book booksProps={books}/>
    </div>
  );
};

export default Books;
