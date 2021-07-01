/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

const BooksList = (props) => {
  const { books } = props;
  console.log(props);

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
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps)(BooksList);
