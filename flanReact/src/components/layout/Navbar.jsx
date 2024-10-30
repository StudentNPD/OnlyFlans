import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation
import axios from "axios";

function Navbar() {
  const navigate = useNavigate(); // Use to navigate after logout

  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/logout/");
      alert("You have been logged out successfully.");
      navigate("/"); // Redirect to home or login page after logout
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed.");
    }
  };

  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
        <li>
          <Link to="/signup">Signin</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
