const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },  
  Additional_Notes: { type: String },  
 
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
