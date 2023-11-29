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

export default UpdateRecipeForm;
