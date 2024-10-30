import React from "react";
import axios from "axios";

function Logout() {
  const handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/users/logout_view/");
      alert("You have been logged out successfully.");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed.");
    }
  };

  return (
    <div>
      <h2>Logout Gato</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
