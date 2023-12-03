import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useNavigate, Link } from "react-router-dom" ;
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate= useNavigate();
  const {setUserData} = useContext(UserContext);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const loginUser = {userName, password };
      const loginRes = axios.post("https://localhost:8081/api/users/login", loginUser)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate('/');
    } catch(err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }
  //   if (userName.trim() === '') {
  //     alert('Enter your Login Information!!');
  //     return;
  //   }

  //   const newUser = {
  //     id: Math.random().toString(),
  //     user: userName,
  //     password: password,

  //   };

  //   onLogin(newUser);

  //   // Clear form fields after adding recipe
  //   setUserName('');
  //   setPassword('');

  // };

  // const loginRes = axios.post("http://localhost:8082/api/users/login", {
  //   userName,
  //   password,
  // });
  // setUserData({
  //   token: loginRes.data.token,
  //   user: loginRes.data.user,
  // });

  // localStorage.setItem("auth-token", loginRes.data.token);

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