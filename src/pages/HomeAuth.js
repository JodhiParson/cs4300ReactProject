import React from 'react';
import HomeHero from '../components/HomeHero';
import UpdatedRecipeList from '../components/UpdatedRecipeList';
import Footer from '../components/Footer';

const HomeAuth = ({ recipes, onAddRecipe }) => {
  const handleRemoveRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    onAddRecipe(updatedRecipes); // Update recipes in the common ancestor
  };

  return (
    <div>
      <div className="home-hero">
        <HomeHero />
      </div>
      <UpdatedRecipeList recipes={recipes} onRemoveRecipe={handleRemoveRecipe} />
      <Footer />
    </div>
  );
};

export default HomeAuth;