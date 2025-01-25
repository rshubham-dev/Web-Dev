import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


// Register Chart.js components
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const generateRandomData = (numPoints, min, max) => {
  return Array.from({ length: numPoints }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );
};
// Chart data
export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: generateRandomData(labels.length, -1000, 1000),
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: generateRandomData(labels.length, -1000, 1000),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: generateRandomData(labels.length, -1000, 1000),
    },
  ],
};

// Tooltip trigger function
function triggerTooltip(chart) {
  const tooltip = chart?.tooltip;

  if (!tooltip) return;

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        { datasetIndex: 0, index: 2 },
        { datasetIndex: 1, index: 2 },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

// React Chart component
const EventChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      triggerTooltip(chart);
    }
  }, []);

  return <Chart ref={chartRef} type="bar" data={data} options={{responsive: true, maintainAspectRatio: true,}} />;
};

export default EventChart;
