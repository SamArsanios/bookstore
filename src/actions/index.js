const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const changeFilter = (id) => ({
  type: CHANGE_FILTER,
  payload: id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, createBook, removeBook, changeFilter,
};
