import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

// Customer Component
const Customer = () => {
  const [customers, setCustomers] = useState([]); // State to hold customers
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch customers from the backend on component mount
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Function to fetch customers from backend API
  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/customers");
      const data = await response.json();
      setCustomers(data); // Update state with fetched customers
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  // Handle Search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter customers by status
  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  // Clear search and status filter
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("");
  };

  // Filtered customers
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery);

    const matchesStatus =
      statusFilter ? customer.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Customers
      </Typography>

      {/* Search Bar and Filter */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Search Customer (Name, Email, Phone)"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by name, email, or phone"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={handleFilterChange}
              label="Status"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Customer List Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer._id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ marginRight: 1 }}
                    startIcon={<Edit />}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<Delete />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customer;
