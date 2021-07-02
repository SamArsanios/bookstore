/* eslint-disable */
import React, { useState } from 'react';
import { createBook } from '../../actions/index';
import { connect } from 'react-redux';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    const book = {
      ID: Math.random().toString(),
      title,
      category,
    };
    props.addBook(book)
  };

  console.log(['category:', category, 'k']);
  console.log(props);
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

const mapDispatchToProps = (dispatch) => {
  return ({
    addBook: function (book) { dispatch(createBook(book)) }
  });
}

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     handleFormToggle: function () {
//       dispatch(handleFormToggle())
//     },
//     addBook: function (book) {
//       dispatch(createBook(book))
//     }
//   })
// }
export default connect(null, mapDispatchToProps)(BooksForm);
