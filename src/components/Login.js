// src/pages/Login.js
import React from 'react';
import './Login.css';

const CLIENT_ID = '123456789012345'; // Mock App ID
const REDIRECT_URI = 'http://localhost:3000/auth/callback';
const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;

const Login = () => {
  const handleLogin = () => {
    window.location.href = INSTAGRAM_AUTH_URL;
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to InstaApp</h1>
      <button className="instagram-btn" onClick={handleLogin}>
        Login with Instagram
      </button>
    </div>
  );
};

export default Login;
