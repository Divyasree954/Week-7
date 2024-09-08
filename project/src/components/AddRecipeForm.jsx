import React, { useState } from 'react';
import styles from './AddRecipeForm.module.css';

const AddRecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      image
    };
    addRecipe(newRecipe);
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
