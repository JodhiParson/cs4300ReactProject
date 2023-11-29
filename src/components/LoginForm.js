import React from 'react';
import {useState} from 'react';
import Button from './Button';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim() === '') {
      alert('Enter your Login Information!!');
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      user: userName,
      password: password,

    };

    onLogin(newUser);

    // Clear form fields after adding recipe
    setUserName('');
    setPassword('');

  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login-welcome">Welcome!</h2>
      <div className="user">
        <label className="login-label">UserName:</label>
        <input
          className="login-input"
          id="Username"
          type="text"
          value={userName}
          onChange={handleNameChange}
        />
      </div>
      <br />
      <div className="pass">
        <label className="login-label">Password:</label>
        <input
          className="login-input"
          id="Password"
          type="text"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;