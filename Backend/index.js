import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import BookRoute from './route/Book.route.js'
import Userroute from './route/User.route.js'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT ||3000;
const URI=process.env.MONGODBURI || 'mongodb://localhost:27017/Bookstore';
dotenv.config();

//connect to mongodb
try{
  mongoose.connect(URI)
  console.log('conected to mongodb')
}
catch(error){
console.log("error",error)
}

app.use('/book',BookRoute);
app.use('/user',Userroute);

app.listen(PORT,()=>{
  console.log(`server is listening on port ${PORT}`)
})


