import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Person, Email, Phone, Business, Note } from "@mui/icons-material";
import axios from "axios"; // Import axios

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    notes: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // For error handling

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/customer/addCustomer", formData);
      console.log("Customer added successfully:", response.data);
      alert("Customer added successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        notes: "",
      }); // Reset form
    } catch (error) {
      console.error("Error adding customer:", error.response ? error.response.data : error.message);
      setErrorMessage("Error adding customer, please try again."); // Set error message
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      notes: "",
    });
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 4,
        borderRadius: 2,
        backgroundColor: "#f8fafc",
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Add New Customer
      </Typography>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>} {/* Show error message */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton disabled>
            <Person />
          </IconButton>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton disabled>
            <Email />
          </IconButton>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton disabled>
            <Phone />
          </IconButton>
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton disabled>
            <Business />
          </IconButton>
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <IconButton disabled>
            <Note />
          </IconButton>
          <TextField
            label="Additional Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              "&:hover": {
                backgroundColor: "#2563eb",
              },
            }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddCustomer;
