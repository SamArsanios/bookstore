import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../../actions/index';

const BooksForm = (props) => {
  const { addBook } = props;
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
    addBook(book);
    setTitle('');
    setCategory('');
  };
  const colorStyle = {
    backgroundColor: '#0290ff',
    color: 'white',
  };
  return (
    <div className="container">

      <h4>ADD NEW BOOK</h4>
      <div className="row d-flex justify-content-between">
        <div className="mb-3 col-5">
          <input onChange={handleTitleChange} value={title} type="text" className="form-control" placeholder="Title" />

        </div>
        <div className="col-3">
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
        </div>
        <div className="col-2">
          <button style={colorStyle} type="button" className="btn w-100" onClick={handleSubmit}>ADD BOOK</button>
        </div>
      </div>
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
