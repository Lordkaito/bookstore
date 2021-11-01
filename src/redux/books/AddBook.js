import React from 'react';

const AddBook = () => (
    <div>
      <h2>Add a book</h2>
      <form>
        <input type="text" placeholder="title" />
        <select id='categories' name='categories' size='1'>
          <option value='1'>Action</option>
          <option value='2'>Comedy</option>
          <option value='3'>Love</option>
          <option value='4'>Science Fiction</option>
        </select>
        <button>Add Book</button>
      </form>
    </div>
);

export default AddBook;