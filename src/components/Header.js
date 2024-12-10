import React, { useState } from "react";
import profileImage from "../images/projectcrm.jpg";

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Notifications,
  AccountCircle,
  Brightness4,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1e293b",
          boxShadow: "none",
          borderBottom: "2px solid #334155",
        }}
      >
        <Toolbar>
          {/* Hamburger Menu Before Title */}
          <IconButton color="inherit" onClick={toggleSidebar} sx={{ marginRight: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#ffffff" }}
          >
            MyCRM
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {["Home", "Dashboard", "Settings"].map((label, index) => (
              <NavLink
                key={index}
                to={`/${label.toLowerCase().replace(" ", "-")}`}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#38bdf8" : "#ffffff",
                  transition: "color 0.3s ease, transform 0.3s ease",
                })}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                {label}
              </NavLink>
            ))}
          </Box>

          {/* Icons */}
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <Brightness4 />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        PaperProps={{
          sx: {
            marginTop: "64px", // Matches the AppBar height
            height: "calc(100% - 64px)", // Adjust height to fill below AppBar
            backgroundColor: "#1e293b",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#1e293b",
            height: "100%",
            color: "#ffffff",
          }}
        >
          {/* Reserved Space for Photo */}
          <Box
            sx={{
              height: 150, // Adjust the height as needed
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#334155", // Optional: Add background color
            }}
          >
            <img src={profileImage} alt="Profile" style={{ height: "80px", borderRadius: "50%" }} />
          </Box>

          <List>
            {["Leads", "Reports", "Customer", "Add Customer", "Customer Details"].map((label, index) => (
              <ListItem button key={index}>
                <NavLink
                  to={`/${label.toLowerCase().replace(" ", "-")}`}
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    transition: "color 0.3s ease, transform 0.3s ease",
                  }}
                  onClick={toggleSidebar} // Close sidebar on click
                >
                  <ListItemText primary={label} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
