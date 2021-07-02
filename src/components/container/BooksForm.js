import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../../actions/index';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    const book = {
      ID: Math.random().toString(),
      title,
      category,
    };
    props.addBook(book);
    setTitle('');
    setCategory('');
  };
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Book Title
          <input onChange={handleTitleChange} value={title} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
        </label>
      </div>

      <select
        onChange={handleCategoryChange}
        className="form-select"
        aria-label="Default select example"
      >
        {
          categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))
        }
      </select>

      <button type="button" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBook(book) { dispatch(createBook(book)); },
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
