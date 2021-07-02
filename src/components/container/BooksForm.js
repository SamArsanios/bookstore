// /* eslint-disable */
import React, { useState } from 'react';

const BooksForm = () => {
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
  console.log(['category:', category, 'k']);
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

      <button type="button" className="btn btn-dark">Submit</button>
    </div>
  );
};

export default BooksForm;
