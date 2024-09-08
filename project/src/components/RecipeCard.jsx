import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe, selectRecipe }) => (
  <div className={styles.card} onClick={() => selectRecipe(recipe)}>
    <img src={recipe.image} alt={recipe.name} className={styles.image} />
    <h2 className={styles.title}>{recipe.name}</h2>
    <p className={styles.description}>{recipe.description}</p>
  </div>
);

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  selectRecipe: PropTypes.func.isRequired
};

export default RecipeCard;
