import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = ({ recipe }) => {
  const detailStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    marginTop: '20px',
    textAlign: 'center'
  };

  return (
    <div style={detailStyle}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: 'auto' }} />
      <p>{recipe.description}</p>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default RecipeDetail;
