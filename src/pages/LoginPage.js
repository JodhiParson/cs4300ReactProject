
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Addpage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (newLogin) => {
    onLogin(newLogin);
    navigate("/HomeAuth");
  };

  return (
    <div className="loginWrapper">
      <div className="hero-wrapper">
        <LoginForm onLogin={handleLogin} />
      </div>
      <Footer />
    </div>
  );
};

export default Addpage;