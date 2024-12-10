// src/pages/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication logic
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px 20px' }}>
      <Typography variant="h5" style={{ fontFamily: 'Quicksand', marginBottom: '20px' }}>Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '15px' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '15px' }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ borderRadius: '20px', padding: '10px' }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
