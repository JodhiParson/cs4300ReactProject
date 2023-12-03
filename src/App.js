import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import Addpage from './pages/Addpage';
import LoginPage from './pages/LoginPage';
import SignUpPage from "./pages/SignUpPage";
import HomeNavbar from './components/Navbar';
import HomeAuthNavbar from './components/HomeAuthNavbar';
import AddpageNavbar from './components/AddpageNavbar';
import LoginPageNavbar from './components/LoginPageNavbar';
import axios from 'axios';
import './App.css';

function App() {
  const [userData, setUserdata] = useState({
    token: undefined,
    user: undefined,
  });
  // Initialize recipes state with preset recipes
  const [recipes, setRecipes] = useState([
    {
    
    },
  ]);

  const [users, setUsers] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleLogin = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
  }

  useEffect(() => {
    const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if(token == null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenResponse = await axios.post(
      "https://localhost:8081/tokenIsValid",
      null,
      {headers: {"x-auth-token": token } }
    );
    if (tokenResponse.data) {
      const userRes = await axios.get("https://localhost:8081/", {
        headers: {"x-auth-token": token },
      });
      setUserdata({
        token,
        user: userRes.data,
      });
    }
  };
    checkLoggedIn();
  }, []);

  // useEffect to fetch data when the component mounts
  
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeNavbar />
                <Home recipes={recipes} onAddRecipe={handleAddRecipe} />
              </>
            }
          />
          <Route
            path="/HomeAuth"
            element={
              <>
                <HomeAuthNavbar />
                <HomeAuth recipes={recipes} onAddRecipe={handleAddRecipe} />
              </>
            }
          />
          <Route
            path="/Addpage"
            element={
              <>
                <AddpageNavbar />
                <Addpage onAddRecipe={handleAddRecipe} />
              </>
            }
          />
          <Route
            path="/Loginpage"
            element={
              <>
                <LoginPageNavbar />
                <LoginPage onLogin={handleLogin} />
              </>
            }
          />
          <Route
            path="/SignUpPage"
            element={
              <>
                <LoginPageNavbar />
                <SignUpPage onSignUp={handleSignUp} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
          };


export default App;
          