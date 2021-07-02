import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../presentation/Book';
import { removeBook } from '../../actions';

const BooksList = (props) => {
  const { books, removeBook } = props;
  console.log(props);

  const handleRemoveBook = (book) => {
    console.log(book);
    removeBook(book.ID);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h5>Book ID</h5>
          </div>
          <div className="col-3">
            <h5>Title</h5>
          </div>
          <div className="col-3">
            <h5>Category</h5>
          </div>
        </div>
      </div>
      {books.map((book) => <Book book={book} key={book.ID} handleRemoveBook={handleRemoveBook} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook(id) { dispatch(removeBook(id)); },
});

BooksList.propTypes = {
  books: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
