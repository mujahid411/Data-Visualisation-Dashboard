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
const Likelihood = () => {
    const [likelihood, setLikelihood] = useState([]);
    const [count, setCount] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/likelihood');
                // console.log(response.data)
                console.log(response.data.counts,'counts')
                let totalCount = response.data.counts
                let newCount = totalCount.pop()
                let allLikelihood = response.data.filteredData
                let newLikelihood = allLikelihood.pop()
                console.log(response.data.filteredData,'filteredData')
               setCount(totalCount);
               setLikelihood(allLikelihood)
               

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    let colors = ['#ed3a6f','#1bf5af','#fffa62','#626f92']
    const options = {
        indexAxis: 'y' ,
        categoryPercentage: 0.7,
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
            text: 'Likelihood',
          },
        },
      };

    return <div style={{height:'100%',width:'800px',marginRight:'7rem'}}>


    <Bar data={{
        labels:likelihood,
        datasets:[{
            label:'total',
            data:count,
            backgroundColor: colors,
            borderColor:colors,
            borderRadius: 10, 
        }]
    }} 
    options={options}
     />
      </div>
    
}

export default Likelihood