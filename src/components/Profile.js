// src/pages/Profile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const { accessToken, code } = location.state || {};

  return (
    <div className="profile-container">
      <h2 className="profile-title">Instagram Profile</h2>

      {accessToken ? (
        <div className="profile-box">
          <p><strong>OAuth Code:</strong> {code}</p>
          <p><strong>Access Token:</strong> {accessToken}</p>
          <p className="info-note">* This is mocked. You'll use this token to fetch user data.</p>
        </div>
      ) : (
        <p className="error-msg">No access token found. Please login again.</p>
      )}
    </div>
  );
};

export default Profile;
