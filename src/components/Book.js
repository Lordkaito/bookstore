import React from 'react';

const Book = (props) => {
  console.log(props.booksProps);
  return (
    // <h1>{props.booksProps[0].title}</h1>
    <div>
      {props.booksProps.map((book) => {
        return (
          <div className='book' key={book.id}>
            <div className='bookInfo'>
              <p>{book.gender}</p>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <div className='actions'>
                <p>Comments</p>
                <button>Remove</button>
                <button>Edit</button>
              </div>
            </div>
            <div className='completedPercentage'>
              <p>Completed: {book.completed}</p>
            </div>
            <div className='updateInfo'>
              <p>Current chapter: {book.currentChapter}</p>
              <button>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Book;