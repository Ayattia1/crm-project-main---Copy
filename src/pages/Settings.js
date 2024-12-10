// src/pages/Settings.js
import React from 'react';
import { Typography, Button } from '@mui/material';

const Settings = () => {
  return (
    <div>
      <Typography variant="h4" style={{ fontFamily: 'Quicksand', marginBottom: '20px' }}>Settings</Typography>
      <Button variant="contained" color="secondary" style={{ borderRadius: '20px', padding: '10px 20px' }}>
        Change Password
      </Button>
    </div>
  );
};

export default Settings;
