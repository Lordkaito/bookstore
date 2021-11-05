import { useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { bookRemove } from '../redux/books/books';

const Book = (prop) => {
  const percentage = 64;
  const { book } = prop;
  const [id, [{ title, category }]] = book;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(bookRemove(id));
  };
  return (
    <div className='flexInfo'>
      <div className='bookInfo'>
        <div className='book'>
          <p className='category'>{category}</p>
          <p className='title'>{title}</p>
          <p className='author'>My author</p>
        </div>
        <div className='utility'>
          <p className='comments'>Comments</p>
          <button className='remove'
          type='submit' onClick={() => removeBookFromStore(id)}>Remove</button>
          <p className='edit'>Edit</p>
        </div>
      </div>
      <div className='progress'>
        <div className='progressInfo'>
          <CircularProgressbar
            value={percentage}
            className='progress-bar'
          />
          <div className='textPercentage'>
            <p>{percentage}%</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
      <div className='chapterInfo'>
        <p className='currentChap'>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button class='update'>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;