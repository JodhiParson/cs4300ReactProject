import React from 'react';
import './Recipe.css';

const Recipe = (props) => {
  return (
    <div className='list-container'>
      <li key={props.id} className="recipe-item">
        <img src={props.img} className="recipe-img" alt={props.recipe} />
        <div className="recipe-info">
          <h2>{props.recipe}</h2>
          <h3>{props.ingredient}</h3>
          <p>Instruction: {props.instruction}</p>
        </div>
      </li>
  </div>
  );
}

export default Recipe;