import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/leads";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AddCustomer from "./pages/AddCustomer";
import CustomerDetails from "./pages/CustomerDetails";
import Customer from "./pages/Customers";
import { Home } from "@mui/icons-material";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashbord" element={<Dashboard/>} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Router>
  );
};

export default App;
