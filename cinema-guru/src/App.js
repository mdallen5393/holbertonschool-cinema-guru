import './App.css';
import Dashboard from './routes/dashboard/Dashboard';
import Authentication from './routes/auth/Authentication';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const [userUsername, setUserUsername] = useState('');

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setAccessToken(storedToken);
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      }).then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      /> : <Authentication
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserUsername}
      />}
    </div>
  );
}

export default App;