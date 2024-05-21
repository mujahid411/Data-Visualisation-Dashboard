import './App.css'
import Chart from 'chart.js/auto';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [colors,setColors] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getColors(){
      try {
        let response = await axios.get('https://www.csscolorsapi.com/api/colors/theme/light')
        // console.log(response.data.colors,'colors')
        let fetchedColors = response.data.colors;
        let colorsArr = fetchedColors.map((ele)=>ele.name)
        console.log(colorsArr)
        setColors(colorsArr)
        setLoading(false);
        console.log(colors,'colors')
      } catch (error) {
        console.error(error)
      }
    }
 getColors()

  },[])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>  
      ) : (
        <Dashboard colors={colors} />
      )}
    </div>
  );
}

export default App
