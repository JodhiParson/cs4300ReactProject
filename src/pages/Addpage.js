
import React, { useState } from "react";
import RecipeForm from '../components/RecipeForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Addpage = ({ onAddRecipe }) => {
  const navigate = useNavigate();

  const handleAddRecipe = (newRecipe) => {
    onAddRecipe(newRecipe);
    navigate('/HomeAuth');
  };

  return (
    <div>
      <RecipeForm onAddRecipe={handleAddRecipe} className="add-form" />
      <Footer />
    </div>
  );
};

export default Addpage;




