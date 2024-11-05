import React from 'react';
import { Pie } from 'react-chartjs-2';

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: data,
      backgroundColor: ['#36A2EB', '#FF6384'],
    }],
  };

  return <Pie data={chartData} />;
};

export default ProgressChart;
