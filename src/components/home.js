import React from 'react';
import GoalForm from './GoalForm';
import ProgressChart from './ProgressChart';

const Home = () => {
  return (
    <div>
      <h1>Goal Progress Tracker</h1>
      <GoalForm />
      <ProgressChart />
    </div>
  );
};

export default Home;
