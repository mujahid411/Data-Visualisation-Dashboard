import React from 'react';
import LineChart from './LineChart'; // Import other chart components
import Country from './Country';
import Region from './Region';
import StartYear from './StartYear';
import Intensity from './Intensity';
import RadarChart from './RadarChart';
import Topics from './Topics';
import Likelihood from './Likelihood';

const Dashboard = ({colors}) => {
  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <select name="filter" id="year"><option value="" defaultValue={true}>End Year</option>
      <option value="2017" > 2017</option>
      <option value="2018" > 2018</option>
      <option value="2019" > 2019</option>
      <option value="2020" > 2020</option>
      </select>
  <div className='container'>
    <div>
        <Country colors={colors}/>
    </div>
    <div>
        <Region colors={colors}/>
    </div> 
    </div>

    <div className='container'>
      <div>
    <StartYear colors={colors}/>
      </div>
      <div>
    <Intensity/>
      </div>
    </div>
   <div className='container'>
    <div>
    <Likelihood colors={colors} />
    </div>
    <div>

    <Topics colors={colors}/>
    </div>

   </div>
   
    </div>
  
  );
};

export default Dashboard;
