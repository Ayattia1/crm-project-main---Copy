// routes/reportRoutes.js

const express = require("express");
const Report = require("../models/Report");
const router = express.Router();

// Create a new report
router.post("/", async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const newReport = new Report({ title, description, author });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific report by ID
router.get("/:id", async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });
    res.status(200).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a report
router.put("/:id", async (req, res) => {
  try {
    const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReport) return res.status(404).json({ message: "Report not found" });
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a report
router.delete("/:id", async (req, res) => {
  try {
    const deletedReport = await Report.findByIdAndDelete(req.params.id);
    if (!deletedReport) return res.status(404).json({ message: "Report not found" });
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

