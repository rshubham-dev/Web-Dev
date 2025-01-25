import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2687, 98731, 356, 56847, 87351, 3000, 24],
    },
    {
      label: 'Dataset 2',
      data: [2687, 98731, 356, 56847, 87351, 3000, 24],
    },
  ],
};

// Function to create a gradient
function createGradient(ctx, area) {
  const colorStart = faker.random.arrayElement(colors);
  const colorMid = faker.random.arrayElement(colors.filter(color => color !== colorStart));
  const colorEnd = faker.random.arrayElement(colors.filter(color => color !== colorStart && color !== colorMid));

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export function App() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart || !chart.ctx || !chart.chartArea) {
      return; // Wait for chart to render completely
    }

    // Update datasets with dynamic gradient
    const updatedData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(updatedData);
  }, []);

  return <Chart ref={chartRef} type="line" data={chartData} />;
}
