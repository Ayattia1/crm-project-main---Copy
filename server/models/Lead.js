const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: { type: String, default: "new" }, // Default to 'new'
  createdAt: { type: Date, default: Date.now } // Automatically set creation date
});

module.exports = mongoose.model("Lead", leadSchema);
