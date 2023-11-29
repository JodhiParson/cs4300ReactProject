import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Button from './Button';
import axios from 'axios';
import './RecipeForm.css';

const UpdateRecipeForm = ({ onUpdateRecipe }) => {
    const {id} = useParams();
    const [recipeName, setRecipeName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [image, setImage] = useState('');
    const [instruction, setInstruction] = useState('');

    useEffect(() => {
      // Fetch the recipe data based on the id parameter when the component mounts
      axios.get(`http://localhost:8081/api/items/${id}`)
        .then(result => {
          const { title, description, image, instruction } = result.data;
          setRecipeName(title);
          setIngredient(description);
          setImage(image);
          setInstruction(instruction);
        })
        .catch(err => {
          console.error(err);
        });
    }, [id]);

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
    
    axios.put(`http://localhost:8081/api/items/${id}`, newRecipe);

    onUpdateRecipe(newRecipe);
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
        <h2 className="add-header">Update Your Recipe!</h2>
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
            Update Recipe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipeForm;
