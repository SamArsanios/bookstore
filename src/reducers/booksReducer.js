import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  books: [
    { ID: Math.random(), title: 'Book 1', category: 'History' },
    { ID: Math.random(), title: 'Book 2', category: 'Sci-FI' },
    { ID: Math.random(), title: 'Book 3', category: 'Action' },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      console.log(action.payload);
      return { ...state };
    case REMOVE_BOOK:
      return { ...state };
    default:
      return { ...state };
  }
};

export default booksReducer;
