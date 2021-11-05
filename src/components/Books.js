import { useDispatch } from 'react-redux';
import { bookRemove } from '../redux/books/books';

const Book = (prop) => {
  const { book } = prop;
  const [id, [{ title, category }]] = book;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(bookRemove(id));
  };
  return (
    <div>
      Title: {title}
      <br />
      Category: {category}
      <br />
      <button type="submit" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

export default Book;