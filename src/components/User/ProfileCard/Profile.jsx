import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import CSS file for styling

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token not found');
      // Redirect to login page if token is not found
      window.location.href = '/login';
      return;
    }
    try {
      const response = await axios.get('http://localhost:5000/profile', {
        headers: {
          Authorization: token
        }
      });
      setProfileData(response.data.user);
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (error.response && error.response.status === 401) {
        setError('Unauthorized. Please log in again.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else {
        setError('Failed to fetch profile');
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleUpdateUsername = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token not found');
      return;
    }
    try {
      const response = await axios.put('http://localhost:5000/profile/username', {
        username: newUsername
      }, {
        headers: {
          Authorization: token
        }
      });
      setProfileData(response.data.user);
      setNewUsername('');
      fetchProfile();
    } catch (error) {
      console.error("Error updating username:", error);
      setError('Failed to update username');
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {error && <p className="error">{error}</p>}
      {profileData && (
        <div className="profile-info">
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Username:</strong> {profileData.username}</p>
          <div className="update-username">
            <label htmlFor="newUsername">New Username:</label>
            <input
              type="text"
              id="newUsername"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUpdateUsername}>Update Username</button>
          </div>
        </div>
      )}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
