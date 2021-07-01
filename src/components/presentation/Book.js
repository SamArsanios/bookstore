import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div className="row">
      <div className="col-3">
        <h5>{book.ID}</h5>
      </div>
      <div className="col-3">
        <h5>{book.title}</h5>
      </div>
      <div className="col-3">
        <h5>{book.category}</h5>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.string,
};

Book.defaultProps = {
  book: {},
};

export default Book;
