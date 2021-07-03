import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../presentation/Book';
import { removeBook, changeFilter } from '../../actions';
import CategoryFilter from '../presentation/CategoryFilter';

const BooksList = (props) => {
  const {
    books, removeBook, changeFilter, filter,
  } = props;
  const handleRemoveBook = (book) => {
    removeBook(book.ID);
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    changeFilter(filter);
  };

  const filterBooks = (books, filter) => (filter === 'All' ? books
    : books.filter((book) => book.category === filter));
  const filteredBooks = filterBooks(books, filter);
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  removeBook(id) { dispatch(removeBook(id)); },
  changeFilter(filter) {
    dispatch(changeFilter(filter));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
