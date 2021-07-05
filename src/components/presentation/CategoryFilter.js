import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { handleFilterChange } = props;
  const categories = ['All', 'Action', 'Biography', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select
      onChange={handleFilterChange}
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
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
