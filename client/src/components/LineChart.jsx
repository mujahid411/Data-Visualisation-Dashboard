import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from "chart.js/auto"
import { Bar, Bubble, Chart, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Process data and create datasets for Chart.js
  const chartData = {
    labels: data.map(item => item.end_year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <div style={{width:'1000px'}}>

<Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug',"Sep",'Oct','Nov','Dec'],
    datasets: [
      {
        id: 1,
        label: '2020',
        data: [5, 3, 7,2,1,0,4],
      },
      {
        id: 2,
        label: '2021',
        data: [3, 2, 5,9,3,7,9],
      },
    ],
  }}
/>
  </div>
};

export default LineChart;
