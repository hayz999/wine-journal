import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class RatingChart extends Component {
  render() {
    const names = this.props.wines.map(wine => {
      return wine.name
    })

    const ratings = this.props.wines.map(wine => {
      return wine.rating
    })
    
    const data = {
      labels: names,
      datasets: [
        {
          label: 'Rating',
          backgroundColor: 'rgba(255,99,132,0.6)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.8)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: ratings
        }
      ]
    };
    return (
      <div>
        <h1 className="journal-title" >Wine Ratings</h1>
        <Bar
          data={data}
          width={100}
          height={40}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [{
                ticks:{
                  beginAtZero: true,
                  max: 100,
                  stepSize: 5
                }
              }]
            }
          }}
        />
      </div>
    );
  }
}