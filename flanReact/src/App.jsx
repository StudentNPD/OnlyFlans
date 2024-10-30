import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "./pages/Welcome";
import { Contacto } from "./pages/Contacto";
import Navbar from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";

// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Logout />} />
        </Routes>
        {/* <Toaster /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
