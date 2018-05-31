import React from 'react';
import { Bar } from 'react-chartjs-2';

const RatingChart = (props) => {
  const data = props.ratings
  return (
    <div>
      <Bar data={data}
           width={100}
           height={50}
           options={{
            maintainAspectRatio: true
          }} />
    </div>
  );
};

export default RatingChart;