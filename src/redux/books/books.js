import bookCreate, { API_URL, bookDeleteAPI } from '../../components/Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addNewBook = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  await bookCreate(id, title, category);
  dispatch({
    type: ADD_BOOK,
    payload: [id, [{
      title,
      category,
    }]],
  });
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const MyBooks = Object.entries(data);
  dispatch({
    type: GET_BOOKS,
    MyBooks,
  });
};

export const bookRemove = (payload) => async (dispatch) => {
  await bookDeleteAPI(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book[0] !== action.payload);
    case GET_BOOKS:
      return action.MyBooks;
    default:
      return state;
  }
};

export default reducer;