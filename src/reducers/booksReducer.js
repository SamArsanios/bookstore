const ADD_BOOK = 'ADD_BOOK';

const booksReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { state };
    default:
      return { state };
  }
};

export default booksReducer;
