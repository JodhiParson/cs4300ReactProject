
// import React from 'react';
// import Recipe from './Recipe';
// import './RecipeList.css'


// // Accepts the users array as a prop and uses map() 
// const RecipeList = (props) => {
//     return (
        
//             <ul>
//                 {props.recipes.map((recipe) => (
//                 <Recipe
//                     key={recipe.id}
//                     img={recipe.img}
//                     recipe={recipe.recipe}
//                     ingredient={recipe.ingredient}
//                     instruction={recipe.instruction}
//                 />
//                 ))}
//             </ul>
        
//     );

// };

// export default RecipeList;

// RecipeList.js

import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = (props) => {
  return (
    <section className="list-container">
      <div className="recipe-list">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <Recipe
              img={recipe.img}
              recipe={recipe.recipe}
              ingredient={recipe.ingredient}
              instruction={recipe.instruction}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
