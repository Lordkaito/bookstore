import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Books';

const Books = () => {
  const dispatch = useDispatch();
  const { booksReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
    <div className='main-container'>
      {booksReducer.map((book) => {
        return <Book key={book[0]} book={book} />;
      })}
    </div>
      <AddBook />
    </>
  );
};

export default Books;