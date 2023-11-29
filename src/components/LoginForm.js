import React from 'react';
import {useState} from 'react';
import Button from './Button';

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
    <form onSubmit={handleSubmit}>
      <label>UserName</label>
      <input
        id="recipe"
        type="text"
        value={userName}
        onChange={handleNameChange}
      />
      <br />
      <label>Password</label>
      <input
        id="Password"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      <Button type="submit">Login</Button> 
       </form>
  );
};

export default LoginForm;