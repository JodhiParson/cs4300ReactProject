
// import React, { useState } from "react";
// import Hero from '../components/Hero';
// import LoginForm from '../components/LoginForm';
// import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

// const Addpage = ({ onLogin }) => {
//   const navigate = useNavigate();

//   const handleLogin = (newLogin) => {
//     onLogin(newLogin);
//     navigate('/HomeAuth');
//   };

//   return (
//     <div>
//       <Hero />
//       <LoginForm onLogin={handleLogin} />
//       <Footer />
//     </div>
//   );
// };

// export default Addpage;


import React, { useState } from "react";
import Hero from "../components/Hero";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Addpage = ({ onSignUp }) => {
  const navigate = useNavigate();

  const handleSignUp = (newSignUp) => {
    onSignUp(newSignUp);
    navigate("/HomeAuth");
  };

  return (
    <div className="loginWrapper">
      <div className="hero-wrapper">
        <Hero className="loginHero" />
        <SignUpForm onSignUp={handleSignUp} />
      </div>
      <Footer />
    </div>
  );
};

export default Addpage;