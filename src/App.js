import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import Addpage from './pages/Addpage';
import LoginPage from './pages/LoginPage';
import HomeNavbar from './components/HomeNavbar';
import HomeAuthNavbar from './components/HomeAuthNavbar';
import AddpageNavbar from './components/AddpageNavbar';
import LoginPageNavbar from './components/LoginPageNavbar';
import Updatepage from "./pages/Updatepage";
import './App.css';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch recipes data when the component mounts
    axios.get('http://localhost:8081/api/items')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  const handleUpdateRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleLogin = (newUser) => {
    setUsers([...users, newUser]);
  };

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
            path="/Updatepage/:id"
            element={
              <>
                <AddpageNavbar />
                <Updatepage onUpdateRecipe={handleUpdateRecipe} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;