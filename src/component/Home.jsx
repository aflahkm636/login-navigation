import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const { logout } = useContext(AuthContext);
  const username = localStorage.getItem("username");

  return (
    <div>
      <h2>Welcome {username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
