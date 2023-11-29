
import React, { useState } from "react";
import HomeHero from '../components/HomeHero';
import RecipeForm from '../components/RecipeForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import AddHero from '../components/AddHero'

const Addpage = ({ onAddRecipe }) => {
  const navigate = useNavigate();

  const handleAddRecipe = (newRecipe) => {
    onAddRecipe(newRecipe);
    navigate('/HomeAuth');
  };

  return (
    <div>
      {/* <AddHero /> */}
      <RecipeForm onAddRecipe={handleAddRecipe} className="add-form" />
      <Footer />
    </div>
  );
};

export default Addpage;




