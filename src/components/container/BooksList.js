/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../presentation/Book';

const BooksList = (props) => {
  const { books } = props;
  // const books = [{ book: 'book1' }]
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
      {books.map((book) => { return <Book book={book} key={0} /> })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps)(BooksList);
