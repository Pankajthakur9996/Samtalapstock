const mongoose=require('mongoose');
const Store=require('../models/store')
const DataFetch=async(req,res)=>
{
    try{
    const database=await Store.find({});
    res.status(200).json({
    message:database
    })
    }
    catch(error)
    {
        res.status(400).json({
            message:error
        })
    }
}
module.exports=DataFetch;