import { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage
      // Redirect to profile page or dashboard upon successful login
      window.location.href = '/';
    } catch (error) {
      console.error("Error logging in:", error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
