import React from 'react';

const AddBook = () => (
    <div>
      <h2>Add a book</h2>
      <form>
        <input type='text' placeholder='title' />
        <input type='text' placeholder='author' />
        <button>Add Book</button>
      </form>
    </div>
);

export default AddBook;