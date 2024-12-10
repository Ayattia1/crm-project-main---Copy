
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomerCard = ({ customer }) => {
  return (
    <Card 
      sx={{ 
        minWidth: 275, 
        marginBottom: 2, 
        borderRadius: '15px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: '0.3s',
        '&:hover': { 
          transform: 'scale(1.05)', 
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)' 
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" style={{ fontFamily: 'Quicksand, sans-serif' }}>{customer.name}</Typography>
        <Typography variant="body2" color="text.secondary">{customer.email}</Typography>
        <Button 
          component={Link} 
          to={`/customers/${customer.id}`} 
          variant="outlined" 
          sx={{ marginTop: 1, borderRadius: '20px', padding: '8px 16px' }}
          style={{ 
            backgroundColor: '#FF80AB', 
            color: '#fff', 
            borderColor: '#FF6F61' 
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;
