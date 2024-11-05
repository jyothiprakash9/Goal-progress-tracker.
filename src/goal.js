const express = require('express');
const Goal = require('../models/Goal');

const router = express.Router();

router.post('/', async (req, res) => {
  const { goalDescription, estimatedDays } = req.body;
  const newGoal = new Goal({ goalDescription, estimatedDays });
  await newGoal.save();
  res.status(201).json(newGoal);
});

module.exports = router;
