import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [
    { ID: Math.random().toString(), title: 'Book 1', category: 'History' },
    { ID: Math.random().toString(), title: 'Book 2', category: 'Sci-FI' },
    { ID: Math.random().toString(), title: 'Book 3', category: 'Action' },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const book = action.payload;
      console.log(book);
      return {
        ...state,
        books: [...state.books].concat(book),
      };
    }
    case REMOVE_BOOK:
      return { ...state };
    default:
      return { ...state };
  }
};

export default booksReducer;
