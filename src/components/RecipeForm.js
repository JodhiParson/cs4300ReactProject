import React from 'react';
import {useState} from 'react';
import Button from './Button';
import axios from 'axios';
import './RecipeForm.css';


const RecipeForm = ({ onAddRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [image, setImage] = useState('');
  const [instruction, setInstruction] = useState('');

  const handleNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleInstructionChange = (event) => {
    setInstruction(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recipeName.trim() === '') {
      alert('Enter a recipe!!');
      return;
    }


    const newRecipe = {
      title: recipeName,
      description: ingredient,
      image: image,
      instruction: instruction
    };
    
    axios.post('http://localhost:8081/api/items', newRecipe);


    onAddRecipe(newRecipe);
    console.log('New Recipe:', newRecipe);


    // Clear form fields after adding recipe
    setRecipeName('');
    setIngredient('');
    setImage('');
    setInstruction('');
  };

  return (
<div className="add-wrapper">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2 className="add-header">Create Your Recipe!</h2>
        <label className="add-label">Name Your Recipe:</label>
        <input
          className="recipe-name"
          id="recipe"
          type="text"
          value={recipeName}
          onChange={handleNameChange}
          placeholder="Recipe Name"
        />
        <br />
        <label className="add-label">List the Ingredients:</label>
        <textarea
          className="ingredients"
          id="Ingredient"
          type="text"
          value={ingredient}
          onChange={handleIngredientChange}
          placeholder="Ingredients &#10;1. &#10;2. &#10;3."
          rows={6}
        />
        <br />
        <label className="add-label">How to Prepare:</label>
        <textarea
          className="instructions"
          id="Instruction"
          type="text"
          value={instruction}
          onChange={handleInstructionChange}
          placeholder="Preparation..."
          rows={8}
        />
        <br />
        <label className="add-label">Image:</label>
        <input
          className="add-image"
          id="img"
          type="text"
          value={image}
          onChange={handleImageChange}
          placeholder="Enter Image URL"
        />
        <div className="button-wrapper">
          <Button className="add-button" type="submit">
            Add Recipe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
