const express=require('express');
require("dotenv").config();
const app=express();
const dataBase=require('./config/db')
const router=require('./routes/index');
dataBase();
app.use(express.json())
app.use('/',router);
app.listen(3000,()=>
{
    console.log('server is ')
})
