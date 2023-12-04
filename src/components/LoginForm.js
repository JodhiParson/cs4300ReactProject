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
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" required onChange={e => setUserName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required onChange={e=> setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">
                            Log In
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            <div className="w-100 text-center ,mt-2">Need an account?<Link to="/SignUpPage">Signup</Link></div>
        </>
    </div>
</Container>
    // <form onSubmit={handleSubmit}>
    //   <label>UserName</label>
    //   <input
    //     id="recipe"
    //     type="text"
    //     value={userName}
    //     onChange={handleNameChange}
    //   />
    //   <br />
    //   <label>Password</label>
    //   <input
    //     id="Password"
    //     type="password"
    //     value={password}
    //     onChange={handlePassword}
    //   />
    //   <Button type="submit">Login</Button> 
    //    </form>
  );
};

export default LoginForm;