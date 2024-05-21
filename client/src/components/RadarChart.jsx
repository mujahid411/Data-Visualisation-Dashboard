import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';

const RadarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/intensity'); // Replace with your actual data endpoint
        setData(response.data.allData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const radarData = {
    labels: ['Intensity', 'Relevance', 'Likelihood', 'Impact'],
    datasets: [
      {
        label: 'Metrics',
        data: [
            data.map((entry) => entry.intensity),
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 10 }, // Adjust the maximum scale value as needed
    },
  };

  return (
    <div style={{ height: '50%', width: '700px' }}>
      <Radar data={radarData} options={options} />
    </div>
  );
};

export default RadarChart;
