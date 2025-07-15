import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Register from "./component/register";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
        <Route path="/home"element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
