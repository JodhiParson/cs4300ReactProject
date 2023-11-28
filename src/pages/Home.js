import React from 'react';
import HomeHero from '../components/HomeHero';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';

const Home = ({ recipes, onAddRecipe }) => {
  const handleRemoveRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    onAddRecipe(updatedRecipes); // Update recipes in the common ancestor
  };

  return (
    <div>
      <div className='home-hero'>
        <HomeHero />
      </div>
      <div className='list'>
        <RecipeList recipes={recipes} onRemoveRecipe={handleRemoveRecipe} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;