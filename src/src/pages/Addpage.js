
import React, { useState } from "react";
import HomeHero from '../components/HomeHero';
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
      <HomeHero />
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <Footer />
    </div>
  );
};

export default Addpage;




