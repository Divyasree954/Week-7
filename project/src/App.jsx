import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app">
      <h1>Recipe App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} selectRecipe={selectRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
