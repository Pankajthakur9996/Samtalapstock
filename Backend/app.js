const express=require('express');
const cors=require('cors')
require("dotenv").config();
const app=express();
const dataBase=require('./config/db')
const router=require('./routes/index');
dataBase();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("API hit:", req.method, req.url);
  next();
});


app.use('/',router);
app.listen(3000,()=>
{
    console.log('server is ')
})
