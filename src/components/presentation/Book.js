/* eslint-disable */
import React from 'react';

const Book = (props) => {
  const { book } = props;
  return (
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
  );
};

export default Book;
