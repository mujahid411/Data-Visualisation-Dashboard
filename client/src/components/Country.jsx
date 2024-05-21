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

const Country = ({colors}) => {
    const [countriesData, setCountriesData] = useState([]);
    const [countryCount, setCountryCount] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/countries');
                // console.log(response.data)
                console.log(response.data.counts,'counts')
                let totalCount = response.data.counts
                let newCount = totalCount.shift()
                let allCountries = response.data.filteredData
                let newCountries = allCountries.shift()
                console.log(response.data.filteredData,'filteredData')
               setCountryCount(totalCount);
               setCountriesData(allCountries);
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
            text: 'Countries',
            
          },
        },
      };

    return <div style={{height:'50%',width:'500px'}}>
       

    <Doughnut data={{
        label:'Countries',
        labels:countriesData,
        legend:false,
       
        datasets:[{
            label:'total',
            data:countryCount,
            backgroundColor: colors.reverse(),
            borderColor:colors
           
        }]
    }}  options={options} />
      </div>
    
}

export default Country