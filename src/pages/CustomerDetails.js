// src/pages/CustomerDetails.js
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { id } = useParams();
  // Dummy data
  const customer = { id, name: 'John Doe', email: 'john@example.com', address: '123 Main St, City', phone: '+123456789' };

  return (
    <div>
      <Typography variant="h4" style={{ fontFamily: 'Quicksand', marginBottom: '20px' }}>Customer Details</Typography>
      <Card style={{ borderRadius: '10px', padding: '20px' }}>
        <CardContent>
          <Typography variant="h6" style={{ fontFamily: 'Quicksand' }}>Name: {customer.name}</Typography>
          <Typography variant="body1">Email: {customer.email}</Typography>
          <Typography variant="body1">Address: {customer.address}</Typography>
          <Typography variant="body1">Phone: {customer.phone}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerDetails;
