import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book, handleRemoveBook } = props;
  const percentage = Math.floor(Math.random() * 101);
  const colorStyle = {
    color: '#4386bf',
  };
  return (
    <div className="row my-5 py-3 book justify-content-between align-items-center mt-3 bg-white">
      <div className="col-4 d-flex flex-column align-items-start">
        <div className="first d-flex flex-column nalign-items-start">
          <h6>{book.category}</h6>
          <h4>{book.title}</h4>
          <p style={colorStyle}>Author</p>
        </div>
        <div className="second">
          <button style={colorStyle} className="btn" type="button">Comments</button>
          <button style={colorStyle} className="btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button style={colorStyle} className="btn" type="button">Edit</button>
        </div>
      </div>
      <div className="col-3">
        <div className="oval-2">
          <div className="circular">
            <CircularProgressbar value={percentage} />
          </div>
          <div className="mx-3">
            <span className=" text d-block">{`${percentage}%`}</span>
            <span>Completed</span>
          </div>
        </div>
      </div>
      <div className="col-3 d-flex flex-column align-items-start">
        <p>CURRENT CHAPTER</p>
        <p>CHAPTER 16</p>
        <button style={{ backgroundColor: '#0290ff', color: 'white' }} type="button" className="btn">UPDATE PROGRESS</button>
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
