import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (prop) => {
  const { title, author, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      Title: {title}
      <br />
      Author: {author}
      <br />
      <button type="button" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

export default Book;