import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut ,Line,Bar,Pie,PolarArea,Bubble, Scatter } from 'react-chartjs-2';
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

const StartYear = ({colors}) => {
    const [startYearData, setStartYearData] = useState([]);
    const [startYearCount, setStartYearCount] = useState([]);
    const [endYearData, setEndYearData] = useState([]);
    const [endYearCount, setEndYearCount] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/startYearAndEndYear');
                // console.log(response.data)
               
                let totalCount = response.data.startYearCounts
                let newCount = totalCount.shift()
                let endYearCount = response.data.endYearCounts
                let newEndYearCount = response.data.endYearCounts.shift()
                let allStartYear = response.data.filteredStartYearData
                let newStartYear = allStartYear.shift()
                let allEndYear = response.data.filteredEndYearData
                let newEndYear = allEndYear.shift()
                
           
               setStartYearCount(totalCount);
               setEndYearCount(endYearCount);
               setEndYearData(allEndYear)
               setStartYearData(allStartYear)
               

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const options = {
        indexAxis: 'y' ,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right' ,
          },
          title: {
            display: true,
            text: 'Region',
          },
        },
      };

    return <div style={{height:'100%',width:'700px'}}>


    <Line data={{
        labels:startYearData,
        datasets:[{
            label:'start_year',
            data:startYearCount,
            backgroundColor: '#2eb872',
            borderColor:'#2eb872',
            borderRadius:'5px',
           
        },{
            label:'end_year',
            data:endYearCount,
            backgroundColor: '#f78536',
            borderColor:'#f78536',
            borderRadius:'5px',
        }]
    }} />
      </div>
}

export default StartYear