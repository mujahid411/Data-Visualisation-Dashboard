import DataModel from "./models/index.js";
import mongoose from "mongoose";

async function getFilteredCountries(){
    const data = await DataModel.find().maxTimeMS(30000) 
    console.log(data)   
    let countryData = data.map((ele) => {
        return ele['sector'];
    })
    return countryData

}

let result =await getFilteredCountries()
console.log(result)