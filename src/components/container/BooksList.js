import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../presentation/Book';
import { removeBook, changeFilter } from '../../actions';
import CategoryFilter from '../presentation/CategoryFilter';

const BooksList = (props) => {
  const { books, removeBook, changeFilter } = props;

  const handleRemoveBook = (book) => {
    removeBook(book.ID);
  };

  const handleFilterChange = (e) => {
    // console.log(e.target.value);
    const filter = e.target.value;
    console.log(filter);
    changeFilter(filter);
  };

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
      {books.map((book) => <Book book={book} key={book.ID} handleRemoveBook={handleRemoveBook} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
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
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
