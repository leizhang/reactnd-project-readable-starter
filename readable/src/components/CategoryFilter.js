import React from "react";
import PropTypes from 'prop-types';
import CategoryLink from '../containers/CategoryLink';

const CategoryFilter = ({categories}) => (
    <p>
      {categories.map(category =>
          <CategoryLink filter={category.name}>{category.name}</CategoryLink>
    )}</p>
);

CategoryFilter.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default CategoryFilter