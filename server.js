const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const routerStu=require('./router/studentroute')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const port =2000;

dotenv.config();
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connected successfully");
})
.catch((error)=>{
    console.log(`error occured ${error}`);
})
app.use('/student',routerStu)

app.listen(port,()=>{
    console.log(`sever is running at port ${port}`);
})