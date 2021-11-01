import React from 'react';

const Books = () => {
  const books = [
    {
      title: 'My first title',
      gender: 'My gender',
      author: 'My author',
      completed: '30%',
      pages: 100,
      currentChapter: 2,
    },
    {
      title: 'My second title',
      gender: 'My second gender',
      author: 'My second author',
      completed: '40%',
      pages: 200,
      currentChapter: 1,
    },
    {
      title: 'My third title',
      gender: 'My third gender',
      author: 'My thiird author',
      completed: '99%',
      pages: 300,
      currentChapter: 3,
    },
  ];

  return (
    <div>
      {books.map((book) => (
          <div className='container'>
            <div className='bookContainer'>
              <div className='bookInfo'>
                <p>{book.gender}</p>
                <p>{book.title}</p>
                <p>{book.author}</p>
              </div>
              <div className='actions'>
                <p>Comments</p>
                <button>Remove</button>
                <p>Edit</p>
              </div>
            </div>
            <div className='progressContainer'>
              <div className='progress'>
                <p>{book.completed}</p>
                <div className='progressBar'>
                  <div className='progressBarFill' style={{ width: book.completed }}>
                  </div>
                </div>
              </div>
            </div>
            <div className='readingState'>
              <p>Current chapter:</p>
              <p>{book.currentChapter}</p>
              <p>Update Progress</p>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Books;
