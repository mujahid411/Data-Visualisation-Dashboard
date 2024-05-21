import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut, Line, Bar, Pie, } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Region = ({ colors }) => {
  const [regionData, setRegionData] = useState([]);
  const [regionCount, setRegionCount] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/regions');
        // console.log(response.data)
        console.log(response.data.counts, 'counts')
        let totalCount = response.data.counts
        let newCount = totalCount.shift()
        let allRegions = response.data.filteredData
        let newRegions = allRegions.shift()
        console.log(response.data.filteredData, 'filteredData')
        setRegionCount(totalCount);
        setRegionData(allRegions)


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Region',
      },
    },
  };

  return <div style={{ height: '100%', width: '800px', marginLeft: '0rem',padding:'0' }}>


    <Bar data={{
      labels: regionData,
      datasets: [{
        label: 'total',
        data: regionCount,
        backgroundColor: '#8f71ff',
        borderColor: '#8f71ff',
        borderRadius: 5,
        borderWidth: 0
      }]
    }}
      options={options}
    />
  </div>

}

export default Region

