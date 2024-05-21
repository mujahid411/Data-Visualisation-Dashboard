import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut ,Line,Bar,Pie, } from 'react-chartjs-2';
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
const Topics = ({colors}) => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/topics');
                // console.log(response.data)
                console.log(response.data.counts,'counts')
                let totalCount = response.data.counts
                let newCount = totalCount.shift()
                let allCountries = response.data.filteredData
                let newCountries = allCountries.shift()
                console.log(response.data.filteredData,'filteredData')
               setCount(totalCount);
               setData(allCountries)
               

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
            
            display:false
          },
          title: {
            display: true,
            text: 'Topics',
            
          },
        },
      };

    return <div style={{height:'50%',width:'500px'}}>
       

    <Pie data={{
        label:'topics',
        labels:data,
        legend:false,
       
        datasets:[{
            label:'total',
            data:count,
            backgroundColor: colors.reverse(),
            borderColor:colors
           
        }]
    }}  options={options} />
    
      </div>
    
}

export default Topics