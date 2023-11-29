
import React, { useState } from "react";
import HomeHero from '../components/HomeHero';
import UpdateRecipeForm from '../components/UpdateRecipeForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Updatepage = ({ onUpdateRecipe }) => {
  const navigate = useNavigate();

  const handleUpdateRecipe = (newRecipe) => {
    onUpdateRecipe(newRecipe);
    navigate('/HomeAuth');
    window.location.reload();
  };

  return (
    <div>
      <UpdateRecipeForm onUpdateRecipe={handleUpdateRecipe} />
      <Footer />
    </div>
  );
};

export default Updatepage;






