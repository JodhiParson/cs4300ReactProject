import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import Addpage from './pages/Addpage';
import LoginPage from './pages/LoginPage';
import HomeNavbar from './components/HomeNavbar';
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








