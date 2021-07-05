import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book, handleRemoveBook } = props;
  const percentage = 66;
  return (
    <div className="row mt-3">
      <div className="col-3">
        <div className="first">
          <h6>{book.category}</h6>
          <h4>{book.title}</h4>
          <p>Author</p>
        </div>
        <div className="second">
          <button className="btn" type="button">Comments</button>
          <button className="btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button className="btn" type="button">Edit</button>
        </div>

        {/* <h5>{book.ID}</h5> */}
      </div>
      <div className="col-3">
        <div className="oval-2">
          <span className="">
            <CircularProgressbar id="circular" value={percentage} />
          </span>
          <span>{`${percentage}%`}</span>
        </div>
      </div>
      <div className="col-3">
        {/* <h5>{book.category}</h5> */}
      </div>
      <div className="col-2">
        {/* sd */}
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
