import AddBook from './AddBook';
import Book from './Books';

const Books = (prop) => {
  const { data } = prop;

  return (
    <>
      <div className="books-container d-flex">
        <div>
          {data.map((book) => (
            <Book key={book.id} title={book.title} author={book.author} id={book.id} />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default Books;