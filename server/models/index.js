import mongoose from "mongoose"

const dataSchema = mongoose.Schema({})

const DataModel = mongoose.model('data',dataSchema,'data')
export default DataModel



