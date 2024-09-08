import React from 'react';
import RecipeCard from './RecipeCard';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, selectRecipe }) => (
  <div className="recipe-list">
    {recipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} selectRecipe={selectRecipe} />
    ))}
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  selectRecipe: PropTypes.func.isRequired
};

export default RecipeList;
