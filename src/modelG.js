const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  goalDescription: { type: String, required: true },
  estimatedDays: { type: Number, required: true },
  // Add additional fields for tracking progress if needed
});

module.exports = mongoose.model('Goal', GoalSchema);
