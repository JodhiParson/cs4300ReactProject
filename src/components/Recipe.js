import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Recipe.css';

const Recipe = (props) => {

  const navigate = useNavigate();

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

  const handleUpdate = (id) => {
    axios.get(`http://localhost:8081/api/items/${id}`)
      .then(result => {
        console.log(result.data);
        // Use navigate to go to the UpdatePage with recipe data as state
        navigate(`/Updatepage/${id}`, { state: result.data });
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
          <p> Ingredietns: {props.ingredient}</p> <br></br>
          <p>Instruction: {props.instruction}</p>
          <Link to={'/Updatepage'}><button onClick={(e) => handleUpdate(props.id)}>Update</button></Link>
          <button onClick={(e) => handleDelete(props.id)}>Delete </button>
        </div>
      </li>
  </div>
  );
}

export default Recipe;