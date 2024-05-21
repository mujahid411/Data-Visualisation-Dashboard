import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut ,Line,Bar,Pie, Bubble, Scatter, } from 'react-chartjs-2';
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

const Intensity = () => {

  const [data, setData] = useState([]);
    const [intensity, setIntensity] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/intensity');
                // console.log(response.data)
                console.log(response.data.intensityData,'intensity')
                let totalCount = response.data.intensityData
                // let newCount = totalCount.shift()
                let allData = response.data.allData
                // let newCountries = allData.shift()
                console.log(response.data.allData,'allData')
               setIntensity(totalCount);
               setData(allData)
               

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
            text: '',
            
          },
        },
      };

    return <div style={{height:'50%',width:'700px'}}>
       

       <Bubble data={{
        // labels:data,
        datasets: [
          {
            label: 'Intensity, Relevance & Likelihood',
            data: data.map((entry) => ({
              x: entry.intensity, 
              y: entry.relevance, 
              r: (entry.likelihood)+3
              
            })),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      }
    }

    //  options={options}
      />
      </div>
    
}

export default Intensity