import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;
  return (
    <div className="row mt-3">
      <div className="col-3">
        <h5>{book.ID}</h5>
      </div>
      <div className="col-3">
        <h5>{book.title}</h5>
      </div>
      <div className="col-3">
        <h5>{book.category}</h5>
      </div>
      <div className="col-2">
        <button onClick={() => handleRemoveBook(book)} type="button" className="btn btn-danger">Remove Book</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
