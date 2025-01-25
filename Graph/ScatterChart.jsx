import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const ScatterChart = () => {
    const options = {
      maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      const generateData = (numPoints, xMin, xMax, yMin, yMax) => {
        return Array.from({ length: numPoints }, () => ({
            x: Math.floor(Math.random() * (xMax - xMin + 1)) + xMin, // Random x
            y: Math.floor(Math.random() * (yMax - yMin + 1)) + yMin, // Random y
        }));
    };
      const data = {
        datasets: [
          {
            label: 'A dataset',
            data: generateData(100, 0, 1000, 0, 1000),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
      
  return   <Scatter options={options} data={data} />
}

export default ScatterChart