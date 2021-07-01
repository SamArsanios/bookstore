const ADD_BOOK = 'ADD_BOOK';

const initialState = { books: [] };
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state };
    default:
      return { ...state };
  }
};

export { ADD_BOOK };
export default booksReducer;
