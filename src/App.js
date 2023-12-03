import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import Addpage from './pages/Addpage';
import LoginPage from './pages/LoginPage';
import HomeNavbar from './components/Navbar';
import HomeAuthNavbar from './components/HomeAuthNavbar';
import AddpageNavbar from './components/AddpageNavbar';
import LoginPageNavbar from './components/LoginPageNavbar';
import './App.css';

function App() {
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

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch recipes
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));

    // Fetch users
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
        </Routes>
      </div>
    </Router>
  );
}


export default App;








