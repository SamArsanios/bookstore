import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../presentation/Book';
import { removeBook } from '../../actions';

const BooksList = (props) => {
  const {
    books, removeBook, filter,
  } = props;
  const handleRemoveBook = (book) => {
    removeBook(book.ID);
  };

  const filterBooks = (books, filter) => (filter === 'All' ? books
    : books.filter((book) => book.category === filter));
  const filteredBooks = filterBooks(books, filter);
  return (
    <div className="container">
      {
        filteredBooks.map((book) => (
          <Book
            book={book}
            key={book.ID}
            handleRemoveBook={handleRemoveBook}
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
  filter: state.changeFilterReducer.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook(id) {
    dispatch(removeBook(id));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
