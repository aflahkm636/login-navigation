import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);
    navigate("/login");
  };

  return (
    <div>
      <input placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder='enter Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
