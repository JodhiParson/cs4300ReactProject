import React from 'react';

const Login = (props) => {
  return (    
    <li key={props.id} className="login-item">
      <img src={props.img} className="login-img" alt={props.login} />
      <div className="login-info">
        <h2>{props.userName}</h2>
        <h3>{props.password}</h3>
      </div>
    </li>
  );
}

export default Login;