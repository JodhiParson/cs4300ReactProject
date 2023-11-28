/** 
import React, { useState } from "react";

const RecipeForm = ({ onAddRecipe, onCancel }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const handleAddRecipe = () => {
    if (!recipeName || !ingredients || !instructions) {
      alert("Please fill in all fields");
      return;
    }

    const newRecipe = {
      name: recipeName,
      ingredients: ingredients,
      instructions: instructions,
      image: image,
    };

    onAddRecipe(newRecipe);

    // Clear form fields after adding recipe
    setRecipeName("");
    setIngredients("");
    setInstructions("")
    setImage("");
  };

  const handleCancel = () => {
    // Clear form fields on cancel
    setRecipeName("");
    setIngredients("");
    setInstructions("")
    setImage("");

    // Trigger onCancel callback if provided
    if (onCancel) {
      onCancel();
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  return (
    <form>
      <div className="recipe-form">
        <h3>Add a New Recipe</h3>
        <div>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddRecipe}>
          Add Recipe
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;

*/


import React from 'react';
import {useState} from 'react';
import Button from './Button';

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
      id: Math.random().toString(),
      name: recipeName,
      ingredient: ingredient,
      img: image,
      instruction: instruction,
    };

    onAddRecipe(newRecipe);

    // Clear form fields after adding recipe
    setRecipeName('');
    setIngredient('');
    setImage('');
    setInstruction('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Recipe</label>
      <input
        id="recipe"
        type="text"
        value={recipeName}
        onChange={handleNameChange}
      />
      <br />
      <label>Ingredient</label>
      <input
        id="Ingredient"
        type="text"
        value={ingredient}
        onChange={handleIngredientChange}
      />
      <br />
      <label>Image</label>
      <input id="img" type="text" value={image} onChange={handleImageChange} />
      <br />
      <label>Instruction</label>
      <input
        id="Instruction"
        type="text"
        value={instruction}
        onChange={handleInstructionChange}
      />
      <Button type="submit">Add Recipe</Button> 
       </form>
  );
};

export default RecipeForm;