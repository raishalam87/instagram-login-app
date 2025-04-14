// src/pages/Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Callback.css';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Received Instagram Code:', code);

      // Simulate token and redirect
      setTimeout(() => {
        navigate('/profile', {
          state: {
            accessToken: 'mock_access_token',
            code,
          },
        });
      }, 1000);
    }
  }, [navigate]);

  return (
    <div className="callback-container">
      <div className="loader"></div>
      <p className="loading-text">Logging you in with Instagram...</p>
    </div>
  );
};

export default Callback;
