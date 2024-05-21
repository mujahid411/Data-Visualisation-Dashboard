import express from 'express';
import DataModel from '../models/index.js';

const router = express.Router();

function getData(array, property) {

    let data = array.map((element) => element[property]);

    let filteredData = [...new Set(data)].sort();
    console.log(filteredData,'filterdata')

    const counts = [];

    for (let i = 0; i < filteredData.length; i++) {
        counts.push(0);
    }

    for (let i = 0; i < data.length; i++) {
        const index = filteredData.indexOf(data[i]);
        if (index !== -1) {
            counts[index]++;
    
        }
    }

    return { filteredData, counts }
}



router.get('/countries', async (req, res) => {
    try {
        const data = await DataModel.find().lean();

        let response = getData(data, 'country')

        let filteredData = response.filteredData;
        let counts = response.counts;

        res.status(200).json({ message: 'Successfully retrieved country data.', counts, filteredData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/regions', async (req, res) => {
    try {
        const data = await DataModel.find().lean();

        let response = getData(data, 'region')

        let filteredData = response.filteredData;
        let counts = response.counts;

        res.status(200).json({ message: 'Successfully retrieved country data.', counts, filteredData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/topics', async (req, res) => {
    try {
        const data = await DataModel.find().lean();

        let response = getData(data, 'topic')

        let filteredData = response.filteredData;
        let counts = response.counts;

        res.status(200).json({ message: 'Successfully retrieved country data.', counts, filteredData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/likelihood', async (req, res) => {
    try {
        const data = await DataModel.find().lean();

        let response = getData(data, 'likelihood')

        let fetchData = response.filteredData;
        let countFetch = response.counts;
        let filteredData = fetchData.sort((a,b)=>(b-a))
        let counts = countFetch.sort((a,b)=>(b-a))

        res.status(200).json({ message: 'Successfully retrieved country data.', counts, filteredData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/intensity', async (req, res) => {
    try {
        const allData = await DataModel.find().lean();

        const intensityData = allData.map((element)=>element.intensity);
        console.log(intensityData)

        res.status(200).json({ message: 'Successfully retrieved intensity data.', intensityData,allData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



router.get('/startYearAndEndYear', async (req, res) => {
    try {
        const data = await DataModel.find().lean();

        let startYearData = data.map((element) => element.start_year);

        let filteredStartYearData = [...new Set(startYearData)].sort();

        const startYearCounts = [];

        for (let i = 0; i < filteredStartYearData.length; i++) {
            startYearCounts.push(0);
        }

        for (let i = 0; i < startYearData.length; i++) {
            const index = filteredStartYearData.indexOf(startYearData[i]);
            if (index !== -1) {
                startYearCounts[index]++;
            }
        }

        let endYearData = data.map((element) => element.end_year);

        let filteredEndYearData = [...new Set(endYearData)].sort();

        const endYearCounts = [];

        for (let i = 0; i < filteredEndYearData.length; i++) {
            endYearCounts.push(0);
        }

        for (let i = 0; i < endYearData.length; i++) {
            const index = filteredEndYearData.indexOf(endYearData[i]);
            if (index !== -1) {
                endYearCounts[index]++;
            }
        }
        // console.log(startYearCounts);

        res.status(200).json({ message: 'Successfully retrieved start_year data.', startYearCounts, filteredStartYearData, endYearCounts, filteredEndYearData }, startYearCounts, filteredStartYearData);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



export default router;