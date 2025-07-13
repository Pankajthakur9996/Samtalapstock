const express=require('express');
const cors=require('cors')
require("dotenv").config();
const app=express();
const dataBase=require('./config/db')
const router=require('./routes/index');
dataBase();
app.use(cors())
app.use(express.json())
app.use('/',router);
app.listen(3000,()=>
{
    console.log('server is ')
})
