import mongoose  from "mongoose";

async function dbConnect(){
   try {
    await mongoose.connect("mongodb+srv://mujahidahmed:Nanocollege$12@mujahidcluster.zk8lfcv.mongodb.net/Data-Visualization");
    console.log('Connected to Database')
   } catch (error) {
    console.error(error)
   }
}
dbConnect()

//  const Data = mongoose.model('data')