import React from 'react';
import UpdatedRecipe from './UpdatedRecipe';
import './RecipeList.css';

const RecipeList = (props) => {
  return (
    <section className="list-container">
      <div className="recipe-list">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <UpdatedRecipe
              id={recipe._id}
              img={recipe.image}
              recipe={recipe.title}
              ingredient={recipe.description}
              instruction={recipe.instruction}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
