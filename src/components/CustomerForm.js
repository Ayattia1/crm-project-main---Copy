import React, { useState } from "react";
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

// Modify the state to handle the new fields
const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // New fields for form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [status, setStatus] = useState("");

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

  // Handle form submission to add customer
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare the customer data
    const newCustomer = {
      name,
      email,
      phone,
      company,
      Additional_Notes: additionalNotes,
      status,
    };

    try {
      const response = await fetch("http://localhost:5000/api/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      });

      const data = await response.json();
      console.log(data); // Log the response from the server

      if (response.ok) {
        alert(data.message); // Show success message
        setCustomers([...customers, newCustomer]); // Add the customer to the list
      } else {
        alert("Failed to add customer");
      }
    } catch (error) {
      console.error("Error submitting customer:", error);
      alert("Error adding customer");
    }
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

      {/* Add Customer Form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Company"
              variant="outlined"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Additional Notes"
              variant="outlined"
              fullWidth
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Add Customer
        </Button>
      </form>

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
              <TableCell>Company</TableCell>
              <TableCell>Additional Notes</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.company}</TableCell>
                <TableCell>{customer.Additional_Notes}</TableCell>
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
