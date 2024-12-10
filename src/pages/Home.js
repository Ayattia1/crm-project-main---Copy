// src/pages/Dashboard.js
import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import { Assessment, PeopleAlt, MonetizationOn, Home } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-header">Overview</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className="metric-card">
            <CardContent>
              <MonetizationOn style={{ fontSize: 50, color: '#4caf50' }} />
              <Typography variant="h5" className="metric-value">$150K</Typography>
              <Typography variant="subtitle1">Total Sales</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="metric-card">
            <CardContent>
              <PeopleAlt style={{ fontSize: 50, color: '#f39c12' }} />
              <Typography variant="h5" className="metric-value">250</Typography>
              <Typography variant="subtitle1">Active Clients</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="metric-card">
            <CardContent>
              <Assessment style={{ fontSize: 50, color: '#3498db' }} />
              <Typography variant="h5" className="metric-value">120</Typography>
              <Typography variant="subtitle1">Opportunities</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
