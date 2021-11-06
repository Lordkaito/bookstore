import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === 'default') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addNewBook(newBook));
    setTitle('');
  };

  return (
    <div className='addBookContainer'>
      <div className='formContainer'>
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={submitBookToStore} className="form-container">
          <input
            type="text"
            name="title"
            id="title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Book Title"
          />
          <select onChange={(e) => setCategory(e.target.value)}
            name="categories"
            id="booksCats">
            <option disabled={true}value="default">Select a category</option>
            <option value="Action">Action</option>
            <option value="Manga">Manga</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Heroes">Heroes</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
          </select>
          <button className='addBook' type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;