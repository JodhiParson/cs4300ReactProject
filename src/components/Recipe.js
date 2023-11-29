import React from 'react';
import axios from 'axios';
import './Recipe.css';

const Recipe = (props) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/api/items/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className='list-container'>
      <li key={props.id} className="recipe-item">
        <img src={props.img} className="recipe-img" alt={props.recipe} />
        <div className="recipe-info">
          <h2>{props.recipe}</h2>
          <h3>{props.ingredient}</h3>
          <p>Instruction: {props.instruction}</p>
          <button onClick={(e) => handleDelete(props.id)}>Delete </button>
        </div>
      </li>
  </div>
  );
}

export default Recipe;