import React, { useState } from 'react';
import axios from 'axios';

const GoalForm = () => {
  const [goalDescription, setGoalDescription] = useState('');
  const [estimatedDays, setEstimatedDays] = useState('');

  const handleAddGoal = async (e) => {
    e.preventDefault();
    await axios.post('/api/goals', { goalDescription, estimatedDays });
    // Clear form and refresh goals list
  };

  return (
    <form onSubmit={handleAddGoal}>
      <input type="text" value={goalDescription} onChange={(e) => setGoalDescription(e.target.value)} placeholder="Goal Description" required />
      <input type="number" value={estimatedDays} onChange={(e) => setEstimatedDays(e.target.value)} placeholder="Estimated Days" required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
