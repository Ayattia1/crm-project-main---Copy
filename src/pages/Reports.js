// src/pages/Reports.js
import React from 'react';
import { Typography } from '@mui/material';

const Reports = () => {
  return (
    <div>
      <Typography variant="h4" style={{ fontFamily: 'Quicksand', marginBottom: '20px' }}>Reports</Typography>
      <Typography variant="body1">
        This is where you can see the performance reports of your sales and customer data.
      </Typography>
    </div>
  );
};

export default Reports;
