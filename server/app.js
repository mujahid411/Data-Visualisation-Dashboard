import express from 'express';
import  './dbConnect.js';
import DataModel from './models/index.js';
import dataRoutes from './controllers/index.js'

const app = express()

const port = 5022;
app.use(express.json())

// app.get('/',(req,res)=>{
//         res.send('Server Started')
// })


app.get('/api/data', async (req,res)=>{
    try {
        const data = await DataModel.find()
        // console.log(data)
         res.send(data)
    } catch (error) {
        console.error(error)
    }
 })

 app.use('/api',dataRoutes)



app.listen(port,()=>{
   console.log('Server is up and running on port',port)
})