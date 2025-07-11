const mongoose=require('mongoose');
const dataBase=()=>
{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {
        console.log("database is connecting")
    })
    .catch((error)=>
    {
        console.log(error)
    })
}
module.exports=dataBase;